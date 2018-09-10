import { Component } from 'react';

class BaseIndexer extends Component {
    indexData(section, subsection, data, searchIndex) {
        searchIndex.addSearchableData({
            section,
            subsection,
            valueTitle: "subsection",
            value: subsection
        });
    }
}

export default BaseIndexer;