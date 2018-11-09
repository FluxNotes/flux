import MetadataSection from "./MetadataSection";

export default class KeyDatesSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Key Dates",
            items: [
                {
                    name: "Diagnosis",
                    value: (patient, currentConditionEntry) => {
                        return  {   value: currentConditionEntry.diagnosisDate, 
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
                            return  {   value: "N/A", 
                                        isUnsigned: patient.isUnsigned(currentConditionEntry), 
                                        source: this.determineSource(patient, currentConditionEntry)
                                    };
                        } // TODO: actually get date once we know where it is in SHR
                    }
                }
            ]
        };
    }

}