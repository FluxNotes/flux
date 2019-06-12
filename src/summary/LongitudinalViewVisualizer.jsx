import React from 'react';
import Visualizer from './Visualizer';
import LongitudinalViewVisualizerTable from './LongitudinalViewVisualizerTable';
import _ from 'lodash';
import propTypes from 'prop-types';

export default class LongitudinalViewVisualizer extends Visualizer {

    constructor(props) {
        super(props);
        this.state = { data: this.formatData(this.props.conditionSection.data) };
    }
    formatData(section) { //creates an array with one object for each section (wbc, platelets, etc.)
        const data = [];
        for (let conditionIndex = 0; conditionIndex < section.length; conditionIndex++) {
            if (section[conditionIndex].data_cache) {
                data.push(
                    {
                        name: section[conditionIndex].name,
                        unit: section[conditionIndex].data_cache[0].unit,
                        datesAndData: this.buildDataObject(conditionIndex, section),
                        bands: section[conditionIndex].bands && section[conditionIndex].bands.length > 0 ? section[conditionIndex].bands : null,
                    }
                );
            }
        }
        return data;
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.conditionSection.data, nextProps.conditionSection.data)) {
            const data = this.formatData(nextProps.conditionSection.data);
            this.setState({ data: data });
        }
    }
    buildDataObject(conditionIndex, section) {
        const datesAndData = {};
        section[conditionIndex].data_cache.forEach((day) => {
            datesAndData[day.start_time] = day[section[conditionIndex].name];
        });
        return datesAndData;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <LongitudinalViewVisualizerTable dataInfo={this.state.data} tdpSearchSuggestions={this.props.tdpSearchSuggestions} conditionSectionName={this.props.conditionSection.name} subsectionLabel={this.props.conditionSection.subsectionLabel}/>
            </div>
        );
    }
}

LongitudinalViewVisualizer.propTypes = {
    actions: propTypes.array,
    allowItemClick: propTypes.bool,
    condition: propTypes.object,
    conditionSection: propTypes.object,
    highlightedSearchSuggestion: propTypes.object,
    isWide: propTypes.bool.isRequired,
    loginUser: propTypes.object.isRequired,
    patient: propTypes.object,
    sectionTransform: propTypes.func,
    tdpSearchSuggestions: propTypes.array,
    visualizerManager: propTypes.object,
};