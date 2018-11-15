import Lang from 'lodash';
import BaseIndexer from './BaseIndexer';

class NameValuePairsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        const sectionId = super.getStringForId(section);
        let value;
        data.forEach(obj => {
            if (Lang.isObject(obj.value)) {
                value = obj.value.value || "Missing Data";
            } else {
                value = obj.value || "Missing Data";
            }
            searchIndex.addSearchableData({
                id: `${sectionId}_${super.getStringForId(obj.name)}`,
                section,
                subsection: "",
                valueTitle: obj.name,
                value,
                onHighlight
            });
        })
    }
}

export default NameValuePairsIndexer;