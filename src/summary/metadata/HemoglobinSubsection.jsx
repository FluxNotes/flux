import LabTestSubsection from "./LabTestSubsection";

export default class HemoglobinSubsection extends LabTestSubsection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Hemoglobin",
            code: "C0019046",
            itemsFunction: this.getTestsForSubSection,

            // Source: https://www.emedicinehealth.com/hemoglobin_levels/page2_em.htm
            // Source: https://www.quora.com/What-is-the-percentage-of-haemoglobin-in-blood
            bands: [
                {
                    low: 0,
                    high: 12,
                    assessment: 'bad'
                },

                {
                    low: 12,
                    high: 16,
                    assessment: 'good'
                },
                {
                    low: 16,
                    high: 20,
                    assessment: 'bad'
                }
            ]
        };
    }
}