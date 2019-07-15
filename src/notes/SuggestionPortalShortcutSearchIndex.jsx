import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import { callValuesetOnAPI } from '../shortcuts/CreatorChildService';
import Fuse from 'fuse.js';
import Lang from 'lodash';
import _ from 'lodash';

class SuggestionPortalShortcutSearchIndex extends SuggestionPortalSearchIndex {
    constructor(list, initialChar, shortcutManager) {
        super(list, initialChar, shortcutManager);
        this.currentlyValidShortcutObjs = [];
        this.serviceShortcutsMetadata = [];
    }

    updateIndex = (contextManager) => {
        const allShortcutObjs = contextManager.getCurrentlyValidShortcuts(this.shortcutManager);
        // If shortcuts haven't updated, we don't need to update our fuse index
        if (Lang.isEqual(allShortcutObjs, this.currentlyValidShortcutObjs)) return;
        this.currentlyValidShortcutObjs = allShortcutObjs;
        // Let's compile a list of shortcuts we care about, formatted for searching
        const relevantShortcutsFormattedForSearch = [];
        // We'll need to the active contexts to determine bonus scores, to improve sorting order.
        const activeContexts = contextManager.getActiveContexts();
        this.serviceShortcutsMetadata = [];
        const allPromises = [];

        allShortcutObjs.forEach((shortcutObj) => {
            const shortcutId = shortcutObj.id;
            const shortcutMetadata = this.shortcutManager.getShortcutMetadata(shortcutId);
            if (shortcutMetadata.type === 'CreatorChildService') {
                this.serviceShortcutsMetadata.push(shortcutMetadata);
            } else {
                // Scores get sorted from smallest to greatest
                // ActiveContexts is sorted from most recent to least recent
                // We want shortcuts for the most recent shortcuts to have the smallest bonus score, so as to appear earlier
                let scoreBonusBasedOnContext = _.findIndex(activeContexts, (context) => {
                    // Quirk: We want global contexts to all be treated equally, regardless of incidence.
                    return context.getId() === shortcutObj.parentId && !context.isGlobalContext();
                });

                if (scoreBonusBasedOnContext === -1)  {
                    // no matching context means it's in the parent context or is a global context
                    // we want those to come last; they get the biggest bonus
                    scoreBonusBasedOnContext = activeContexts.length;
                }
                allPromises.push(this.shortcutManager.getTriggersForShortcut(shortcutId).then((triggers) => {
                    triggers.forEach((trigger) => {
                        const triggerPrefix = trigger.name.substring(0,1);
                        const triggerNoPrefix = trigger.name.substring(1);
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
                }));
            }
        });

        Promise.all(allPromises).then((r) => {
            this.shortcutsFuse = new Fuse(relevantShortcutsFormattedForSearch, this.fuseOptions);
        });
    }

    search = (searchText) => {
        if (Lang.isUndefined(searchText)) return [];

        if (this.serviceShortcutsMetadata && this.serviceShortcutsMetadata.length > 0) {
            const metadataForServiceShortcut = this.serviceShortcutsMetadata[0];

            // valueSetType
            const valueSetType = metadataForServiceShortcut.valueSetType;

            // call API
            return callValuesetOnAPI(metadataForServiceShortcut.service, valueSetType, searchText).then((result) => {
                return result.map((s) => {
                    return {
                        key: s.code,
                        value: { name: s.label, description: s.code + " - " + s.label, code: s.code, label: s.label, codeSystem: s.codesystem },
                        suggestion: s.label,
                        data: { score: 1, matches: [s.label] },
                        shortcut: metadataForServiceShortcut
                    };
                });
            });
        } else {
            return super.search(searchText);
        }
    }
};

export default SuggestionPortalShortcutSearchIndex;
