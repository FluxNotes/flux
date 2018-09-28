import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import Fuse from 'fuse.js';
import Lang from 'lodash';

class SuggestionPortalShortcutSearchIndex extends SuggestionPortalSearchIndex  {
    updateIndex = (contextManager) => {
        const allShortcuts = contextManager.getCurrentlyValidShortcuts(this.shortcutManager);
        // If shortcuts haven't updated, we don't need to update our fuse index
        if (Lang.isEqual(allShortcuts, this.currentlyValidShortcuts)) return
        this.currentlyValidShortcuts = allShortcuts;

        const relevantShortcuts = [];
        allShortcuts.forEach((shortcut) => {
            const triggers = this.shortcutManager.getTriggersForShortcut(shortcut);
            triggers.forEach((trigger) => {
                const triggerPrefix = trigger.name.substring(0,1);
                const triggerNoPrefix = trigger.name.substring(1)
                if (this.initialChar === triggerPrefix) {
                    relevantShortcuts.push({
                        key: triggerNoPrefix,
                        value: trigger,
                        suggestion: triggerNoPrefix,
                    });
                }
            });
        });

        this.shortcutsFuse = new Fuse(relevantShortcuts, this.fuseOptions); 
    }
};

export default SuggestionPortalShortcutSearchIndex;