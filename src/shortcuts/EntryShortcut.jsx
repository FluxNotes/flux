import Shortcut from './Shortcut';
import Lang from 'lodash';
import moment from 'moment';

export default class EntryShortcut extends Shortcut {
    constructor(metadata) {
        super();
        this.metadata = metadata;
    }

    getAttributeValue(name) {
    }
    
    setAttributeValue(name, value, publishChanges = true, updatePatient = true) {
    }

    getText() {
    }

    hasParentContext() {
        const knownParent = this.metadata["knownParentContexts"];
        if (knownParent === 'Patient') return true;
        return !Lang.isUndefined(this.parentContext) && !Lang.isNull(this.parentContext);
    }

    establishParentContext(contextManager) {
        super.initialize(contextManager);
        const knownParent = this.metadata["knownParentContexts"];

        if (knownParent) {
            this.parentContext = contextManager.getActiveContextOfType(knownParent);
        } else   {
            this.parentContext = contextManager.getCurrentContext();
        }

        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
    }

    hasData() {
        const voaList = this.metadata["valueObjectAttributes"];
        let value, isSettable;
        let result = false;
        voaList.forEach((voa) => {
            value = this.getAttributeValue(voa.name);
            isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
            if (isSettable) {
                if (Lang.isNull(value) || Lang.isUndefined(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                } else {
                    result = true;
                }                
            }
        });
        return result;
    }

    getEntryId() {
        return this.object.entryInfo.entryId;
    }

    getAsString() {
        const structuredPhrase = this.metadata["structuredPhrase"];

        let last = 0, valueName, value;
        let start = structuredPhrase.indexOf("${"), end;
        let result = "";
        let haveAValue = false;
        let isConditional;
        let conditional, start2, end2, before, after;
        while (start !== -1) {
            if (last !== start) {
                result += structuredPhrase.substring(last, start);
            }
            end = structuredPhrase.indexOf("}", start + 2);
            valueName = structuredPhrase.substring(start + 2, end);
            isConditional = valueName.startsWith("%");
            if (isConditional) {
                end = structuredPhrase.indexOf("}", end + 1); // adjust end to be 2nd close bracket
                conditional = structuredPhrase.substring(start + 3, end);
                start2 = conditional.indexOf("${");
                end2 = conditional.indexOf("}", start2 + 2);
                valueName = conditional.substring(start2 + 2, end2);
                before = conditional.substring(0, start2);
                after = conditional.substring(end2 + 1);
                value = this.getAttributeValue(valueName);
                if (Lang.isNull(value) || Lang.isUndefined(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                } else {
                    if (value instanceof moment) value = value.format('MM/DD/YYYY');
                    haveAValue = true;
                    result += before;
                    if (Lang.isArray(value)) {
                        result += value.join(", #");
                    } else {
                        result += value;
                    }
                    result += after;
                }
            } else {
                value = this.getAttributeValue(valueName);
                if (Lang.isNull(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                    value = '?';
                } else {
                    if (value instanceof moment) value = value.format('MM/DD/YYYY');
                    haveAValue = true;
                }
                if (Lang.isArray(value)) {
                    result += value.join(", #");
                } else {
                    result += value;
                }
            }
            last = end + 1;
            start = structuredPhrase.indexOf("${", last);
        }
        if (last < structuredPhrase.length) {
            result += structuredPhrase.substring(last);
        }
        if (!haveAValue) {
            return this.getText();
        }
        return result;
    }

    _followPath(object, attributePath, startIndex) {
        let i, attributeName, list, index, start, end;
        const len = attributePath.length;
        let result = object;

        let perItemFollowPath = (item) => {
            return this._followPath(item, attributePath, i + 1);
        };
        for (i = startIndex; i < len; i++) {
            if (attributePath[i].endsWith("[]")) {
                attributeName = attributePath[i].substring(0, attributePath[i].length - 2);
                list = result[attributeName];
                if (Lang.isUndefined(list)) return null;
                return list.map(perItemFollowPath);
            } else if (attributePath[i].endsWith("]")) {
                start = attributePath[i].indexOf("[");
                end = attributePath[i].indexOf("]", start);
                attributeName = attributePath[i].substring(0, start);
                index = attributePath[i].substring(start + 1, end);
                list = result[attributeName];
                result = list[index];
            } else {
                result = result[attributePath[i]];
            }
            if (Lang.isUndefined(result)) return null;
        }
        return result;
    }
}