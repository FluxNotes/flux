import GeneticMutationTestResult from "../../../onco/core/GeneticMutationTestResult";
import FluxEntry from "../../base/FluxEntry";

class FluxGeneticMutationTestResult extends FluxEntry {
    constructor(json) {
        super();

        this._geneticMutationTestResult = this._entry = GeneticMutationTestResult.fromJSON(json);
    }

    get abbreviatedName() {
        if (!this._geneticMutationTestResult.mutationTested
            || !this._geneticMutationTestResult.mutationTested.variantIdentifier
            || !this._geneticMutationTestResult.mutationTested.variantIdentifier.value
            || !this._geneticMutationTestResult.mutationTested.variantIdentifier.value.coding[0].displayText) {
        // TODO: Create lookup table for genetic mutation codes?
            switch (this.mutationCode) {
                case '405827002': {
                    return 'BRCA1';
                }
                case '405828007': {
                    return 'BRCA2';
                }
                case 'C104668': {
                    return 'KIT';
                }
                case 'C1335201': {
                    return 'PDGFRA';
                }
                default: {
                    console.error('Abreviated name not found');
                    return '';
                }
            }
        }

        return this._geneticMutationTestResult.mutationTested.variantIdentifier.value.coding[0].displayText.value;
    }

    get value() {
        return this._displayTextOrCode(this._geneticMutationTestResult.dataValue.value.coding[0]);
    }

    get statusSign() {
        return (this.value === 'Positive' ? '+' : '-');
    }

    get mutationCode() {
        return this._geneticMutationTestResult.mutationTested.variantIdentifier.value.coding[0].codeValue.code;
    }
}

export default FluxGeneticMutationTestResult;
