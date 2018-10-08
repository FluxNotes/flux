import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import HemoglobinSubsection from './HemoglobinSubsection';
import KeyDatesSubsection from './KeyDatesSubsection';
import MedicationsSection from './MedicationsSection';
import MostRecentVisitsSubsection from './MostRecentVisitsSubsection';
import NeutrophilCountSubsection from './NeutrophilCountSubsection';
import ProceduresSection from './ProceduresSection';
import RecentLabResultsSubsection from './RecentLabResultsSubsection';
import TimelineSection from './TimelineSection';
import TreatmentOptionsSection from './TreatmentOptionsSection';
import VisitReasonPostEncounterSection from './VisitReasonPostEncounterSection';
import VisitReasonPreEncounterSection from './VisitReasonPreEncounterSection';
import WhiteBloodCellCountSubsection from './WhiteBloodCellCountSubsection';
import FluxTumorDimensions from '../../model/oncology/FluxTumorDimensions';
import FluxTumorMargins from '../../model/oncology/FluxTumorMargins';
import Lang from 'lodash'
import moment from 'moment';

export default class SarcomaMetadata extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, condition, roleType, role, specialty, 
                VisitReasonPreEncounterSection, 
                VisitReasonPostEncounterSection,
                {
                    name: "Summary",
                    shortName: "Summary",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Patient has ${.Name} stage ${.Stage} diagnosed on ${Key Dates.Diagnosis}."
                        },
                        {
                            defaultTemplate: "Mitosis is ${.Mitosis}.",
                            dataMissingTemplate: "Mitosis is ${.Mitosis}.",
                            useDataMissingTemplateCriteria: [
                                ".Mitosis"
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
                            defaultTemplate: "${Key Toxicities.Headaches} headaches,",
                            dataMissingTemplate: "no headaches,",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Headaches"
                            ]
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Skin Rashes} skin rashes,",
                            dataMissingTemplate: "no skin rashes,",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Skin Rashes"
                            ]
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Vomiting} vomiting,",
                            dataMissingTemplate: "no vomiting,",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Vomiting"
                            ]
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Diarrhea} diarrhea,",
                            dataMissingTemplate: "no diarrhea,",
                            useDataMissingTemplateCriteria: [
                                "Key Toxicities.Diarrhea"
                            ]
                        },
                        {
                            defaultTemplate: "${Key Toxicities.Muscle Pains} muscle pains.",
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
                                        return [currentConditionEntry.type, 
                                                patient.isUnsigned(currentConditionEntry), 
                                                this.determineSource(patient, currentConditionEntry)
                                            ];
                                    },
                                    shortcut: "@condition"
                                },
                                {
                                    name: "Stage",
                                    value: (patient, currentConditionEntry) => {
                                        let s = currentConditionEntry.getMostRecentStaging();
                                        if (s && s.stage && s.stage.length > 0) {
                                            return [s.stage, patient.isUnsigned(s), this.determineSource(patient, s)];
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
                                            return [mr.quantity.number + " " + mr.quantity.unit, patient.isUnsigned(mr), this.determineSource(patient, mr)];
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
                                            return [p.status, patient.isUnsigned(p), this.determineSource(patient, p)];
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
                                            return [p.asOfDate, patient.isUnsigned(p), this.determineSource(patient, p)];
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
                                            return [p.evidence.map(function (ev) {
                                                return ev;
                                            }).join(', '), patient.isUnsigned(p), this.determineSource(patient, p)];
                                        }
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
                        this.buildMetadataSection(preferencesManager, condition, roleType, role, specialty, RecentLabResultsSubsection),
                        this.buildMetadataSection(preferencesManager, condition, roleType, role, specialty, KeyDatesSubsection),
                        this.buildMetadataSection(preferencesManager, condition, roleType, role, specialty, MostRecentVisitsSubsection)
                    ]
                },
                ProceduresSection,
                ActiveConditionsSection,
                DiseaseStatusSection,
                {
                    name: "Labs",
                    shortName: "Labs",
                    clinicalEvents: ["pre-encounter"],
                    type: "ValueOverTime",
                    data: [
                        this.buildMetadataSection(preferencesManager, condition, roleType, role, specialty, WhiteBloodCellCountSubsection),
                        this.buildMetadataSection(preferencesManager, condition, roleType, role, specialty, NeutrophilCountSubsection),
                        this.buildMetadataSection(preferencesManager, condition, roleType, role, specialty, HemoglobinSubsection)
                    ]
                },
                MedicationsSection,
                {
                    name: "Pathology",
                    shortName: "Pathology",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
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
                                        return [size.quantity.value + " " + size.quantity.unit, patient.isUnsigned(size), this.determineSource(patient, size)];
                                    }
                                },
                                {
                                    name: "Tumor Margins",
                                    value: (patient, currentConditionEntry) => {
                                        const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorMargins);
                                        if (list.length === 0) return null;
                                        const margins = list.pop(); // last is most recent
                                        return [margins.value, patient.isUnsigned(margins), this.determineSource(patient, margins)];
                                    }
                                },
                                {
                                    name: "Histological Grade",
                                    value: (patient, currentConditionEntry) => {
                                        let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                        return [ histologicalGrade.grade, patient.isUnsigned(histologicalGrade), this.determineSource(patient, histologicalGrade) ];
                                    }
                                },               
                            ]
                        }
                    ]
                },
                {
                    name: "Genetics",
                    shortName: "Genetics",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Genetic Testing is ${.Genetic Testing}."
                        }
                    ],
                    data: [
                        {
                            name: "",
                            items: [
                                {
                                    name: "Genetic Testing",
                                    value: (patient, currentConditionEntry) => {
                                        const panels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
                                        if (!panels || panels.length === 0) return null;
                                        const panel = panels.pop();
                                        return [panel.members.map((item) => {
                                            const v = item.value === 'Positive' ? '+' : '-';
                                            return item.abbreviatedName + v;
                                        }).join(","), patient.isUnsigned(panel), this.determineSource(patient, panel)];
                                    }
                                }
                            ]
                        }
                    ]
                },
                AllergiesSection,
                TimelineSection,
                TreatmentOptionsSection
            )                
        };
    }
}