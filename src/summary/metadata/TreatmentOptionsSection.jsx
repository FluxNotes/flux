import MetadataSection from "./MetadataSection";
//import FluxNotesTreatmentOptionsRestClient from 'flux_notes_treatment_options_rest_client';
import Lang from 'lodash'
import {seerdata} from '../Seerdata.js';
//const ApiClient = new FluxNotesTreatmentOptionsRestClient.ApiClient();

export default class TreatmentOptionsSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Treatment Options",
            nameSuffixFunction: (section) => {
                if (Lang.isObject(section.data[0].data_cache) && !Lang.isUndefined(section.data[0].data_cache.then)) {
                    return section.data[0].data_cache.then ( result => {
                        return result.isDemo ? "(Demo)" : "";
                    })
                }
                else return section.data[0].data_cache.isDemo ? "(Demo)" : "";
            }, 
            shortName: "Treatments", 
            type: "ClusterPoints",
            data: [
                {
                    name: "",
                    // TO DO: need to change filters to support a function. getTreatmentCriteria below that gets patient and condition as arguments
                    // eventually, the service API and implementation will need to support this call to figure out the supported criteria based on the condition
                    // filterFunction: this.getTreatmentCriteria
                    filters: [
                        { name: "Age at diagnosis", servicePropertyName: "ageAtDiagnosis", category: "Demographics", value: false },
                        { name: "Gender", servicePropertyName: "gender", category: "Demographics", value: false },
                        { name: "Race", servicePropertyName: "race", category: "Demographics", value: false },
                        { name: "KIT", servicePropertyName: "kit", category: "Genetics", value: false },
                        { name: "PDGFRA", servicePropertyName: "pdgfra", category: "Genetics", value: false },
                        { name: "Grade", servicePropertyName: "dxGrade", category: "Pathology", value: false },
                        { name: "Stage", servicePropertyName: "stage", category: "Pathology", value: false },
                        { name: "Surgery", servicePropertyName: "surgery", category: "Past Treatment", value: false }
                    ],
                    itemsFunction: this.getTreatmentData
                }
            ]
        };
    }

    getTreatmentCriteria = (patient, condition) => {
        return [ // condition is a given
            { name: "Age at diagnosis", category: "Demographics" },
            { name: "Gender", category: "Demographics" },
            { name: "Race", category: "Demographics" },
            { name: "KIT", category: "Genetics" },
            { name: "PDGFRA", category: "Genetics" },
            { name: "Grade", category: "Pathology" },
            { name: "Stage", category: "Pathology" },
            { name: "Surgery", category: "Past Treatment" }
        ];
    }

    getTreatmentData = (patient, condition, subsection) => {
 
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        // If we have cached data, use that instead of making an API call
        if (subsection.data_cache) return subsection.data_cache;
        console.log("getTreatmentData");
        console.log(subsection.filters);
        //   {
        //     subsection.filters.forEach(filter => {
        //         switch (filter.name) {
        //             case 'Over The Counter Medications':
        //             // If Show Over The Counter meds is not selected, need to filter them out.
        //             if (filter.value === false) {
        //                     meds = meds.filter(med => {
        //                         // Don't filter out medications if we don't know if they are OTC or not.
        //                         if (med.overTheCounter === undefined) {
        //                             return true;
        //                         }
        //                         return !med.overTheCounter;
        //                     });
        //                 }
        //                 break;
        //             default:
        //                 break;
        //         }
        //     });
        // }
      /*   return fetch('/ServerConfig.json').then((r) => r.json()).then((config) => {
            ApiClient.basePath = config.baseURL;
            const api = new FluxNotesTreatmentOptionsRestClient.DefaultApi(ApiClient);
            // Commenting out the api call with actual patient criteria til we get patient data
            return api.findTreatmentOptionsByPatientStats(
                condition.codeURL,
                // commented out other criteria in order to show more data points 
                //{
                    //race: this.toFirstLetterCapital(patient.getPatient().race),
                    // DxGrade and Gender are commented out for now since they are too selective and leave us with no data to display. 
                    // dxGrade: condition.getMostRecentHistologicalGrade().getGradeAsSimpleNumber(),
                    // gender: patient.getPatient().gender
                //},
            );
        }).then(res => {
            // Parse the mongoData
            const responseText = res.response.text;
            const parsedData = JSON.parse(responseText);
            if (parsedData.data.alive.length === 0 && parsedData.data.deceased.length === 0) {
                return "No relevant data found for patient";
            } else {
                return parsedData;
            }
        }); */

        let promise = new Promise(function(resolve, reject) {
            let deceasedSeries = [];
            let aliveSeries = [];

            seerdata.forEach((v) => {
            if(v.Disease === condition.codeURL && v['Is-Alive'] === 'Dead'){
                deceasedSeries.push([ v['Treat-option']  , v['Survival-months'] ]);
            }
            if(v.Disease === condition.codeURL && v['Is-Alive'] === 'Alive'){
                aliveSeries.push([ v['Treat-option']  , v['Survival-months'] ]);
            }  
            });

            resolve({isDemo: true, data: {alive: aliveSeries, deceased: deceasedSeries}});
        });

        return promise;
    }
}