import codeableConceptUtils from '../model/CodeableConceptUtils.jsx';

const lateralityOptions = [
    {
        name: 'Left', 
        description: "Being or located on or directed toward the side of the body to the west when facing north",
        code: "C25229",
        codeSystem: "https://evs.nci.nih.gov/ftp1/CDISC/SDTM/"
    },
    {
        name: 'Right',
        description: "Being or located on or directed toward the side of the body to the east when facing north.",
        code: "C25228",
        codeSystem: "https://evs.nci.nih.gov/ftp1/CDISC/SDTM/"
    }
];


/*
 * Searches for value in lateralityOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
exports.getReceptorCodeableConcept = (possibleReceptorValue) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleReceptorValue, receptorOptions);
}