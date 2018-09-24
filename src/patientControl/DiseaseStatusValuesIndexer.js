import BaseIndexer from './BaseIndexer';

class DiseaseStatusValuesIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        const sectionId = super.getStringForId(section);
        data.potentialDiagnosisDates.forEach(item => {
            const valueTitleId = super.getStringForId(item.label);
            searchIndex.addSearchableData({
                id: `${sectionId}_${valueTitleId}`,
                section,
                subsection: "",
                valueTitle: item.label,
                value: item.date,
                onHighlight
            });
        });

        data.progressions.forEach(progression => {
            const valueTitleId = super.getStringForId(progression.start_time);
            searchIndex.addSearchableData({
                id: `${sectionId}_${valueTitleId}`,
                section,
                subsection: "",
                valueTitle: progression.start_time,
                value: progression.disease_status_string,
                onHighlight
            });
        });
    }
}

export default DiseaseStatusValuesIndexer;