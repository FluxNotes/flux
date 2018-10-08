import MetadataSection from "./MetadataSection";
import moment from 'moment';

export default class SarcomaNursePractitionerMetadata extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return { // sarcoma NP
            sections: [
                visitReasonSectionPreEncounter,
                visitReasonSectionPostEncounter,
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
                        recentLabResultsSubsection,
                        keyDatesSubsection,
                        mostRecentVisitSubsection
                    ]
                },
                timelineSection,
                proceduresSection,
                activeConditionsSection,
                {
                    name: "Labs",
                    shortName: "Labs",
                    clinicalEvents: ["pre-encounter"],
                    type: "ValueOverTime",
                    data: [
                        whiteBloodCellCountSubsection,
                        neutrophilCountSubsection,
                        hemoglobinSubsection
                    ]
                },
                medicationsSection,
                allergiesSection
            ]
        };
    }
}