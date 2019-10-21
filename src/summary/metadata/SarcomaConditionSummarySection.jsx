import MetadataSection from './MetadataSection';
import ActiveTreatmentsSubsection from './ActiveTreatmentsSubsection';
import RecentLabResultsSubsection from './RecentLabResultsSubsection';
import RecentToxicitiesSubsection from './RecentToxicitiesSubsection';
import _ from 'lodash';
import moment from 'moment';

export default class SarcomaConditionSummarySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Condition Summary",
            shortName: "Condition",
            type: "NameValuePairs",
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                {
                    defaultTemplate: "Patient has ${.Name} in ${.Location} stage ${Diagnosis.Clinical stage} diagnosed on ${Diagnosis.Diagnosis date}."
                },
                {
                    defaultTemplate: "Current status is ${.Clinical status}.",
                    dataMissingTemplate: "No current ${.Clinical status}.",
                    useDataMissingTemplateCriteria: [
                        ".Clinical status"
                    ]
                },
                {
                    defaultTemplate: "Genetics are ${.Genetics}.",
                    dataMissingTemplate: "Genetics are ${.Genetics}.",
                    useDataMissingTemplateCriteria: [
                        ".Genetics"
                    ]
                },
                {
                    defaultTemplate: "As of ${Disease Status.As Of Date}, disease is ${Disease Status.Disease Status} based on ${Disease Status.Rationale}.",
                    dataMissingTemplate: "No recent ${disease status}.",
                    useDataMissingTemplateCriteria: [
                        "Disease Status.As Of Date",
                        "Disease Status.Disease Status",
                        "Disease Status.Rationale"
                    ]
                },
                {
                    defaultTemplate: "Summary of current treatment is: ${Treatment}.",
                    dataMissingTemplate: "No recent ${treatments}.",
                    useDataMissingTemplateCriteria: [
                        "Treatment"
                    ]
                },
                {
                    defaultTemplate: "Recent toxicities include ${Recent Toxicities}.",
                    dataMissingTemplate: "No recent ${toxicities}.",
                    useDataMissingTemplateCriteria: [
                        "Recent Toxicities"
                    ]
                },
                {
                    defaultTemplate: "Most recent lab results include ${Most Recent Lab Results}.",
                    dataMissingTemplate: "No recent ${lab results}.",
                    useDataMissingTemplateCriteria: [
                        "Most Recent Lab Results"
                    ]
                }
            ],
            data: [
                {
                    name: "",
                    items: [
                        {
                            name: "Name",
                            value: (patient, currentConditionEntry) => {
                                return  {   value: currentConditionEntry.type,
                                    isUnsigned: patient.isUnsigned(currentConditionEntry),
                                    source: this.determineSource(patient, currentConditionEntry),
                                    shortcutData: {
                                        shortcut: '@condition',
                                        entryId: currentConditionEntry.entryInfo.entryId.id,
                                    }
                                };
                            },
                        },
                        {
                            name: "Location",
                            value: (patient, currentConditionEntry) => {
                                return  {
                                    value: currentConditionEntry.bodySite,
                                    isUnsigned: patient.isUnsigned(currentConditionEntry),
                                    source: this.determineSource(patient, currentConditionEntry)
                                };
                            },
                        },
                        {
                            name: "Clinical status",
                            value: (patient, currentConditionEntry) => {
                                const status = currentConditionEntry.clinicalStatus;
                                if (status) {
                                    return  {
                                        value: this.toFirstLetterCapital(status),
                                        isUnsigned: patient.isUnsigned(currentConditionEntry),
                                        source: this.determineSource(patient, currentConditionEntry)
                                    };
                                } else {
                                    return null;
                                }
                            },
                            // shortcut: "@stage"
                        },
                        {
                            name: "Genetics",
                            value: (patient, currentConditionEntry) => {
                                // for GIST, KIT and PDGFRA are mutually excusive. only show positive ones
                                const panels = patient.getGenomicsReportChronologicalOrder();
                                if (!panels || panels.length === 0) return null;
                                const panel = panels.pop();
                                return  {   value: panel.members.filter((item) => {
                                    return (item.value === 'Positive');
                                }).map((item) => {
                                    const v = item.value === 'Positive' ? '+' : '-';
                                    return item.abbreviatedName + v;
                                }).join(","),
                                isUnsigned: patient.isUnsigned(panel),
                                source: this.determineSource(patient, panel)
                                };
                            }
                        },
                    ]
                },
                {
                    name: "Disease Status",
                    items: [
                        {
                            name: "Disease Status",
                            value: (patient, currentConditionEntry) => {
                                const p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (_.isNull(p) || !p.status) {
                                    return null;
                                } else {
                                    return  {
                                        value: p.status,
                                        isUnsigned: patient.isUnsigned(p),
                                        source: this.determineSource(patient, p)
                                    };
                                }
                            }
                        },
                        {
                            name: "As Of Date",
                            value: (patient, currentConditionEntry) => {
                                const p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (_.isNull(p) || !p.status) {
                                    return null;
                                } else {
                                    return  {
                                        value: p.asOfDate,
                                        isUnsigned: patient.isUnsigned(p),
                                        source: this.determineSource(patient, p)
                                    };
                                }
                            }
                        },
                        {
                            name: "Rationale",
                            value: (patient, currentConditionEntry) => {
                                const p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (_.isNull(p) || !p.status) {
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
                        },
                    ]
                },
                ActiveTreatmentsSubsection,
                RecentToxicitiesSubsection,
                {
                    name: 'Diagnosis',
                    items: [
                        {
                            name: "Diagnosis date",
                            value: (patient, currentConditionEntry) => {
                                return  {
                                    value: currentConditionEntry.diagnosisDate,
                                    isUnsigned: patient.isUnsigned(currentConditionEntry),
                                    source: this.determineSource(patient, currentConditionEntry)
                                };
                            }
                        },
                        {
                            name: "Recurrence",
                            value: (patient, currentConditionEntry) => {
                                if (currentConditionEntry.clinicalStatus === "recurrence") {
                                    return null;
                                } else {
                                    return  {
                                        value: "N/A",
                                        isUnsigned: patient.isUnsigned(currentConditionEntry),
                                        source: this.determineSource(patient, currentConditionEntry)
                                    };
                                } // TODO: actually get date once we know where it is in SHR
                            }
                        },
                        // Mitosis and Tumor size are hard coded for now until lab results have some sort of related condition flag
                        // Both are also duplicated in lab results
                        {
                            name: "Mitosis",
                            value: (patient, currentConditionEntry) => {
                                const m = currentConditionEntry.getMostRecentLabResultByCode('7041004');
                                if (m) {
                                    return { value: `${m.quantity.number} ${m.quantity.unit} (${m.relevantTime})`};
                                } else {
                                    return null;
                                }
                            }
                        },
                        {
                            name: "Tumor Size",
                            value: (patient, currentConditionEntry) => {
                                const t = currentConditionEntry.getMostRecentLabResultByCode('C0475440');
                                if (t) {
                                    return { value: `${t.quantity.number} ${t.quantity.unit} (${t.relevantTime})`};
                                } else {
                                    return null;
                                }
                            }
                        },
                        {
                            name: "Clinical stage",
                            value: (patient, currentConditionEntry) => {
                                const s = currentConditionEntry.getMostRecentStaging();
                                if (s && s.stage && s.stage.length > 0) {
                                    return  {
                                        value: s.stage,
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
                RecentLabResultsSubsection
            ]
        };
    }
}
