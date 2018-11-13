import MetadataSection from "./MetadataSection";
import Lang from 'lodash'

export default class VisitReasonPostEncounterSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Visit Reason",
            shortName: "Reason",
            clinicalEvents: ["post-encounter"],
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
                                const previousEncounter = patient.getPreviousEncounter();
                                if (Lang.isUndefined(previousEncounter)) return ["No recent appointments", false];
                                return [patient.getPreviousEncounterReasonAsText(), patient.isUnsigned(previousEncounter), this.determineSource(patient, previousEncounter)] ;
                            },
                            shortcut: "@reason for previous visit"
                        }
                    ]
                }
            ]
        };
    }
}