import Lang from 'lodash';
import moment from 'moment';

// Creates a sentance from structured data
// Sentence is styled with structured data underlines if isStyled is true
// If not it is a string with # designating the structured data 
export function createSentenceFromStructuredData(structuredPhraseTemplate, getAttributeValue, textIfNoData, isStyled, isSigned = false) {
    let last = 0, valueName, value1Name, value2Name, value, value2;
    let start = structuredPhraseTemplate.indexOf('${'), end;
    let result = '';
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
        end = structuredPhraseTemplate.indexOf('}', start + 2); 
        valueName = structuredPhraseTemplate.substring(start + 2, end);
        isConditional = valueName.startsWith('%');
        isConditionalWithStructuredDataValues = valueName.startsWith('&');
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
                result += before;
                if (isStyled) {
                    result += createStructuredPhraseHtml(value, styleClassName);
                } else {
                    result += createStructuredPhraseText(value);
                }
                result += after;
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
                if (value2 instanceof moment) value2 = value2.format('MM/DD/YYYY');
                haveAValue = true;
                result += before;
                if (isStyled) {
                    result += createStructuredPhraseHtml(value1Name, styleClassName);
                } else {
                    result += createStructuredPhraseText(value1Name);
                }
                result += middle;
                if (isStyled) {
                    result += createStructuredPhraseHtml(value2, styleClassName);
                } else {
                    result += createStructuredPhraseText(value2);
                }
                result += after;
            }
        } else if (textIsStructuredData) { // case where the text should be underlined but is not a conditional or a fill in value (i.e. disease status, toxicity, etc)
            valueName = structuredPhraseTemplate.substring(start + 3, end)
            if (isStyled) {
                result += `<span class=${styleClassName}>${valueName}</span>`;
            } else {
                result += `#${valueName}`;
            }
        } else {
            value = getAttributeValue(valueName);
            if (Lang.isNull(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                if (isStyled) {
                    result += `<span class=${styleClassNameMissingValue}>#${valueName}</span>`;    
                } else {
                    result += `#${valueName}`;
                }
            } else {
                if (value instanceof moment) value = value.format('MM/DD/YYYY');
                haveAValue = true;
                if (isStyled) {
                    result += createStructuredPhraseHtml(value, styleClassName);
                } else {
                    result += createStructuredPhraseText(value);
                }
            }
        }
        last = end + 1;
        start = structuredPhraseTemplate.indexOf('${', last);
    }
    if (last < structuredPhraseTemplate.length) {
        result += structuredPhraseTemplate.substring(last);
    }
    if (!haveAValue) {
        return textIfNoData;
    }
    return result;
}

// helper method for createSentenceFromStructuredData method to create styled structured data
function createStructuredPhraseHtml(value, styleClassName) {
    if (Lang.isArray(value)) {
        let htmlString = '';
        for (let index in value) {
            htmlString += ` <span class=${styleClassName}>${value[index]}</span>`;
            if (index !== value.length - 1) {
                htmlString += ',';
            }
        }
        return htmlString;
    } else {
        return `<span class=${styleClassName}>${value}</span>`;
    }
}

// helper method for createSentenceFromStructuredData method to create structured data string
function createStructuredPhraseText(value) {
    if (Lang.isArray(value)) {
        return '#' + value.join(', #');
    } else {
        return `#${value}`;
    }
}
