import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import ProceduresSection from './ProceduresSection';
import TimelineSection from './TimelineSection';
import WhiteBloodCellCountSubsection from './WhiteBloodCellCountSubsection';

export default class DefaultMetadata extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            sections: this.buildMetadataSections(preferencesManager, condition, roleType, role, specialty,
                {
                    name: "Condition",
                    shortName: "Condition",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Patient has ${.Name} diagnosed on ${.Diagnosis Date}."
                        }
                    ],
                    data: [
                        {
                            name: "",
                            items: [
                                {
                                    name: "Name",
                                    value: (patient, currentConditionEntry) => {
                                        return [currentConditionEntry.type, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                    },
                                    shortcut: "@condition"
                                },
                                {
                                    name: "Diagnosis Date",
                                    value: (patient, currentConditionEntry) => {
                                        return [currentConditionEntry.diagnosisDate, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                    }
                                },
                                {
                                    name: "Where",
                                    value: (patient, currentConditionEntry) => {
                                        return [currentConditionEntry.bodySite, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                    }
                                },
                                {
                                    name: "Clinical Status",
                                    value: (patient, currentConditionEntry) => {
                                        return [currentConditionEntry.clinicalStatus, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                    }
                                }
                            ]
                        }
                    ]
                },
                ProceduresSection,
                {
                    name: "Labs",
                    shortName: "Labs",
                    type: "ValueOverTime",
                    data: [
                        WhiteBloodCellCountSubsection
                    ]
                },
                {
                    name: "Medications",
                    shortName: "Meds",
                    clinicalEvents: ["pre-encounter"],
                    defaultVisualizer: "chart",
                    type: "Columns",
                    data: [
                        {
                            name: "",
                            headings: ["Medication", "Dosage", "Timing", "Start", "End"],
                            itemsFunction: this.getItemListForMedications,

                        }
                    ]
                },
                ActiveConditionsSection,
                AllergiesSection,
                TimelineSection
            )
        };
    }
}