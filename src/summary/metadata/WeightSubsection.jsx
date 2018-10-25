import VitalsSubsection from './VitalsSubsection';

export default class WeightSubsection extends VitalsSubsection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Weight",
            code: "29463-7",
            itemsFunction: this.getVitalsForSubsection,

            // Source: https://www.emedicinehealth.com/hemoglobin_levels/page2_em.htm
            // Source: https://www.quora.com/What-is-the-percentage-of-haemoglobin-in-blood
            bands: [
                {
                    low: 0,
                    high: 135,
                    assessment: 'bad'
                },

                {
                    low: 135,
                    high: 180,
                    assessment: 'good'
                },
                {
                    low: 180,
                    high: 250,
                    assessment: 'bad'
                }
            ]
        };
    }
}