import { getCodeableConceptFromOptions } from '../model/CodeableConceptUtils.jsx';

const statusOptions = [
    {
        name: 'Complete Response', 
        description: "The patient's disease is presenting a complete response.",
        code: "C0677874",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: 'Complete Resection', 
        description: "The patients' disease has undergone complete resection.",
        code: "C0015250",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    { 
        name: 'Responding', 
        description: "The patient's disease is currently responding to treatment.",
        code: "C1272745",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    { 
        name: 'Stable', 
        description: "The patient's disease is effectively stable.",
        code: "C0205360",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: 'Progressing', 
        description: "The patient's disease continues to progress.",
        code: "C1546960",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: 'Inevaluable', 
        description: "The patients progression status is inevaluable at this current time.",
        code: "C3858734",
        codeSystem: "http://ncimeta.nci.nih.gov"
    }
]

const reasonOptions = [
    {
        name: "Pathology", 
        description: "Pathologic evidence of locoregional or distant evidence of tumor.",
        code: "C0030664",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: "Imaging", 
        description: "Imaging evidence of locoregional, distant or disseminated tumor.",
        code: "C0011923",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: "Symptoms", 
        description: "Symptoms the patient has reported or presented that can be attributed to tumor.",
        code: "C1457887",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: "Physical exam", 
        description: "Signs of tumor on physical exam.",
        code: "C0031809",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: "Markers", 
        description: "Biomarker evidence of persistent/recurrent tumor.",
        code: "C0005516",
        codeSystem: "http://ncimeta.nci.nih.gov"
    }
]

export const getDescription = (dataElement) => {
   switch(dataElement) {
   case "progression": 
      return "Determination of disease status is based on a number of complex variables which include objective measures like tumor growth, symptomatic criteria, patient reports information, and subjective evaluations.";
   case "status":
      return "Based on on the patient data available to the clinician at the time of evaluation.";
   case "reason": 
      return "Rationale for the choice of status."
   case "referenceDate":
      return "The date of the event that disease status is being assessed relative to."
   default: 
      return null;
   }
}

export const getStatusOptions = () => {
    return statusOptions;
}

export const getReasonOptions = () => {
    return reasonOptions;
}

export const isValidStatus = (possibleStatus) => {
    return statusOptions.some((status) => { return status.name.toLowerCase() === possibleStatus.toLowerCase()})
}

export const isValidReason = (possibleReason) => {
    return reasonOptions.some((reason) => { return reason.name.toLowerCase() === possibleReason.toLowerCase()})
}

export const findStatusIndex = (possibleStatus) => { 
    return statusOptions.findIndex((status) => { return status.name.toLowerCase() === possibleStatus.toLowerCase()})
}

export const findStatus = (possibleStatus) => {
    const index = exports.findStatusIndex(possibleStatus);
    if (index === -1) return null;
    return statusOptions[index];  
}

/*
 * Searches for value in statusOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
export const getStatusCodeableConcept = (possibleStatus) => {
    return getCodeableConceptFromOptions(possibleStatus, statusOptions);
}

export const findReasonIndex = (possibleReason) => { 
    return reasonOptions.findIndex((reason) => { return reason.name.toLowerCase() === possibleReason.toLowerCase()})
}

export const findReason = (possibleReason) => {
    const index = exports.findReasonIndex(possibleReason);
    if (index === -1) return null;
    return reasonOptions[index];
}

/*
 * Searches for evidence in reasonOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If evidence found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
export const getEvidenceCodeableConcept = (possibleReason) => {    
    return getCodeableConceptFromOptions(possibleReason, reasonOptions);
}