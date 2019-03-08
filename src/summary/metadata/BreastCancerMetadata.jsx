import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import ClinicalTrialsSection from './ClinicalTrialsSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import HemoglobinSubsection from './HemoglobinSubsection';
import KeyDatesSubsection from './KeyDatesSubsection';
import MedicationsSection from './MedicationsSection';
import MostRecentVisitSubsection from './MostRecentVisitsSubsection';
import NeutrophilCountSubsection from './NeutrophilCountSubsection';
import PathologySection from './PathologySection';
import ProceduresSection from './ProceduresSection';
import ImagingSection from "./ImagingSection";
import RecentLabResultsSubsection from './RecentLabResultsSubsection';
import TimelineSection from './TimelineSection';
import TreatmentOptionsSection from './TreatmentOptionsSection';
import VisitReasonPostEncounterSection from './VisitReasonPostEncounterSection';
import VisitReasonPreEncounterSection from './VisitReasonPreEncounterSection';
import WhiteBloodCellCountSubsection from './WhiteBloodCellCountSubsection';
import moment from 'moment';
import Lang from 'lodash'

export default class BreastCancerMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return { // breast cancer
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                VisitReasonPreEncounterSection,
                VisitReasonPostEncounterSection,
                {
                    name: "Summary",
                    shortName: "Summary",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Patient has ${.Name} laterality ${.Laterality} stage ${.Stage} diagnosed on ${Key Dates.Diagnosis}."
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
                            defaultTemplate: "Key toxicities include",
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Peripheral motor neuropathy} peripheral motor neuropathy (as of ${Key Toxicities.Peripheral motor neuropathy.when}),",
                            dataMissingTemplate: "no peripheral motor neuropathy,",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Peripheral motor neuropathy"
                            ]
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Blood clots} blood clots (as of ${Key Toxicities.Blood clots.when}),",
                            dataMissingTemplate: "no blood clots,",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Blood clots"
                            ]
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Neutropenia} neutropenia (as of ${Key Toxicities.Neutropenia.when}),",
                            dataMissingTemplate: "no neutropenia,",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Neutropenia"
                            ]
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Nausea/Vomiting} nausea/vomiting (as of ${Key Toxicities.Nause/Vomiting.when}).",
                            dataMissingTemplate: "no nausea/vomiting.",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Nausea/Vomiting"
                            ]
                        },
                        {
                            defaultTemplate: "Patient is ER ${Receptor Status.ER}, PR ${Receptor Status.PR}, and HER2 ${Receptor Status.HER2}.",
                        }
                    ],
                    data: [
                        {
                            name: "",
                            items: [
                                {
                                    name: "Name",
                                    value: (patient, currentConditionEntry) => {
                                        return {    value: currentConditionEntry.type, 
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
                                    name: "Laterality",
                                    value: (patient, currentConditionEntry) => {
                                        return {    value: currentConditionEntry.laterality, 
                                                    isUnsigned: patient.isUnsigned(currentConditionEntry), 
                                                    source: this.determineSource(patient, currentConditionEntry)
                                        };
                                    }
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
                                }
                            ]
                        },
                        {
                            name: "Key Toxicities",
                            items: [
                                {
                                    name: "Peripheral motor neuropathy",
                                    value: (patient, currentConditionEntry) => {
                                        return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10034580"]);
                                    }

                                },
                                {
                                    name: "Blood clots",
                                    value: (patient, currentConditionEntry) => {
                                        return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10042554", "10036206","10013442"]);
                                    }
                                },
                                {
                                    name: "Neutropenia",
                                    value: (patient, currentConditionEntry) => {
                                        return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10016288"]);
                                    }
                                },
                                {
                                    name: "Nausea/Vomiting",
                                    value: (patient, currentConditionEntry) => {
                                        return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10028813", "10047700", "10013946", "10018043", "10001598", "10047386"]);
                                    }
                                }
                            ]
                        },
                        RecentLabResultsSubsection,
                        KeyDatesSubsection,
                        {
                            name: "Receptor Status",
                            items: [
                                {
                                    name: "ER",
                                    value: (patient, currentConditionEntry) => {
                                        let er = currentConditionEntry.getMostRecentERReceptorStatus();
                                        if (Lang.isNull(er)) {
                                            return null;
                                        } else {
                                            return  {   value: er.status, 
                                                        isUnsigned: patient.isUnsigned(er),
                                                        source: this.determineSource(patient, er)
                                                    };
                                        }
                                    }
                                },
                                {
                                    name: "PR",
                                    value: (patient, currentConditionEntry) => {
                                        let pr = currentConditionEntry.getMostRecentPRReceptorStatus();
                                        if (Lang.isNull(pr)) {
                                            return null;
                                        } else {
                                            return  {   value: pr.status, 
                                                        isUnsigned: patient.isUnsigned(pr), 
                                                        source: this.determineSource(patient, pr)
                                                    };
                                        }
                                    }
                                },
                                {
                                    name: "HER2",
                                    value: (patient, currentConditionEntry) => {
                                        let her2 = currentConditionEntry.getMostRecentHER2ReceptorStatus();
                                        if (Lang.isNull(her2)) {
                                            return null;
                                        } else {
                                            return  {   value: her2.status, 
                                                        isUnsigned: patient.isUnsigned(her2), 
                                                        source: this.determineSource(patient, her2)
                                                    };
                                        }
                                    }
                                }
                            ]
                        },
                        MostRecentVisitSubsection
                    ]
                },
                ActiveConditionsSection,
                MedicationsSection,
                AllergiesSection,
                ProceduresSection,
                ImagingSection,
                DiseaseStatusSection,
                {
                    name: "Labs",
                    shortName: "Labs",
                    clinicalEvents: ["pre-encounter"],
                    type: "ValueOverTime",
                    data: [
                        WhiteBloodCellCountSubsection,
                        NeutrophilCountSubsection,
                        HemoglobinSubsection
                    ]
                },
                PathologySection,
                {
                    name: "Genetics",
                    shortName: "Genetics",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Oncotype DX Recurrence Score is ${.Oncotype DX Recurrence Score}."
                        },
                        {
                            defaultTemplate: "Genetic Testing is ${.Genetic Testing}."
                        }
                    ],
                    data: [
                        {
                            name: "",
                            items: [
                                {
                                    name: "Oncotype DX Recurrence Score",
                                    value: null
                                },
                                {
                                    name: "Genetic Testing",
                                    value: (patient, currentConditionEntry) => {
                                        const panels = patient.getBreastCancerGeneticAnalysisPanelsChronologicalOrder();
                                        if (!panels || panels.length === 0) return null;
                                        const panel = panels.pop();
                                        return  {   value: panel.members.map((item) => {
                                                            const v = item.value === 'Positive' ? '+' : '-';
                                                            return item.abbreviatedName + v;
                                                        }).join(", "), 
                                                    isUnsigned: patient.isUnsigned(panel), 
                                                    source: this.determineSource(patient, panel)
                                                };
                                    }
                                }
                            ]
                        }
                    ]
                },
                ClinicalTrialsSection,
                TimelineSection,
                TreatmentOptionsSection
            )
        };
    }
}