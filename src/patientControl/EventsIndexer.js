import BaseIndexer from './BaseIndexer';

class EventsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        const sectionId = super.getStringForId(section);
        const subsectionId = super.getStringForId(sectionId);
        data.forEach(item => {
            const value = subsection === "Procedures" ? item.hoverText : `${item.hoverTitle}: ${item.hoverText}`;
            searchIndex.addSearchableData({
                id: `${sectionId}_${subsectionId}_${super.getStringForId(value)}`,
                section,
                subsection,
                valueTitle: "",
                value,
                onHighlight
            });
        });
    }
}

export default EventsIndexer;