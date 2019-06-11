import React from 'react';
import Visualizer from './Visualizer';
import LongitudinalViewVisualizerTable from './LongitudinalViewVisualizerTable';
import _ from 'lodash';

class LongitudinalViewVisualizer extends Visualizer {

    constructor(props) {
        super(props);
        this.state = { labData: this.formatLabData(this.props.conditionSection.data) };
    }
    formatLabData(labSection) { //creates an array with one object for each lab (wbc, platelets, etc.)
        const labData = [];
        for (let conditionIndex = 0; conditionIndex < labSection.length; conditionIndex++) {
            if (labSection[conditionIndex].data_cache) {
                labData.push(
                    {
                        labName: labSection[conditionIndex].name,
                        labUnit: labSection[conditionIndex].data_cache[0].unit,
                        datesAndData: this.buildDataObject(conditionIndex, labSection),
                        bands: labSection[conditionIndex].bands
                    }
                );
            }
        }
        return labData;
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.conditionSection.data, nextProps.conditionSection.data)) {
            const labData = this.formatLabData(nextProps.conditionSection.data);
            this.setState({ labData: labData });
        }
    }
    buildDataObject(conditionIndex, labSection) {
        const datesAndData = {};
        labSection[conditionIndex].data_cache.forEach((labDay) => {
            datesAndData[labDay.start_time] = labDay[labSection[conditionIndex].name];
        });
        return datesAndData;
    }

    render() {
        return (
            <div>
                <LongitudinalViewVisualizerTable labDataInfo={this.state.labData} />
            </div>
        );
    }
}

export default LongitudinalViewVisualizer;