import LabTestSubsection from "./LabTestSubsection";

export default class WhiteBloodCellCountSubsection extends LabTestSubsection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "White blood cell count",
            code: "C0023508",
            itemsFunction: this.getTestsForSubSection,

            // Source: https://www.cancer.org/treatment/understanding-your-diagnosis/tests/understanding-your-lab-test-results.html
            // Source: https://www.mayoclinic.org/symptoms/low-white-blood-cell-count/basics/definition/sym-20050615
            bands: [
                { low: 0, high: 3, assessment: 'bad' },
                { low: 3, high: 10, assessment: 'good' },
                { low: 10, high: 'max', assessment: 'bad' }
            ]
        };

    }
}