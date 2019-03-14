import BaseIndexer from './BaseIndexer';

class ReviewOfSystemsValuesIndexer extends BaseIndexer {
    indexData(section, subsection, data, searchIndex, onHighlight) {
        super.indexData(section, subsection, data, searchIndex, onHighlight);
        const sectionId = super.getStringForId(section);

        data.forEach((item) => {
            const dateId = super.getStringForId(item.date);
            searchIndex.addSearchableData({
                id: `${sectionId}_${dateId}`,
                section,
                subsection: "",
                valueTitle: 'Date',
                value: item.date,
                onHighlight
            });

            item.questions.forEach((question) => {
                const questionId = super.getStringForId(question.name);
                searchIndex.addSearchableData({
                    id: `${sectionId}_${dateId}_${questionId}`,
                    section,
                    subsection: "",
                    valueTitle: question.name,
                    value: question.value,
                    date: item.date,
                    onHighlight
                });
            });
        });
    }
}

export default ReviewOfSystemsValuesIndexer;