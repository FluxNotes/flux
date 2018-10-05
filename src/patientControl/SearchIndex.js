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
                    this.tokenizer.separator = /\s+/;

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
        let openNoteSuggestions = [];
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
                const contentMatches = this._lunr.query(function(q) {
                    const terms = query.split(' ');
                    terms.forEach(term => {
                        if(term === '') return;
                        q.term(term, { usePipeline: true });
                        q.term(`${term}*`, { usePipeline: false });
                        q.term(term, { usePipeline: false, editDistance: 1 });
                    });
                });

                if (contentMatches[0]) {
                    const positions = Lang.sortBy(Lang.flatten(Lang.values(contentMatches[0].matchData.metadata).map(val => val.content.position)), t => t[0]);
                    // combine any indices that are continuous
                    positions.forEach((pos, i) => {
                        let currentIdx = [...pos, 0];
                        let numSwapped = 1;
                        for(let j = i+1; j < positions.length; j++) {
                            const next = positions[j];
                            if (currentIdx[0] + currentIdx[1] + 1 === next[0]) {
                                currentIdx[1] += next[1] + 1;
                                numSwapped++;
                            }
                        }
                        currentIdx[2] += numSwapped;
                        positions.splice(i, numSwapped, currentIdx);
                    });
                    positions.forEach(([startIdx, length, combinedWords]) => {
                        let tempDoc = Lang.cloneDeep(doc);
                        tempDoc.score += combinedWords;
                        tempDoc.indices = [startIdx, startIdx+length];
                        openNoteSuggestions.push(tempDoc);
                    });
                }
            } else {
                suggestions.push(doc);
            }
        });
        // Present open note suggestions first in order of most words matched, then regular suggestions
        return Lang.sortBy(openNoteSuggestions, s => -s.score).concat(suggestions);
    }

    escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
}

export default SearchIndex;