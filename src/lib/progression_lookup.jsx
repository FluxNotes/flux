const statusOptions = [
    {
        name: 'Complete Response', 
        description: "The patient's disease is presenting a complete response.",
        code: "C0677874"
    },
    {
        name: 'Complete Resection', 
        description: "The patients' disease has undergone complete resection.",
        code: "C0015250"
    },
    { 
        name: 'Responding', 
        description: "The patient's disease is currently responding to treatment.",
        code: "C1272745"
    },
    { 
        name: 'Stable', 
        description: "The patient's disease is effectively stable.",
        code: "C0205360"
    },
    {
        name: 'Progressing', 
        description: "The patient's disease continues to progress.",
        code: "C1546960"
    },
    {
        name: 'Inevaluable', 
        description: "The patients progression status is inevaluable at this current time.",
        code: "C3858734"
    }
]

const reasonOptions = [
    {
        name: "Pathology", 
        description: "Pathologic evidence of locoregional or distant evidence of tumor.",
        code: "C0030664"
    },
    {
        name: "Imaging", 
        description: "Imaging evidence of locoregional, distant or disseminated tumor.",
        code: "C0011923"
    },
    {
        name: "Symptoms", 
        description: "Symptoms the patient has reported or presented that can be attributed to tumor.",
        code: "C1457887"
    },
    {
        name: "Physical exam", 
        description: "Signs of tumor on physical exam.",
        code: "C0031809"
    },
    {
        name: "Markers", 
        description: "Biomarker evidence of persistent/recurrent tumor.",
        code: "C0005516"
    }
]

exports.getDescription = (dataElement) => {
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

exports.getStatusOptions = () => {
    return statusOptions;
}

exports.getReasonOptions = () => {
    return reasonOptions;
}

exports.isValidStatus = (possibleStatus) => {
    return statusOptions.some((status) => { return status.name.toLowerCase() === possibleStatus.toLowerCase()})
}

exports.isValidReason = (possibleReason) => {
    return reasonOptions.some((reason) => { return reason.name.toLowerCase() === possibleReason.toLowerCase()})
}

exports.findStatusIndex = (possibleStatus) => { 
    return statusOptions.findIndex((status) => { return status.name.toLowerCase() === possibleStatus.toLowerCase()})
}

exports.findStatus = (possibleStatus) => {
    const index = exports.findStatusIndex(possibleStatus);
    if (index === -1) return null;
    return statusOptions[index];  
}

exports.getStatusCodeableConcept = (possibleStatus) => {
    const status = exports.findStatus(possibleStatus);
    if(Lang.isNull(status)) {
        return {
            value: "",
            codeSystem: "",
            displayText: ""
        };
    }
    return {
        value: status.code,
        codeSystem: "http://ncimeta.nci.nih.gov",
        displayText: status.name
    };
}

exports.findReasonIndex = (possibleReason) => { 
    return reasonOptions.findIndex((reason) => { return reason.name.toLowerCase() === possibleReason.toLowerCase()})
}

exports.findReason = (possibleReason) => {
    const index = exports.findReasonIndex(possibleReason);
    if (index === -1) return null;
    return reasonOptions[index];
}

exports.getReasonCodeableConcept = (possibleReason) => {
    const reason = exports.findReason(possibleReason);
    if(Lang.isNull(reason)) {
        return {
            value: "",
            codeSystem: "",
            displayText: ""
        };
    }
    return {
        value: reason.code,
        codeSystem: "http://ncimeta.nci.nih.gov",
        displayText: reason.name
    }
}