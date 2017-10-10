const clinicalTrials = [
    {id: 'patina', name: 'PATINA', description: 'For the PATINA Clinical Trial'}
];

exports.getAllTrials = () => {
    return clinicalTrials;
}

// TODO: Update descriptions
exports.getDescription = (dataElement) => {
    switch(dataElement) {
        case "clinicalTrial":
            return "Clinical trial enrollment includes the name of a clinical trial, an enrollment date, and possibly an end date.";
        case "trial":
            return "Clinical trial the patient is enrolled in.";
        case "enrollmentDate":
            return "Date the patient was enrolled in the chosen clinical trial.";
        case "endDate":
            return "Date the patient left the clinical trial.";
        default:
            return null;
    }
}