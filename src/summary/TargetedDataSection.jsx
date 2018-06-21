import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from '../elements/Button';
import './TargetedDataSection.css';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import { ListItemIcon, ListItemText } from 'material-ui/List';

export default class TargetedDataSection extends Component {
    constructor(props) {
        super(props);
        const optionsForSection = this.getOptions(props.section);
        const defaultVisualizer = this.determineDefaultVisualizer(props.section, props.clinicalEvent, optionsForSection);

        // this.state.defaultVisualizer is the default visualization, this.state.chosenVisualizer changes when icons are clicked
        this.state = {
            defaultVisualizer: defaultVisualizer,
            chosenVisualizer: null
        };
    }

    componentDidUpdate() {
        const optionsForSection = this.getOptions(this.props.section);
        const defaultVisualizer = this.determineDefaultVisualizer(this.props.section, this.props.clinicalEvent, optionsForSection);
        //const defaultOrTabular = optionsForSection.length > 0 ? optionsForSection[0] : 'tabular';
        if (this.state.defaultVisualizer !== defaultVisualizer ||
            (this.state.chosenVisualizer !== null && !optionsForSection.includes(this.state.chosenVisualizer))) {
            this.setState({ defaultVisualizer, chosenVisualizer: null });
        }
    }

    filterAndDisplayActions = (unfilteredActions, isSigned, arrayIndex, subsectionName, element, elementText, closeInsertionMenu, onMenuItemClicked, elementDisplayingMenu, positionLeft, positionTop) => {
        
        const filteredActions = unfilteredActions.filter((a) => {
            if (a.whenToDisplay.valueExists && Lang.isNull(element)) return false;
            if (a.whenToDisplay.displayInSubsections &&  !a.whenToDisplay.displayInSubsections.includes(subsectionName)) return false;
            if (a.whenToDisplay.displayForColumns && !a.whenToDisplay.displayForColumns.includes(arrayIndex)) return false;
            if (a.whenToDisplay.existingValueSigned !== "either" && a.whenToDisplay.existingValueSigned !== isSigned) return false;
            // Is allow item clicked going to update properly?
            return a.whenToDisplay.editableNoteOpen === "either" || String(a.whenToDisplay.editableNoteOpen) === String(this.props.allowItemClick);
        });
        if (filteredActions.length === 0) return null;
        return (
            <Menu
                open={elementDisplayingMenu === subsectionName}
                anchorReference="anchorPosition"
                anchorPosition={{ top: positionTop, left: positionLeft }}
                onClose={(event) => closeInsertionMenu()}
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
                        const text = a.text.replace("{elementText}", elementText);
                        return (
                            <MenuItem
                                key={`${subsectionName}-${index}`}
                                onClick={() => onMenuItemClicked(a.handler, element)}
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

    determineDefaultVisualizer = (section, clinicalEvent, optionsForSection) => {
        if (optionsForSection.length === 0) return 'tabular';
        let result = null;
        if (section.defaultVisualizer) {
            if (Lang.isArray(section.defaultVisualizer)) {
                let defaultResult = null;
                let specificResult = null;
                section.defaultVisualizer.forEach((defaultVisualizerItem) => {
                    if (!Lang.isObject(defaultVisualizerItem)) {
                        defaultResult = defaultVisualizerItem;
                    } else {
                        result = this.determineIfDefaultVisualizerItemAffectsCurrentSituation(defaultVisualizerItem, clinicalEvent, optionsForSection);
                        if (!Lang.isNull(result)) specificResult = result;
                    }
                });
                if (!Lang.isNull(specificResult)) return specificResult;
                if (!Lang.isNull(defaultResult)) return defaultResult;
            } else {
                result = this.determineIfDefaultVisualizerItemAffectsCurrentSituation(section.defaultVisualizer, clinicalEvent, optionsForSection);
                if (!Lang.isNull(result)) return result;
            }
        }
        return optionsForSection[0];
    }

    determineIfDefaultVisualizerItemAffectsCurrentSituation = (defaultVisualizer, clinicalEvent, optionsForSection) => {
        if (Lang.isObject(defaultVisualizer)) {
            if (clinicalEvent === defaultVisualizer.clinicalEvent) {
                return defaultVisualizer.defaultVisualizer;
            }
        } else {
            if (optionsForSection.includes(defaultVisualizer)) {
                return defaultVisualizer;
            }
        }
        return null;
    }

    handleViewChange = (chosenVisualizer) => {
        this.setState({ chosenVisualizer });
    }

    checkVisualization = () => {
        let visualization;
        if (this.state.chosenVisualizer === null) {
            visualization = this.state.defaultVisualizer;
        } else {
            visualization = this.state.chosenVisualizer;
        }
        return visualization;
    }

    renderIcon = (type, i) => {
        const visualization = this.checkVisualization();
        const isSelected = visualization === type;
        let icon = this.props.visualizerManager.renderIcon(type, isSelected);

        if (icon !== null) {
            return (
                <Button
                    key={i}
                    className="small-btn"
                    id={type}
                    onClick={() => this.handleViewChange(type)}>
                    {icon}
                </Button>
            );
        }
        return null;
    }

    getVisualizationsIcons = (options) => {
        let visualizationButtons = options.map((type, i) => this.renderIcon(type, i));
        return visualizationButtons;
    }

    getOptions = (section) => {
        return this.props.visualizerManager.getSupportedVisualizerTypesForDataType(section.type);
    }

    renderVisualizationOptions = (options) => {
        if (options.length > 1) {
            return (
                <div className="right-icons">
                    {this.getVisualizationsIcons(options)}
                </div>
            );
        } else {
            return null;
        }
    }

    // renderSection checks the type of data that is being passed and chooses the correct component to render the data
    // TODO: Add a List type and a tabular renderer for it for Procedures section. case where left column is data
    //       and not just a label
    renderSection = (section) => {
        const { patient, condition, allowItemClick, isWide, type, actions } = this.props;
        const visualization = this.checkVisualization();

        const viz = this.props.visualizerManager.getVisualizer(type, visualization);
        if (Lang.isNull(viz)) return null;

        const sectionTransform = viz.transform;
        const Visualizer = viz.visualizer;

        return (
            <Visualizer
                patient={patient}
                condition={condition}
                filterAndDisplayActions={this.filterAndDisplayActions}
                conditionSection={section}
                sectionTransform={sectionTransform}
                allowItemClick={allowItemClick}
                isWide={isWide}
                actions={actions}
            />
        );
    }

    render() {
        const { section, condition, clinicalEvent } = this.props;
        const visualizationOptions = this.getOptions(section);
        const selectedCondition = condition && condition.type;
        const encounterView = clinicalEvent === "encounter";
        const notFiltered = !Lang.isUndefined(section.notFiltered) && section.notFiltered;

        return (
            <div id="targeted-data-section">
                <h2 className="section-header">
                    <span className="section-header__name">{section.name}</span>
                    {!encounterView && !notFiltered && <span className="section-header__condition">{selectedCondition}</span>}
                    {this.renderVisualizationOptions(visualizationOptions)}
                </h2>

                {encounterView && !notFiltered && <div className="section-header__condition encounter">{selectedCondition}</div>}

                {this.renderSection(section)}
            </div>
        );
    }
}

TargetedDataSection.propTypes = {
    type: PropTypes.string,
    section: PropTypes.object,
    patient: PropTypes.object,
    condition: PropTypes.object,
    onItemClicked: PropTypes.func,
    actions: PropTypes.array,
    allowItemClick: PropTypes.bool.isRequired,
    isWide: PropTypes.bool.isRequired,
    clinicalEvent: PropTypes.string.isRequired
}
