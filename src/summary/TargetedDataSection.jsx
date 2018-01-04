import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import TabularListVisualizer from './TabularListVisualizer'; //ordering of these lines matters
import TabularNameValuePairsVisualizer from './TabularNameValuePairsVisualizer';
import NarrativeNameValuePairsVisualizer from './NarrativeNameValuePairsVisualizer';
import BandedLineChartVisualizer from './BandedLineChartVisualizer';
import TimelineEventsVisualizer from '../timeline/TimelineEventsVisualizer';
import './TargetedDataSection.css';

class TargetedDataSection extends Component {
    constructor(props) {
        super(props);

        const optionsForSection = this.getOptions(props.section);
        const defaultOrTabular = optionsForSection.length > 0 ? optionsForSection[0] : 'tabular';

        // this.state.defaultVisualizer is the first possible visualization, this.state.chosenVisualizer changes when icons are clicked
        this.state = {
            defaultVisualizer: defaultOrTabular,
            chosenVisualizer: null
        };
    }
    
    componentDidUpdate() {
        const optionsForSection = this.getOptions(this.props.section);
        const defaultOrTabular = optionsForSection.length > 0 ? optionsForSection[0] : 'tabular';
        if (this.state.defaultVisualizer !== defaultOrTabular ||
            (this.state.chosenVisualizer !== null && !optionsForSection.includes(this.state.chosenVisualizer))) {
            this.setState({defaultVisualizer: defaultOrTabular, chosenVisualizer: null });
        }
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

    tabularView = () => {
        const visualization = this.checkVisualization();
        const strokeColor = visualization === "tabular" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.8">
                    <g id="Group-4-Copy" transform="translate(0.884726, 0.440969)" stroke={strokeColor} strokeWidth="1.62" fill="#FFFFFF">
                        <rect id="Rectangle-9-Copy-7" x="0.445109978" y="0.73198638" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-8" x="0.445109978" y="8.26516734" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-9" x="7.81454794" y="0.73198638" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-10" x="7.81454794" y="8.26516734" width="7.21076743" height="7.21833702"></rect>
                    </g>
                </g>
            </svg>
        );
    }

    narrativeView = () => {
        const visualization = this.checkVisualization();
        const strokeColor = visualization === "narrative" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="15px" viewBox="0 0 17 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square" opacity="0.8">
                    <g id="Group-3-Copy" transform="translate(0.567421, 0.048197)" stroke={strokeColor} strokeWidth="2">
                        <path d="M1.03162221,1 L7.83111001,1" id="Line-4"></path>
                        <path d="M1.03162221,7 L15.1251513,7" id="Line-4-Copy"></path>
                        <path d="M1.03162221,13 L15.1251513,13" id="Line-4-Copy-2"></path>
                    </g>
                </g>
            </svg>
        );
    }

    graphicView = () => {
        const visualization = this.checkVisualization();
        const strokeColor = visualization === "graphic" ? "#3F3F3F" : "#CCCCCC";
        // FIXME: Graphic view shouldn't be used for the timeline.
        return (
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-39" stroke={strokeColor} strokeWidth="1.8">
                        <path d="M0.936953125,0.9428125 L0.936953125,15.8228125 L15.8169531,15.8228125 L15.8169531,0.9428125 L0.936953125,0.9428125 Z" id="Rectangle-3"></path>
                        <polyline id="Path-3" strokeLinejoin="round" points="0.71875 11.0977783 5.125 6.69152832 9.5 11.2852783 12.34375 7.97277832 15.625 11.3477783"></polyline>
                    </g>
                </g>
            </svg>
        );
    }

    lineChartView = () => { 
        const visualization = this.checkVisualization();
        const strokeColor = visualization === "chart" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Group-39" stroke={strokeColor} stroke-width="1.62">
                        <path d="M0.936953125,0.9428125 L0.936953125,15.8228125 L15.8169531,15.8228125 L15.8169531,0.9428125 L0.936953125,0.9428125 Z" id="Rectangle-3"></path>
                        <polyline id="Path-3" stroke-linejoin="round" points="0.71875 11.0977783 5.125 6.69152832 9.5 11.2852783 12.34375 7.97277832 15.625 11.3477783"></polyline>
                    </g>
                </g>
            </svg>
        );
    }

    renderIcon = (type, i) => {
        let icon = null;
        if (type === 'tabular') {
            icon = this.tabularView();
        } else if (type === 'narrative') {
            icon = this.narrativeView();
        } else if (type === 'graphic') {
            icon = this.graphicView();
        } else if (type === 'chart') {
            icon = this.lineChartView();
        }
        
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
        let options = [];
        if (section.type === "NameValuePairs") {
            options.push('tabular');
            if (section.narrative) {
                options.push('narrative');
            }
        } else if (section.type === "Events") {
            options.push('graphic');
        } else if (section.type === "ValueOverTime") { 
            options.push('chart');
        }
        return options;
    }

    renderVisualizationOptions = (options) => {
        if (options.length > 1) {
            return (
                <span className="right-icons">
                    {this.getVisualizationsIcons(options)}
                </span>
            );
        } else {
            return null;
        }
    }

    // renderSection checks the type of data that is being passed and chooses the correct component to render the data
    // TODO: Add a List type and a tabular renderer for it for Procedures section. case where left column is data
    //       and not just a label
    renderSection = (section) => {
        const {patient, condition, onItemClicked, allowItemClick, isWide, type} = this.props;
        const visualization = this.checkVisualization();

        switch (type) {
            case "ListType": {
                if (visualization === 'tabular') {
                    return (
                        <TabularListVisualizer
                            patient={patient}
                            condition={condition}
                            conditionSection={section}
                            onItemClicked={onItemClicked}
                            allowItemClick={allowItemClick}
                            isWide={isWide}
                        />
                    );
                } else {
                    return null;
                }
            }
            case 'NameValuePairs': {
                if (visualization === 'tabular') {
                    return (
                        <TabularNameValuePairsVisualizer
                            patient={patient}
                            condition={condition}
                            conditionSection={section}
                            onItemClicked={onItemClicked}
                            allowItemClick={allowItemClick}
                            isWide={isWide}
                        />
                    );
                } else if (visualization === 'narrative') {
                    return (
                        <NarrativeNameValuePairsVisualizer
                            patient={patient}
                            condition={condition}
                            conditionSection={section}
                            onItemClicked={onItemClicked}
                            allowItemClick={allowItemClick}
                            isWide={isWide}
                        />
                    );
                } else {
                    return null;
                }
            }
            case 'ValueOverTime': { 
                if (visualization === 'chart') { 
                    return (
                        <BandedLineChartVisualizer
                            patient={patient}
                            condition={condition}
                            conditionSection={section}
                            onItemClicked={onItemClicked}
                            allowItemClick={allowItemClick}
                            isWide={isWide}
                        />
                    );
                } else { 
                    return null;
                }
            }
            case 'Events': {
                if (visualization === 'graphic') {
                    return (
                        <TimelineEventsVisualizer
                            patient={patient}
                            condition={condition}
                            section={section}
                            isWide={isWide}
                        />
                    );
                } else {
                    return null;
                }
            }
            default:
                return null;
        }
    }

    render() {
        const visualizationOptions = this.getOptions(this.props.section);

        return (
            <div id="targeted-data-section">
                <h2 className="section-header">
                    {this.props.section.name}
                    {this.renderVisualizationOptions(visualizationOptions)}
                </h2>
                {this.renderSection(this.props.section)}
            </div>
        );
    }
}

export default TargetedDataSection;

TargetedDataSection.propTypes = {
    type: PropTypes.string,
    section: PropTypes.object,
    patient: PropTypes.object,
    condition: PropTypes.object,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool,
    isWide: PropTypes.bool.isRequired,
}
