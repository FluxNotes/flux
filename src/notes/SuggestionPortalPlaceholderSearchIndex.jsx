import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import Fuse from 'fuse.js';
import Lang from 'lodash';

class SuggestionPortalPlaceholderSearchIndex extends SuggestionPortalSearchIndex  {
    constructor(list, initialChar, shortcutManager) { 
        super(list, initialChar, shortcutManager)
        this.currentlyValidPlaceholders = [];
    }
    updateIndex = (contextManager) => { 
        const placeholders = this.shortcutManager.getAllPlaceholderShortcuts();
        // If shortcuts haven't updated, we don't need to update our fuse index
        if (Lang.isEqual(placeholders, this.currentlyValidPlaceholders)) return
        this.currentlyValidPlaceholders = placeholders;
        const relevantShortcuts = [];

        placeholders.forEach((placeholder) => {
            const triggers = this.shortcutManager.getTriggersForShortcut(placeholder.id);
            triggers.forEach((trigger) => {
                const triggerNoPrefix = trigger.name.substring(1);
                relevantShortcuts.push({
                    key: triggerNoPrefix,
                    value: `${this.initialChar}${triggerNoPrefix}>`,
                    suggestion: triggerNoPrefix,
                });
            });
        });

        this.shortcutsFuse = new Fuse(relevantShortcuts, this.fuseOptions); 
    }
};

export default SuggestionPortalPlaceholderSearchIndex;