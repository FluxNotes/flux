import VitalsSubsection from './VitalsSubsection';

export default class TemperatureSubsection extends VitalsSubsection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Temperature",
            code: "8310-5",
            itemsFunction: this.getVitalsForSubsection,

            // Source: https://www.emedicinehealth.com/hemoglobin_levels/page2_em.htm
            // Source: https://www.quora.com/What-is-the-percentage-of-haemoglobin-in-blood
            bands: [
                {
                    low: 0,
                    high: 97,
                    assessment: 'bad'
                },

                {
                    low: 97,
                    high: 99,
                    assessment: 'good'
                },
                {
                    low: 99,
                    high: 105,
                    assessment: 'bad'
                }
            ]
        };
    }
}