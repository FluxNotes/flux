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