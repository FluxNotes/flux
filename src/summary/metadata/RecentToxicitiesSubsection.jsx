import MetadataSection from "./MetadataSection";
import Lang from 'lodash'
// import moment from 'moment';

export default class RecentToxicitiesSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Recent Toxicities",
            itemsFunction: this.getItemListForToxicities
        };
    }

    getItemListForToxicities = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];

        const toxicities = currentConditionEntry.getMostRecentToxicities();
        console.log(toxicities);

        
        return toxicities.map((l, i) => {
            // const value = `${l.seriousness}`;
            const value = this.getValue(l, patient);
            const name = `${l.type}`;
            return {    name: name,
                        value: value,
                        shortcut: null
                };
        });    



        // labResultsInOrder contains all lab results within a specified number of months from today
        //const labResultsInOrder = currentConditionEntry.getLabResultsChronologicalOrder(moment().subtract(numberOfMonths, 'months'));
        // const labResultsInOrder = currentConditionEntry.getMostRecentLabResultOfEachType();

        // return labResultsInOrder.map((l, i) => {
        //     const value = `${l.quantity.number} ${l.quantity.unit} (${l.relevantTime})`;
        //     const name = `${l.name}`;
        //     return {    name: name,
        //                 value: {value},
        //                 shortcut: null
        //         };
        // });
    }

    getValue = (tox, patient) => {

        console.log("in here tox");
        console.log(tox);
        let val, unsigned, source, when;
            
                val = tox.seriousness;
                unsigned = patient.isUnsigned(tox);
                source = this.determineSource(patient, tox);
                when = tox.metadata.lastUpdated.value;
            
            return  {   value: val, 
                        isUnsigned: unsigned, 
                        source: source,
                        when: when
                    };

    }
}