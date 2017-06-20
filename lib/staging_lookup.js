// Breast Cancer Staging lookups

// 5th Edition, p.174:
// https://cancerstaging.org/references-tools/deskreferences/Documents/AJCC5thEdCancerStagingManual.pdf
const ts5thEdition = ['T0', 'T1', 'T2', 'T3', 'T4'];
// const ts5thEdition = [
//     {name: 'TIS', description: "Carcinoma in situ"},
//     {name: 'T0', description: "No evidence of primary tumor"},
//     {name: 'T1', description: "Tumor ≤ 20 mm in greatest dimension"},
//     {name: 'T2', description: "20 mm < Tumor ≤ 50 mm in greatest dimension"},
//     {name: 'T3', description: "Tumor > 50 mm in greatest dimension"},
//     {name: 'T4', description: "Tumor of any size with direct extension to the chest wall and/or to the skin (ulceration or skin nodules)"}
// ];
const ns5thEdition = ['N0', 'N1', 'N2', 'N3'];
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

const ts6thEdition = ['TIS', 'T0', 'T1', 'T2', 'T3', 'T4']; //original array
// const ts6thEdition = [
//     {name: 'TIS', description: "Carcinoma in situ"},
//     {name: 'T0', description: "No evidence of primary tumor"},
//     {name: 'T1', description: "Tumor ≤ 20 mm in greatest dimension"},
//     {name: 'T2', description: "20 mm < Tumor ≤ 50 mm in greatest dimension"},
//     {name: 'T3', description: "Tumor > 50 mm in greatest dimension"},
//     {name: 'T4', description: "Tumor of any size with direct extension to the chest wall and/or to the skin (ulceration or skin nodules)"}
// ];
const ns6thEdition = ['N0', 'N1', 'N2', 'N3'];
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

// const ts7thEdition = ['T1', 'T2', 'T3', 'T4']; //original array
const ts7thEdition = [
    {name: 'TIS', description: "Carcinoma in situ"},
    {name: 'T0', description: "No evidence of primary tumor"},
    {name: 'T1', description: "Tumor ≤ 1 mm in greatest dimension"},
    {name: 'T2', description: "20 < Tumor ≤ 50 mm in greatest dimension"},
    {name: 'T3', description: "Tumor > 50 mm in greatest dimension"},
    {name: 'T4', description: "Tumor of any size with direct extension to the chest wall and/or to the skin (ulceration or skin nodules)"}
];
const ns7thEdition = ['N0', 'N1MI', 'N1', 'N2', 'N3'];
// const ns7thEdition = [
//     {name: 'N0', description: "No regional lymph node metastases"},
//     {name: 'N1MI', description: "Micrometastases (greater than 0.2 mm and/or more than 200 cells, but none greater than 2.0 mm)"},
//     {name: 'N1', description: "Micrometastases; or metastases in 1–3 axillary lymph nodes; and/or in internal mammary nodes with metastases detected by sentinel lymph node biopsy but not clinically detected"},
//     {name: 'N2', description: "Metastases in 4–9 axillary lymph nodes; or in clinically detected internal mammary lymph nodes in the absence of axillary lymph node metastases"},
//     {name: 'N3', description: "Metastases in 10 or more axillary lymph nodes; or in infraclavicular (level III axillary) lymph nodes; or in clinically detected ipsilateral internal mammary lymph nodes in the presence of one or more positive level I, II axillary lymph nodes; or in more than three axillary lymph nodes and in internal mammary lymph nodes with micrometastases or macrometastases detected by sentinel lymph node biopsy but not clinically detected; or in ipsilateral supraclavicular lymph nodes"}
// ];
const table7thEdition = [
  // N0 , N1mi , N1 ,  N2  , N3
    ['0', null, null, null, 'IIIC'], // Tis
    ['0', 'IB', 'IIA', 'IIIA', 'IIIC'], // T0
    ['IA', 'IB', 'IIA', 'IIIA', 'IIIC'], // T1
    ['IIA', null, 'IIB', 'IIIA', 'IIIC'], // T2
    ['IIB', null, 'IIIA', 'IIIA', 'IIIC'], // T3
    ['IIIB', null, 'IIIB', 'IIIB', 'IIIC'] // T4
];

exports.getTsForEdition = (ed) => {
    switch (ed) {
    case 5:
        return ts5thEdition;
    case 6:
        return ts6thEdition;
    case 7:
        return ts7thEdition;
    }
    return [];
};

exports.getNsForEdition = (ed) => {
    switch (ed) {
    case 5:
        return ns5thEdition;
    case 6:
        return ns6thEdition;
    case 7:
        return ns7thEdition;
    }
    return [];
};

exports.getTableForEdition = (ed) => {
    switch (ed) {
    case 5:
        return table5thEdition;
    case 6:
        return table6thEdition;
    case 7:
        return table7thEdition;
    }
    return [];
};
