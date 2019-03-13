import MetadataSection from './MetadataSection';
import moment from 'moment';

export default class ReviewOfSystemsSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Review of Systems",
            shortName: "ROS",
            type: "ReviewOfSystemsValues",
            isWide: false,
            notFiltered: true,
            data: [
                {
                    name: "",
                    itemsFunction: this.getROSmetadata,
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

            const newValue = r.value ? 'positive' : 'negative';

            let result = 
                {   name: upperCaseName,
                    value: newValue,
                    shortcut: null
                };

            return result;
        });
    }

    getROSmetadata = (patient, currentConditionEntry) => {
        const ros = patient.getReviewOfSystems();

        // TO DO REMOVE THESE LATER
        const result = [
            {
                date: ros.relevantTime,
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '18 Apr 1993',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '15 Jul 1924',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '1 Oct 2001',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '15 Nov 1999',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '30 Mar 2009',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '31 Mar 2009',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '1 Apr 2009',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            },
            {
                date: '2 Apr 2009',
                questions: this.getSortedListForROS(patient, currentConditionEntry)
            }
        ]

        return this.sortByDate(result);
    }

    // This methods takes in the ROS metadata array and sorts alphabetically by name
    sortByDate = (rosArray) => {
        return rosArray.sort(function(a, b) {
            const a_time = new moment(a.date, "D MMM YYYY");
            const b_time = new moment(b.date, "D MMM YYYY");
    
            if (a_time > b_time) return -1;
            else if (a_time < b_time) return 1;
            return 0;
        });
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
        });
    }
}