import codeableConceptUtils from '../model/CodeableConceptUtils.jsx';

const procedureValueOptions = [
    {
        name: 'Surgery', 
        description: "A diagnostic or treatment procedure performed by manual and/or instrumental means, often involving an incision and the removal or replacement of a diseased organ or tissue; of or relating to or involving or used in surgery or requiring or amenable to treatment by surgery.",
        code: "C0851238",
        codeSystem: "http://ncimeta.nci.nih.gov"
    }
];

const procedureStatusOptions = [
    {
        name: 'Completed', 
        description: "Activity against the request has been sufficiently completed to the satisfaction of the requester.",
        code: "completed",
        codeSystem: "http://hl7.org/fhir/STU3/valueset-request-status.html"
    },
    { 
        name: 'Active',
        description: "The request is ready to be acted upon.",
        code: "active",
        codeSystem: "http://hl7.org/fhir/STU3/valueset-request-status.html"
    }
];

/*
 * Searches for value in procedureValueOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
exports.getProcedureValueCodeableConcept = (possibleProcedureValue) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleProcedureValue, procedureValueOptions);
}

/*
 * Searches for value in procedureStatusOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
exports.getProcedureStatusCodeableConcept = (possibleProcedureStatus) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleProcedureStatus, procedureStatusOptions);
}