import BaseIndexer from './BaseIndexer';

class NameValuePairsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        data.forEach(obj => {
            searchIndex.addSearchableData({
                section,
                subsection: "",
                valueTitle: obj.name,
                value: obj.value || "Missing Data",
                onHighlight
            });
        })
    }
}

export default NameValuePairsIndexer;