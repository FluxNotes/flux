import MetadataSection from "./MetadataSection";
import RecentLabResultsSubsection from './RecentLabResultsSubsection';
import RecentToxicitiesSubsection from './RecentToxicitiesSubsection';
import Lang from 'lodash';
import moment from 'moment';

export default class SarcomaConditionSummarySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Condition Summary",
            shortName: "Condition",
            type: "NameValuePairs",
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                // yay this is broken

                // {
                //     defaultTemplate: "Patient has ${.Name} in ${.Location} stage ${.Stage} diagnosed on ${Key Dates.Diagnosis}."
                // },
                // {
                //     defaultTemplate: "Summary of current treatment is: ${.Active Treatment Summary}."
                // },

                // add condition
                {
                    defaultTemplate: "Current status is ${.Status}.",
                    dataMissingTemplate: "No current ${.Status}.",
                    useDataMissingTemplateCriteria: [
                        ".Status"
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
                    defaultTemplate: "As of ${.As Of Date}, disease is ${.Disease Status} based on ${.Rationale}.",
                    dataMissingTemplate: "No recent ${disease status}.",
                    useDataMissingTemplateCriteria: [
                        ".As Of Date",
                        ".Disease Status",
                        ".Rationale"
                    ]
                },
                // treatment section
                {
                    defaultTemplate: "Recent toxicities include ${Recent Toxicities}.",
                    dataMissingTemplate: "No recent ${toxicities}.",
                    useDataMissingTemplateCriteria: [
                        "Recent Toxicities"
                    ]
                },
                // diagnosis section
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
                                return  {   value: currentConditionEntry.bodySite,
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
                                    return  {   value: this.toFirstLetterCapital(status),
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
                        // what is biomarkers
                    ]
                },
                {
                    name: "Disease Status",
                    items: [
                        {
                            name: "Disease Status",
                            value: (patient, currentConditionEntry) => {
                                const p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
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
                                const p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
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
                                const p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
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
                        },
                    ]
                },
                // treatment section
                RecentToxicitiesSubsection,
                // diagnosis section
                RecentLabResultsSubsection
            ]
        };
    }

    getItemListForConditions = (patient, currentConditionEntry, subsection) => {
        const conditions = patient.getActiveConditions();
        return conditions.map((c, i) => {
            return [
                {    value: c.type,
                    isUnsigned: patient.isUnsigned(c),
                    source: this.determineSource(patient, c),
                    shortcut: subsection.shortcut
                },
                {   value: c.diagnosisDate
                },
                {   value: c.bodySite
                }
            ];
        });
    }
}
