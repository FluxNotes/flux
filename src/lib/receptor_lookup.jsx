import codeableConceptUtils from '../model/CodeableConceptUtils.jsx';

const receptorOptions = [
    {
        name: 'Positive', 
        description: "Presence of hormone receptors in cancerous cells (for ER or PR) or high-levels of the growth-promoting protein (e.g. HER2)",
        code: "C1446409",
        codeSystem: "http://ncimeta.nci.nih.gov"
    },
    {
        name: 'Negative',
        description: "Hormone receptors not present in cancerous cells (for ER or PR) or levels of growth-promoting hormone (e.g., HER2) are low.",
        code: "C0205160",
        codeSystem: "http://ncimeta.nci.nih.gov"
    }
];


/*
 * Searches for value in receptorOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
exports.getReceptorCodeableConcept = (possibleReceptorValue) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleReceptorValue, receptorOptions);
}