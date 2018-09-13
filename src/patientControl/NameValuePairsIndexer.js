import BaseIndexer from './BaseIndexer';

class NameValuePairsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        super.indexData(section, subsection, data, searchIndex);
        data.forEach(obj => {
            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: obj.name,
                value: obj.value || "Missing Data"
            });
        })
    }
}

export default NameValuePairsIndexer;