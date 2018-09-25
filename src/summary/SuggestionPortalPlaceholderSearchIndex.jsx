import Fuse from 'fuse.js';
import Lang from 'lodash';

class SuggestionPortalPlaceholderSearchIndex extends SuggestionPortalSearchIndex  {
    constructor (list, initialChar, shortcutManager) { 
        super(list, initialChar, shortcutManager)
    }

    updateIndex(contextManager) { 
        const placeHolderShortcuts = shortcutManager.getAllPlaceholderShortcuts();
        if (Lang.isEqual(allShortcuts, this.currentlyValidShortcuts)) return
        this.currentlyValidShortcuts = allShortcuts;
        const relevantShortcuts = [];

        const placeholderShortcutsFuse = new Fuse([], options); // "list" is the item array
        placeHolderShortcuts.forEach((shortcut) => {
            const triggers = shortcutManager.getTriggersForShortcut(shortcut.id);
            triggers.forEach((trigger) => {
                const triggerNoPrefix = trigger.name.substring(1);
                if (initialChar === '<' && triggerNoPrefix.toLowerCase().includes(textLowercase)) {
                    relevantShortcuts.push({
                        key: triggerNoPrefix,
                        value: `${initialChar}${triggerNoPrefix}>`,
                        suggestion: triggerNoPrefix,
                    });
                }
            });
        });

        this.shortcutsFuse = new Fuse(relevantShortcuts, this.fuseOptions); 
    }
};

export default SuggestionPortalPlaceholderSearchIndex;