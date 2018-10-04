import Lang from 'lodash';
import elasticlunr from 'elasticlunr';
import lunr from 'lunr';

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
        this._lunr = null;
    }

    get searchableData() {
        return Lang.uniqWith(this._searchableData, Lang.isEqual);
    }

    addSearchableData(data) {
        const existingDocument = this._index.documentStore.getDoc(data.id);
        if (Lang.isNull(existingDocument) || !Lang.isEqual(data, existingDocument)) {
            if (data.section === "Open Note" && data.valueTitle === "Content") {
                this._lunr = lunr(function() {
                    this.metadataWhitelist = ['position']
                    this.ref('id');
                    this.field('content');
                    this.pipeline.remove(lunr.stopWordFilter);

                    this.add({
                        id: data.id,
                        content: data.value
                    });
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

    hasDocument(ref) {
        return this._index.documentStore.hasDoc(ref);
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
            // Search the content of the open note
            if (doc.section === "Open Note") {
                let contentMatches = this._lunr.search(query);
                if (contentMatches[0]) {
                    const positions = Lang.sortBy(Lang.flatten(Lang.values(contentMatches[0].matchData.metadata).map(val => val.content.position)), t => t[0]);
                    // combine any indices that are continuous
                    positions.forEach((pos, i) => {
                        let currentIdx = [...pos];
                        let numSwapped = 1;
                        for(let j = i+1; j < positions.length; j++) {
                            const next = positions[j];
                            if (currentIdx[0] + currentIdx[1] + 1 === next[0]) {
                                currentIdx[1] += next[1] + 1;
                                numSwapped++;
                            }
                        }
                        positions.splice(i, numSwapped, currentIdx);
                    });
                    positions.forEach(([startIdx, length]) => {
                        let tempDoc = Lang.cloneDeep(doc);
                        tempDoc.indices = [startIdx, startIdx+length];
                        suggestions.unshift(tempDoc);
                    });
                }
            } else {
                suggestions.push(doc);
            }
        });
        return suggestions;
    }

    escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
}

export default SearchIndex;