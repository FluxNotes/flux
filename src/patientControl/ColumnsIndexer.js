import BaseIndexer from './BaseIndexer';

class ColumnIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight, subsectionDescriptor) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        const sectionId = super.getStringForId(section);
        const subsectionId = super.getStringForId(subsection);
        if (subsectionDescriptor.headings) {
            // true tabular where each item is a column of data
            // add each column value using title of the column heading
            data.forEach((row, rowNumber) => {
                row.forEach((col, columnNumber) => {
                    const vtPrefix = columnNumber === 0 ? '' : `${row[0].value} `; 
                    searchIndex.addSearchableData({
                        id: `${sectionId}_${subsectionId}_${rowNumber}_${columnNumber}`,
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
                    const value = valueObject.value ? valueObject.value.value : 'Missing Data';
                    searchIndex.addSearchableData({
                        id: `${sectionId}_${subsectionId}_${subsectionId}`,
                        section,
                        subsection,
                        valueTitle: subsection,
                        value: value || 'Missing Data',
                        onHighlight
                    });
                } else {
                    const [ title, valueObject ] = row;
                    const valueTitleId = super.getStringForId(title.value);
                    const value = valueObject.value ? valueObject.value.value : 'Missing Data';
                    searchIndex.addSearchableData({
                        id: `${sectionId}_${valueTitleId}`,
                        section,
                        subsection,
                        valueTitle: title.value,
                        value: value || 'Missing Data',
                        onHighlight
                    });
                }
            });
        }
    }
}

export default ColumnIndexer;