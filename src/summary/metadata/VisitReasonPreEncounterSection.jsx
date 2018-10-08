import MetadataSection from "./MetadataSection";
import Lang from 'lodash'

export default class VisitReasonPreEncounterSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
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
                                if (Lang.isUndefined(nextEncounter)) return ["No upcoming appointments", false];
                                return [patient.getNextEncounterReasonAsText(), patient.isUnsigned(nextEncounter), this.determineSource(patient, nextEncounter)];
                            },
                            shortcut: "@reason for next visit"
                        }
                    ]
                }
            ]
        };
    }
}