import BaseIndexer from './BaseIndexer';

class ClusterPointsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        searchIndex.addSearchableData({
            section,
            subsection: "",
            valueTitle: "",
            value: ""
        });
    }
}

export default ClusterPointsIndexer;