import BaseIndexer from './BaseIndexer';
import Lang from 'lodash';

class ColumnIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        data.forEach(([title, valueObject]) => {
            if(Lang.isObject(valueObject)) {
                searchIndex.addSearchableData({
                    section,
                    subsection,
                    valueTitle: title.value,
                    value: valueObject ? valueObject.value[0] : "Missing Data"
                });
            }
        });
    }
}

export default ColumnIndexer;