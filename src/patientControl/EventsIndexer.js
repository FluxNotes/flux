import BaseIndexer from './BaseIndexer';

class EventsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        data.forEach(item => {
            searchIndex.addSearchableData({
                section,
                subsection,
                valueTitle: "",
                value: subsection === "Procedures" ? item.hoverText : `${item.hoverTitle}: ${item.hoverText}`,
                onHighlight
            });
        });
    }
}

export default EventsIndexer;