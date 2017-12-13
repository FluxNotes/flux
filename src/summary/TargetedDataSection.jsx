import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import TabularNameValuePairsVisualizer from './TabularNameValuePairsVisualizer';
import NarrativeNameValuePairsVisualizer from './NarrativeNameValuePairsVisualizer';
import TimelineEventsVisualizer from '../timeline/TimelineEventsVisualizer';

class TargetedDataSection extends Component {
    constructor(props) {
        super(props);

        // TODO: Better way to get default based on type
        this.state = { dataViewMode: 'tabular' };
    }
    
    // componentDidMount(){
    //     console.log("UPDATE")
    //     console.log(this.props.section)
    //     if (this.state.dataViewMode === null) {
    //         if (this.props.type === 'NameValuePairs') {
    //             this.setState({ dataViewMode: 'tabular' });
    //         } else if (this.props.type === 'Events') {
    //             this.setState({ dataViewMode: 'graphic' });
    //         } else {
    //             this.setState({ dataViewMode: null });
    //         }
    //     }
    // }

    handleViewChange = (dataViewMode) => {
        this.setState({ dataViewMode });
    }

    tabularView = () => {
        const strokeColor = this.state.dataViewMode === "tabular" ? "#3F3F3F" : "#CCCCCC";
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
        const strokeColor = this.state.dataViewMode === "narrative" ? "#3F3F3F" : "#CCCCCC";
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
        const strokeColor = this.state.dataViewMode === "graphic" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-39" stroke={strokeColor} strokeWidth="1.62">
                        <path d="M0.936953125,0.9428125 L0.936953125,15.8228125 L15.8169531,15.8228125 L15.8169531,0.9428125 L0.936953125,0.9428125 Z" id="Rectangle-3"></path>
                        <polyline id="Path-3" strokeLinejoin="round" points="0.71875 11.0977783 5.125 6.69152832 9.5 11.2852783 12.34375 7.97277832 15.625 11.3477783"></polyline>
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
        }
        
        if (icon !== null) {
            return (
                <Button
                    key={i}
                    className="small-btn"
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
            // options.push('tabular'); // TODO: In order to not add buttons that don't work, tabular Events is not supported or rendered
        }
        return options;
    }

    renderVisualizationOptions = (options) => {
        // TODO: Does one data view option provide value?
        // if (options.length > 1) {
            return (
                <div style={{float: "right"}}>
                    {this.getVisualizationsIcons(options)}
                </div>
            );
        // }
        // return null;
    }

    // renderedSection checks the type of data that is being passed and chooses the correct component to render the data
    // TODO: Render other types of data. also change how it decides which visualization component to use when
    //       multiple (e.g., NameValuePairs)
    // TODO: Add a List type and a tabular renderer for it for Procedures section. case where left column is data
    //       and not just a label
    renderSection(section) {
        const {patient, condition, onItemClicked, allowItemClick, isWide} = this.props;

        if (section.type === 'NameValuePairs' && this.state.dataViewMode === 'tabular') {
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
        } else if (section.type === 'NameValuePairs' && this.state.dataViewMode === 'narrative') {
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
        } else if (section.type === 'Events' /*&& this.state.dataViewMode === 'graphic'*/) {
            return (
                <TimelineEventsVisualizer
                    patient={patient}
                    condition={condition}
                    section={section}
                    isWide={isWide}
                />
            );
        }
    }

    render() {
        const visualizationOptions = this.getOptions(this.props.section);
        return (
            <div>
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
