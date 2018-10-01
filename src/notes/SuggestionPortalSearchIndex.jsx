import Fuse from 'fuse.js';
import Lang from 'lodash';

class SuggestionPortalSearchIndex { 
    constructor(list, initialChar, shortcutManager) { 
        this.initialChar = initialChar;
        this.shortcutManager = shortcutManager;
        // Metdata common to all suggestionSearchIndexs
        this.fuseOptions = {
            includeScore: true,
            includeMatches: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "suggestion"
            ]
        }
        this.shortcutsFuse = new Fuse([], this.fuseOptions);
    }

    // Takes a contextmanager and uses the current context to update it's current shortcutsFuse Index
    updateIndex = (contextManager) =>  { 
        // Every kind of suggestion portal index is going to be different, so we don't have a common way of building an index.
    }

    sortSuggestionsAlphabetically = (a, b) => {
        if(a.data.score > b.data.score) {
            return 1;
        }
        if(a.data.score < b.data.score){
            return -1;
        } 
        if(a.item.suggestion.toLowerCase() > b.item.suggestion.toLowerCase()){
            return 1;
        } 
        if(a.item.suggestion.toLowerCase() < b.item.suggestion.toLowerCase()){
            return -1;
        } 
        return 0;
    }

    // Follows the 
    search = (searchText) => {
        if (Lang.isUndefined(searchText)) return [];

        const maxLength = 25;
        const searchTextLowercase = searchText.toLowerCase();
        let results = this.shortcutsFuse.search(searchTextLowercase);
        
        // If there are no results, if the searchText is empty, and if the list being searched on is nonempty
        // return a list of shortcutsFuseOptions formatted with this extra data field
        if (results.length === 0 && Lang.isEmpty(searchText)) {
            return this.shortcutsFuse.list.slice(0, maxLength).map((suggestionObj) => {
                suggestionObj.data = {
                    score: 0.1,
                    matches: [],
                }
                return suggestionObj
            });
        }


        const resultFormatted = results.map((result) => { 
            return {
                key: result.item.key,
                value: result.item.value,
                suggestion: result.item.suggestion,
                data: {
                    // Use the bonus score to drag the most recent shortcuts to the top and weight the older ones to the bottom
                    score: result.score + result.item.scoreBonusBasedOnContext,
                    matches: result.matches,
                },
            };
        }).sort(this.sortSuggestionsAlphabetically).slice(0,maxLength);;

        return resultFormatted
    }
}

export default SuggestionPortalSearchIndex;