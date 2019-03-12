import MetadataSection from "./MetadataSection";
import Lang from 'lodash'

export default class RecentToxicitiesSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Recent Toxicities",
            itemsFunction: this.getItemListForToxicities
        };
    }

    // Returns toxicites in the correct format to be displayed in the summary section
    getItemListForToxicities = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];

        const toxicities = currentConditionEntry.getMostRecentToxicities();
       
        return toxicities.map((l, i) => {
            const value = this.getValue(l, patient);
            const name = `${l.type}`;
            return {    name: name,
                        value: value,
                        shortcut: null
                };
        });    
    }

    // Returns the value for the toxicity which includes grade, unsigned, source, and date
    getValue = (tox, patient) => {
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