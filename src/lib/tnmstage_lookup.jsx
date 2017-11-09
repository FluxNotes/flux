const codeableConceptUtils = require('../model/CodeableConceptUtils.jsx');

// Breast Cancer Staging lookups

// 5th Edition, p.174:
// https://cancerstaging.org/references-tools/deskreferences/Documents/AJCC5thEdCancerStagingManual.pdf
// const ts5thEdition = ['T0', 'T1', 'T2', 'T3', 'T4'];
const ts5thEdition = [
    {name: 'T0', description: "No evidence of primary tumor"},
    {name: 'T1', description: "Tumor ≤ 20 mm in greatest dimension"},
    {name: 'T2', description: "20 mm < Tumor ≤ 50 mm in greatest dimension"},
    {name: 'T3', description: "Tumor > 50 mm in greatest dimension"},
    {name: 'T4', description: "Tumor of any size with direct extension to the chest wall and/or to the skin (ulceration or skin nodules)"}
];
// const ns5thEdition = ['N0', 'N1', 'N2', 'N3'];
const ns5thEdition = [
    {name: 'N0', description: "No regional lymph node metastasis"},
    {name: 'N1', description: "Metastasis to movable ipsilateral axillary lypmh node(s)"},
    {name: 'N2', description: "Metastasis to ipsilateral axillary lymph node(s) fixed to one another or to other structures"},
    {name: 'N3', description: "Metastasis to ipsilateral internal mammary lymph node(s)"}
];

const ms = [
    {
        name: 'M0', 
        description: 'No clinical or radiographic evidence of distant metastases',
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"433581000124101"
    },
    {
        name: 'M1', 
        description: 'Distant detectable metastases as determined by classic clinical and radiographic means and/or histologically proven larger than 0.2 mm',
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"436331000124104"
    }
    // {
    //     name: "M1a", 
    //     codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
    //     code:"436341000124109"
    // },
    // {
    //     name: "M1b", 
    //     codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
    //     code:"436321000124102"
    // }
];

const table5thEdition = [
  // N0 , N1 ,  N2  , N3
    [null, 'IIA', 'IIIA', 'IIIB'], // T0
    [null, 'IIA', 'IIIA', 'IIIB'], // T1
    ['IIA', 'IIB', 'IIIA', 'IIIB'], // T2
    ['IIB', 'IIIA', 'IIIA', 'IIIB'], // T3
    ['IIIB', 'IIIB', 'IIIB', 'IIIB'] // T4
];

// 6th Edition, p.228:
// https://cancerstaging.org/references-tools/deskreferences/Documents/AJCC6thEdCancerStagingManualPart2.pdf

// const ts6thEdition = ['Tis', 'T0', 'T1', 'T2', 'T3', 'T4']; //original array
const ts6thEdition = [
    {name: 'Tis', description: "Carcinoma in situ"},
    {name: 'T0', description: "No evidence of primary tumor"},
    {name: 'T1', description: "Tumor ≤ 20 mm in greatest dimension"},
    {name: 'T2', description: "20 mm < Tumor ≤ 50 mm in greatest dimension"},
    {name: 'T3', description: "Tumor > 50 mm in greatest dimension"},
    {name: 'T4', description: "Tumor of any size with direct extension to the chest wall and/or to the skin (ulceration or skin nodules)"}
];
// const ns6thEdition = ['N0', 'N1', 'N2', 'N3'];
const ns6thEdition = [
    {name: 'N0', description: "No regional lymph node metastasis"},
    {name: 'N1', description: "Metastasis to movable ipsilateral axillary lymph node(s)"},
    {name: 'N2', description: "Metastases in ipsilateral axillary lymph nodes fixed or matted, or in clinically apparent ipsilaterial internal mammary nodes in the absence of clinically evident axillary lymph node metastasis"},
    {name: 'N3', description: "Metastasis in ipsilateral infraclavicular lymph node(s) with or without axillary lymph node involvement, or in clinically apparent ipsilateral internal mammary lymph node(s) and in the presence of clinically evident axiillary lymph node metastasis; or metastasis in ipsilateral supraclavicular lymph node(s) with or without axillary or internal mammary node involvement"}
];
const table6thEdition = [
  // N0 , N1 ,  N2  , N3
    ['0', null, null, 'IIIC'], // Tis
    [null, 'IIA', 'IIIA', 'IIIC'], // T0
    ['I', 'IIA', 'IIIA', 'IIIC'], // T1
    ['IIA', 'IIB', 'IIIA', 'IIIC'], // T2
    ['IIB', 'IIIA', 'IIIA', 'IIIC'], // T3
    ['IIIB', 'IIIB', 'IIIB', 'IIIC'] // T4
];

// 7th Edition:
// https://cancerstaging.org/references-tools/quickreferences/Documents/BreastMedium.pdf

// const ts7thEdition = ['Tis', 'T0', 'T1', 'T2', 'T3', 'T4']; //original array
const ts7thEdition = [
    {
        name: 'Tis', 
        description: "Carcinoma in situ",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96",
        code:"44401000"
    },
    {
        name: 'T0', 
        description: "No evidence of primary tumor",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96",
        code:"433371000124106"
    },
    {
        name: 'T1', 
        description: "Tumor ≤ 1 mm in greatest dimension",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96",
        code:"369895002"
    },
    // We are currently not using these
    // {
    //     name: "T1mi", 
    //     codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
    //     code:"433381000124109"
    // },
    // {
    //     name: "T1a", 
    //     codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
    //     code:"369897005"
    // },
    // {
    //     name: "T1b", 
    //     codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
    //     code:"369898000"
    // },
    // {
    //     name: "T1c", 
    //     codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
    //     code:"433391000124107"
    // },
    {
        name: 'T2', 
        description: "20 < Tumor ≤ 50 mm in greatest dimension",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96",
        code:"369900003"
    },
    {
        name: 'T3', 
        description: "Tumor > 50 mm in greatest dimension",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96",
        code:"369901004"
    },
    {
        name: 'T4', 
        description: "Tumor of any size with direct extension to the chest wall and/or to the skin (ulceration or skin nodules)",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96",
        code:"433401000124109"
    }
];
// const ns7thEdition = ['N0', 'N1mi', 'N1', 'N2', 'N3'];
const ns7thEdition = [
    {
        name: 'N0', 
        description: "No regional lymph node metastases",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"436311000124105"
    },
    {
        name: 'N1mi', 
        description: "Micrometastases (greater than 0.2 mm and/or more than 200 cells, but none greater than 2.0 mm)",
        codeSystem: "urn:oid:2.16.840.1.113883.3.26.1.1", 
        code: "C95955"
    },
    {
        name: 'N1', 
        description: "Micrometastases; or metastases in 1–3 axillary lymph nodes; and/or in internal mammary nodes with metastases detected by sentinel lymph node biopsy but not clinically detected",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"433511000124108"
    },
    {
        name: 'N2', 
        description: "Metastases in 4–9 axillary lymph nodes; or in clinically detected internal mammary lymph nodes in the absence of axillary lymph node metastases",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"433551000124109"
    },
    {
        name: 'N3', 
        description: "Metastases in 10 or more axillary lymph nodes; or in infraclavicular (level III axillary) lymph nodes; or in clinically detected ipsilateral internal mammary lymph nodes in the presence of one or more positive level I, II axillary lymph nodes; or in more than three axillary lymph nodes and in internal mammary lymph nodes with micrometastases or macrometastases detected by sentinel lymph node biopsy but not clinically detected; or in ipsilateral supraclavicular lymph nodes",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"433431000124101"
    }
];
const table7thEdition = [
  // N0 , N1mi , N1 ,  N2  , N3
    ['0', null, null, null, 'IIIC'], // Tis
    ['0', 'IB', 'IIA', 'IIIA', 'IIIC'], // T0
    ['IA', 'IB', 'IIA', 'IIIA', 'IIIC'], // T1
    ['IIA', null, 'IIB', 'IIIA', 'IIIC'], // T2
    ['IIB', null, 'IIIA', 'IIIA', 'IIIC'], // T3
    ['IIIB', null, 'IIIB', 'IIIB', 'IIIC'] // T4
];

// stageOptions
const stageOptions = [
    {
        name: "IA",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"46333007"
    },
    {
        name: "IB",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"786005"
    },
    {
        name: "IIA",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"52774001"
    },
    {
        name: "IIB",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"17816005"
    },
    {
        name: "IIIA",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"73082003"
    },
    {
        name: "IIIB",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"64062008"
    },
    {
        name: "IIIC",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"48105005"
    },
    {
        name: "IV",
        codeSystem: "urn:oid:2.16.840.1.113883.6.96", 
        code:"2640006"
    }
];

/*
 *  Searches for stage in stageOptions in list
 *  Will return CodeableConcept object with empty strings if not found
 *  If stage found in list, function will return CodeableConcept with value, codeSystem, and displayText  
 */
exports.getStagingCodeableConcept = (possibleStage) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleStage, stageOptions);
}

/*
 *  Searches for tStage in ts7thEdition in list
 *  Will return CodeableConcept object with empty strings if not found
 *  If tStage found in list, function will return CodeableConcept with value, codeSystem, and displayText  
 */
exports.getTStageCodeableConcept = (possibleTStage) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleTStage, ts7thEdition);
}

/*
 *  Searches for nStage in ns7thEdition in list
 *  Will return CodeableConcept object with empty strings if not found
 *  If nStage found in list, function will return CodeableConcept with value, codeSystem, and displayText  
 */
exports.getNStageCodeableConcept = (possibleNStage) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleNStage, ns7thEdition);
}

/*
 *  Searches for mStage in ms in list
 *  Will return CodeableConcept object with empty strings if not found
 *  If mStage found in list, function will return CodeableConcept with value, codeSystem, and displayText  
 */
exports.getMStageCodeableConcept = (possibleMStage) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(possibleMStage, ms);
}

exports.getDescription = (dataElement) => {
    if(typeof(dataElement) !== 'string') {return null;}
    switch(dataElement.toLowerCase()) {
    case "tnmstage": 
        return "The stage of a cancer, assessed according to the standard established by American Joint Committee on Cancer (AJCC). TNM Stage Grouping categorizes the progression of cancer using the Roman Numeral system.";
    case "tumorsize":
        return "Describes the original (primary) tumor.";
    case "nodesize": 
        return "Describes the degree to which the cancer has reached nearby lymph nodes.";
    case "metastasis": 
        return "Whether or not the cancer has spread to other parts of the body.";
    case "prognosticstage":
        return "Describes the severity of the cancer based on the magnitude of the original (primary) tumor, as well as the extent to which cancer has spread in the body.";
    default: 
        return null;
    }
}

exports.getTsForEdition = (ed) => {
    switch (ed) {
        case 5:
            return ts5thEdition;
        case 6:
            return ts6thEdition;
        case 7:
            return ts7thEdition;
        default: 
            return [];
    }
}

// Returns just the names of the T values(without the tool tip text)
exports.getTsNamesForEdition = (ed) => {
    const ts = exports.getTsForEdition(ed);
    let names = [];
    ts.forEach((t) => {
        names.push(t.name);
    });
    return names;
}

exports.getNsForEdition = (ed) => {
    switch (ed) {
        case 5:
            return ns5thEdition;
        case 6:
            return ns6thEdition;
        case 7:
            return ns7thEdition;
        default: 
            return [];
    }
}

// Returns just the names of the N values(without the tool tip text)
exports.getNsNamesForEdition = (ed) => {
    const ns = exports.getNsForEdition(ed);
    let names = [];
    ns.forEach((n) => {
        names.push(n.name);
    });
    return names;
}

exports.getMsForEdition = (ed) => {
    switch (ed) {
        case 5:
        case 6:
        case 7:
            return ms;
        default: 
            return [];
    }
}

exports.getMsNamesForEdition = (ed) => {
    const ms = exports.getMsForEdition(ed);
    let names = [];
    ms.forEach((m) => {
        names.push(m.name);
    });
    return names;
}

exports.getTableForEdition = (ed) => {
    switch (ed) {
        case 5:
            return table5thEdition;
        case 6:
            return table6thEdition;
        case 7:
            return table7thEdition;
        default: 
            return [];
    }
}

exports.isValidT = (possibleT, edition=7) => {
    const possibleTValues = exports.getTsForEdition(edition);
    return possibleTValues.some((tValue) => {return tValue.name.toLowerCase() === possibleT.toLowerCase()});
}

exports.isValidN = (possibleN, edition=7) => {
    const possibleNValues = exports.getNsForEdition(edition);
    return possibleNValues.some((nValue) => {return nValue.name.toLowerCase() === possibleN.toLowerCase()});
}
exports.isValidM = (possibleM, edition=7) => {
    const possibleMValues = exports.getMsForEdition(edition);
    return possibleMValues.some((mValue) => {return mValue.name.toLowerCase() === possibleM.toLowerCase()});
}
