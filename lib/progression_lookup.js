const statusOptions = [
    {name: 'Complete Response', description: "The patient's disease is presenting a complete response."},
    {name: 'Complete Resection', description: "The patients' disease has undergone complete resection."},
    {name: 'Responding', description: "The patient's disease is currently responding to treatment."},
    {name: 'Stable', description: "The patient's disease is effectively stable."},
    {name: 'Progressing', description: "The patient's disease continues to progress."},
    {name: 'Inevaluable', description: "The patients progression status is inevaluable at this current time."}
]

const reasonOptions = [
    {name: "Pathology", description: "Pathologic evidence of locoregional or distant evidence of tumor."},
    {name: "Imaging", description: "Imaging evidence of locoregional, distant or disseminated tumor."},
    {name: "Symptoms", description: "Symptoms the patient has reported or presented that can be attributed to tumor."},
    {name: "Physical exam", description: "Signs of tumor on physical exam."},
    {name: "Markers", description: "Biomarker evidence of persistent/recurrent tumor."}
]

exports.getStatusOptions = () => {
    return statusOptions;
}

exports.getReasonOptions = () => {
    return reasonOptions;
}

exports.isValidStatus = (possibleStatus) => {
    return statusOptions.some((status) => status.name.toLowerCase() === possibleStatus.toLowerCase())
}

exports.isValidReason = (possibleReason) => {
    return reasonOptions.some((reason) => reason.name.toLowerCase() === possibleReason.toLowerCase())
}

exports.findStatusIndex = (possibleStatus) => { 
    return statusOptions.findIndex((status) => status.name.toLowerCase() === possibleStatus.toLowerCase())
}

exports.findReasonIndex = (possibleReason) => { 
    return reasonOptions.findIndex((reason) => reason.name.toLowerCase() === possibleReason.toLowerCase())
}