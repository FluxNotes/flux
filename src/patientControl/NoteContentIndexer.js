import BaseIndexer from './BaseIndexer'

class NoteContentIndexer extends BaseIndexer {
    indexData(section, subsection, note, searchIndex, onHighlight, onClick) {
        const notesSubsection = note.signed ? 'Signed Notes' : 'In Progress Notes';
        searchIndex.addSearchableData({
            note,
            section,
            subsection: notesSubsection,
            valueTitle: 'Title',
            value: note.subject,
            onHighlight,
            onClick
        });

        searchIndex.addSearchableData({
            note,
            section,
            subsection: notesSubsection,
            valueTitle: `Content`,
            value: note.content,
            onHighlight,
            onClick
        })

        searchIndex.addSearchableData({
            note,
            section,
            subsection: notesSubsection,
            valueTitle: `Source`,
            value: note.hospital,
            onHighlight,
            onClick
        });

        if (note.signed) {
            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `Signed on`,
                value: note.signedOn,
                onHighlight,
                onClick
            });

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `Signed by`,
                value: note.signedBy,
                onHighlight,
                onClick
            });
        } else {
            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `Created on`,
                value: note.createdOn,
                onHighlight,
                onClick
            });

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `Created by`,
                value: note.createdBy,
                onHighlight,
                onClick
            });
        }
    }
}

export default NoteContentIndexer;