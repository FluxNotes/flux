import BaseIndexer from './BaseIndexer';

class ValueOverTimeIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        const sectionId = super.getStringForId(section);
        const subsectionId = super.getStringForId(subsection);
        data.forEach(item => {
            const value = `${item.start_time}: ${item[subsection]} ${item.unit}`;
            searchIndex.addSearchableData({
                id: `${sectionId}_${subsectionId}_${super.getStringForId(value)}`,
                section,
                subsection,
                valueTitle: subsection,
                value: `${item.start_time}: ${item[subsection]} ${item.unit}`
            })
        });
    }
}

export default ValueOverTimeIndexer;