import BaseIndexer from './BaseIndexer';

class NameValuePairsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        const sectionId = super.getStringForId(section);
        data.forEach(obj => {
            searchIndex.addSearchableData({
                id: `${sectionId}_${super.getStringForId(obj.name)}`,
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