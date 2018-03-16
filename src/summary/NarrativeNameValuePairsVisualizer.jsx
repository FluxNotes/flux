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
    //todo create a new category in here based on isUnsigned results. if data is unsigned return dataUnsignedTemplate
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
                    let val = item.value(patient, condition);
                    if (val) {
                        return {name: item.name, value: val[0], shortcut: item.shortcut, unsigned: val[1]};
                    } else {
                        return {name: item.name, value: null};
                    }
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
            return item.name + ": " + item.value[0];
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
                        // add an else-if here? and 'subsections' should contain the unsigned-ness
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
                
                if(item.value && item.unsigned){
                    value = item.value;
                    type = "unsigned-data";
                }else if (item.value) {
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

    // renders Menu for snippet and associated actions as Menu items
    // Will check whether an action should be rendered as a Menu item based on criteria of each action
    renderedMenu = (snippet, snippetId, actionType) => {
        const {
            snippetDisplayingMenu,
            positionLeft,
            positionTop,
        } = this.state;
        const onMenuItemClicked = (fn, element) => {
            const callback = () => {
                fn(element);
            }
            this.closeInsertionMenu(callback);
        }

        // Filter actions by type
        // TODO: Filter actions by specific criteria
        const filteredActions = this.props.actions.filter(a => a.type === actionType);
        if (filteredActions.length === 0) return null;
        return (
            <Menu
                open={snippetDisplayingMenu === snippetId}
                anchorReference="anchorPosition"
                anchorPosition={{ top: positionTop, left: positionLeft }}
                onClose={(event) => this.closeInsertionMenu()}
                className="narrative-inserter-tooltip"
            >
                {
                    // map filterActions to MenuItems
                    filteredActions.map((a, index) => {
                        const icon = a.icon ? (
                            <ListItemIcon>
                                <FontAwesome name={a.icon} />
                            </ListItemIcon>
                        ) : null;
                        return (
                            <MenuItem
                                key={`${snippetId}-${index}`}
                                onClick={() => onMenuItemClicked(a.handler, snippet)}
                                className="narrative-inserter-box"
                            >
                                {icon}
                                <ListItemText className='narrative-inserter-menu-item' inset primary={a.text} />
                            </MenuItem>
                        )
                    })
                }
            </Menu>
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
        
        // now go through each snippet and build up HTML to render
        let content = [];
        narrative.forEach((snippet, index) => {
            if ((snippet.type === 'structured-data' || snippet.type === "unsigned-data") && this.props.allowItemClick) {
                const snippetId = `${snippet.item.name}-${index}`
                // const snippetValue = (Lang.isArray(snippet.item.value) ? snippet.item.value[0] : snippet.item.value);
                content.push(
                    <span key={snippetId}>
                        <span 
                            className={snippet.type} 
                            onClick={(event) => this.openInsertionMenu(event, snippetId)}
                        >
                            {snippet.text}
                        </span>
                        {this.renderedMenu(snippet.item, snippetId, "structured-data")}
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
    allowItemClick: PropTypes.bool,
    actions: PropTypes.array
};

export default NarrativeNameValuePairsVisualizer;
