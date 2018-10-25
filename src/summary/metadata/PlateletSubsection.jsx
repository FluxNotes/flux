import LabTestSubsection from "./LabTestSubsection";

export default class PlateletSubsection extends LabTestSubsection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Platelet count",
            code: "C0019046", // change
            itemsFunction: this.getTestsForSubSection,

            //change
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