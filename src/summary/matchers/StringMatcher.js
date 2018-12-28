import Matcher from './Matcher';
import Lang from 'lodash'

class StringMatcher extends Matcher {
    // returns an array of strings which are keys to find the metadata for summary in priority order (1st one should be used first). List should always end with DefautMetadata
    buildPrioritizedMetadataKeyList = (condition, roleType, role, specialty) => {
        if (Lang.isNull(condition)) return [ "default" ];
        const codeSystem = condition.codeSystem;
        const code = condition.code;
        const conditionType = `${codeSystem}/${code}`;
        const userType = `${roleType}/${role}/${specialty}`;
        return [ userType + "/" + conditionType, conditionType, "default" ];
    }

    match = (condition, roleType, role, specialty) => {
        const prioritizedKeyList = this.buildPrioritizedMetadataKeyList(condition, roleType, role, specialty);
        const numKeys = prioritizedKeyList.length;
        let keyIndex = 0;
        while (keyIndex < numKeys) {
            if (prioritizedKeyList[keyIndex] === this._metadata.matchString) return true;
            keyIndex++;
        }
        return false;
    }
}

export default StringMatcher;