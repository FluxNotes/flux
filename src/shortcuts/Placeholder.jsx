import { v4 } from 'uuid';
class Placeholder {
    constructor(placeholderText, shortcutName, data, metadata, shortcutManager, contextManager, patient, clinicalNote, setForceRefresh) {
        this._placeholderText = placeholderText;
        this._shortcutName = shortcutName;
        this._metadata = metadata;
        this._shortcutManager = shortcutManager;
        this._contextManager = contextManager;
        this._patient = patient;
        this._clinicalNote = clinicalNote;
        this._setForceRefresh = setForceRefresh;
        this.uniqueId = v4();
        const shortcuts = [];
        let newShortcut;
        if (data) {
            const parsedData = JSON.parse(data);
            parsedData.entryIds.forEach((id, index) => {
                newShortcut = shortcutManager.createShortcut(null, shortcutName, patient, `{"entryId":${id}}`, this.onUpdate.bind(this));
                newShortcut.setKey("" + index);
                shortcuts.push(newShortcut);
            });
            this._entryShortcuts = shortcuts;
            this._numUpdates = 1;
        } else {
            newShortcut = shortcutManager.createShortcut(null, shortcutName, patient, undefined, this.onUpdate.bind(this));
            newShortcut.setKey("foo");
            this._entryShortcuts = [ newShortcut ];
            this._entryShortcuts[0].initialize();
            this._numUpdates = 0;
        }
    }

    onBeforeDeleted() {
        if (this._entryShortcuts) {
            this._entryShortcuts.forEach(entryShortcut => entryShortcut.onBeforeDeleted());
        }
        return true;
    }

    onUpdate = (shortcut) => {
        if (shortcut.hasParentContext()) {
            this._numUpdates++;
            shortcut.updatePatient(this._patient, this._contextManager, this._clinicalNote);
        }
    }

    get placeholderText() {
        return this._placeholderText;
    }

    get shortcutName() {
        return this._shortcutName;
    }

    get shortcutDisplayText() {
        return this._shortcutName.slice(1);
    }

    get metadata() {
        return this._metadata;
    }

    get done() {
        return this._done;
    }

    set done(d) {
        this._done = d;
    }

    get entryShortcuts() {
        return this._entryShortcuts;
    }

    get multiplicity() {
        return this._metadata.formSpec.multiplicity;
    }

    get attributes() {
        return this._metadata.formSpec.attributes;
    }

    getResultText() {
        if (!this._entryShortcuts[0].getEntryId()) return this._placeholderText;
        const ids = [];
        this._entryShortcuts.forEach((shortcut) => {
            ids.push(shortcut.getEntryId());
        });
        return `${this._placeholderText}[[{"entryIds":[${ids}]}]]`;
    }

    getAttributeValue(name, index = 0) {
        return this._entryShortcuts[index].getAttributeValue(name);
    }

    setAttributeValue(name, value, index = 0, source) {
        if (!this._entryShortcuts[index].hasParentContext()) {
            this._entryShortcuts[index].establishParentContext(this._contextManager, this);
        }

        if (!this._entryShortcuts[index].hasParentContext()) {
            const entryShortcutId = this._entryShortcuts[index].getShortcutType();
            const possibleParentTriggers = this._shortcutManager.getPossibleParentContextTriggers(entryShortcutId);
            const triggerList = possibleParentTriggers.map(item => item.name);
            const parentContextOptions = (triggerList.length > 1 ? "one of " + triggerList.join(',') : triggerList);
            return "No parent context to set values within. Create a context before " + this._placeholderText + " using " +
                parentContextOptions + ".";
        } else {
            this._entryShortcuts[index].setAttributeValue(name, value);
            this._entryShortcuts[index].setSource(source);
            this._setForceRefresh();
            return null;
        }
    }

    getTextWithStylingToDisplayInNote(index = 0) {
        const isSigned = this._clinicalNote.signed;

        if (this._numUpdates > 0 && this._entryShortcuts[index].hasData()) {
            let displayText = "";
            this._entryShortcuts.forEach((shortcut) => {
                displayText += `${shortcut.getAsStringWithStyling(isSigned)}. `;
            });
            return {__html: displayText};
        }
        return this._placeholderText;
    }

    getKey() {
        return this.key;
    }

    setKey(key, index = 0) {
        this.key = key;
        this._entryShortcuts[index].setKey(key);
    }

    addEntry() {
        this._entryShortcuts.push(this._shortcutManager.createShortcut(null, this._shortcutName, this._patient, undefined, this.onUpdate.bind(this)));
        const last = this._entryShortcuts.length - 1;
        this._entryShortcuts[last].initialize();
        this._entryShortcuts[last].setKey(this.key);
        this._setForceRefresh();
    }

    deleteEntry(index) {
        if (this._entryShortcuts[index].onBeforeDeleted()) {
            this._entryShortcuts.splice(index, 1);
            this._setForceRefresh();
        }
    }
}

export default Placeholder;