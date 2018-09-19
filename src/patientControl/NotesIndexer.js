import BaseIndexer from './BaseIndexer';

class NotesIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        data.forEach(note => {
            const notesSubsection = note.signed ? 'Signed Notes' : 'In Progress Notes';

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: 'Note Title',
                value: note.subject,
            });

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `${note.subject} | Content`,
                value: note.content,
            })

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `${note.subject} | Created by`,
                value: note.createdBy,
            });

            searchIndex.addSearchableData({
                note,
                section,
                subsection: notesSubsection,
                valueTitle: `${note.subject} | Source`,
                value: note.hospital,
            });

            // If note is signed, index signedOn date else index created on date
            if (note.signed) {
                searchIndex.addSearchableData({
                    note,
                    section,
                    subsection: notesSubsection,
                    valueTitle: `${note.subject} | Signed on`,
                    value: note.signedOn,
                })
            } else {
                searchIndex.addSearchableData({
                    note,
                    section,
                    subsection: notesSubsection,
                    valueTitle: `${note.subject} | Created on`,
                    value: note.createdOn,
                });
            }
        });
    }
}

export default NotesIndexer;