import NoteContentIndexer from './NoteContentIndexer';

class NotesIndexer extends NoteContentIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight, onClick) {
        searchIndex.addSearchableData({
            section,
            subsection: '',
            valueTitle: 'Section',
            value: section,
        });

        searchIndex.addSearchableData({
            section,
            subsection: 'Signed Notes',
            valueTitle: 'Subsection',
            value: 'Signed Notes',
        });

        searchIndex.addSearchableData({
            section,
            subsection: 'In Progress Notes',
            valueTitle: 'Subsection',
            value: 'In Progress Notes',
        });

        data.forEach(note => {
            super.indexData(section, subsection, note, searchIndex, onHighlight, onClick);
        });
    }
}

export default NotesIndexer;