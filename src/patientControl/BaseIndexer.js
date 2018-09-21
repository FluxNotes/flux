import { Component } from 'react';

class BaseIndexer extends Component {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        if (subsection) {
            searchIndex.addSearchableData({
                section,
                subsection,
                valueTitle: "Subsection",
                value: subsection,
                onHighlight
            });
        }
    }
}

export default BaseIndexer;