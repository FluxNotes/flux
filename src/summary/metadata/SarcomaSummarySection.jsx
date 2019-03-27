
import MetadataSection from "./MetadataSection";
import KeyDatesSubsection from './KeyDatesSubsection';
import MostRecentVisitsSubsection from './MostRecentVisitsSubsection';
import RecentLabResultsSubsection from './RecentLabResultsSubsection';
import RecentToxicitiesSubsection from './RecentToxicitiesSubsection';
import ActiveTreatmentSummaryObjectFactory from '../activeTreatmentSummary/ActiveTreatmentSummaryObjectFactory';
import Lang from 'lodash'
import moment from 'moment';

export default class SarcomaSummarySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
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
                    defaultTemplate: "Most recent lab results include ${Most Recent Lab Results}.",
                    dataMissingTemplate: "No recent ${lab results}.",
                    useDataMissingTemplateCriteria: [
                        "Most Recent Lab Results"
                    ]
                },
                {
                    defaultTemplate: "Recent toxicities include ${Recent Toxicities}.",
                    dataMissingTemplate: "No recent ${toxicities}.",
                    useDataMissingTemplateCriteria: [
                        "Recent Toxicities"
                    ]
                },
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
                                                entryId: currentConditionEntry.entryInfo.entryId,
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
                        },
                        { 
                            name: "Treatment Summary",
                            value: (patient, currentConditionEntry) => {
                                const activeTreatmentSummaryObject = ActiveTreatmentSummaryObjectFactory.createInstance(patient, currentConditionEntry);
                                const activeTreatmentSummaryJson = activeTreatmentSummaryObject.getActiveTreatmentSummary();
                                console.log(activeTreatmentSummaryJson)
                                if (Lang.isNull(activeTreatmentSummaryJson)) return null;
                                let treatmentSummaryValue= ""
                                switch (activeTreatmentSummaryJson.type) { 
                                    case "adjuvant":
                                        const medsAsStrings = activeTreatmentSummaryJson.medications.map(m => m.medication);
                                        const numMeds = medsAsStrings.length;
                                        // If there's more than one element, make sure the last element includes an &
                                        if (numMeds > 1) medsAsStrings.splice(numMeds - 1, 1, `& ${medsAsStrings[numMeds - 1]}`);
                                        // Join all but the final medication by commas, and then append the last one (the & is included if needed above) 
                                        const formattedMedsString = medsAsStrings.slice(0,numMeds - 1).join(', ') + medsAsStrings[numMeds - 1];
                                        treatmentSummaryValue = `Adjuvant therapy of ${formattedMedsString}`;
                                        break;
                                    case "neo-adjuvant":
                                        break;
                                    case "early-stage":
                                        break;
                                    case "no-active-treatment":
                                        break;
                                    default: 
                                        console.error("In SarcomaSummarySection's Treatment Summary Switch: No defined sentence structure for " + activeTreatmentSummaryJson.type);
                                        return null;
                                }
                                return {
                                    value: treatmentSummaryValue,
                                    isUnsigned: false,
                                    source: null
                                }
                            }
                        }
                    ]
                },
                RecentToxicitiesSubsection,
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
