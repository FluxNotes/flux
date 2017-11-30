import codeableConceptUtils from '../model/CodeableConceptUtils.jsx';

const cancerOptions = [
    {
        name: 'Invasive ductal carcinoma of breast', 
        description: "Invasive ductal carcinoma of breast",
        code: "408643008",
        codeSystem: "http://snomed.info/sct"
    }];

/*
 * Searches for value in cancerOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
exports.getCancerCodeableConcept = (possibleSpecificType) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleSpecificType, cancerOptions);
}
