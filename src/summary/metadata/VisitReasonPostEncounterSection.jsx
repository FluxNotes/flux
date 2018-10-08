import MetadataSection from "./MetadataSection";

export default class VisitReasonPostEncounterSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Visit Reason",
            shortName: "Reason",
            clinicalEvents: ["post-encounter"],
            type: "NarrativeOnly",
            narrative: [
                {
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