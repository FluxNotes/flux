import React from 'react';
import Lang from 'lodash';
import moment from 'moment';

export function createSentenceFromStructuredData(structuredPhraseTemplate, getAttributeValue, textIfNoData) {
    
    // console.log("-------- create sentence from structured data ----------");

    console.log("---------structured phrase template");
    console.log(structuredPhraseTemplate);
    
    let last = 0, valueName, value;
    let start = structuredPhraseTemplate.indexOf("${"), end;
    let result = "";
    let haveAValue = false;
    let isConditional;
    let conditional, start2, end2, before, after;
    while (start !== -1) {
        if (last !== start) {
            //result += structuredPhraseTemplate.substring(last, start);
            result = result + '<span className="placeholder-data">' + structuredPhraseTemplate.substring(last, start) + '</span>';
           
            console.log("result");
            console.log(result);
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

    // console.log("----- result -----");
    // console.log(result);
   
    return result;
}
