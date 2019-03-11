import MetadataSection from "./MetadataSection";

export default class ReviewOfSystemsSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Review of Systems",
            shortName: "ROS",
            type: "NameValuePairsOnly",
            isWide: false,
            notFiltered: true,
            data: [
                {
                    name: "",                   
                    itemsFunction: this.getROSmetadata,
                },
                {
                    name: "Questions",
                    itemsFunction: this.getSortedListForROS,  
                }
            ]
        };
    }

    getSortedListForROS = (patient, currentConditionEntry) => {
        let resultArray = this.getItemListForROS(patient, currentConditionEntry);
       
        // Separate yes and no answers into 2 arrays
        let yesArray  =[];
        let noArray =[];
        
        for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i].value.value === "No") {
                noArray.push(resultArray[i]);
            }
            else {
                yesArray.push(resultArray[i]);
            }
        }

        // Sort yes and no arrays alphabetically
        let yesArraySorted = this.sortAlphabetically(yesArray);
        let noArraySorted = this.sortAlphabetically(noArray);

        // Combine yes and no arrays with the yes answers displayed first
        let sortedResultArray = yesArraySorted.concat(noArraySorted);
       
        return sortedResultArray;
    }

    getItemListForROS = (patient, currentConditionEntry) => {
        const ros = patient.getReviewOfSystemsMembers(currentConditionEntry);

        return ros.map((r) => {

            let name = r.questionText;
            let upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);

            const newValue = r.value ? "Yes" : "No";

            let result = 
                {   name: upperCaseName,
                    value: {value: `${newValue}`},
                    shortcut: null               
                };    
        
            return result;
        });
    }

    getROSmetadata = (patient) => {
        const ros = patient.getReviewOfSystems();

        let result = [
            {   name: "Date",
                value: {value: ros.relevantTime},
                shortcut: null
            }
        ]
        return result;
    }

    // This methods takes in the ROS array and sorts alphabetically by name
    sortAlphabetically = (resultArray) => {
        return resultArray.sort(function(a, b) {
            if(a.name < b.name) { 
                return -1; 
            }
            if(a.name > b.name) { 
                return 1; 
            }
            return 0;
        }) 
    }
}