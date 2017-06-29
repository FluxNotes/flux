const statusOptions = [
    {name: 'Complete Response', description: "The patient's disease is presenting a complete response."},
    {name: 'Complete Resection', description: "The patients' disease has undergone complete resection."},
    {name: 'Responding Disease', description: "The patient's disease is currently responding to treatment."},
    {name: 'Stable Disease', description: "The patient's disease is effectively stable."},
    {name: 'Progressing Disease', description: "The patient's disease continues to progress."},
    {name: 'Inevaluable', description: "The patients progression status is inevaluable at this current time."}
]

const reasonOptions = [
    {name: "pathology", description: "Pathologic evidence of locoregional or distant evidence of tumor."},
    {name: "imaging", description: "Imaging evidence of locoregional, distant or disseminated tumor."},
    {name: "symptoms", description: "Symptoms the patient has reported or presented that can be attributed to tumor."},
    {name: "physical exam", description: "Signs of tumor on physical exam."},
    {name: "markers", description: "Biomarker evidence of persistent/recurrent tumor."}
]

exports.getStatusOptions = () => {
    return statusOptions;
}

exports.getReasonOptions = () => {
    return reasonOptions;
}

exports.isValidStatus = (possibleStatus) => {
    return statusOptions.some((status) => status.name === possibleStatus)
}

exports.isValidReason = (possibleReason) => {
    return reasonOptions.some((reason) => reason.name === possibleReason)
}

exports.findStatusIndex = (possibleStatus) => { 
    return statusOptions.findIndex((status) => status.name === possibleStatus)
}

exports.findReasonIndex = (possibleReason) => { 
    return reasonOptions.findIndex((reason) => reason.name === possibleReason)
}