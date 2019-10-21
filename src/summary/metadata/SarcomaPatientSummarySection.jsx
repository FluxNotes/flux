import MetadataSection from './MetadataSection';
import ActiveConditionsSubsection from './ActiveConditionsSubsection';
import MostRecentVisitsSubsection from './MostRecentVisitsSubsection';
import _ from 'lodash';

export default class SarcomaPatientSummarySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Patient Summary",
            shortName: "Patient",
            type: "NameValuePairs",
            notFiltered: true,
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                {
                    defaultTemplate: "${.Visit reason}.",
                    dataMissingTemplate: "No recent ${.Visit reason}.",
                    useDataMissingTemplateCriteria: [
                        ".Visit reason"
                    ]
                },
                {
                    defaultTemplate: "Current active conditions include ${Active Conditions}.",
                    dataMissingTemplate: "No ${active conditions}.",
                    useDataMissingTemplateCriteria: [
                        "Active Conditions"
                    ]
                },
                {
                    defaultTemplate: "You last saw this patient on ${Recent appointments.You last saw this patient}.",
                    dataMissingTemplate: "There are no recorded encounters for you with this patient.",
                    useDataMissingTemplateCriteria: [
                        "Recent appointments.You last saw this patient"
                    ]
                },
                {
                    defaultTemplate: "This patient was last seen in your facility by ${Recent appointments.Clinician who saw patient} on ${Recent appointments.Last visit to this practice}.",
                    dataMissingTemplate: "No recent visits to this facility are on record.",
                    useDataMissingTemplateCriteria: [
                        "Recent appointments.Clinician who saw patient",
                        "Recent appointments.Last visit to this practice"
                    ]
                },
            ],
            data: [
                {
                    name: "",
                    items: [
                        {
                            name: "Visit reason",
                            value: (patient, currentConditionEntry) => {
                                const nextEncounter = patient.getNextEncounter();
                                if (_.isUndefined(nextEncounter)) {
                                    return {
                                        value: "No upcoming appointments",
                                        isUnsigned: false,
                                        shortcutData: {
                                            shortcut: '@reason for next visit',
                                        }
                                    };
                                }
                                return {
                                    value: patient.getNextEncounterReasonAsText(),
                                    isUnsigned: patient.isUnsigned(nextEncounter),
                                    source: this.determineSource(patient, nextEncounter),
                                    shortcutData: {
                                        shortcut: '@reason for next visit',
                                    }
                                };
                            },
                        },
                    ]
                },
                ActiveConditionsSubsection,
                MostRecentVisitsSubsection
            ]
        };
    }
}
