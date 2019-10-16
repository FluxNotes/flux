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
                    defaultTemplate: "This patient was last seen in your facility by ${Most Recent Visit.Who Last Visited Here} on ${Most Recent Visit.Date of Last Visit Here}.",
                    dataMissingTemplate: "No recent visits to this facility are on record.",
                    useDataMissingTemplateCriteria: [
                        "Most Recent Visit.Who Last Visited Here",
                        "Most Recent Visit.Date of Last Visit Here"
                    ]
                }
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
