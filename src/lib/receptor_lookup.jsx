import codeableConceptUtils from '../model/CodeableConceptUtils.jsx';

const receptorValueOptions = [
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


const receptorTypeOptions = [
    {
        name: 'Estrogen Receptor',  
        description: "Estrogen receptor refers to a group of receptors which are activated by the hormone 17β-estradiol (estrogen). Two types of estrogen receptor exist: ER which is a member of the nuclear hormone family of intracellular receptors and the estrogen G protein coupled receptor GPR30 (GPER), which is a G-protein coupled receptor. This value refers to the nuclear hormone receptor ER.",
        code: "16112-5",
        codeSystem: "http://fhir.loinc.org"
    },
    {
        name: 'Progesterone Receptor',
        description: "The progesterone receptor (PR, also known as NR3C3 or nuclear receptor subfamily 3, group C, member 3), is a protein found inside cells. It is activated by the steroid hormone progesterone.",
        code: "16113-3",
        codeSystem: "http://fhir.loinc.org"
    },
    {
        name: 'HER2 Receptor',
        description: 'HER2/neu (also known as ErbB-2) stands for "Human Epidermal growth factor Receptor 2" and is a protein giving higher aggressiveness in breast cancers. It is a member of the ErbB protein family, more commonly known as the epidermal growth factor receptor family. HER2/neu has also been designated as CD340 (cluster of differentiation 340) and p185. It is encoded by the ERBB2 gene.',
        code: "48676-1",
        codeSystem: "http://fhir.loinc.org"
    }
];


/*
 * Searches for value in receptorOptions list
 * Will return CodeableConcept object with empty strings if not found
 * If value found in list, function will return CodeableConcept with value, codeSystem, and displayText
 */
exports.getReceptorValueConcept = (possibleReceptorValue) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleReceptorValue, receptorValueOptions);
}
exports.getReceptorTypeConcept = (possibleReceptorType) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleReceptorType, receptorTypeOptions);
}

exports.getReceptorValueOptions = () => {
    return receptorValueOptions;
}

exports.getReceptorTypeOptions = () => {
    return receptorTypeOptions;
}
