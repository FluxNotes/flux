import _ from 'lodash';
import FluxTumorDimensions from '../../dataaccess/mcodev0.1-datasource/model/oncology/FluxTumorDimensions';

export default function getProps(patient, condition) {

    const tumorMarkers = patient.getMostRecentTumorMarkers(condition);
    const propDict = {
        // demographics
        "demographic": {
            "age": {
                "display": "age",
                "valueType": "range",
                "range": 10,
                "value": patient.getAge()
            },
            "diagnosedAge": {
                "display": "age at diagnosis",
                "valueType": "range",
                "range": 10,
                "value": patient.getAgeAsOf(new Date(condition.diagnosisDate))
            },
            "race": {
                "display": "race",
                "valueType": "string",
                "value": patient.patient.race
            },
            "gender": {
                "display": "gender",
                "valueType": "string",
                "value": _.lowerCase(patient.patient.gender)
            }
        },
        // pathology
        "pathology": {
            "grade": {
                "display": "grade",
                "valueType": "int",
                "value": (() => {
                    const grade = condition.getMostRecentHistologicalGrade();
                    if (!grade) return null;
                    return grade.getGradeAsSimpleNumber();             
                })(),
                "reference": condition.getMostRecentHistologicalGrade()
            },
            "stage": {
                "display": "stage",
                "valueType": "string",
                "value": _safeGet(condition.getMostRecentClinicalStaging(), "stage"),
                "reference": condition.getMostRecentClinicalStaging()
            },
            "size": {
                "display": "size (mm)",
                "valueType": "int",
                "value": (() => {
                    const quantity = _safeGet(condition.getMostRecentLabResultOfEachType().find(e => { return e.constructor.name === FluxTumorDimensions.name }), "quantity")
                    return _safeGet(quantity, "number");
                })(),
                "reference": condition.getMostRecentLabResultOfEachType().find(e => { return e.constructor.name === FluxTumorDimensions.name })
            }
        },
        "medical history": {
            "ECOG": {
                "display": "ECOG Score",
                "valueType": "range",
                "range": 1,
                "value": _safeGet(condition.getMostRecentECOGPerformanceStatus(), "value"),
                "reference": condition.getMostRecentECOGPerformanceStatus()
            }
        }
    }

    if (tumorMarkers) {
        tumorMarkers.forEach((e) => {
            if (!e.receptorType) return;
            propDict.pathology[e.receptorType.split(' ').join('')] = {
                "display": e.receptorType,
                "valueType": "string",
                "value": _.lowerCase(e.status),
                "reference": e
            }
        });
    }

    return _mapProp(propDict);
}

function _safeGet(object, property) {
    if (object !== null & object !== undefined && property in object) {
        return object[property]
    } else {
        return object
    }
}

// a map of similar patient props to the patient record
function _mapProp(propDict) {
    const similarPatientProps = {}
    // categories
    for (const key of Object.keys(propDict)) {
        const potentialCategory = {
            options: {},
            selected: false,
            displayText: key
        }
        // values
        for (const prop of Object.keys(propDict[key])) {
            const option = propDict[key][prop];
            // drops option boxes that don't have 
            // a value from the patient record
            if (option.value) {
                let propEntry = {
                    selected: false,
                    displayText: option.display
                };

                if(option.reference) {
                    propEntry.reference = option.reference;
                }

                if (option.valueType === "range") {
                    propEntry.minValue = (option.value >= option.range) ? option.value - option.range : 0;
                    propEntry.maxValue = option.value + option.range
                } else {
                    propEntry.value = option.value;
                }
                potentialCategory.options[prop] = propEntry;
            }
        }
        if (Object.keys(potentialCategory.options).length > 0) {
            similarPatientProps[key] = potentialCategory;
        }
    }
    return similarPatientProps
}