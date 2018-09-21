import BaseIndexer from './BaseIndexer';

class NotesIndexer extends BaseIndexer {
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
        });
    }
}

export default NotesIndexer;