import Lang from 'lodash/lang';
import CodeableConcept from '../model/shr/core/CodeableConcept';
import Coding from '../model/shr/core/Coding';
import DisplayText from '../model/shr/core/DisplayText';

/*
 *  Converts a tuple with the properties value, codeSystem, and displayText into a CodeableConcept object
 */
exports.getCodeableConceptFromTuple = (tuple) => {
    let codeableConcept = new CodeableConcept();

    let coding = new Coding();
    coding.code = tuple.value;
    coding.codeSystem = tuple.codeSystem;
    codeableConcept.coding = [coding];

    let displayText = new DisplayText();
    displayText.value = tuple.displayText;
    codeableConcept.displayText = displayText;

    return codeableConcept;
}

/*
 * Function returns a CodeableConcept object when given a possibleValue and a list of options
 * possibleValue is a string
 * options is a list of objects with properties name, codeSystem, code
 */
exports.getCodeableConceptFromOptions = (possibleValue, options) => {
    const index = options.findIndex((option) => { return option.name.toLowerCase() === possibleValue.toLowerCase()});
    let tuple = {
        value: "",
        codeSystem: "",
        displayText: ""
    };

    let value = index === -1 ? null : options[index];
    if(!Lang.isNull(value)) {
        tuple = {
            value: value.code,
            codeSystem: value.codeSystem,
            displayText: value.name
        };
    }

    return exports.getCodeableConceptFromTuple(tuple);
}