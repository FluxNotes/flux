import VitalsSubsection from './VitalsSubsection';

export default class HeartRateSubsection extends VitalsSubsection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Heart Rate",
            code: "8867-4",
            itemsFunction: this.getVitalsForSubsection,

            // Source: https://www.emedicinehealth.com/hemoglobin_levels/page2_em.htm
            // Source: https://www.quora.com/What-is-the-percentage-of-haemoglobin-in-blood
            bands: [
                {
                    low: 0,
                    high: 40,
                    assessment: 'bad'
                },

                {
                    low: 40,
                    high: 100,
                    assessment: 'good'
                },
                {
                    low: 100,
                    high: 200,
                    assessment: 'bad'
                }
            ]
        };
    }
}