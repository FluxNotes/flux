import MetadataSection from "./MetadataSection";
import FluxNotesTreatmentOptionsRestClient from 'flux_notes_treatment_options_rest_client';
import Lang from 'lodash'

const api = new FluxNotesTreatmentOptionsRestClient.DefaultApi();

export default class TreatmentOptionsSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Treatment Options",
            nameSuffix: "(Demo)",
            shortName: "Treatments",
            type: "ClusterPoints",
            data: [
                {
                    name: "",
                    itemsFunction: this.getTreatmentData
                }
            ]
        };
    }

    toFirstLetterCapital = (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1);
    }

    getTreatmentData = (patient, condition, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        // If we have cached data, use that instead of making an API call
        if (subsection.data_cache) return subsection.data_cache;
        // Commenting out the api call with actual patient criteria til we get patient data
        return api.findTreatmentOptionsByPatientStats(
            condition.codeURL, 
            {
                race: this.toFirstLetterCapital(patient.getPatient().race), 
                dxGrade: condition.getMostRecentHistologicalGrade().getGradeAsSimpleNumber()
            },
        ).then( res => { 
            // Parse the mongoData
            const responseText = res.response.text;
            const parsedData = JSON.parse(responseText);
            if(parsedData[0].length === 0 && parsedData[1].length === 0){
                return "No relevant data found for patient";
            } else { 
                return parsedData;
            }
        })
    }
}