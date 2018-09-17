import BaseIndexer from './BaseIndexer';

class NotesIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex) {
        data.forEach(note => {
            const notesSubsection = note.signed ? 'Signed Notes' : 'In Progress Notes';

            searchIndex.addSearchableData({
                section,
                subsection: notesSubsection,
                valueTitle: 'Note Title',
                value: note.subject,
            });

            searchIndex.addSearchableData({
                section,
                subsection: notesSubsection,
                valueTitle: `${note.subject} | Created by`,
                value: note.createdBy,
            });

            searchIndex.addSearchableData({
                section,
                subsection: notesSubsection,
                valueTitle: `${note.subject} | Source`,
                value: note.hospital,
            });

            searchIndex.addSearchableData({
                section,
                subsection: notesSubsection,
                valueTitle: `${note.subject} | Created on`,
                value: note.signedOn,
            });
        });
    }
}

export default NotesIndexer;