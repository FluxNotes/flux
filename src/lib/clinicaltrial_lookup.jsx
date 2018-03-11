import codeableConceptUtils from '../model/CodeableConceptUtils.jsx';

const clinicalTrialStatusOptions = [
    {
        name: 'Candidate', 
        description: "The subject has been identified as a potential participant in the study but has not yet agreed to participate",
        code: "candidate",
        codeSystem: "http://hl7.org/fhir/research-subject-status"
    },
    {
        name: 'Enrolled', 
        description: "The subject has agreed to participate in the study but has not yet begun performing any action within the study",
        code: "enrolled",
        codeSystem: "http://hl7.org/fhir/research-subject-status"
    },
    {
        name: 'Active', 
        description: "The subject is currently being monitored and/or subject to treatment as part of the study",
        code: "active",
        codeSystem: "http://hl7.org/fhir/research-subject-status"
    },
    {
        name: 'Suspended', 
        description: "The subject has temporarily discontinued monitoring/treatment as part of the study",
        code: "suspended",
        codeSystem: "http://hl7.org/fhir/research-subject-status"
    },
    {
        name: 'Withdrawn', 
        description: "The subject has permanently ended participation in the study prior to completion of the intended monitoring/treatment",
        code: "withdrawn",
        codeSystem: "http://hl7.org/fhir/research-subject-status"
    },
    {
        name: 'Completed', 
        description: "All intended monitoring/treatment of the subject has been completed and their engagement with the study is now ended",
        code: "completed",
        codeSystem: "http://hl7.org/fhir/research-subject-status"
    }
];

/*
 * Searches for value in clinicalTrialStatusOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
exports.getStatusCodeableConcept = (possibleStatus) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleStatus, clinicalTrialStatusOptions);
}
