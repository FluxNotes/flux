import BaseIndexer from './BaseIndexer';

class ValueOverTimeIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        data.forEach(item => {
            searchIndex.addSearchableData({
                section,
                subsection,
                valueTitle: subsection,
                value: `${item.start_time}: ${item[subsection]} ${item.unit}`
            })
        });
    }
}

export default ValueOverTimeIndexer;