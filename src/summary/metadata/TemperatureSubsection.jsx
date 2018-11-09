import VitalsSubsection from './VitalsSubsection';

export default class TemperatureSubsection extends VitalsSubsection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Temperature",
            code: "8310-5",
            itemsFunction: this.getVitalsForSubsection,

            // Source: https://medlineplus.gov/ency/article/001982.htm#start
            bands: [
                {
                    low: 85,
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