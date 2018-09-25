import Lang from 'lodash';
import elasticlunr from 'elasticlunr';
import Fuse from 'fuse.js';

class SearchIndex {
    constructor() {
        this._searchableData = [];
        elasticlunr.clearStopWords();
        this._index = elasticlunr(function() {
            this.addField('section');
            this.addField('subsection');
            this.addField('valueTitle');
            this.addField('value');
            this.setRef('id');
            this.saveDocument(true);
        });
        this._options = {
            keys: ['section', 'subsection', 'valueTitle', 'value'],
            id: 'id'
        };
        this._fuse = null;
    }

    get searchableData() {
        return Lang.uniqWith(this._searchableData, Lang.isEqual);
    }

    addSearchableData(data) {
        const existingDocument = this._index.documentStore.getDoc(data.id);
        if (Lang.isNull(existingDocument) || !Lang.isEqual(data, existingDocument)) {
            if (data.section === "Open Note" && data.valueTitle === "Content") {
                this._fuse = new Fuse([{
                    id: data.id,
                    content: data.value
                }], {
                    id: 'id',
                    keys: ['content'],
                    shouldSort: true,
                    includeScore: true,
                    includeMatches: true,
                    findAllMatches: true,
                    threshold: 0.6,
                    distance: data.value.length
                });
            }
            this._index.addDoc({...data});
        }
    }

    removeDataBySection(section) {
        for(let id in this._index.documentStore.docs) {
            if (this._index.documentStore.getDoc(id).section === section) {
                this.removeDataByRef(id);
            }
        }
    }

    removeDataByRef(ref) {
        this._index.removeDocByRef(ref);
    }

    search(query) {
        let suggestions = [];
        this._index.search(query, {
            fields: {
                valueTitle: {
                    expand: true
                },
                value: {
                    expand: true
                }
            }
        }).forEach(result => {
            let doc = this._index.documentStore.getDoc(result.ref);
            doc.score = result.score;
            if (doc.section === "Open Note") {
                const regex = new RegExp(query, "g");
                let contentMatches = this._fuse.search(query);
                if (contentMatches.length > 0 && contentMatches[0].matches.length > 0) {
                    contentMatches[0].matches[0].indices.forEach(([from, to]) => {
                        if (regex.exec(doc.value.substring(from, to+1).toLowerCase())) {
                            let tempDoc = Lang.cloneDeep(doc);
                            tempDoc.indices = [from, to];
                            suggestions.unshift(tempDoc);
                        }
                    })
                }
            } else {
                suggestions.push(doc);
            }
        });
        return suggestions;
    }
}

export default SearchIndex;