import MetadataSection from "./MetadataSection";

export default class ReviewOfSystemsSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Review of Systems",
            shortName: "ROS",
            type: "NameValuePairsOnly",
            isWide: false,
            data: [
                {
                    name: "",                   
                    itemsFunction: this.getROSmetadata,
                },
                {
                    name: "Questions",
                    itemsFunction: this.getItemListForROS,                   
                }
            ]
        };
    }

    getItemListForROS = (patient, currentConditionEntry) => {
        const ros = patient.getReviewOfSystemsMembers(currentConditionEntry);

        return ros.map((r) => {

            let name = r.observationCodeDisplayText;
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
                {   name: "Author",
                    value: {value: ros.author},
                    shortcut: null               
                },
                {   name: "Date",
                    value: {value: ros.clinicallyRelevantTime},
                    shortcut: null               
                },
            ]                    
        return result;              
    }

    getAuthorForROS = (patient) => {
        if(patient) {           
            const ros = patient.getReviewOfSystems();
            return ros.author;
        }

        return "";      
    }    
}