import MetadataSection from "./MetadataSection";
import Lang from 'lodash';
import moment from 'moment';

export default class GeneralCancerSummarySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Overview",
            shortName: "Summary",
            type: "NameValuePairs",
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                {
                    defaultTemplate: "Patient has ${Cancer.Name} in ${Cancer.Site} since age ${Cancer.Age at Diagnosis}.",
                },
                {
                    defaultTemplate: "As of ${Most Recent Disease Status.As Of Date}, disease is ${Most Recent Disease Status.Status} based on ${Most Recent Disease Status.Rationale}.",
                    dataMissingTemplate: "No recent ${disease status}.",
                    useDataMissingTemplateCriteria: [
                        "Most Recent Disease Status.As Of Date",
                        "Most Recent Disease Status.Status",
                        "Most Recent Disease Status.Rationale"
                    ]
                },
                {
                    defaultTemplate: "Laterality is ${Cancer.Laterality}."
                },
                {
                    defaultTemplate: "Tumor histology is ${Cancer.Histological Type}. Histological grade is ${Cancer.Histological Grade}."
                },
                { 
                    defaultTemplate: "Tumor markers are ${Tumor Markers}.",
                    dataMissingTemplate: "No available ${tumor markers}.",
                    useDataMissingTemplateCriteria: [
                        "Tumor Markers"
                    ]
                },
                {
                    defaultTemplate: "Clinical stage is ${Staging.Clinical Stage}.",
                },
                {
                    defaultTemplate: "Pathologic stage is ${Staging.Pathologic Stage}.",
                    dataMissingTemplate: "",
                    useDataMissingTemplateCriteria: [
                        "Staging.Pathologic Stage"
                    ]
                },
                {
                    defaultTemplate: "Genetic Tests are ${Genomics.Genetic Tests}. Genes are ${Genomics.Genes}",
                    dataMissingTemplate: "Genetic Tests are ${Genomics.Genetic Tests}.",
                    useDataMissingTemplateCriteria: [
                        "Genomics.Genetic Tests"
                    ]
                },
                {
                    defaultTemplate: "Patient has a Karnofsky performance status of ${Performance.Karnofsky Status} and ECOG performance status of ${Performance.ECOG Status}.",
                    dataMissingTemplate: "Patient has no performance status (Karnofsky is ${Performance.Karnofsky Status} and ECOG is ${Performance.ECOG Status}).",
                    useDataMissingTemplateCriteria: [
                        "Performance.Karnofsky Status",
                        "Performance.ECOG Status"
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
                            name: "Clinical Status",
                            value: (patient, currentConditionEntry) => {
                                return  {   value: currentConditionEntry.clinicalStatus, 
                                            isUnsigned: patient.isUnsigned(currentConditionEntry), 
                                            source: this.determineSource(patient, currentConditionEntry)
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
                            name: "Histological Type",
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
                    ]
                },
                {
                    name: "Tumor Markers",
                    itemsFunction: this.getTumorMarkers
                },
                {
                    name: "Most Recent Disease Status",
                    items: [ 
                        {
                            name: "Status",
                            value: (patient, currentConditionEntry) => {
                                let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (Lang.isNull(p) || !p.status) {
                                    return null;
                                } else {
                                    return  {   value: p.status, 
                                                isUnsigned: patient.isUnsigned(p), 
                                                source: this.determineSource(patient, p)
                                            };
                                }
                            }
                        },
                        {
                            name: "As Of Date",
                            value: (patient, currentConditionEntry) => {
                                let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (Lang.isNull(p) || !p.status) {
                                    return null;
                                } else {
                                    return  {   value: p.asOfDate, 
                                                isUnsigned: patient.isUnsigned(p), 
                                                source: this.determineSource(patient, p)
                                            };
                                }
                            }
                        },
                        {
                            name: "Rationale",
                            value: (patient, currentConditionEntry) => {
                                let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (Lang.isNull(p) || !p.status) {
                                    return null;
                                } else {
                                    return  {   value: p.evidence.map(function (ev) {
                                                        return ev;
                                                    }).join(', '), 
                                                isUnsigned: patient.isUnsigned(p), 
                                                source: this.determineSource(patient, p)
                                            };
                                }
                            }
                        }
                    ]
                },
                {
                    name: "Staging",
                    items: [
                        {
                            name: "Clinical Stage",
                            value: (patient, currentConditionEntry) => {
                                let s = currentConditionEntry.getMostRecentClinicalStaging();
                                if (s && s.stage && s.stage.length > 0) {
                                    return { 
                                        value: `${s.stage} ${s.stageComponents}`,
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
                                    return  {
                                        value: `${s.stage} ${s.stageComponents}`,
                                        isUnsigned: patient.isUnsigned(s), 
                                        source: this.determineSource(patient, s)
                                    };
                                } else {
                                    return null;
                                }
                            },
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
                            name: "Karnofsky Status",
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
                            name: "ECOG Status",
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

    getTumorMarkers = (patient, currentConditionEntry, section, subsection) => {
        const receptorStatuses = currentConditionEntry.getMostRecentTumorMarkers()
        // TODO: Since we're showing multiple values heree, we should probably support multiple signed and source values 
        //       we don't have that capability right now
        return receptorStatuses.map(receptor => { 
            return { 
                name: receptor.receptorType,
                value: {
                    value: `${receptor.status}`,
                    isUnsigned: patient.isUnsigned(receptor),
                    source: this.determineSource(patient, receptor),
                }
            }
        });
    }
}
