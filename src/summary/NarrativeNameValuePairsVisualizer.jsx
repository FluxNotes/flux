import { ListItemIcon, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import FontAwesome from 'react-fontawesome';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import './NarrativeNameValuePairsVisualizer.css';

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
    getTemplate(subsections, sentenceObject) {
        if (Lang.isNull(sentenceObject.dataMissingTemplate) || Lang.isUndefined(sentenceObject.dataMissingTemplate)) {
            return sentenceObject.defaultTemplate;
        }

        // Check if every object in useDataMissingTemplateCriteria is null, empty, or undefined
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

            return (Lang.isUndefined(item) || Lang.isNull(item.value));
        });

        return allNull ? sentenceObject.dataMissingTemplate : sentenceObject.defaultTemplate;
    }

    // create a map of subsection name to its metadata 
    getSubsections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subsections = [];
        conditionSection.data.forEach((subsection) => {
            subsections[subsection.name] = subsection;
        });

        return subsections;
    }

    // for the given subsection object, return the list of data items it specifies
    // includes resolve value functions (value) per item (items) and item list functions (itemsFunction)
    getList(subsection) {
        const {patient, condition, conditionSection} = this.props;
        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        const items = subsection.items;
        const itemsFunction = subsection.itemsFunction;

        let list = null;

        if (Lang.isUndefined(items)) {
            list = itemsFunction(patient, condition, subsection);
        } else {
            list = items.map((item, i) => {
                if (Lang.isNull(item.value)) {
                    return {name: item.name, value: null};
                } else {
                    return {name: item.name, value: item.value(patient, condition), shortcut: item.shortcut};
                }
            });
        }

        return list;
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
        let list, item, value, type, valueSpec, subsectionName, valueName, first;
        let _filterItemsByName = (item) => {
            return item.name === valueName;
        };
        let _addLabResultToNarrative = (item) => {
            return item.name + ": " + item.value;
        };
        let _addListItemToResult = (listItem) => {
            if (!first) result.push( { text: ', ', type: 'plain' });
            value = _addLabResultToNarrative(listItem);
            type = "structured-data";
            result.push( { text: value, type: type, item: listItem } );
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
                    result.push( { text: valueSpec, type: 'missing-data' } );
                } else {
                    list = this.getList(subsections[subsectionName]);
                    if (Lang.isEmpty(list) || Lang.isNull(list)) {
                        value = "missing";
                        type = "missing-data";
                        result.push( { text: value, type: type } );
                    } else {
                        first = true;
                        list.forEach(_addListItemToResult);
                    }
                }
            } else {
                subsectionName = valueSpec.substring(0, index);
                valueName = valueSpec.substring(index + 1);
                list = this.getList(subsections[subsectionName]);
                item = list.find(_filterItemsByName);
                if (item.value) {
                    value = item.value;
                    type = "structured-data";
                } else {
                    value = "missing";
                    type = "missing-data";
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

        let narrativeTemplate = "";
        if (conditionSection.narrative === undefined) {
            return [];
        }
        conditionSection.narrative.forEach((sentenceObject) => {
            const template = this.getTemplate(subsections, sentenceObject);
            narrativeTemplate = narrativeTemplate.concat(template).concat(". ");
        });

        return this.buildNarrativeSnippetList(narrativeTemplate, subsections);
    }

    // Opens the insertion menu for the given snippet id, based on cursor location
    openInsertionMenu = (event, snippetId) => { 
        // Get menu coordinates
        let x = event.clientX;  // Get the horizontal coordinate of mouse
        x += 20;                // push menu a little to the right
        let y = event.clientY;  // Get the vertical coordinate of mouse
        y += 10;                // push a little to the bottom of cursor

        this.setState({ 
            snippetDisplayingMenu: snippetId,
            positionLeft: x,
            positionTop: y,
        });
    }

    // Closes the insertion menu
    closeInsertionMenu = () => { 
        this.setState({ snippetDisplayingMenu: null });
    }

    // Gets called for each section in SummaryMetaData.jsx that will be rendered by this component
    render() {
        // build list of snippets that are part of narrative to support typing each snippet so each
        // can be given correct formatting and interactions
        const narrative = this.buildNarrative();
        const {
          snippetDisplayingMenu,
          positionLeft,
          positionTop,
        } = this.state;
        
        const insertItem = (item, snippetId) => {
            this.props.onItemClicked(item);
            this.closeInsertionMenu(snippetId);
        };
        
        // now go through each snippet and build up HTML to render
        let content = [];
        narrative.forEach((snippet, index) => {
            if (snippet.type === 'structured-data' && this.props.allowItemClick) {
                const snippetId = `${snippet.item.name}-${index}`
                content.push(
                    <span key={snippetId}>
                        <span 
                            className={snippet.type} 
                            onClick={(event) => this.openInsertionMenu(event, snippetId)}
                        >
                            {snippet.text}
                        </span>
                        <Menu
                            open={snippetDisplayingMenu === snippetId}
                            anchorReference="anchorPosition"
                            anchorPosition={{ top: positionTop, left: positionLeft }}
                            onClose={(event) => this.closeInsertionMenu(snippetId)}
                            className="narrative-inserter-tooltip"
                        >
                            <MenuItem   
                                onClick={() => insertItem(snippet.item, snippetId)}
                                className="narrative-inserter-box"
                            >
                                <ListItemIcon>
                                    <FontAwesome name="plus"/>
                                </ListItemIcon>
                                <ListItemText className='narrative-inserter-menu-item' inset primary={`Insert "${snippet.item.value}"`} />
                            </MenuItem>
                        </Menu>
                    </span>
                );
            } else if (snippet.type !== 'plain') {
                content.push(<span key={index} className={snippet.type}>{snippet.text}</span>);
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
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default NarrativeNameValuePairsVisualizer;
