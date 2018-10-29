import VitalsSubsection from './VitalsSubsection';

export default class HeartRateSubsection extends VitalsSubsection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Heart Rate",
            code: "8867-4",
            itemsFunction: this.getVitalsForSubsection,

            // Source: https://www.medicalnewstoday.com/articles/235710.php
            bands: [
                {
                    low: 40,
                    high: 50,
                    assessment: 'bad'
                },

                {
                    low: 50,
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