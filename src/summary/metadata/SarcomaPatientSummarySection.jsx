import MetadataSection from "./MetadataSection";
import MostRecentVisitsSubsection from './MostRecentVisitsSubsection';
import Lang from 'lodash';

export default class SarcomaPatientSummarySection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Patient Summary",
            shortName: "Patient",
            type: "NameValuePairs",
            notFiltered: true,
            /*eslint no-template-curly-in-string: "off"*/
            narrative: [
                // keep name stuff here? idk
                // {
                //     defaultTemplate: "${Reason.Reason}",
                //     dataMissingTemplate: "No recent ${Reason.Reason}",
                //     useDataMissingTemplateCriteria: [
                //         "Reason.Reason"
                //     ]
                // },
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
                                if (Lang.isUndefined(nextEncounter)) {
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
                // active conditions go here
                MostRecentVisitsSubsection
            ]
        };
    }

    getItemListForConditions = (patient, currentConditionEntry, subsection) => {
        const conditions = patient.getActiveConditions();
        return conditions.map((c, i) => {
            return [
                {    value: c.type,
                    isUnsigned: patient.isUnsigned(c),
                    source: this.determineSource(patient, c),
                    shortcut: subsection.shortcut
                },
                {   value: c.diagnosisDate
                },
                {   value: c.bodySite
                }
            ];
        });
    }
}
