import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { ListItemText } from 'material-ui/List';
import Button from '../elements/Button';
import './TargetedDataSection.css';
import Lang from 'lodash';

export default class TargetedDataSection extends Component {
    constructor(props) {
        super(props);
        const optionsForSection = this.getOptions(props.section);
        const defaultVisualizer = this.determineDefaultVisualizer(props.section, props.clinicalEvent, optionsForSection);

        let filters = {};
        this.props.section.data.forEach(subsection => {
            filters[`${this.props.section.name}-${subsection.name}`] = Lang.cloneDeep(subsection.filters) || [];
        });

        // this.state.defaultVisualizer is the default visualization, this.state.chosenVisualizer changes when icons are clicked
        this.state = {
            defaultVisualizer: defaultVisualizer,
            chosenVisualizer: null,
            sectionNameSuffix: "",
            anchorEl: null,
            positionLeft: 0,
            positionTop: 0,
            filters
        };
    }

    componentDidUpdate() {
        const optionsForSection = this.getOptions(this.props.section);
        const defaultVisualizer = this.determineDefaultVisualizer(this.props.section, this.props.clinicalEvent, optionsForSection);
        //const defaultOrTabular = optionsForSection.length > 0 ? optionsForSection[0] : 'tabular';
        if (this.state.defaultVisualizer !== defaultVisualizer ||
            (this.state.chosenVisualizer !== null && !optionsForSection.includes(this.state.chosenVisualizer))) {
            this.setState({ defaultVisualizer, chosenVisualizer: null});
        }
    }

    componentDidMount() {
        this.getNameSuffix(this.props.section)
    } 

    componentWillMount() {
        const {section} = this.props;
        if (section.nameSuffix) {
            this.setState({ sectionNameSuffix: section.nameSuffix });
        }
    } 

    componentWillReceiveProps = (nextProps) => {
        this.getNameSuffix(nextProps.section);

        if (!Lang.isEqual(nextProps.section, this.props.section)) {
            let filters = {};
            nextProps.section.data.forEach(subsection => {
                filters[`${nextProps.section.name}-${subsection.name}`] = Lang.cloneDeep(subsection.filters) || [];
            });
            this.setState({ filters });
        }
    } 

    determineDefaultVisualizer = (section, clinicalEvent, optionsForSection) => {
        if (optionsForSection.length === 0) return 'tabular';
        let result = null;
        const preferredVisualizer = this.props.preferenceManager.getPreference(this.props.section.name);
        if (preferredVisualizer) {
            result = this.determineIfDefaultVisualizerItemAffectsCurrentSituation(preferredVisualizer, clinicalEvent, optionsForSection);
            if (!Lang.isNull(result)) return result;
        }
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
        this.props.searchIndex.removeDataBySection(this.props.section.name);
        this.indexSectionData(this.props.section);
        this.setState({ chosenVisualizer });
        this.props.preferenceManager.setPreference(this.props.section.name, chosenVisualizer);
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

    getNameSuffix =  (section) => {
        if(section.nameSuffixFunction) {
            const result = section.nameSuffixFunction(section);
        
            if (Lang.isObject(result) && !Lang.isUndefined(result.then)){
                result.then( suffix => {
                    this.setState({
                        sectionNameSuffix: suffix
                    });
                });
            } else {
                this.setState({ sectionNameSuffix: result });
            }
        }
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

    handleFilterMenuOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            positionLeft: event.clientX + 4,
            positionTop: event.clientY + 7
        });
    }

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    }

    updateFilterValue = (filter, subsectionName) => {
        const { section } = this.props;
        const { filters } = this.state;

        // Update subsection data to reflect changed filter value
        const currentSubsection = section.data.find(subsection => subsection.name === subsectionName);
        const currentSubsectionFilter = currentSubsection.filters.find(f => f.name === filter.name);
        currentSubsectionFilter.value = !filter.value;

        // Update state to also reflect changed filter value
        const selectedFilter = filters[`${this.props.section.name}-${subsectionName}`].find(f => f.name === filter.name);
        selectedFilter.value = !filter.value;

        // Set state and re-index data to properly search currently visible data
        this.setState({ filters });
        this.indexSectionData(section);
    }

    renderFilters = () => {
        let totalNumFilters = 0;
        this.props.section.data.forEach((subsection) => {
            const filters = this.state.filters[`${this.props.section.name}-${subsection.name}`] || [];
            totalNumFilters += filters.length;
        });
        if (totalNumFilters === 0) {
            return null;
        }

        return (
            <div className="right-icons">
                <Button className="small-btn" onClick={this.handleFilterMenuOpen}>Filter</Button>
                <Menu
                    id="filter-menu"
                    anchorEl={this.state.anchorEl}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: this.state.positionTop, left: this.state.positionLeft }}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleMenuClose}
                    className="menu-list">
                    {this.props.section.data.map((subsection) => {
                        return this.state.filters[`${this.props.section.name}-${subsection.name}`].map((filter) => {
                            return (
                                <MenuItem key={filter.name}>
                                    <Checkbox
                                        checked={filter.value}
                                        onChange={() => this.updateFilterValue(filter, subsection.name)}
                                        value={filter.name}
                                        className="checkbox"/>
                                    <ListItemText inset primary={filter.name} />
                                </MenuItem>
                            );
                        });
                    })}
                </Menu>
            </div>
        );
    }

    indexSectionData(section) {
        const { patient, condition, type, loginUser, searchIndex } = this.props;
        const visualization = this.checkVisualization();

        const viz = this.props.visualizerManager.getVisualizer(type, visualization);

        if (Lang.isNull(viz)) return null;
        const sectionTransform = viz.transform;
        if (section.resetData) section.resetData();
        searchIndex.removeDataBySection(section.name);

        const subsections = patient === null || condition === null || section === null ? [] : section.data;
        subsections.forEach(subsection => {
            let items = subsection.items;
            let itemsFunction = subsection.itemsFunction;
            let list, newSubsection;
            let typeToIndex;

            if (sectionTransform) {
                typeToIndex = viz.renderedFormat;
                newSubsection = sectionTransform(patient, condition, subsection);
                list = newSubsection.data_cache;
                Object.assign(subsection, newSubsection);
            } else {
                newSubsection = subsection;
                typeToIndex = type;
                if (Lang.isUndefined(items)) {
                    list = itemsFunction(patient, condition, subsection);
                } else {
                    list = items.map((item, i) => {
                        if (Lang.isNull(item.value)) {
                            return {name: item.name, value: null};
                        } else {
                            let val = item.value(patient, condition, loginUser);
                            if (val) {
                                return {name: item.name, value: val.value, shortcut: item.shortcut, unsigned: val.isUnsigned, source: val.source, when: val.when};
                            } else {
                                return {name: item.name, value: null};
                            }
                        }
                    });
                }
            }
            subsection.data_cache = list;
            const indexer = this.props.visualizerManager.getIndexer(typeToIndex);
            if (!Lang.isUndefined(subsection.nameFunction)) subsection.name = subsection.nameFunction();
            if (indexer) {
                const sectionId = section.name.toLowerCase().replace(/ /g, '_');
                searchIndex.addSearchableData({
                    id: `${sectionId}_${sectionId}`,
                    section: section.name,
                    subsection: "",
                    valueTitle: "Section",
                    value: section.name,
                    onHighlight: this.props.moveToSubsectionFromSearch
                });
                indexer.indexData(section.name, subsection.name, list, searchIndex, this.props.moveToSubsectionFromSearch, newSubsection);
            }
        });

        return viz;
    }

    // renderSection checks the type of data that is being passed and chooses the correct component to render the data
    // TODO: Add a List type and a tabular renderer for it for Procedures section. case where left column is data
    //       and not just a label
    renderSection = (section, viz) => {
        const { patient, condition, allowItemClick, isWide, loginUser, actions, searchIndex } = this.props;

        if (Lang.isNull(viz)) return null;
        const Visualizer = viz.visualizer;
        const sectionTransform = viz.transform;

        return (
            <Visualizer
                patient={patient}
                condition={condition}
                conditionSection={section}
                sectionTransform={sectionTransform}
                allowItemClick={allowItemClick}
                isWide={isWide}
                loginUser={loginUser}
                actions={actions}
                searchIndex={searchIndex}
                tdpSearchSuggestions={this.props.tdpSearchSuggestions}
            />
        );
    }

    render() {
        const { section, condition, clinicalEvent, tdpSearchSuggestions } = this.props;
        const visualizationOptions = this.getOptions(section);
        const selectedCondition = condition && condition.type;
        const encounterView = clinicalEvent === "encounter";
        const notFiltered = !Lang.isUndefined(section.notFiltered) && section.notFiltered;

        const viz = this.indexSectionData(section);
        
        let highlightClass;
        if (!Lang.isUndefined(tdpSearchSuggestions)) {
            const matchingSection = tdpSearchSuggestions.find(s => {
                return s.valueTitle === 'Section' && s.section === section.name;
            });
            highlightClass = matchingSection ? ' section-header__highlighted' : '';
        } else {
            highlightClass = '';
        }

        return (
            <div id="targeted-data-section">
                <h2 className="section-header">
                    <span className={`section-header__name${highlightClass}`}>{section.name}</span><span>&nbsp;{this.state.sectionNameSuffix}</span>
                    {!encounterView && !notFiltered && <span className="section-header__condition">{selectedCondition}</span>}
                    {this.renderFilters()}
                    {this.renderVisualizationOptions(visualizationOptions)}
                </h2>

                {encounterView && !notFiltered && <div className="section-header__condition encounter">{selectedCondition}</div>}

                {this.renderSection(section, viz)}
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
    allowItemClick: PropTypes.bool,
    isWide: PropTypes.bool.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    loginUser: PropTypes.object.isRequired,
    preferenceManager: PropTypes.object.isRequired,
    searchIndex: PropTypes.object.isRequired,
    tdpSearchSuggestions: PropTypes.array
}
