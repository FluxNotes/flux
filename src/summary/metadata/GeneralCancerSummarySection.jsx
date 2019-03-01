import MetadataSection from "./MetadataSection";
import FluxBreastCancerDisorderPresent from "../../model/brca/FluxBreastCancerDisorderPresent";
import Lang from 'lodash';

export default class GeneralCancerSummarySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Overview",
            shortName: "Summary",
            type: "NameValuePairs",
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                {
                    defaultTemplate: "Patient has ${Cancer.Name} in ${Cancer.Site} pathologic stage ${Cancer.Pathologic Stage} since age ${Cancer.Age at Diagnosis}.",
                    dataMissingTemplate: "Patient has ${Cancer.Name} in ${Cancer.Site} clinical stage ${Cancer.Clinical Stage} since age ${Cancer.Age at Diagnosis}.",
                    useDataMissingTemplateCriteria: [
                        "Cancer.Pathologic Stage"
                    ]
                },
                {
                    defaultTemplate: "Laterality is ${Cancer.Laterality}."
                },
                {
                    defaultTemplate: "Tumor histology is ${Cancer.Tumor Histology}. Histological grade is ${Cancer.Histological Grade}."
                },
                {
                    defaultTemplate: "Tumor markers include ${Cancer.Tumor Markers}."
                },
                {
                    defaultTemplate: "Genetic Tests are ${Genomics.Genetic Tests}. Genes are ${Genomics.Genes}",
                    dataMissingTemplate: "Genetic Tests are ${Genomics.Genetic Tests}.",
                    useDataMissingTemplateCriteria: [
                        "Genomics.Genetic Tests"
                    ]
                },
                {
                    defaultTemplate: "Patient has a Karnofsky performance status of ${Performance.Karnofsky Panel} and ECOG performance status of ${Performance.ECOG Panel}.",
                    dataMissingTemplate: "Patient has no performance status (Karnofsky is ${Performance.Karnofsky Panel} and ECOG is ${Performance.ECOG Panel}).",
                    useDataMissingTemplateCriteria: [
                        "Performance.Karnofsky Panel",
                        "Performance.ECOG Panel"
                    ]
                }
            ],
            data: [
                {
                    name: "Cancer",
                    items: [
                        {
                            name: "Name",
                            value: (patient, currentConditionEntry) => {
                                return  {   value: currentConditionEntry.type, 
                                            isUnsigned: patient.isUnsigned(currentConditionEntry), 
                                            source: this.determineSource(patient, currentConditionEntry),
                                            shortcutData: {
                                                shortcut: '@condition',
                                                entryId: currentConditionEntry.entryInfo.entryId,
                                            }
                                        };
                            },
                        },
                        {
                            name: "Age at Diagnosis",
                            value: (patient, currentConditionEntry) => {
                                return {    value: "" + patient.getAgeAsOf(new Date(condition.getDiagnosisDate())),
                                            isUnsigned: patient.isUnsigned(currentConditionEntry),
                                            source: this.determineSource(patient, currentConditionEntry),
                                        };
                            }
                        },
                        {
                            name: "Site",
                            value: (patient, currentConditionEntry) => {
                                return  {   value: currentConditionEntry.bodySite,
                                            isUnsigned: patient.isUnsigned(currentConditionEntry),
                                            source: this.determineSource(patient, currentConditionEntry)
                                        };
                            },
                        },
                        {
                            name: "Laterality",
                            value: (patient, currentConditionEntry) => {
                                return {    value: currentConditionEntry.laterality, 
                                            isUnsigned: patient.isUnsigned(currentConditionEntry), 
                                            source: this.determineSource(patient, currentConditionEntry)
                                };
                            }
                        },
                        {
                            name: "Tumor Histology",
                            value: (patient, currentConditionEntry) => {
                                let histologicalType = currentConditionEntry.getMostRecentHistologicType();
                                if (!histologicalType) return null;
                                return  {   value: histologicalType.type,
                                            isUnsigned: patient.isUnsigned(histologicalType),
                                            source: this.determineSource(patient, histologicalType)
                                        };
                            }
                        },
                        {
                            name: "Histological Grade",
                            value: (patient, currentConditionEntry) => {
                                let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                if (!histologicalGrade) return null;
                                return  {   value: histologicalGrade.grade,
                                            isUnsigned: patient.isUnsigned(histologicalGrade),
                                            source: this.determineSource(patient, histologicalGrade)
                                        };
                            }
                        },
                        {
                            name: "Clinical Stage",
                            value: (patient, currentConditionEntry) => {
                                let s = currentConditionEntry.getMostRecentClinicalStaging();
                                if (s && s.stage && s.stage.length > 0) {
                                    return  {   value: s.stage, 
                                                isUnsigned: patient.isUnsigned(s), 
                                                source: this.determineSource(patient, s)
                                            };
                                } else {
                                    return null;
                                }
                            },
                        },
                        {
                            name: "Pathologic Stage",
                            value: (patient, currentConditionEntry) => {
                                let s = currentConditionEntry.getMostRecentPathologicStaging();
                                if (s && s.stage && s.stage.length > 0) {
                                    return  {   value: s.stage, 
                                                isUnsigned: patient.isUnsigned(s), 
                                                source: this.determineSource(patient, s)
                                            };
                                } else {
                                    return null;
                                }
                            },
                        },
                        {
                            name: "Tumor Markers",
                            value: (patient, currentConditionEntry) => {
                                // Display ER, PR, HER2 if Breast Cancer Condition
                                const receptorStatuses = patient.getMostRecentTumorMarkers(currentConditionEntry);
                                return {
                                        value: receptorStatuses.map(receptor => `${receptor.abbreviatedName}${receptor.statusSign}`).join(', '),
                                        isUnsigned: patient.isUnsigned(receptorStatuses[0]),
                                        source: this.determineSource(patient, receptorStatuses[0]),
                                    };
                            }
                        }
                    ]
                },
                {
                    name: "Genomics",
                    items: [
                        {
                            name: "Genetic Tests",
                            value: null
                        },
                        {
                            name: "Genes",
                            value: null
                        }
                    ]
                },
                {
                    name: "Performance",
                    items: [
                        {
                            name: "Karnofsky Panel",
                            value: (patient, currentConditionEntry) => {
                                const k = currentConditionEntry.getMostRecentKarnofskyPerformanceStatus();
                                if (!k) return null;
                                return {    value: k,
                                            isUnsigned: patient.isUnsigned(k),
                                            source: this.determineSource(patient, k)
                                        };
                            }
                        },
                        {
                            name: "ECOG Panel",
                            value: (patient, currentConditionEntry) => {
                                const e = currentConditionEntry.getMostRecentECOGPerformanceStatus();
                                if (!e) return null;
                                return {    value: e,
                                            isUnsigned: patient.isUnsigned(e),
                                            source: this.determineSource(patient, e)
                                        };
                            }
                        }
                    ]
                }
            ]
        };
    }
}
