import Lang from 'lodash';
import moment from 'moment';

// This function is similar to createSentenceFromStructuredData except it adds spans around the structured data so that placeholders are styled appropriately
export function createStyledSentenceFromStructuredData(structuredPhraseTemplate, getAttributeValue, textIfNoData, isSigned) {

    let last = 0, valueName, value;
    let start = structuredPhraseTemplate.indexOf("${"), end;
    let result = "";
    let haveAValue = false;
    let isConditional, textIsStructuredData;
    let conditional, start2, end2, before, after;
    let styleClassName, styleClassNameMissingValue;
    
    // Check if the note is signed or not and return the appropriate class for styling
    if (isSigned) {
        styleClassName = 'placeholder-data-signed';
        styleClassNameMissingValue = 'placeholder-data-missing-signed';
    } else {
        styleClassName = 'placeholder-data';
        styleClassNameMissingValue = 'placeholder-data-missing';
    }
  
    while (start !== -1) {
        if (last !== start) {
            result += structuredPhraseTemplate.substring(last, start);
        }

        end = structuredPhraseTemplate.indexOf("}", start + 2); 
        valueName = structuredPhraseTemplate.substring(start + 2, end);
        isConditional = valueName.startsWith("%");
        textIsStructuredData = valueName.startsWith('*');

        if (isConditional) { // ADD DESCRIPTION
            end = structuredPhraseTemplate.indexOf('}', end + 1);
            conditional = structuredPhraseTemplate.substring(start + 3, end);
            start2 = conditional.indexOf('${');
            end2 = conditional.indexOf('}', start2 + 2);
            valueName = conditional.substring(start2 + 2, end2);
            before = conditional.substring(0, start2);
            after = conditional.substring(end2 + 1);
            value = getAttributeValue(valueName);
            if (Lang.isNull(value) || Lang.isUndefined(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
            } else {
                if (value instanceof moment) value = value.format('MM/DD/YYYY');
                haveAValue = true;
                result += before;
                if (Lang.isArray(value)) {
                    for (let index in value) {
                        result += ` <span class=${styleClassName}>${value[index]}</span>`;
                        if (index != value.length - 1) {
                            result += ',';
                        }
                    }
                } else {
                    result += `<span class=${styleClassName}>${value}</span>`;
                }
                result += after;
            }
        // } else if () {

        } else if (textIsStructuredData) { // this covers the case where the text should be underlined but is not a conditional or a fill in value (i.e. disease status, toxicity, etc)
            valueName = structuredPhraseTemplate.substring(start + 3, end);
            result += `<span class=${styleClassName}>${valueName}</span>`;
        } else {
            value = getAttributeValue(valueName);
            if (Lang.isNull(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                result += `<span class=${styleClassNameMissingValue}>#${valueName}</span>`;
            } else {
                if (value instanceof moment) value = value.format('MM/DD/YYYY');
                haveAValue = true;
            }
            if (Lang.isArray(value)) {
                for (let index in value) {
                    result += ` <span class=${styleClassName}>${value[index]}</span>`;
                    if (index != value.length - 1) {
                        result += ',';
                    }
                }
            } else {
                result += `<span class=${styleClassName}>${value}</span>`;
            }
        }
        last = end + 1;
        start = structuredPhraseTemplate.indexOf("${", last);
    }
    if (last < structuredPhraseTemplate.length) {
        result += structuredPhraseTemplate.substring(last);
    }
    if (!haveAValue) {
        return textIfNoData;
    }
    return result;
}

export function createSentenceFromStructuredData(structuredPhraseTemplate, getAttributeValue, textIfNoData) {
 
    let last = 0, valueName, value;
    let start = structuredPhraseTemplate.indexOf("${"), end;
    let result = "";
    let haveAValue = false;
    let isConditional;
    let conditional, start2, end2, before, after;
    while (start !== -1) {
        if (last !== start) {
            result += structuredPhraseTemplate.substring(last, start);
        }
        end = structuredPhraseTemplate.indexOf("}", start + 2);
        valueName = structuredPhraseTemplate.substring(start + 2, end);
        isConditional = valueName.startsWith("%");
        if (isConditional) {
            end = structuredPhraseTemplate.indexOf("}", end + 1); // adjust end to be 2nd close bracket
            conditional = structuredPhraseTemplate.substring(start + 3, end);
            start2 = conditional.indexOf("${");
            end2 = conditional.indexOf("}", start2 + 2);
            valueName = conditional.substring(start2 + 2, end2);
            before = conditional.substring(0, start2);
            after = conditional.substring(end2 + 1);
            value = getAttributeValue(valueName);
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
            value = getAttributeValue(valueName);
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
        start = structuredPhraseTemplate.indexOf("${", last);
    }
    if (last < structuredPhraseTemplate.length) {
        result += structuredPhraseTemplate.substring(last);
    }
    if (!haveAValue) {
        return textIfNoData;
    }   
    return result;
}
