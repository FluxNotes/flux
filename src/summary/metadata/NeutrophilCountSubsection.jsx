import LabTestSubsection from "./LabTestSubsection";

export default class NeutrophilCountSubsection extends LabTestSubsection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Neutrophil count",
            code: "C0027950",
            itemsFunction: this.getTestsForSubSection,

            // Source: https://www.healthline.com/health/neutrophils#anc
            // Source: https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_4.03_2010-06-14_QuickReference_8.5x11.pdf page 42
            bands: [
                {
                    low: 0,
                    high: 1,
                    assessment: 'bad'
                },
                {
                    low: 1,
                    high: 8,
                    assessment: 'good'
                },
                {
                    low: 8,
                    // Only draws if an element is captured in this range
                    high: 'max',
                    assessment: 'bad'
                }
            ]
        };
    }
}