import NoteContentIndexer from './NoteContentIndexer';

class NotesIndexer extends NoteContentIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight, onClick) {
        const noteSectionId = super.getStringForId(section);
        searchIndex.addSearchableData({
            id: noteSectionId,
            section,
            subsection: '',
            valueTitle: 'Section',
            value: section,
        });

        searchIndex.addSearchableData({
            id: `${noteSectionId}_signed_notes`,
            section,
            subsection: 'Signed Notes',
            valueTitle: 'Subsection',
            value: 'Signed Notes',
        });

        searchIndex.addSearchableData({
            id: `${noteSectionId}_in_progress_notes`,
            section,
            subsection: 'In Progress Notes',
            valueTitle: 'Subsection',
            value: 'In Progress Notes',
        });

        data.forEach(note => {
            const subsectionId = note.signed ? 'signed_notes' : 'in_progress_notes';
            if (searchIndex.hasDocument(`open_note_${subsectionId}_content_${note.entryInfo.entryId.id}`)) return;
            super.indexData(section, subsection, note, searchIndex, onHighlight, onClick);
        });
    }
}

export default NotesIndexer;
