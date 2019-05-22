import MetadataSection from "./MetadataSection";

export default class ProceduresSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Procedures",
            shortName: "Procedures",
            type: "Columns",
            data: [
                {
                    name: "",
                    headings: ["Procedure", "When", "Clinician"],
                    itemsFunction: this.getItemListForProcedures
                }
            ]
        };
    }

    getItemListForProcedures = (patient, currentConditionEntry) => {
        const procedures = patient.getProceduresForConditionChronologicalOrder(currentConditionEntry);
        return procedures.map((p, i) => {
            // Ensure that each array for a given data type (e.g. Procedures in this case) contains the same number of elements (e.g. here it is 2 elements).
            // Or add to the end of the array, that looks okay too
            let result = [
                {   value: p.name,
                    isUnsigned: patient.isUnsigned(p),
                    source:  this.determineSource(patient, p),
                    shortcutData: {
                        shortcut: '@procedure',
                        entryId: p.entryInfo.entryId,
                    }
                }];
            if (typeof p.occurrenceTime !== 'string') {
                result.push(
                    {   value: p.occurrenceTime.timePeriodStart + " to " + p.occurrenceTime.timePeriodEnd }
                );
            } else {
                result.push(
                    {   value: p.occurrenceTime }
                );
            }
            result.push({   value: p.expectedPerformer,
                isUnsigned: patient.isUnsigned(p),
                source:  this.determineSource(patient, p) });

            return result;
        });
    }
}