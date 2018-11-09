import MetadataSection from "./MetadataSection";

export default class DefaultCoreCancerPilotMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                {
                    name: "Condition",
                    shortName: "Condition",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Patient has ${.Name} at ${.Where} diagnosed on ${.Diagnosis Date}."
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
                                    name: "Diagnosis Date",
                                    value: (patient, currentConditionEntry) => {
                                        return  {   value: currentConditionEntry.diagnosisDate, 
                                                    isUnsigned: patient.isUnsigned(currentConditionEntry), 
                                                    source: this.determineSource(patient, currentConditionEntry)
                                                };
                                    }
                                },
                                {
                                    name: "Where",
                                    value: (patient, currentConditionEntry) => {
                                        return  {   value: currentConditionEntry.bodySite, 
                                                    isUnsigned: patient.isUnsigned(currentConditionEntry), 
                                                    source: this.determineSource(patient, currentConditionEntry)
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
                                }
                            ]
                        }
                    ]
                }
            )
        };
    }
}