import Encounter from '../../model/shr/encounter/Encounter';
import moment from 'moment';
import Lang from 'lodash'
import Media from '../../model/shr/core/Media';

export default class MetadataSection {
    constructor(setForceRefresh) {
        this.setForceRefresh = setForceRefresh;
    }

    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return null;
    }

    buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty, ...sections) {
        return sections.map((section) => {
            return this.buildMetadataSection(preferencesManager, patient, condition, roleType, role, specialty, section);
        });
    }

    buildMetadataSection(preferencesManager, patient, condition, roleType, role, specialty, section) {
        if (!Lang.isFunction(section)) return section;
        let obj = new section(this.setForceRefresh);
        return obj.getMetadata(preferencesManager, patient, condition, roleType, role, specialty);    
    }

    toFirstLetterCapital = (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1);
    }

    getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, codes) {
        const tox = currentConditionEntry.getToxicitiesByCodes(codes);
        let val, unsigned, source, when;
        if (tox.length > 0) {
            val = tox[0].seriousness;
            unsigned = patient.isUnsigned(tox[0]);
            source = this.determineSource(patient, tox[0]);
            when = tox[0].metadata.lastUpdated.value;
        } else {
            val = 'None';
            unsigned = false;
            source = null;
            when = null;
        }
        return  {   value: val, 
                    isUnsigned: unsigned, 
                    source: source,
                    when: when
                };
    }

    determineSource = (patient, entry) => {
        if (entry.sourceClinicalNoteReference) {
            return {
                entryId: entry.entryInfo.entryId,
                note: entry.sourceClinicalNoteReference,
            };
        }
        
        else if (entry.value instanceof Media) {
            return {
                link: entry.value.resourceLocation.uri
            };
        }
       
        let result = "";
        if (entry.author && entry.informant && entry.author === entry.informant) {
            result += "Recorded and informed by " + entry.author;
        } else {
            if (entry.author) result += "Recorded by " + entry.author;
            if (entry.informant) result += (result.length > 0 ? " b" : "B") + "ased on information from " + entry.informant;
        }
        if (entry.relatedEncounterReference) {
            const relatedEncounter = patient.getEntryFromReference(entry.relatedEncounterReference);
            if (relatedEncounter instanceof Encounter) {
                result += (result.length > 0 ? " f" : "F") + "rom encounter on " + new moment(relatedEncounter.actionContext.occurrenceTimeOrPeriod.timePeriod.timePeriodStart.value, 'D MMM YYY HH:mm Z').format('D MMM YYY hh:mm a');
            } else {
                result += (result.length > 0 ? " f" : "F") + "rom encounter on " + new moment(relatedEncounter.expectedPerformanceTime, 'D MMM YYY HH:mm Z').format('D MMM YYY hh:mm a');
            }
        } else if (entry.lastUpdated) {
            result += (result.length > 0 ? " o" : "O") + "n " + entry.lastUpdated.format('D MMM YYY hh:mm a');
        } else if (entry.creationTime) {
            result += (result.length > 0 ? " o" : "O") + "n " + entry.creationTime.format('D MMM YYY hh:mm a');
        } else if (entry.diagnosisDate) {
            result += (result.length > 0 ? " c" : "C") + "linically recognized on " + new moment(entry.diagnosisDate, 'D MMM YYYY').format('D MMM YYYY');
        }

        return {sourceMessage:result};
    
    }
}