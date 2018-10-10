import Lang from 'lodash'
import _ from 'lodash'
import BreastCancerMetadata from './metadata/BreastCancerMetadata';
import DefaultMetadata from './metadata/DefaultMetadata';
import SarcomaMetadata from './metadata/SarcomaMetadata';
import SarcomaNursePractitionerMetadata from './metadata/SarcomaNursePractitionerMetadata';

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

        this.hardCodedMetadata = {
            "default": DefaultMetadata,
            "http://snomed.info/sct/408643008": BreastCancerMetadata,
            "http://snomed.info/sct/420120006": SarcomaMetadata,
            "Doctor/Nurse/Medical oncology/http://snomed.info/sct/420120006": SarcomaNursePractitionerMetadata
        };
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

    // returns an array of strings which are keys to find the metadata for summary in priority order (1st one should be used first). List should always end with DefautMetadata
    buildPrioritizedMetadataKeyList = (condition, roleType, role, specialty) => {
        if (Lang.isNull(condition)) return [ "default" ];
        const codeSystem = condition.codeSystem;
        const code = condition.code;
        const conditionType = `${codeSystem}/${code}`;
        const userType = `${roleType}/${role}/${specialty}`;
        return [ userType + "/" + conditionType, conditionType, "default" ];
    }

    getMetadata = (preferencesManager, condition, roleType, role, specialty) => {
        let metadataDefinition;
        const prioritizedKeyList = this.buildPrioritizedMetadataKeyList(condition, roleType, role, specialty);
        const numKeys = prioritizedKeyList.length;
        let keyIndex = 0;
        while (!metadataDefinition && keyIndex < numKeys) {
            if (this.doesCachedMetadataExist(prioritizedKeyList[keyIndex])) {
                return this.getCachedMetadata(prioritizedKeyList[keyIndex]);
            }
            metadataDefinition = this.hardCodedMetadata[prioritizedKeyList[keyIndex]];
            if (!metadataDefinition) keyIndex++;
        }
        if (!metadataDefinition) {
            console.error("No metadata available for ", condition, roleType, role, specialty);
            return null;
        }

        // metadataDefinition now contains either the class for generating the metadata or the actual metadata. If metadataDefinition is a function, that's a 'class'
        // if we don't have a class, we have metadata so return it
        if (!Lang.isFunction(metadataDefinition)) return metadataDefinition;

        let obj = new metadataDefinition();
        let metadata = obj.getMetadata(preferencesManager, condition, roleType, role, specialty);
        metadata.sections.forEach((section) => {
            section.data = section.data.map((subsection) => {
                if (!Lang.isFunction(subsection)) return subsection;
                let obj = new subsection();
                return obj.getMetadata(preferencesManager, condition, roleType, role, specialty);
            });
        });
        this.addCachedMetadata(prioritizedKeyList[keyIndex], metadata);
        return metadata;
    }
}