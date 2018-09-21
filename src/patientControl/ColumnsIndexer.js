import BaseIndexer from './BaseIndexer';

class ColumnIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight, subsectionDescriptor) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        if (subsectionDescriptor.headings) {
            // true tabular where each item is a column of data
            // add each column value using title of the column heading
            data.forEach((row) => {
                row.forEach((col, columnNumber) => {
                    const vtPrefix = columnNumber === 0 ? '' : `${row[0].value} `; 
                    searchIndex.addSearchableData({
                        section,
                        subsection,
                        valueTitle: `${vtPrefix}${subsectionDescriptor.headings[columnNumber]}`,
                        value: col.value || "Missing Data",
                        onHighlight
                    });    
                });
            });
        } else {
            // ones that are really just a name and value so more of a layout than columns/tabular
            // add each row with 1st column as title and 2nd column as value
            data.forEach((row) => {
                if (row.length < 2) {
                    const [ valueObject ] = row;
                    searchIndex.addSearchableData({
                        section,
                        subsection,
                        valueTitle: subsection,
                        value: valueObject.value || "Missing Data",
                        onHighlight
                    });
                } else {
                    const [ title, valueObject ] = row;
                    searchIndex.addSearchableData({
                        section,
                        subsection,
                        valueTitle: title.value,
                        value: valueObject.value || "Missing Data",
                        onHighlight
                    });
                }
            });
        }
    }
}

export default ColumnIndexer;