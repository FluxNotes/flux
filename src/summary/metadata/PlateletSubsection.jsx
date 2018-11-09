import LabTestSubsection from "./LabTestSubsection";

export default class PlateletSubsection extends LabTestSubsection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Platelet count",
            code: "C0005821",
            itemsFunction: this.getTestsForSubSection,

            bands: [
                {
                    low: 0,
                    high: 150,
                    assessment: 'bad'
                },

                {
                    low: 150,
                    high: 450,
                    assessment: 'good'
                },
                {
                    low: 450,
                    high: 'max',
                    assessment: 'bad'
                }
            ]
        };
    }
}