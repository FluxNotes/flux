import MetadataSection from "./MetadataSection";

export default class KeyDatesSubsection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Key Dates",
            items: [
                {
                    name: "Diagnosis",
                    value: (patient, currentConditionEntry) => {
                        return [currentConditionEntry.diagnosisDate, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)] ;
                    }
                },
                {
                    name: "Recurrence",
                    value: (patient, currentConditionEntry) => {
                        if (currentConditionEntry.clinicalStatus === "recurrence") {
                            return null;
                        } else {
                            return ["N/A", patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                        } // TODO: actually get date once we know where it is in SHR
                    }
                }
            ]
        };
    }

}