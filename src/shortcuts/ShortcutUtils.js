import Lang from 'lodash';
import moment from 'moment';

// This function is similar to createSentenceFromStructuredData except it adds spans around the structured data so that placeholders are styled appropriately
export function createStyledSentenceFromStructuredData(structuredPhraseTemplate, getAttributeValue, textIfNoData, isSigned) {

    let last = 0, valueName, value1Name, value2Name, value, value2;
    let start = structuredPhraseTemplate.indexOf("${"), end;
    let result = "";
    let haveAValue = false;
    let isConditional, isConditionalWithStructuredDataValues, textIsStructuredData;
    let conditional, start1, start2, end1, end2, before, middle, after;
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
        isConditionalWithStructuredDataValues = valueName.startsWith("&");
        textIsStructuredData = valueName.startsWith('*');

        if (isConditional) { // case where the structured data must be defined in order to show up
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
                result += before + createStructuredPhraseHtml(value, styleClassName) + after;
            }
        } else if (isConditionalWithStructuredDataValues) { // case where the the structured data is conditional and there are two values that need to be underlined (i.e. as of & date)
            end = structuredPhraseTemplate.indexOf('}', end + 1);
            end = structuredPhraseTemplate.indexOf('}', end + 1);
            conditional = structuredPhraseTemplate.substring(start + 3, end);
            start1 = conditional.indexOf('${');
            end1 = conditional.indexOf('}', start1 + 2);
            start2 = conditional.indexOf('${', end1);
            end2 = conditional.indexOf('}', start2 + 2);
            before = conditional.substring(0, start1);
            value1Name = conditional.substring(start1 + 2, end1);
            middle = conditional.substring(end1 + 1, start2);
            value2Name = conditional.substring(start2 + 2, end2);
            after = conditional.substring(end2 + 1);
            value2 = getAttributeValue(value2Name);
            
            if (Lang.isNull(value2) || Lang.isUndefined(value2) || value2 === '' || (Lang.isArray(value2) && value2.length === 0)) {
            } else {
                if (value instanceof moment) value = value.format('MM/DD/YYYY');
                haveAValue = true;
                result += before + createStructuredPhraseHtml(value1Name, styleClassName) + middle + createStructuredPhraseHtml(value2, styleClassName) + after;
            }
        } else if (textIsStructuredData) { // case where the text should be underlined but is not a conditional or a fill in value (i.e. disease status, toxicity, etc)
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
            result += createStructuredPhraseHtml(value, styleClassName);
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

// helper method for createStyledSentenceFromStructuredData method
function createStructuredPhraseHtml(value, styleClassName) {
    if (Lang.isArray(value)) {
        let htmlString = '';
        for (let index in value) {
            htmlString += ` <span class=${styleClassName}>${value[index]}</span>`;
            if (index != value.length - 1) {
                htmlString += ',';
            }
        }
        return htmlString;
    } else {
        return `<span class=${styleClassName}>${value}</span>`;
    }
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
