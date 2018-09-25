import Fuse from 'fuse.js';
import Lang from 'lodash';

class SuggestionPortalSearchIndex { 
    constructor(list, initialChar, shortcutManager) { 
        this.initialChar = initialChar;
        this.shortcutManager = shortcutManager;
        this.currentlyValidShortcuts = [];
        // Metdata common to all suggestionSearchIndexs
        this.fuseOptions = {
            shouldSort: true,
            includeScore: true,
            includeMatches: true,
            threshold: 0.6,
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

    // Follows the 
    search = (searchText) => {
        if (Lang.isUndefined(searchText)) return [];
        const searchTextLowercase = searchText.toLowerCase();

        const results = this.shortcutsFuse.search(searchTextLowercase);
        return results.map((result) => { 
            return {
                key: result.item.key,
                value: result.item.value,
                suggestion: result.item.suggestion,
                data: {
                    score: result.score,
                    matches: result.matches,
                },
            };
        });
    }
}

export default SuggestionPortalSearchIndex;