import BaseIndexer from './BaseIndexer';

class DiseaseStatusValuesIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        super.indexData(section, subsection, data, searchIndex);
        data.potentialDiagnosisDates.forEach(item => {
            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: item.label,
                value: item.date
            });
        });

        data.progressions.forEach(progression => {
            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: progression.start_time,
                value: progression.status
            });
        });
    }
}

export default DiseaseStatusValuesIndexer;