import { Component } from 'react';

class BaseIndexer extends Component {
    indexData(section, subsection, data, searchIndex) {
        if (subsection) {
            searchIndex.addSearchableData({
                section,
                subsection,
                valueTitle: "subsection",
                value: subsection
            });
        }
    }
}

export default BaseIndexer;