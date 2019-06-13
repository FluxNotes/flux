import React from 'react';
import Visualizer from './Visualizer';
import LongitudinalTable from './LongitudinalTable';
import _ from 'lodash';
import propTypes from 'prop-types';

export default class LongitudinalTableVisualizer extends Visualizer {

    constructor(props) {
        super(props);
        const formattedData = this.formatData(this.props.conditionSection.data);
        this.state = {
            data: formattedData,
        };
        this.onClick = this.onClick.bind(this);
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
                        favorite: false,
                    }
                );
            }
        }
        return data;
    }
    onClick(clickedSection) {
        const data = [...this.state.data];
        const element = data.find((section) => { //element is the row that was clicked
            return (section.name === clickedSection);
        });
        element.favorite = !element.favorite;
        const finalArray = [];
        data.forEach((section) => { //to get the favorites in front of the not favorites
            if (section.favorite) {
                finalArray.unshift(section);
            } else {
                finalArray.push(section);
            }
        });
        this.setState({ data: finalArray });
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
        return (
            <div>
                <LongitudinalTable onClick={this.onClick} dataInfo={this.state.data} tdpSearchSuggestions={this.props.tdpSearchSuggestions} conditionSectionName={this.props.conditionSection.name} subsectionLabel={this.props.conditionSection.subsectionLabel} />
            </div>
        );
    }
}

LongitudinalTableVisualizer.propTypes = {
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