import MetadataSection from "./MetadataSection";
import FluxTumorDimensions from '../../model/oncology/FluxTumorDimensions';
import FluxTumorMargins from '../../model/oncology/FluxTumorMargins';

export default class PathologySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Pathology",
            shortName: "Pathology",
            type: "NameValuePairs",
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                {
                    defaultTemplate: "Date of pathology report is ${.Report Date}. Pathologist is ${.Pathologist}."
                },
                {
                    defaultTemplate: "Primary tumor color is ${.Color}, weight is ${.Weight}, and size is ${.Size}."
                },
                {
                    defaultTemplate: "Tumor margins are ${.Tumor Margins}. Histological grade is ${.Histological Grade}."
                }

            ],
            data: [
                {
                    name: "",
                    items: [

                        // TODO: When return value for items that are currently null, need to also return patient.isUnsigned(currentConditionEntry)
                        {
                            name: "Report Date",
                            value: (patient, currentConditionEntry) => {
                                const list = patient.getPathologyReportsChronologicalOrder();
                                if (list.length === 0) return null;
                                const report = list.pop();
                           
                                return  {  value: report.relevantTime,
                                           isUnsigned: patient.isUnsigned(report), 
                                           source: this.determineSource(patient, report)
                                }
                            }
                        },
                        {
                            name: "Pathologist",
                            value: (patient, currentConditionEntry) => {
                                const list = patient.getPathologyReportsChronologicalOrder();
                                if (list.length === 0) return null;
                                const report = list.pop();
                               
                                return  {  value: report.author,
                                           isUnsigned: patient.isUnsigned(report), 
                                           source: this.determineSource(patient, report)
                                }
                            }
                        },
                        {
                            name: "Color",
                            value: null
                        },
                        {
                            name: "Weight",
                            value: null
                        },
                        {
                            name: "Size",
                            value: (patient, currentConditionEntry) => {
                                const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorDimensions);
                                if (list.length === 0) return null;
                                const size = list.pop(); // last is most recent
                                return  {   value: size.quantity.number + " " + size.quantity.unit,
                                            isUnsigned: patient.isUnsigned(size),
                                            source: this.determineSource(patient, size)
                                        };
                            }
                        },
                        {
                            name: "Tumor Margins",
                            value: (patient, currentConditionEntry) => {
                                const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorMargins);
                                if (list.length === 0) return null;
                                const margins = list.pop(); // last is most recent
                                return  {   value: margins.value,
                                            isUnsigned: patient.isUnsigned(margins),
                                            source: this.determineSource(patient, margins)
                                        };
                            }
                        },
                        {
                            name: "Histological Grade",
                            value: (patient, currentConditionEntry) => {
                                let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                return  {   value: histologicalGrade.grade,
                                            isUnsigned: patient.isUnsigned(histologicalGrade),
                                            source: this.determineSource(patient, histologicalGrade)
                                        };
                            }
                        },
                    ]
                }
            ]
        };
    }
}