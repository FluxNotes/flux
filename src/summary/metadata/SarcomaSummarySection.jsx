
import MetadataSection from "./MetadataSection";
import KeyDatesSubsection from './KeyDatesSubsection';
import MostRecentVisitsSubsection from './MostRecentVisitsSubsection';
import RecentLabResultsSubsection from './RecentLabResultsSubsection';
import FluxTumorDimensions from '../../model/oncology/FluxTumorDimensions';
import Lang from 'lodash'
import moment from 'moment';

export default class SarcomaSummarySection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Summary",
            shortName: "Summary",
            type: "NameValuePairs",
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                {
                    defaultTemplate: "Patient has ${.Name} in ${.Location} stage ${.Stage} diagnosed on ${Key Dates.Diagnosis}."
                },
                {
                    defaultTemplate: "Current status is ${.Status}.",
                    dataMissingTemplate: "No current ${.Status}.",
                    useDataMissingTemplateCriteria: [
                        ".Status"
                    ]
                },
                {
                    defaultTemplate: "Mitosis is ${.Mitosis}.",
                    dataMissingTemplate: "Mitosis is ${.Mitosis}.",
                    useDataMissingTemplateCriteria: [
                        ".Mitosis"
                    ]
                },
                {
                    defaultTemplate: "Tumor is ${.Tumor Size}.",
                    dataMissingTemplate: "Tumor is ${.Tumor Size}.",
                    useDataMissingTemplateCriteria: [
                        ".Tumor Size"
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
                    defaultTemplate: "You last saw this patient on ${Most Recent Visit.Date of Last Visit with You}.",
                    dataMissingTemplate: "There are no recorded encounters for you with this patient.",
                    useDataMissingTemplateCriteria: [
                        "Most Recent Visit.Date of Last Visit with You"
                    ]
                },
                {
                    defaultTemplate: "This patient was last seen in your facility by ${Most Recent Visit.Who Last Visited Here} on ${Most Recent Visit.Date of Last Visit Here}.",
                    dataMissingTemplate: "No recent visits to this facility are on record.",
                    useDataMissingTemplateCriteria: [
                        "Most Recent Visit.Who Last Visited Here",
                        "Most Recent Visit.Date of Last Visit Here"
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
                {
                    defaultTemplate: "Recent lab results include ${Recent Lab Results}.",
                    dataMissingTemplate: "No recent ${lab results}.",
                    useDataMissingTemplateCriteria: [
                        "Recent Lab Results"
                    ]
                },
                {
                    defaultTemplate: "Key toxicities include",
                },
                {
                    defaultTemplate: "${Key Toxicities.Headaches} headaches (as of ${Key Toxicities.Headaches.when}),",
                    dataMissingTemplate: "no headaches,",
                    useDataMissingTemplateCriteria: [
                        "Key Toxicities.Headaches"
                    ]
                },
                {
                    defaultTemplate: "${Key Toxicities.Skin Rashes} skin rashes (as of ${Key Toxicities.Skin Rashes.when}),",
                    dataMissingTemplate: "no skin rashes,",
                    useDataMissingTemplateCriteria: [
                        "Key Toxicities.Skin Rashes"
                    ]
                },
                {
                    defaultTemplate: "${Key Toxicities.Vomiting} vomiting (as of ${Key Toxicities.Vomiting.when}),",
                    dataMissingTemplate: "no vomiting,",
                    useDataMissingTemplateCriteria: [
                        "Key Toxicities.Vomiting"
                    ]
                },
                {
                    defaultTemplate: "${Key Toxicities.Diarrhea} diarrhea (as of ${Key Toxicities.Diarrhea.when}),",
                    dataMissingTemplate: "no diarrhea,",
                    useDataMissingTemplateCriteria: [
                        "Key Toxicities.Diarrhea"
                    ]
                },
                {
                    defaultTemplate: "${Key Toxicities.Muscle Pains} muscle pains (as of ${Key Toxicities.Muscle Pains.when}).",
                    dataMissingTemplate: "no muscle pains.",
                    useDataMissingTemplateCriteria: [
                        "Key Toxicities.Muscle Pains"
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
                                            source: this.determineSource(patient, currentConditionEntry)
                                        };
                            },
                            shortcut: "@condition"
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
                            name: "Status",
                            value: (patient, currentConditionEntry) => {
                                let status = currentConditionEntry.clinicalStatus;
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
                            name: "Stage",
                            value: (patient, currentConditionEntry) => {
                                let s = currentConditionEntry.getMostRecentStaging();
                                if (s && s.stage && s.stage.length > 0) {
                                    return  {   value: s.stage, 
                                                isUnsigned: patient.isUnsigned(s), 
                                                source: this.determineSource(patient, s)
                                            };
                                } else {
                                    return null;
                                }
                            },
                            // shortcut: "@stage"
                        },
                        {
                            name: "Mitosis",
                            value: (patient, currentConditionEntry) => {
                                let mr = currentConditionEntry.getMostRecentMitosis();
                                if (mr) {
                                    return  {   value: mr.quantity.number + " " + mr.quantity.unit, 
                                                isUnsigned: patient.isUnsigned(mr), 
                                                source: this.determineSource(patient, mr)
                                            };
                                } else {
                                    return null;
                                }
                            },
                        },
                        {
                            name: "Tumor Size",
                            value: (patient, currentConditionEntry) => {
                                const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorDimensions);
                                if (list.length === 0) return null;
                                const size = list.pop(); // last is most recent
                                return  {   value: size.quantity.value + " " + size.quantity.unit, 
                                            isUnsigned: patient.isUnsigned(size), 
                                            source: this.determineSource(patient, size)
                                        };
                    },
                        },
                        {
                            name: "Disease Status",
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
                        },
                        {
                            name: "Genetics",
                            value: (patient, currentConditionEntry) => {
                                // for GIST, KIT and PDGFRA are mutually excusive. only show positive ones
                                const panels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
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
                        }
                    ]
                },
                {
                    name: "Key Toxicities",
                    items: [
                        {
                            name: "Headaches",
                            value: (patient, currentConditionEntry) => {
                                return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10019211", "10019231"]);
                            }

                        },
                        {
                            name: "Skin Rashes",
                            value: (patient, currentConditionEntry) => {
                                return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10037868"]);
                            }
                        },
                        {
                            name: "Vomiting",
                            value: (patient, currentConditionEntry) => {
                                return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10047700"]);
                            }
                        },
                        {
                            name: "Diarrhea",
                            value: (patient, currentConditionEntry) => {
                                return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10012735", "10012727"]);
                            }
                        },
                        {
                            name: "Muscle Pains",
                            value: (patient, currentConditionEntry) => {
                                return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10028323", "10028411"]);
                            }
                        }
                    ]
                },
                RecentLabResultsSubsection,
                KeyDatesSubsection,
                MostRecentVisitsSubsection
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
