import MetadataSection from "./MetadataSection";
import FluxNotesTreatmentOptionsRestClient from 'flux_notes_treatment_options_rest_client';
import Lang from 'lodash'

const api = new FluxNotesTreatmentOptionsRestClient.DefaultApi();

export default class TreatmentOptionsSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Treatment Options",
            nameSuffixFunction: (section) => {
                if (Lang.isObject(section.data[0].data_cache) && !Lang.isUndefined(section.data[0].data_cache.then)) {
                    return section.data[0].data_cache.then ( result => {
                        return result.isDemo ? " (Demo)" : "";
                    })
                    
                } 
                else return ""; 
            }, 
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

    getTreatmentData = (patient, condition, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        // If we have cached data, use that instead of making an API call
        if (subsection.data_cache) return subsection.data_cache;
        // Commenting out the api call with actual patient criteria til we get patient data
        return api.findTreatmentOptionsByPatientStats(
            condition.codeURL, 
            {
                race: this.toFirstLetterCapital(patient.getPatient().race), 
                // DxGrade and Gender are commented out for now since they are too selective and leave us with no data to display. 
                // dxGrade: condition.getMostRecentHistologicalGrade().getGradeAsSimpleNumber(),
                // gender: patient.getPatient().gender
            },
        ).then( res => { 
            // Parse the mongoData
            const responseText = res.response.text;
            const parsedData = JSON.parse(responseText);
            if(parsedData.data.alive.length === 0 && parsedData.data.deceased.length === 0){
                return "No relevant data found for patient";
            } else { 
                return parsedData;
            }
        })
    }
}