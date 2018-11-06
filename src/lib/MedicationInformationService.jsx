import codeableConceptUtils from '../model/CodeableConceptUtils.jsx';

// List of medications 
// (Note: this is currently used only by the note parser to look up active medications when parsing a #stop medication note)
// Add more medications here as needed
const medications = [
    {
        name: 'ibuprofen 600mg tablet', 
        description: "",
        code: "316077",
        codeSystem: ""
    }
];    

exports.getCodeableConceptFromName = (name) => {
    return codeableConceptUtils.getCodeableConceptFromOptions(name, medications);
}

exports.getRangeValues = (medication, units) => {
    if (typeof(medication) !== 'string') {return null;}

    if (!units) return null;
    const switchKey = medication + "_" + units;
    
    switch(switchKey) {
        case "42512_10^9/L":
            return {
                lowerValue: 1,
                upperValue: 10,
                typicalValue: 8
            };

        case "3002_mg/kg":
            return {
                lowerValue: 5,
                upperValue: 30,
                typicalValue: 11
            };

        case "10324_mg":
            return {
                lowerValue: 1,
                upperValue: 5,
                typicalValue: 2
            };

        case "72965_mg":
            return {
                lowerValue: 1,
                upperValue: 7,
                typicalValue: 2
            };

        case "202421_mg":
            return {
                lowerValue: 1,
                upperValue: 6,
                typicalValue: 3
            };

        case "262105_mg":
            return {
                lowerValue: 1,
                upperValue: 1.5,
                typicalValue: 1.3
            };

        case "56946_mg/m2":
            return {
                lowerValue: 50,
                upperValue: 200,
                typicalValue: 80
            };
        case "29046_tablet":
            return {
                lowerValue: 1,
                upperValue: 2,
                typicalValue: 1
            };
        case "316077_tablet":
            return {
                lowerValue: 0,
                upperValue: 1,
                typicalValue: 1
            };
        case "310891_g":
            return {
                lowerValue: 0,
                upperValue: 10,
                typicalValue: 1
            };
        case "224905_mg/kg":
            return {
                lowerValue: 2,
                upperValue: 8,
                typicalValue: 4
            };
        case "C3215040_tablet":
            return {
                lowerValue: 0,
                upperValue: 1,
                typicalValue: 1
            }
        case "C0715002_tablet":
            return {
                lowerValue: 0,
                upperValue: 1,
                typicalValue: 1
            }
            
        default: {
            console.warn(switchKey);
            return null;
        }

    }
}

