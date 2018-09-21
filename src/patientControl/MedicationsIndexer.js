import BaseIndexer from './BaseIndexer';

class MedicationsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        data.forEach(item => {
            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: `${item.medication.medication} Dosage`,
                value: `${item.medication.amountPerDose.value} ${item.medication.amountPerDose.units}`,
                onHighlight
            });

            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: "Medication",
                value: item.medication.medication,
                onHighlight
            });

            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: `${item.medication.medication} Timing`,
                value: item.medication.timingOfDoses.value,
                onHighlight
            });

            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: `${item.medication.medication} Prescribed`,
                value: item.medication.whenPrescribed,
                onHighlight
            });

            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: `${item.medication.medication} Route`,
                value: item.medication.routeIntoBody,
                onHighlight
            });

            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: `${item.medication.medication} Prescribed By`,
                value: item.medication.prescribedBy,
                onHighlight
            });
        });
    }
}

export default MedicationsIndexer;