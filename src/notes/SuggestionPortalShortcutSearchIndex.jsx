import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import Fuse from 'fuse.js';
import Lang from 'lodash';
import _ from 'lodash';

class SuggestionPortalShortcutSearchIndex extends SuggestionPortalSearchIndex  {
    constructor(list, initialChar, shortcutManager) { 
        super(list, initialChar, shortcutManager)
        this.currentlyValidShortcutObjs = [];
    }
    updateIndex = (contextManager) => {
        const allShortcutObjs = contextManager.getCurrentlyValidShortcuts(this.shortcutManager);
        // If shortcuts haven't updated, we don't need to update our fuse index
        if (Lang.isEqual(allShortcutObjs, this.currentlyValidShortcutObjs)) return
        this.currentlyValidShortcutObjs = allShortcutObjs;
        // Let's compile a list of shortcuts we care about, formatted for searching
        const relevantShortcutsFormattedForSearch = [];
        // We'll need to the active contexts to determine bonus scores, to improve sorting order.
        const activeContexts = contextManager.getActiveContexts();
        allShortcutObjs.forEach((shortcutObj) => {
            const shortcutId = shortcutObj.id;
            const shortcutMetadata = this.shortcutManager.getShortcutMetadata(shortcutId);
            const triggers = this.shortcutManager.getTriggersForShortcut(shortcutId);
            // Scores get sorted from smallest to greatest
            // ActiveContexts is sorted from most recent to least recent
            // We want shortcuts for the most recent shortcuts to have the smallest bonus score, so as to appear earlier
            let scoreBonusBasedOnContext = _.findIndex(activeContexts, (context) => {
                return context.getId() === shortcutObj.parentId;
            });

            if (scoreBonusBasedOnContext === -1)  {
                // no matching context means it's in the parent context 
                // we want those to come last; they get the biggest bonus 
                scoreBonusBasedOnContext = activeContexts.length
            }
            triggers.forEach((trigger) => {
                const triggerPrefix = trigger.name.substring(0,1);
                const triggerNoPrefix = trigger.name.substring(1)
                if (this.initialChar === triggerPrefix) {
                    relevantShortcutsFormattedForSearch.push({
                        key: triggerNoPrefix,
                        value: trigger,
                        suggestion: triggerNoPrefix,
                        knownParentContexts: shortcutMetadata.knownParentContexts,
                        scoreBonusBasedOnContext 
                    });
                }
            });
        });

        this.shortcutsFuse = new Fuse(relevantShortcutsFormattedForSearch, this.fuseOptions); 
    }
};

export default SuggestionPortalShortcutSearchIndex;