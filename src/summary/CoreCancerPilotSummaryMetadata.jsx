import Lang from 'lodash'
import _ from 'lodash'
import FluxNotesTreatmentOptionsRestClient from 'flux_notes_treatment_options_rest_client';
const api = new FluxNotesTreatmentOptionsRestClient.DefaultApi();

/*
    Each section has the following properties:
        name                Displayed at the top of the section and in the mini-map
        shortName           Displayed in the mini-map when the name is too long to fit -- max 10 characters
        type                Dictates the format of the data section described later. Visualizers are implemented to support specific data types.
        narrative           This section is only used if the section will be displayed using a narrative visualizer. It provides templates for
                            turning the data into sentences.
        data                Provides the retrieval of the source data to be displayed in the section in the format dictated by the type property
                            above. The data is a list of subsections which each have the following possible properties:
                                name            The name of the subsection. Some visualizers display the subsection names.
                                nameFunction    Used to dynamically name the subsection.  Tabular list visualizer uses this when included.
                                items           The list of data items in the format dictated by the type
                                itemsFunction   A function that returns the list of data items in the format dictated by the type
                                displayFunction A function that returns a boolean indicating whether or not data should be displayed.
                                headings        Indicates the a set of column heading labels for tabular visualizers
                                shortcut        Indicates a shortcut name to use for the first column of insertable data.
                                code            Indicates a code to be used by an itemsFunction. This allows multiple sections to share the same
                                                itemsFunction
                                bands           Indicates a set of value ranges and the assessment for that range. Some visualizers display bands
                                preTableCount   Indicates type of items in table, e.g. Allergies.  Will show count of number of items in table.
                                postTableList   Provide list of structured data to be displayed after the table.
        defaultVisualizer   Indicates the visualizer type for the default visualizer to use for the section. The following ways to specify the
                            default are supported:
                                "tabular"                                               The specified visualizer type will be the default
                                                                                        visualizer for the section if supported by the data type.
                                {clinicalEvent: X, defaultVisualizer: Y}                The specified visualizer type Y will be used if the current
                                                                                        clinical event is X otherwise the first visualizer
                                                                                        registered for the data type will be used.
                                ["X", {clinicalEvent: Y, defaultVisualizer: Z}, ...]    A list of options allowing an overall default X that is used
                                                                                        if one of the specific clinical events (e.g. Y) doesn't match
                                                                                        the currently selected one. If a specific one matches, it
                                                                                        uses the corresponding default visualizer (e.g. Z)
*/

export default class CoreCancerPilotSummaryMetadata {
    constructor(setForceRefresh) {
        this.setForceRefresh = setForceRefresh;
        this.hardCodedMetadata = {
            "default": {
                sections: [
                    {
                        name: "Treatment Options",
                        shortName: "Treatments",
                        type: "ClusterPoints",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getTreatmentData
                            }
                        ]
                    }
                ]
            }
        };

        this.missingEligibleTrialData = null;
    }

    getMetadata = () => {
        return this.hardCodedMetadata;
    }

    toFirstLetterCapital = (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1);
    }

    getTreatmentData = (patient, condition, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        try {
            // If we have cached data, use that instead of making an API call
            if (subsection.data_cache) return subsection.data_cache;
            // Commenting out the api call with actual patient criteria til we get patient data
            //const data = api.findTreatmentOptionsByPatientStats(condition.codeURL, {race: this.toFirstLetterCapital(patient.getPatient().race), dxGrade: condition.getMostRecentHistologicalGrade().getGradeAsSimpleNumber()});
            const data = api.findTreatmentOptionsByPatientStats("http://snomed.info/sct/399068003", {race: "Black" });
            const parsedData = JSON.parse(data);
            if(parsedData[0].length === 0 && parsedData[1].length === 0){
                return "No relevant data found for patient";
            }
            return parsedData;
        }
        catch(error) {
            return "Server unavailable";
        }
    }
}

