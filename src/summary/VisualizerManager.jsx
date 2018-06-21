import React from 'react';
import TabularListVisualizer from './TabularListVisualizer'; //ordering of these lines matters
import NarrativeNameValuePairsVisualizer from './NarrativeNameValuePairsVisualizer';
import BandedLineChartVisualizer from './BandedLineChartVisualizer';
import ProgressionLineChartVisualizer from './ProgressionLineChartVisualizer';
import TimelineEventsVisualizer from '../timeline/TimelineEventsVisualizer';
import MedicationRangeChartVisualizer from './MedicationRangeChartVisualizer';
import Lang from 'lodash';

class VisualizerManager {
    transformMedicationsToColumns = (patient, condition, subsection) => {
        let newsection = {};

        const itemList = subsection.itemsFunction(patient, condition, subsection);

        newsection.name = "";
        newsection.headings = ["Medication", "Dosage", "Timing", "Start", "End"];
        newsection.items = itemList.map((med) => {
            const dose = med.amountPerDose ? `${med.amountPerDose.value} ${med.amountPerDose.units}` : "";
            let timing;
            if (med.timingOfDoses) {
                if (!Lang.isNull(med.timingOfDoses.units)) {
                    timing = `${med.timingOfDoses.value} ${med.timingOfDoses.units}`;
                } else {
                    timing = med.timingOfDoses.value;
                }
            } else {
                timing = "";
            }

            return [    med.medication,
                        dose,
                        timing,
                        med.expectedPerformanceTime.timePeriodStart,
                        med.expectedPerformanceTime.timePeriodEnd ];
        });
        return newsection;
    };

    transformNameValuePairToColumns = (patient, condition, subsection) => {
        let newsection = {};

        const items = subsection.items;
        const itemsFunction = subsection.itemsFunction;
        let list = null;

        if (Lang.isUndefined(items)) {
            list = itemsFunction(patient, condition, subsection);
        } else {
            list = items.map((item, i) => {
                if (Lang.isNull(item.value)) {
                    return {name: item.name, value: null};
                } else if (item.shortcut) {
                    const itemValue = item.value(patient, condition);
                    if (itemValue) {
                        return {name: item.name, value: itemValue, shortcut: item.shortcut};
                    } else {
                        return {name: item.name, value: null, shortcut: item.shortcut};
                    }
                } else {
                    const itemValue = item.value(patient, condition);
                    if (itemValue) {
                        return {name: item.name, value: itemValue };
                    } else {
                        return {name: item.name, value: null};
                    }
                }
            });
        }

        newsection.name = subsection.name;
        newsection.items = list.map((item) => {
            if (Lang.isNull(item.value)) {
                return [    { value: item.name, isInsertable: false}, null ];
            } else {
                return [    { value: item.name, isInsertable: false}, { value: item.value, shortcut: item.shortcut } ];
            }
        });
        return newsection;
    };

    visualizers = [
                    { "dataType": "Columns", "visualizerType": "tabular", "visualizer": TabularListVisualizer },
                    { "dataType": "NameValuePairs", "visualizerType": "tabular", "visualizer": TabularListVisualizer, "transform": this.transformNameValuePairToColumns },
                    { "dataType": "NameValuePairs", "visualizerType": "narrative", "visualizer": NarrativeNameValuePairsVisualizer },
                    { "dataType": "Events", "visualizerType": "timeline", "visualizer": TimelineEventsVisualizer },
                    { "dataType": "Medications", "visualizerType": "tabular", "visualizer": TabularListVisualizer, "transform": this.transformMedicationsToColumns },
                    { "dataType": "Medications", "visualizerType": "chart", "visualizer": MedicationRangeChartVisualizer },
                    { "dataType": "ValueOverTime", "visualizerType": "chart", "visualizer": BandedLineChartVisualizer },
                    { "dataType": "NarrativeOnly", "visualizerType": "narrative", "visualizer": NarrativeNameValuePairsVisualizer },
                    { "dataType": "DiseaseStatusValues", "visualizerType": "chart", "visualizer": ProgressionLineChartVisualizer }
                  ];

    getSupportedVisualizerTypesForDataType(dataType) {
        return this.visualizers.filter((viz) => {
            return (viz.dataType === dataType);
        }).map((viz) => {
            return viz.visualizerType;
        });
    }

    getVisualizer(dataType, visualizerType) {
        let result = this.visualizers.filter((viz) => {
            return (viz.dataType === dataType && viz.visualizerType === visualizerType)
        });
        if (Lang.isNull(result) || result.length !== 1) return null;
        return result[0];
    }

    renderIcon(visualizerType, isSelected) {
        if (visualizerType === 'tabular') {
            return this._tabularIcon(isSelected);
        } else if (visualizerType === 'narrative') {
            return this._narrativeIcon(isSelected);
        } else if (visualizerType === 'timeline') {
            return this._timelineIcon(isSelected);
        } else if (visualizerType === 'chart') {
            return this._chartIcon(isSelected);
        }
        return null;
    }

    _tabularIcon = (isSelected) => {
//        const visualization = this.checkVisualization();
//        const strokeColor = visualization === "tabular" ? "#3F3F3F" : "#CCCCCC";
        const strokeColor = isSelected ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.8">
                    <g id="Group-4-Copy" transform="translate(0.884726, 0.440969)" stroke={strokeColor} strokeWidth="1.62">
                        <rect id="Rectangle-9-Copy-7" x="0.445109978" y="0.73198638" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-8" x="0.445109978" y="8.26516734" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-9" x="7.81454794" y="0.73198638" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-10" x="7.81454794" y="8.26516734" width="7.21076743" height="7.21833702"></rect>
                    </g>
                </g>
            </svg>
        );
    }

    _narrativeIcon = (isSelected) => {
        //const visualization = this.checkVisualization();
        //const strokeColor = visualization === "narrative" ? "#3F3F3F" : "#CCCCCC";
        const strokeColor = isSelected ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="15px" viewBox="0 0 17 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square"
                   opacity="0.8">
                    <g id="Group-3-Copy" transform="translate(0.567421, 0.048197)" stroke={strokeColor} strokeWidth="2">
                        <path d="M1.03162221,1 L7.83111001,1" id="Line-4"></path>
                        <path d="M1.03162221,7 L15.1251513,7" id="Line-4-Copy"></path>
                        <path d="M1.03162221,13 L15.1251513,13" id="Line-4-Copy-2"></path>
                    </g>
                </g>
            </svg>
        );
    }

    _timelineIcon = (isSelected) => {
        //const visualization = this.checkVisualization();
        //const strokeColor = visualization === "graphic" ? "#3F3F3F" : "#CCCCCC";
        const strokeColor = isSelected ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-39" stroke={strokeColor} strokeWidth="1.8">
                        <path
                            d="M0.936953125,0.9428125 L0.936953125,15.8228125 L15.8169531,15.8228125 L15.8169531,0.9428125 L0.936953125,0.9428125 Z"
                            id="Rectangle-3"></path>
                        <polyline id="Path-3" strokeLinejoin="round"
                                  points="0.71875 11.0977783 5.125 6.69152832 9.5 11.2852783 12.34375 7.97277832 15.625 11.3477783"></polyline>
                    </g>
                </g>
            </svg>
        );
    }

    _chartIcon = (isSelected) => {
        //const visualization = this.checkVisualization();
        //const strokeColor = visualization === "chart" ? "#3F3F3F" : "#CCCCCC";
        const strokeColor = isSelected ? "#3F3F3F" : "#CCCCCC";
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
}

export default VisualizerManager;