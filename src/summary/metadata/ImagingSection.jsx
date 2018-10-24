import MetadataSection from './MetadataSection';

export default class ImagingSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Imaging",
            shortName: "Imaging",
            type: "Columns",
            data: [
                {
                    name: "",
                    headings: ["Imaging Procedure", "When"],
                    itemsFunction: this.getItemListForImaging,
                }
            ],
        };
    }

    getItemListForImaging = (patient, currentConditionEntry) => {
        const imagingProcedures = patient.getImagingProceduresForConditionChronologicalOrder(currentConditionEntry);

        return imagingProcedures.map(p => {
            const result = [{
                    value: p.name,
                    isUnsigned: patient.isUnsigned(p),
                    source: this.determineSource(patient, p),
            }];

            if (typeof p.occurrenceTime !== 'string') {
                result.push({
                    value: `${p.occurrenceTime.timePeriodStart} to ${p.occurrenceTime.timePeriodEnd}`,
                });
            } else {
                result.push({
                    value: p.occurrenceTime,
                });
            }

            return result;
        });
    }
}