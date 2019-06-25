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
    }
    formatData = (section) => { //creates an array with one object for each section (wbc, platelets, etc.)
        const favoritedNames = [];
        const favoritedSections = [];
        const unfavoritedSections = [];
        const name = `${this.props.conditionSection.name}-favorites`;
        if (this.props.preferenceManager.getPreference(name)) {
            favoritedNames.push(...this.props.preferenceManager.getPreference(name));
        }
        for (let conditionIndex = 0; conditionIndex < section.length; conditionIndex++) {
            if (section[conditionIndex].data_cache) {
                const currentSection = {
                    name: section[conditionIndex].name,
                    unit: section[conditionIndex].data_cache[0].unit,
                    datesAndData: this.buildDataObject(conditionIndex, section),
                    bands: section[conditionIndex].bands && section[conditionIndex].bands.length > 0 ? section[conditionIndex].bands : null,
                    favorite: _.includes(favoritedNames, section[conditionIndex].name),
                };
                if (currentSection.favorite) favoritedSections.push(currentSection);
                else unfavoritedSections.push(currentSection);
            }
        }
        this.sortData(favoritedSections);
        this.sortData(unfavoritedSections);
        return favoritedSections.concat(unfavoritedSections);
    }
    sortData = (formattedData) => {
        formattedData.sort((section1, section2) => {
            if (section1.name < section2.name) {
                return -1;
            } else if (section1.name > section2.name) {
                return 1;
            } else {
                return 0;
            }
        });
        return formattedData;
    }
    reorderRows = (clickedSection) => {
        const data = [...this.state.data];
        const element = data.find((section) => { //element is the formatted data object for the row that was clicked
            return (section.name === clickedSection);
        });
        element.favorite = !element.favorite;
        const separatedArray = [];
        let numFavs = 0;
        data.forEach((section) => { //to get the favorites in front of the not favorites
            if (section.favorite) {
                separatedArray.unshift(section);
                numFavs++;
            } else {
                separatedArray.push(section);
            }
        });
        const favsArray = _.slice(separatedArray, 0, numFavs); //take just the favs and sort them alphabetically
        this.sortData(favsArray);
        const notFavsArray = _.slice(separatedArray, numFavs, separatedArray.length); //take just the not favs and sort them alphabetically
        this.sortData(notFavsArray);
        const finalArray = _.concat(favsArray, notFavsArray); //but the favs back together with the not favs in one array
        this.setState({ data: finalArray });
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.conditionSection.data, nextProps.conditionSection.data)) {
            const data = this.formatData(nextProps.conditionSection.data);
            this.setState({ data: data });
        }
    }
    buildDataObject = (conditionIndex, section) => {
        const datesAndData = {};
        section[conditionIndex].data_cache.forEach((day) => {
            datesAndData[day.start_time] = day[section[conditionIndex].name];
        });
        return datesAndData;
    }

    render() {
        return (
            <div>
                <LongitudinalTable
                    reorderRows={this.reorderRows}
                    dataInfo={this.state.data}
                    tdpSearchSuggestions={this.props.tdpSearchSuggestions}
                    conditionSectionName={this.props.conditionSection.name}
                    subsectionLabel={this.props.conditionSection.subsectionLabel}
                    preferenceManager={this.props.preferenceManager} />
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
    preferenceManager: propTypes.object,
};