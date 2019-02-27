import FluxTumorDimensions from '../../dataaccess/mcodev0.1-datasource/model/oncology/FluxTumorDimensions';
import FluxBreastCancerDisorderPresent from '../../model/brca/FluxBreastCancerDisorderPresent';
import _ from 'lodash';

export default function getProps(patient, condition){
    // basic info on the condition
    let cancerType = 0
    if (condition instanceof FluxBreastCancerDisorderPresent) {
        cancerType=1;
    }
    const propDict = {
        // demographics
        "demographic":
            {
                "age":
                        {
                            "display": "age",
                            "valueType": "range",
                            "range":10,
                            "value":patient.getAge()
                        },
                "diagnosedAge":
                        {
                            "display": "age at diagnosis",
                            "valueType":"range",
                            "range":10,
                            "value":patient.getAgeAsOf(new Date(condition.diagnosisDate))
                        },
                "race":
                        {
                            "display": "race",
                            "valueType":"string",
                            "value": patient.patient.race
                        },
                "gender":
                        {
                            "display":"gender",
                            "valueType":"string",
                            "value": _.lowerCase(patient.patient.gender)
                        }
            },

        // pathology
        "pathology":
            {
                "ER":
                        {
                            "display":"ER",
                            "valueType":"string",
                            "value": _.lowerCase(safeGet(condition.getMostRecentERReceptorStatus(),"status"))
                        },
                "PR":
                        {
                            "display":"PR",
                            "valueType":"string",
                            "value": _.lowerCase(safeGet(condition.getMostRecentPRReceptorStatus(),"status"))
                        },
                "HER2":
                        {
                            "display":"HER2",
                            "valueType":"string",
                            "value": _.lowerCase(safeGet(condition.getMostRecentHER2ReceptorStatus(),"status"))
                        },
                "grade":
                        {
                            "display":"grade",
                            "valueType":"int",
                            "value": condition.getMostRecentHistologicalGrade().getGradeAsSimpleNumber()
                        },
                "stage":
                        {
                            "display":"stage",
                            "valueType":"string",
                            "value": safeGet(condition.getMostRecentClinicalStaging(),"stage")
                        },
                "size":
                        {
                            "display":"size (mm)",
                            "valueType":"int",
                            "value":(()=>{
                                const quantity = safeGet(condition.getMostRecentLabResultOfEachType().find(e=>{return e.constructor.name === FluxTumorDimensions.name}),"quantity")
                                return safeGet(quantity,"number");
                        })()
                }   
            }
     
        
    }
    return mapProp(propDict);
}

function safeGet(object, property) {
    if(object !== null && property in object){
        return object[property]
    }else{
        return object
    }
}

// a map of similar patient props to the patient record
function mapProp(propDict){
    console.log(propDict);
    const similarPatientProps = {}
    // categories
    for (const key of Object.keys(propDict)) {
        similarPatientProps[key] = {
            options:{},
            selected:false,
            displayText: key
        }
        // values
        for (const prop of Object.keys(propDict[key])){
            const option = propDict[key][prop];
            // drops option boxes that don't have 
            // a value from the patient record
            if(option.value){
                let propEntry = {
                    selected: false,
                    displayText: option.display
                };
                if(option.valueType==="range") {
                    propEntry.minValue = (option.value >= option.range)?option.value-option.range:0;
                    propEntry.maxValue = option.value + option.range
                }else{
                    propEntry.value = option.value;
                }
                similarPatientProps[key].options[prop] = propEntry;
            }
            
        }
    }
    console.log(similarPatientProps);
    return similarPatientProps
}