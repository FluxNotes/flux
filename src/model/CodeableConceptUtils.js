import _ from 'lodash';
import CodeableConcept from '../model/shr/core/CodeableConcept';
import Coding from '../model/shr/core/Coding';
import CodeSystem from '../model/shr/core/CodeSystem';
import DisplayText from '../model/shr/core/DisplayText';
import CodeValue from './shr/core/CodeValue';

/*
 *  Converts a tuple with the properties value, codeSystem, and displayText into a CodeableConcept object
 */
function getCodeableConceptFromTuple(tuple) {
    const codeableConcept = new CodeableConcept();

    const coding = new Coding();
    const code = new CodeValue();
    code.value = tuple.value;
    coding.codeValue = code;

    const codeSystem = new CodeSystem();
    codeSystem.value = tuple.codeSystem;
    coding.codeSystem = codeSystem;
    codeableConcept.coding = [coding];

    const displayText = new DisplayText();
    displayText.value = tuple.displayText;
    coding.displayText = displayText;
    codeableConcept.displayText = displayText;

    return codeableConcept;
}

/*
 * Function returns a CodeableConcept object when given a possibleValue and a list of options
 * possibleValue is a string
 * options is a list of objects with properties name, codeSystem, code
 */
function getCodeableConceptFromOptions(possibleValue, options){
    let tuple = {
        value: "",
        codeSystem: "",
        displayText: ""
    };
    if (!_.isNull(possibleValue)) {
        const index = options.findIndex((option) => { return option.name.toLowerCase() === possibleValue.toLowerCase()});

        let value = index === -1 ? null : options[index];
        if(!_.isNull(value)) {
            tuple = {
                value: value.code,
                codeSystem: value.codeSystem,
                displayText: value.name
            };
        }
    }
    return getCodeableConceptFromTuple(tuple);
}


export {
  getCodeableConceptFromTuple,
  getCodeableConceptFromOptions
}