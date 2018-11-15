import Menu, { MenuItem } from 'material-ui/Menu';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class VisualizerMenu extends Component {

    // Filter Actions by whenToDisplay property on an actions.
    filterActions = () => {
        const filteredActions = this.props.unfilteredActions.filter((a) => {
            if (a.whenToDisplay.function && !a.whenToDisplay.function(this.props.element, this.props.arrayIndex, this.props.subsectionName, this.props.isSigned, this.props.allowItemClick)) return false;
            if (a.whenToDisplay.valueExists && Lang.isNull(this.props.element)) return false;
            if (a.whenToDisplay.displayInSubsections && !a.whenToDisplay.displayInSubsections.includes(this.props.subsectionName)) return false;
            if (a.whenToDisplay.displayForColumns && !a.whenToDisplay.displayForColumns.includes(this.props.arrayIndex)) return false;
            if (a.whenToDisplay.existingValueSigned !== "either" && a.whenToDisplay.existingValueSigned !== this.props.isSigned) return false;
            return a.whenToDisplay.editableNoteOpen === "either" || String(a.whenToDisplay.editableNoteOpen) === String(this.props.allowItemClick);
        });
        return filteredActions;
    }

    arrayConvertArrayToObject = (a) => {
        if (Lang.isArray(a.value)) {
            return {    value: a.value[0],
                        isUnsigned: a.value[1],
                        source: a.value[2],
                        shortcutData: a.value[3] };
        } else if(Lang.isObject(a.value)) {
            return a.value;
        } else {
            return a;
        }
    }
    
    // Renders a menu for an element with its associated meny items.
    render() {
        const filteredActions = this.filterActions(this.props.unfilteredActions);
        if (filteredActions.length === 0) return null;
        return (
            <Menu
                open={this.props.elementDisplayingMenu === this.props.elementId}
                anchorReference="anchorPosition"
                anchorPosition={{ top: this.props.positionTop, left: this.props.positionLeft }}
                onClose={(event) => this.props.closeInsertionMenu()}
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
                        let textSpec;
                        if (a.text) {
                            textSpec = a.text;
                        } else {
                            textSpec = a.textfunction(this.arrayConvertArrayToObject(this.props.element));
                        }
                        let disabled = false;
                        if (!Lang.isUndefined(a.isdisabled)) {
                            disabled = a.isdisabled(this.arrayConvertArrayToObject(this.props.element));
                        }
                        const text = textSpec.replace("{elementText}", this.props.elementText);
                        return (
                            <MenuItem
                                key={`${this.props.elementId}-${index}`}
                                disabled={disabled}
                                onClick={() => this.props.onMenuItemClicked(a.handler, this.arrayConvertArrayToObject(this.props.element), this.props.rowId)}
                                className="narrative-inserter-box"
                            >
                                {icon}
                                <ListItemText className='narrative-inserter-menu-item' inset primary={text} />
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        );
    }
}

VisualizerMenu.propTypes = {
    allowItemClick: PropTypes.bool.isRequired,
    arrayIndex: PropTypes.number.isRequired,
    closeInsertionMenu: PropTypes.func.isRequired,
    element: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.string.isRequired]),
    elementDisplayingMenu: PropTypes.string,
    elementId: PropTypes.string.isRequired,
    elementText: PropTypes.string.isRequired,
    isSigned: PropTypes.bool.isRequired,
    onMenuItemClicked: PropTypes.func.isRequired,
    positionLeft: PropTypes.number.isRequired,
    positionTop: PropTypes.number.isRequired,
    rowId: PropTypes.oneOfType([
        PropTypes.array.isRequired,
        PropTypes.string.isRequired]),
    subsectionName: PropTypes.string,
    unfilteredActions: PropTypes.array.isRequired
}