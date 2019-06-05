import NoteParser from '../noteparser/NoteParser';
import Lang from 'lodash';

export default class InMemoryClinicalNote {
    constructor(shortcutManager, contextManager) {
        this.noteParser = new NoteParser(shortcutManager, contextManager);
    }

    parse(noteAsString) {
        this.nodes = [];
        this.placeholders = [];
        let remainder = noteAsString;
        let start, end;
        let before = ''; //, after = '';

        // Open div tags don't trigger any action now, so just remove them.
        if (!Lang.isUndefined(remainder)) {
            remainder = remainder.split('<div>').join('');
        }
        const triggers = this.noteParser.getListOfTriggersAndPlaceholdersFromText(remainder)[0];

        if (!Lang.isNull(triggers)) {
            triggers.forEach((trigger) => {
                if (trigger.placeholder) {
                    start = remainder.indexOf(trigger.placeholder);
                    if (start > 0) {
                        before = remainder.substring(0, start);
                        this._addTextNode(before);
                    }
                    remainder = remainder.substring(start + trigger.placeholder.length);
                    if (remainder.startsWith("[[")) {
                        end = remainder.indexOf("]]");
                        // after = remainder.substring(2, end);
                        // FIXME: 2 is a magic number based on [[ length, ditto for 2 below for ]]
                        remainder = remainder.substring(end + 2);
                    }
                    this._addPlaceholder(trigger);
                } else {
                    start = remainder.indexOf(trigger.trigger);
                    if (start > 0) {
                        before = remainder.substring(0, start);
                        this._addTextNode(before);
                    }
                    remainder = remainder.substring(start + trigger.trigger.length);
    
                    if (remainder.startsWith("[[")) {
                        end = remainder.indexOf("]]");
                        // after = remainder.substring(2, end);
                        // FIXME: 2 is a magic number based on [[ length, ditto for 2 below for ]]
                        remainder = remainder.substring(end + 2);
                        // FIXME: Temporary work around that can parse '@condition's inserted via mic with extraneous space
                    } else if (remainder.startsWith(" [[")) {
                        remainder = remainder.replace(/\s+(\[\[\S*\s*.*)/g, '$1');
                        end = remainder.indexOf("]]");
                        // FIXME: 2 is a magic number based on ' [[' length, ditto for 2 below for ]]
                        // after = remainder.charAt(2).toUpperCase() + remainder.substring(3, end);
                        remainder = remainder.substring(end + 2);
                    }
    
                    this._addShortcut(trigger);
                }

            });
        }
        if (!Lang.isUndefined(remainder) && remainder.length > 0) {
            this._addTextNode(remainder);
            //transform = this.insertPlainText(transform, remainder);
        }
    }

    _addTextNode(text) {
        this.nodes.push({ type: 'text', content: text });
    }

    _addShortcut(trigger) {
        this.nodes.push({ type: 'shortcut', trigger });
    }

    _addPlaceholder(placeholder) {
        this.nodes.push({ type: 'placeholder', placeholder });
        this.placeholders.push(placeholder);
    }

    getPlaceholders() {
        return this.placeholders;
    }

    getNodes() {
        return this.nodes;
    }

}