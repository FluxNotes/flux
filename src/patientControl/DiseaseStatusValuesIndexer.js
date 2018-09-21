import BaseIndexer from './BaseIndexer';

class DiseaseStatusValuesIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        data.potentialDiagnosisDates.forEach(item => {
            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: item.label,
                value: item.date,
                onHighlight
            });
        });

        data.progressions.forEach(progression => {
            searchIndex.addSearchableData({
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