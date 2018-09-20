import BaseIndexer from './BaseIndexer';

class NotesIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
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
            });

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `Content`,
                value: note.content,
            })

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `Source`,
                value: note.hospital,
            });

            if (note.signed) {
                searchIndex.addSearchableData({
                    note,
                    section,
                    subsection: notesSubsection,
                    valueTitle: `Signed on`,
                    value: note.signedOn,
                });

                searchIndex.addSearchableData({
                    note,
                    section,
                    subsection: notesSubsection,
                    valueTitle: `Signed by`,
                    value: note.signedBy,
                });
            } else {
                searchIndex.addSearchableData({
                    note,
                    section,
                    subsection: notesSubsection,
                    valueTitle: `Created on`,
                    value: note.createdOn,
                });

                searchIndex.addSearchableData({
                    note,
                    section,
                    subsection: notesSubsection,
                    valueTitle: `Created by`,
                    value: note.createdBy,
                });
            }
        });
    }
}

export default NotesIndexer;