import CodeableConcept from '../model/shr/core/CodeableConcept';
import Coding from '../model/shr/core/Coding';
import DisplayText from '../model/shr/core/DisplayText';

exports.getCodeableConceptFromTuple = (tuple) => {
    let codeableConcept = new CodeableConcept();

    let coding = new Coding();
    coding.code = tuple.value;
    coding.codeSystem = tuple.codeSystem;
    codeableConcept.coding = coding;

    let displayText = new DisplayText();
    displayText.value = tuple.displayText;
    codeableConcept.displayText = displayText;

    return codeableConcept;
}