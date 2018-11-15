import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './NarrativeNameValuePairsVisualizer.css';
import VisualizerMenu from './VisualizerMenu.jsx';

/*
 A narrative view of one or more data summary items.
 */
class NarrativeNameValuePairsVisualizer extends Component {
    // Initialize values for insertion popups
    constructor(props) { 
        super(props);
        this.state = {
            snippetDisplayingMenu: null,
            positionTop: 0, // Just so the popover can be spotted more easily
            positionLeft: 0, // Same as above
        }
    }

    /**
        Function returns the correct template to use for the sentence
        if all the objects in useDataMissingTemplateCriteria are null, function will return dataMissingTemplate
        otherwise, defaultTemplate is returned
    */
    //todo create a new category in here based on isUnsigned results. if data is unsigned return dataUnsignedTemplate
    getTemplate(subsections, sentenceObject) {
        if (Lang.isNull(sentenceObject.dataMissingTemplate) || Lang.isUndefined(sentenceObject.dataMissingTemplate)) {
            return sentenceObject.defaultTemplate;
        }

        // Check if every object in useDataMissingTemplateCriteria is null, empty, undefined, or equals to "None"
        const allNull = sentenceObject.useDataMissingTemplateCriteria.every((data) => {

            const index = data.indexOf(".");
            let subsectionName, list;

            if (index === -1) {
                subsectionName = data;
                list = this.getList(subsections[subsectionName]);

                return (Lang.isNull(list) || Lang.isEmpty(list));
            } 
            
            const valueName = data.substring(index + 1);

            subsectionName = data.substring(0, index);
            list = this.getList(subsections[subsectionName]);

            const item = list.find((it) => {
                return it.name === valueName;
            });

            return (Lang.isUndefined(item) || Lang.isNull(item.value) || (item.value==="None"));
        });

        return allNull ? sentenceObject.dataMissingTemplate : sentenceObject.defaultTemplate;
    }

    // create a map of subsection name to its metadata 
    getSubsections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subsections = {};
        conditionSection.data.forEach((subsection) => {
            subsections[subsection.name] = subsection;
        });

        return subsections;
    }

    // for the given subsection object, return the list of data items it specifies
    // includes resolve value functions (value) per item (items) and item list functions (itemsFunction)
    getList(subsection) {
        return subsection.data_cache;
    }
            
    /* returns a list of snippets of the narrative. Each snippet object has the following attributes:
        text: the text to display
        type: plain, missing, or structured-data
    */
    buildNarrativeSnippetList(template, subsections) {
        let result = [];
        if (template === undefined) {
            return result;
        }
        const len = template.length;
        let index, start = 0;
        let pos = template.indexOf("${"), endpos;
        let list, item, value, type, valueSpec, subsectionName, valueName, fieldName, itemValue, first;
        let _filterItemsByName = (item) => {
            return item.name === valueName;
        };
        let _addNameValueToNarrative = (item) => {
            return item.name + ": " + (Lang.isObject(item.value) ? item.value.value : item.value);
        };
        let _addListItemToResult = (listItem) => {
            if (!first) result.push( { text: ', ', type: 'plain' });
            value = _addNameValueToNarrative(listItem);
            type = "narrative-structured-data";
            result.push({
                text: value,
                type: type,
                item: {
                    value: listItem.value,
                    unsigned: listItem.isUnsigned,
                    name: listItem.name
                }
            });
            if (first) first = false;
        };
        while (pos !== -1) {
            result.push( { text: template.substring(start, pos), type: 'plain'} );
            endpos = template.indexOf("}", pos);
            valueSpec = template.substring(pos + 2, endpos);
            index = valueSpec.indexOf(".");
            if (index === -1) {
                subsectionName = valueSpec;
                if(Lang.isUndefined(subsections[subsectionName])) {
                    result.push( { text: valueSpec, type: 'narrative-missing-data' } );
                } else {
                    list = this.getList(subsections[subsectionName]);
                    if (Lang.isEmpty(list) || Lang.isNull(list)) {
                        value = "missing";
                        type = "narrative-missing-data";
                        result.push( { text: value, type: type } );
                        // add an else-if here? and 'subsections' should contain the unsigned-ness
                    } else {
                        first = true;
                        list.forEach(_addListItemToResult);
                    }
                }
            } else {
                subsectionName = valueSpec.substring(0, index);
                valueName = valueSpec.substring(index + 1);
                fieldName = "value";
                const valueNameDotIndex = valueName.indexOf(".");
                if (valueNameDotIndex !== -1) {
                    fieldName = valueName.substring(valueNameDotIndex + 1);
                    valueName = valueName.substring(0, valueNameDotIndex);
                }
                list = this.getList(subsections[subsectionName]);
                item = list.find(_filterItemsByName);
                itemValue = item[fieldName];

                if (itemValue && item.unsigned) {
                    value = itemValue;
                    type = "narrative-unsigned-data";
                } else if (itemValue && fieldName !== 'value') {
                    value = itemValue;
                    type = "plain";
                } else if (itemValue) {
                    value = itemValue;
                    type = "narrative-structured-data";
                } else {
                    value = "missing";
                    type = "narrative-missing-data";
                }
                result.push( { text: value, type: type, item: item } );
            }
            //result.push( { text: value, type: type } );
            start = endpos + 1;
            if (endpos < len) {
                pos = template.indexOf("${", endpos+1);
            } else {
                pos = -1;
            }
        }
        if (start < len) result.push( { text: template.substring(start), type: 'plain' } );
        return result;
    }

    /**
        Parses through each sentence object in the narrative and chooses the correct template to use for each sentence
        Function concats the sentences together and returns a list of snippets
    */
    buildNarrative() {
        const {conditionSection} = this.props;
        let subsections = this.getSubsections();
        if (Object.keys(subsections).length === 0) {
            return [];
        }

        let narrativeTemplate = "";
        if (conditionSection.narrative === undefined) {
            return [];
        }
        conditionSection.narrative.forEach((sentenceObject) => {
            const template = this.getTemplate(subsections, sentenceObject);
            narrativeTemplate = narrativeTemplate.concat(template).concat(" ");
        });
        return this.buildNarrativeSnippetList(narrativeTemplate, subsections);
    }

    // renders Menu for snippet and associated actions as Menu items
    renderedMenu = (snippet, snippetId, snippetText, arrayIndex) => {
        const onMenuItemClicked = (fn, element, item) => {
            const callback = () => {
                fn(element, item);
            }
            this.closeInsertionMenu(callback);
        }
        let isSigned = true;
        const checkSnippetUnsigned = Lang.isUndefined(snippet.unsigned) ? isSigned : !snippet.unsigned;
        isSigned = Lang.isArray(snippet.value) ? !snippet.value.isUnsigned : checkSnippetUnsigned;

        // convert snippet to format action is expecting
        const transformedSnippet = {
            value: [
                snippet.value,
                snippet.unsigned,
                snippet.source,
                snippet.shortcutData
            ],
        };

        return (
            <VisualizerMenu
                allowItemClick={this.props.allowItemClick}
                arrayIndex={arrayIndex}
                closeInsertionMenu={this.closeInsertionMenu}
                element={transformedSnippet}
                elementDisplayingMenu={this.state.snippetDisplayingMenu}
                elementId={snippetId}
                elementText={snippetText}
                isSigned={isSigned}
                onMenuItemClicked={onMenuItemClicked}
                positionLeft={this.state.positionLeft}
                positionTop={this.state.positionTop}
                rowId={snippet.name}
                unfilteredActions={this.props.actions}
            />
        );
    }

    // Opens the insertion menu for the given snippet id, based on cursor location
    openInsertionMenu = (event, snippetId) => { 
        // Get menu coordinates
        let x = event.clientX;  // Get the horizontal coordinate of mouse
        x += 4;                // push menu a little to the right
        let y = event.clientY;  // Get the vertical coordinate of mouse
        y += 7;                // push a little to the bottom of cursor

        this.setState({ 
            snippetDisplayingMenu: snippetId,
            positionLeft: x,
            positionTop: y,
        });
    }

    // Closes the insertion menu
    closeInsertionMenu = (callback) => { 
        if (callback) { 
            this.setState({ snippetDisplayingMenu: null }, callback);
        } else { 
            this.setState({ snippetDisplayingMenu: null });
        }
    }

    // Gets called for each section in SummaryMetaData.jsx that will be rendered by this component
    render() {
        // build list of snippets that are part of narrative to support typing each snippet so each
        // can be given correct formatting and interactions
        const narrative = this.buildNarrative();
        let className;

        // now go through each snippet and build up HTML to render
        let content = [];
        narrative.forEach((snippet, index) => {
            const highlightedData = this.props.tdpSearchSuggestions.find(s => {
                const matchesSnippet = `${s.valueTitle}: ${s.contentSnapshot}` === snippet.text || s.contentSnapshot === snippet.text;
                return snippet.item && s.valueTitle === snippet.item.name && matchesSnippet;
            });
            let highlightedClass = highlightedData ? ' highlighted' : '';
            if (Lang.isEqual(highlightedData, this.props.highlightedSearchSuggestion)) {
                highlightedClass += ' selected';
            }
            className = snippet.type + highlightedClass;
            const isInsertable = (Lang.isNull(snippet.item) || Lang.isUndefined(snippet.item) ? false : (Lang.isUndefined(snippet.item.isInsertable) ? true : snippet.item.IsInsertable));
            if ((snippet.type === 'narrative-structured-data' || snippet.type === "narrative-unsigned-data") && isInsertable) {
                if (this.props.actions.length > 0) {
                    className += " has-action-menu";
                }
                const snippetId = `${snippet.item.name}-${index}`
                content.push(
                    <span key={snippetId}>
                        <span 
                            className={className} 
                            onClick={(event) => this.openInsertionMenu(event, snippetId)}
                        >
                            {snippet.text}
                        </span>
                        {this.renderedMenu(snippet.item, snippetId, snippet.text, index)}
                    </span>
                );
            } else if (snippet.type !== 'plain') {
                content.push(<span key={index} className={className}>{snippet.text}</span>);
            } else {
                content.push(<span key={index}>{snippet.text}</span>);
            }
        }); 
        
        // return HTML to render
        return (
            <div className="narrative-subsections">
                <p>{content}</p>
            </div>
        );
    }
}

NarrativeNameValuePairsVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    allowItemClick: PropTypes.bool,
    actions: PropTypes.array,
    tdpSearchSuggestions: PropTypes.array
};

export default NarrativeNameValuePairsVisualizer;
