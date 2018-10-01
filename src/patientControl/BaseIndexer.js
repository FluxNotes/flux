import { Component } from 'react';

class BaseIndexer extends Component {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        if (subsection) {
            const sectionId = this.getStringForId(section);
            const subsectionId = this.getStringForId(subsection);
            searchIndex.addSearchableData({
                id: `${sectionId}_${subsectionId}_subsection`,
                section,
                subsection,
                valueTitle: "Subsection",
                value: subsection,
                onHighlight
            });
        }
    }

    getStringForId(s) {
        return s.toLowerCase().replace(/[.,#!$%&;:{}=\-_`~()]/g,"").replace(/ /g, '_');
    }
}

export default BaseIndexer;