import MetadataSection from "./MetadataSection";
import Lang from 'lodash'

export default class VisitReasonPreEncounterSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Visit Reason",
            shortName: "Reason",
            clinicalEvents: ["pre-encounter"],
            type: "NarrativeOnly",
            narrative: [
                {
                    /* eslint no-template-curly-in-string: off */
                    defaultTemplate: "${Reason.Reason}",
                    dataMissingTemplate: "No recent ${Reason.Reason}",
                    useDataMissingTemplateCriteria: [
                        "Reason.Reason"
                    ]
                },
            ],
            data: [
                {
                    name: "Reason",
                    items: [
                        {
                            name: "Reason",
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
                        }
                    ]
                }
            ]
        };
    }
}