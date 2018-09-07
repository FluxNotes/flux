import BaseIndexer from './BaseIndexer';

class EventsIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        data.forEach(item => {
            searchIndex.addSearchableData({
                section,
                subsection,
                valueTitle: "",
                value: subsection === "Procedures" ? item.hoverText : `${item.hoverTitle}: ${item.hoverText}`
            });
        });
    }
}

export default EventsIndexer;