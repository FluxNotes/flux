import FluxTumorDimensions from '../../dataaccess/mcodev0.1-datasource/model/oncology/FluxTumorDimensions';

import _ from 'lodash';

export default function getProps(patient, condition){

    const tumorMarkers = patient.getMostRecentTumorMarkers(condition);

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
            },
        "medical history":{
            "ECOG":
                {
                    "display":"ECOG Score",
                    "valueType":"range",
                    "range":1,
                    "value":safeGet(condition.getMostRecentECOGPerformanceStatus(),"value")

                }
        }
     
        
    }

    if(tumorMarkers){
        tumorMarkers.forEach((e)=>{
            propDict.pathology[e.abbreviatedName.split(' ').join('')] = {
                "display": e.abbreviatedName,
                "valueType":"string",
                "value": _.lowerCase(e.status)
            }
        });
    }

    return mapProp(propDict);
}

function safeGet(object, property) {
    if(object !== null & object!==undefined && property in object){
        return object[property]
    }else{
        return object
    }
}

// a map of similar patient props to the patient record
function mapProp(propDict){

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
            if(!option.value){
                let propEntry = {
                    selected: false,
                    displayText: option.display,
                    value:"-"
                };
                similarPatientProps[key].options[prop] = propEntry;
            }
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
    return similarPatientProps
}