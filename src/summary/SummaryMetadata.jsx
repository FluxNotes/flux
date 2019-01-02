import Lang from 'lodash'
import _ from 'lodash'
import BreastCancerMetadata from './metadata/BreastCancerMetadata';
import DefaultMetadata from './metadata/DefaultMetadata';
import SarcomaMetadata from './metadata/SarcomaMetadata';
import SarcomaNursePractitionerMetadata from './metadata/SarcomaNursePractitionerMetadata';
import AlwaysMatcher from './matchers/AlwaysMatcher';
import StringMatcher from './matchers/StringMatcher';

/*
    Each section has the following properties:
        name                Displayed at the top of the section and in the mini-map
        shortName           Displayed in the mini-map when the name is too long to fit -- max 10 characters
        type                Dictates the format of the data section described later. Visualizers are implemented to support specific data types.
        narrative           This section is only used if the section will be displayed using a narrative visualizer. It provides templates for
                            turning the data into sentences.
        data                Provides the retrieval of the source data to be displayed in the section in the format dictated by the type property
                            above. The data is a list of subsections which each have the following possible properties:
                                name            The name of the subsection. Some visualizers display the subsection names.
                                nameFunction    Used to dynamically name the subsection.  Tabular list visualizer uses this when included.
                                items           The list of data items in the format dictated by the type
                                itemsFunction   A function that returns the list of data items in the format dictated by the type
                                displayFunction A function that returns a boolean indicating whether or not data should be displayed.
                                headings        Indicates the a set of column heading labels for tabular visualizers
                                shortcut        Indicates a shortcut name to use for the first column of insertable data.
                                code            Indicates a code to be used by an itemsFunction. This allows multiple sections to share the same
                                                itemsFunction
                                bands           Indicates a set of value ranges and the assessment for that range. Some visualizers display bands
                                preTableCount   Indicates type of items in table, e.g. Allergies.  Will show count of number of items in table.
                                postTableList   Provide list of structured data to be displayed after the table.
        defaultVisualizer   Indicates the visualizer type for the default visualizer to use for the section. The following ways to specify the
                            default are supported:
                                "tabular"                                               The specified visualizer type will be the default
                                                                                        visualizer for the section if supported by the data type.
                                {clinicalEvent: X, defaultVisualizer: Y}                The specified visualizer type Y will be used if the current
                                                                                        clinical event is X otherwise the first visualizer
                                                                                        registered for the data type will be used.
                                ["X", {clinicalEvent: Y, defaultVisualizer: Z}, ...]    A list of options allowing an overall default X that is used
                                                                                        if one of the specific clinical events (e.g. Y) doesn't match
                                                                                        the currently selected one. If a specific one matches, it
                                                                                        uses the corresponding default visualizer (e.g. Z)
*/

export default class SummaryMetadata {
    constructor(setForceRefresh) {
        this.setForceRefresh = setForceRefresh;

        this.hardCodedMetadata = [
            { "enabled": true, "type": StringMatcher, "matchString": "Doctor/Nurse/Medical oncology/http://snomed.info/sct/420120006", "metadata": SarcomaNursePractitionerMetadata },
            { "enabled": true, "type": StringMatcher, "matchString": "http://snomed.info/sct/420120006", "metadata": SarcomaMetadata },
            { "enabled": true, "type": StringMatcher, "matchString": "http://snomed.info/sct/408643008", "metadata": BreastCancerMetadata },
            { "enabled": true, "type": AlwaysMatcher, "metadata": DefaultMetadata }
        ];
    }

    _cachedMetadata = {};

    doesCachedMetadataExist = (key) => {
        if (this._cachedMetadata[key]) return true;
        return false;
    }

    addCachedMetadata = (key, metadata) => {
        this._cachedMetadata[key] = metadata;
    }

    getCachedMetadata = (key) => {
        return this._cachedMetadata[key];
    }

    buildStringKey = (condition, roleType, role, specialty) => {
        return `${roleType}/${role}/${specialty}/${condition.codeSystem}/${condition.code}`;
    }

    getMetadata = (preferencesManager, patient, condition, roleType, role, specialty) => {
        let metadataDefinition;
        let stringKey;
        if (Lang.isNull(condition)) {
            metadataDefinition = DefaultMetadata;
        } else {
            stringKey = this.buildStringKey(condition, roleType, role, specialty);
            // can we get metadata from cache?
            if (this.doesCachedMetadataExist(stringKey)) {
                return this.getCachedMetadata(stringKey);
            }
    
            // loop over potential metadata matches until we find a match 
            this.hardCodedMetadata.forEach((potentialMetadata) => {
                if (Lang.isUndefined(metadataDefinition) && potentialMetadata.enabled) {
                    const className = potentialMetadata.type; // the type is AlwaysMatcher, FunctionMatcher, StringMatcher, or any other subclass of Matcher
                    // Matcher abstract base class defines a single method match
                    // match(condition, roleType, role, specialty) which return boolean
                    // true means the metadata is a match for the condition, roleType, role, and specialty.
                    // order matters. more specific should appear first
                    const metadataDiscovery = new className(potentialMetadata);
                    if (metadataDiscovery.match(condition, roleType, role, specialty)) {
                        // match function returned true for className
                        metadataDefinition = potentialMetadata.metadata;
                    }
                }
            });
        }
        
        // no match found
        if (!metadataDefinition) {
            console.error("No metadata available for ", condition, roleType, role, specialty);
            return null;
        }

        // metadataDefinition now contains either the class for generating the metadata or the actual metadata.
        // If metadataDefinition is a function, that's a 'class'
        // if we don't have a class, we have metadata so return it
        if (!Lang.isFunction(metadataDefinition)) {
            if (!Lang.isUndefined(stringKey)) this.addCachedMetadata(stringKey, metadataDefinition);
            return metadataDefinition;
        }

        let obj = new metadataDefinition();
        let metadata = obj.getMetadata(preferencesManager, patient, condition, roleType, role, specialty);
        metadata.sections.forEach((section) => {
            section.data = section.data.map((subsection) => {
                if (!Lang.isFunction(subsection)) return subsection;
                let obj = new subsection();
                return obj.getMetadata(preferencesManager, patient, condition, roleType, role, specialty);
            });
        });
        if (!Lang.isUndefined(stringKey)) this.addCachedMetadata(stringKey, metadata);
        // cache the metadata but only if condition is not null because we force default in that case
//        if (prioritizedKeyList[keyIndex] !== 'default') this.addCachedMetadata(prioritizedKeyList[keyIndex], metadata);
        return metadata;
    }

}