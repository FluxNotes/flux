const statusOptions = [
    {name: 'progressing', description: ""},
    {name: 'complete response', description: ""},
    {name: 'partial response', description: ""},
    {name: '', description: ""}
]

const reasonOptions = [
    {name: "pathology", description: ""},
    {name: "imaging", description: ""},
    {name: "symptoms", description: ""},
    {name: "physical exam", description: ""},
    {name: "markers", description: ""}
]

exports.getStatusOptions = () => {
    return statusOptions;
}

exports.getReasonOptions = () => {
    return reasonOptions;
}

exports.isValidStatus = (possileStatus) => {
    return statusOptions.some((status) => status.name == possileStatus)
}

exports.isValidReason = (possibleReason) => {
    return reasonOptions.some((reason) => reason.name == possibleReason)
}