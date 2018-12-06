import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { ListItemText } from 'material-ui/List';
import Button from '../elements/Button';
import Chip from 'material-ui/Chip';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import './TargetedDataSection.css';
import Lang from 'lodash';
import { FormControl, FormGroup, FormLabel, FormControlLabel } from 'material-ui';

const SHOW_FILTER_AS_MENU = false;

export default class TargetedDataSection extends Component {
    constructor(props) {
        super(props);
        const optionsForSection = this.getOptions(props.section);
        const defaultVisualizer = this.determineDefaultVisualizer(props.section, props.clinicalEvent, optionsForSection);

        let filters = {};
        this.props.section.data.forEach(subsection => {
            filters[`${this.props.section.name}-${subsection.name}`] = Lang.cloneDeep(subsection.filters) || [];
        });

        this.tdpSearchSuggestions = [];

        // this.state.defaultVisualizer is the default visualization, this.state.chosenVisualizer changes when icons are clicked
        this.state = {
            defaultVisualizer: defaultVisualizer,
            chosenVisualizer: null,
            sectionNameSuffix: "",
            anchorEl: null,
            positionLeft: 0,
            positionTop: 0,
            expanded: false,
            filters
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!Lang.isNull(this.props.highlightedSearchSuggestion) && !Lang.isNull(nextProps.highlightedSearchSuggestion) && !Lang.isEqual(this.props.highlightedSearchSuggestion, nextProps.highlightedSearchSuggestion)) {
            const sectionName = this.props.section.name;
            if (this.props.highlightedSearchSuggestion.section === sectionName) return true;
            if (nextProps.highlightedSearchSuggestion.section !== sectionName) return false;
        }
        return true;
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

        const previousTDPSuggestions = this.props.searchSuggestions.filter(s => s.source === 'structuredData');
        const nextTDPSuggestions = nextProps.searchSuggestions.filter(s => s.source === 'structuredData');

        if (!Lang.isEqual(previousTDPSuggestions, nextTDPSuggestions)) this.tdpSearchSuggestions = nextTDPSuggestions;
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
        this.getAndIndexSectionData(this.props.section);
        this.setState({ chosenVisualizer });
        this.props.preferenceManager.setPreference(this.props.section.name, chosenVisualizer);
    }

    determineVisualizerName = () => {
        let visualization;
        if (this.state.chosenVisualizer === null) {
            visualization = this.state.defaultVisualizer;
        } else {
            visualization = this.state.chosenVisualizer;
        }
        return visualization;
    }

    renderIcon = (type, i) => {
        const visualizerName = this.determineVisualizerName();
        const isSelected = visualizerName === type;
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
 
        // Get the current filter value 
        const currentVal = this.getFilterValue(filter, subsectionName);
        // Update the filter value in preference manager
        this.props.preferenceManager.setPreference(`${section.name}-${subsectionName}-${filter.id}`,  !currentVal);
      

        // Update state to also reflect changed filter value
        const selectedFilter = filters[`${section.name}-${subsectionName}`].find(f => f.name === filter.name);
        selectedFilter.value = !currentVal;
 
        // Set state and re-index data to properly search currently visible data
        this.setState({ filters });
        const subsections = section === null ? [] : section.data;
        subsections.forEach(subsection => {
            subsection.data_cache = null;
        });
        this.getAndIndexSectionData(section);
    }
 
    getFilterValue = (filter, subsectionName) => {
        const { section } = this.props;
        const subsectionFilters = this.props.preferenceManager.getPreference(`${section.name}-${subsectionName}-${filter.id}`);
        if(Lang.isNull(subsectionFilters)) return true;
        return subsectionFilters;   
        
    }  

    renderFilters = (patient, condition) => {
        let totalNumFilters = 0;
        this.props.section.data.forEach((subsection) => {
            const filters = this.state.filters[`${this.props.section.name}-${subsection.name}`] || [];
            totalNumFilters += filters.length;
        });
        if (totalNumFilters === 0) {
            return null;
        }
        if (SHOW_FILTER_AS_MENU) {
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
                                            checked={this.getFilterValue(filter, subsection.name)}
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
        } else {
            let criteriaGroups = {};
            let criteriaCheckboxes, categoryName;
            let criteriaSummaryItems = [];
            this.props.section.data.forEach((subsection) => {
                this.state.filters[`${this.props.section.name}-${subsection.name}`].forEach((filter) => {
                    const propertyValue = filter.propertyValueFunction ? filter.propertyValueFunction(patient, condition) : null;
                    categoryName = filter.category || "";
                    criteriaCheckboxes = criteriaGroups[categoryName];
                    if (Lang.isUndefined(criteriaCheckboxes)) {
                        criteriaCheckboxes = [];
                        criteriaGroups[categoryName] = criteriaCheckboxes;
                    }
                    let label = filter.name;
                    if (!Lang.isNull(propertyValue)) label += `: ${propertyValue}`;
                    const filterValue = this.getFilterValue(filter, subsection.name);
                    criteriaCheckboxes.push(
                        <FormControlLabel 
                            key={filter.name}
                            control={
                                <Checkbox 
                                    checked={filterValue}
                                    onChange={() => this.updateFilterValue(filter, subsection.name)}
                                    value={filter.name}
                                    className="checkbox" />
                        }
                        label={label}
                        />
                    );
                    if (filterValue) {
                        criteriaSummaryItems.push(
                            <Chip
                                key={filter.name}
                                label={label}
                                onDelete={() => this.updateFilterValue(filter, subsection.name)}
                            >
                            </Chip>);    
                    }
                });
            });
            const { expanded } = this.state;
            let expansionInstructions = <span className='expansion-instructions'>{expanded ? 'Click here to collapse criteria...' : 'Click here to edit criteria...'}</span>;
            return (
                <div>
                    <ExpansionPanel expanded={expanded} onChange={(e, newExpanded) => this.setState({expanded: newExpanded})}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <div className='expansion-summary'>
                                {criteriaSummaryItems}
                                {expansionInstructions}
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>{this.layoutCriteriaCheckboxes(criteriaGroups)}</ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            );
        }
    }

    layoutCriteriaCheckboxes = (criteriaGroups) => {
        const keys = Object.keys(criteriaGroups);
        const numGroups = keys.length;
        if (numGroups === 0) return null;
        if (numGroups === 1) return <FormControl component="fieldset">{criteriaGroups[keys[0]]}</FormControl>;
        return (
            <div>
                {keys.map(key => {
                    return (<FormControl component="fieldset" key={key}>
                                <FormLabel component="legend">{key}</FormLabel>
                                <FormGroup>
                                    {criteriaGroups[key]}
                                </FormGroup>
                            </FormControl>);   
                })}
            </div>
        );
    }

    getAndIndexSectionData(section) {
        const { patient, condition, type, loginUser, searchIndex } = this.props;
        const visualizerName = this.determineVisualizerName();

        const viz = this.props.visualizerManager.getVisualizer(type, visualizerName);
        if (Lang.isNull(viz)) return null;
        const sectionTransform = viz.transform;
        if (section.resetData) section.resetData();
        searchIndex.removeDataBySection(section.name);

        let typeToIndex;
        if (sectionTransform) {
            typeToIndex = viz.renderedFormat;
        } else {
            typeToIndex = type;
        }
        const indexer = this.props.visualizerManager.getIndexer(typeToIndex);
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
        }

        const subsections = patient === null || condition === null || section === null ? [] : section.data;
        subsections.forEach(subsection => {
            let items = subsection.items;
            let itemsFunction = subsection.itemsFunction;
            let list, newSubsection;

            if (sectionTransform) {
                newSubsection = sectionTransform(patient, condition, subsection, this.getFilterValue);
                list = newSubsection.data_cache;
                Object.assign(subsection, newSubsection);
            } else {
                newSubsection = subsection;
                if (Lang.isUndefined(items)) {
                    list = itemsFunction(patient, condition, subsection, this.getFilterValue);
                } else {
                    list = items.map((item, i) => {
                        if (Lang.isNull(item.value)) {
                            return {name: item.name, value: null};
                        } else {
                            let val = item.value(patient, condition, loginUser);
                            if (val) {
                                return {name: item.name, value: val.value, shortcutData: val.shortcutData, unsigned: val.isUnsigned, source: val.source, when: val.when};
                            } else {
                                return {name: item.name, value: null};
                            }
                        }
                    });
                }
            }
            subsection.data_cache = list;
            if (!Lang.isUndefined(subsection.nameFunction)) subsection.name = subsection.nameFunction();
            if (indexer) {
                indexer.indexData(section.name, subsection.name, list, searchIndex, this.props.moveToSubsectionFromSearch, newSubsection);
            }
        });

        return viz;
    }

    // renderSection checks the type of data that is being passed and chooses the correct component to render the data
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
                tdpSearchSuggestions={this.tdpSearchSuggestions}
                highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
            />
        );
    }

    render() {
        const { section, patient, condition, clinicalEvent } = this.props;
        const visualizationOptions = this.getOptions(section);
        const selectedCondition = condition && condition.type;
        const encounterView = clinicalEvent === "encounter";
        const notFiltered = !Lang.isUndefined(section.notFiltered) && section.notFiltered;

        const viz = this.getAndIndexSectionData(section);
        
        let highlightClass;
        if (!Lang.isUndefined(this.tdpSearchSuggestions)) {
            const matchingSection = this.tdpSearchSuggestions.find(s => {
                return s.valueTitle === 'Section' && s.section === section.name;
            });
            highlightClass = matchingSection ? ' section-header__highlighted' : '';
            if (matchingSection && !Lang.isNull(this.props.highlightedSearchSuggestion)
                && this.props.highlightedSearchSuggestion.section === matchingSection.section
                && this.props.highlightedSearchSuggestion.valueTitle === 'Section') highlightClass += ' section-header__selected';
        } else {
            highlightClass = '';
        }

        return (
            <div id="targeted-data-section">
                <h2 className="section-header">
                    <span className={`section-header__name${highlightClass}`}>{section.name}</span><span>&nbsp;{this.state.sectionNameSuffix}</span>
                    {!encounterView && !notFiltered && <span className="section-header__condition">{selectedCondition}</span>}
                    {SHOW_FILTER_AS_MENU && this.renderFilters(patient, condition)}
                    {this.renderVisualizationOptions(visualizationOptions)}
                </h2>
                {!SHOW_FILTER_AS_MENU && this.renderFilters(patient, condition)}

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
    searchSuggestions: PropTypes.array,
    highlightedSearchSuggestion: PropTypes.object,
}
