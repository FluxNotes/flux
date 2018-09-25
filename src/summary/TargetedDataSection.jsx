import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import './TargetedDataSection.css';
import Lang from 'lodash';

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
        const { patient, condition, allowItemClick, isWide, type, loginUser, actions, searchIndex } = this.props;
        const visualization = this.checkVisualization();

        const viz = this.props.visualizerManager.getVisualizer(type, visualization);
        if (Lang.isNull(viz)) return null;
        const sectionTransform = viz.transform;
        const Visualizer = viz.visualizer;
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
                                return {name: item.name, value: val[0], shortcut: item.shortcut, unsigned: val[1], source: val[2]};
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
                searchIndex.addSearchableData({
                    section: section.name,
                    subsection: "",
                    valueTitle: "Section",
                    value: section.name
                });
                indexer.indexData(section.name, subsection.name, list, searchIndex, newSubsection);
            }
        })

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
            />
        );
    }

    render() {
        const { section, condition, clinicalEvent } = this.props;
        const visualizationOptions = this.getOptions(section);
        const selectedCondition = condition && condition.type;
        const encounterView = clinicalEvent === "encounter";
        const notFiltered = !Lang.isUndefined(section.notFiltered) && section.notFiltered;
        let sectionName = section.name;
        if (section.nameSuffix) {
            sectionName += ` ${section.nameSuffix}`;
        }

        return (
            <div id="targeted-data-section">
                <h2 className="section-header">
                    <span className="section-header__name">{sectionName}</span>
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
    allowItemClick: PropTypes.bool,
    isWide: PropTypes.bool.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    loginUser: PropTypes.object.isRequired,
    searchIndex: PropTypes.object.isRequired,
}
