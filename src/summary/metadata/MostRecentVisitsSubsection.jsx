import MetadataSection from "./MetadataSection";
import moment from 'moment';

export default class MostRecentVisitsSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Recent appointments",
            items: [
                {
                    name: "You last saw this patient",
                    value: (patient, currentConditionEntry, user) => {
                        const encounters = patient.getPreviousEncountersChronologicalOrder();
                        const filteredEncounters = encounters.filter(e => e.practitioner === user.getUserName());

                        if (filteredEncounters.length === 0) return { value: null, isUnsigned: false };
                        const mostRecentFilteredEncounter = filteredEncounters.slice(-1)[0];
                        const expectedPerformanceTime = new moment(mostRecentFilteredEncounter.expectedPerformanceTime, 'D MMM YYYY').format('D MMM YYYY');
                        return  {   value: expectedPerformanceTime,
                            isUnsigned: patient.isUnsigned(mostRecentFilteredEncounter),
                            source: this.determineSource(patient, mostRecentFilteredEncounter)
                        };
                    }
                },
                {
                    name: "Last visit to this practice",
                    value: (patient, currentConditionEntry, user) => {
                        const encounters = patient.getPreviousEncountersChronologicalOrder();
                        const filteredEncounters = encounters.filter(e => e.provider === user.provider);

                        if (filteredEncounters.length === 0) return { value: null, isUnsigned: false };
                        const mostRecentFilteredEncounter = filteredEncounters.slice(-1)[0];
                        const expectedPerformanceTime = new moment(mostRecentFilteredEncounter.expectedPerformanceTime, 'D MMM YYYY').format('D MMM YYYY');
                        return  {   value: expectedPerformanceTime,
                            isUnsigned: patient.isUnsigned(mostRecentFilteredEncounter),
                            source: this.determineSource(patient, mostRecentFilteredEncounter)
                        };
                    }
                },
                {
                    name: "Clinician who saw patient",
                    value: (patient, currentConditionEntry, user) => {
                        const encounters = patient.getPreviousEncountersChronologicalOrder();
                        const filteredEncounters = encounters.filter(e => e.provider === user.provider);

                        if (filteredEncounters.length === 0) return { value: null, isUnsigned: false };
                        const mostRecentFilteredEncounter = filteredEncounters.slice(-1)[0];
                        return  {   value: mostRecentFilteredEncounter.practitioner,
                            isUnsigned: patient.isUnsigned(mostRecentFilteredEncounter),
                            source: this.determineSource(patient, mostRecentFilteredEncounter)
                        };
                    }
                }
            ]
        };
    }

}