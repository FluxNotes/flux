import MetadataSection from "./MetadataSection";

export default class DiseaseStatusSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Disease Status",
            shortName: "Disease",
            clinicalEvents: ["pre-encounter"],
            type: "DiseaseStatusValues",
            data: [
                {
                    name: "",
                    itemsFunction: this.getProgressions,
                }
            ]
        };
    }

    getProgressions = (patient, condition, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const progressions = patient.getProgressionsForConditionChronologicalOrder(condition);

        const processedProgressions = progressions.map((prog, i) => {
            const status = prog.status;
            const code = prog.statusAsCode
            const start_time = prog.asOfDate;
            const evidence = prog.evidence.join(', ');
            return {
                "start_time" : start_time,
                "disease_status_code" : code,
                "disease_status_string": status,
                "evidence": evidence,
            };
        });

        const potentialDiagnosisDates = condition.getPotentialDiagnosisDates()
        return {
            progressions: processedProgressions, 
            potentialDiagnosisDates: potentialDiagnosisDates,
        };
    }
}