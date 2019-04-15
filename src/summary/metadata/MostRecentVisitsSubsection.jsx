import MetadataSection from "./MetadataSection";
import moment from 'moment';

export default class MostRecentVisitsSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Most Recent Visit",
            items: [
                {
                    name: "Date of Last Visit with You",
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
                    name: "Date of Last Visit Here",
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
                    name: "Who Last Visited Here",
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