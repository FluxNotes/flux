import React from 'react';
import TabularListVisualizer from './TabularListVisualizer'; //ordering of these lines matters
import NarrativeNameValuePairsVisualizer from './NarrativeNameValuePairsVisualizer';
import BandedLineChartVisualizer from './BandedLineChartVisualizer';
import ProgressionLineChartVisualizer from './ProgressionLineChartVisualizer';
import TimelineEventsVisualizer from '../timeline/TimelineEventsVisualizer';
import MedicationRangeChartVisualizer from './MedicationRangeChartVisualizer';
import ScatterPlotVisualizer from './ScatterPlotVisualizer';
import FormatMedicationChange from './FormatMedicationChange.js';
import NameValuePairsIndexer from '../patientControl/NameValuePairsIndexer';
import ColumnsIndexer from '../patientControl/ColumnsIndexer';
import EventsIndexer from '../patientControl/EventsIndexer';
import MedicationsIndexer from '../patientControl/MedicationsIndexer';
import ValueOverTimeIndexer from '../patientControl/ValueOverTimeIndexer';
import DiseaseStatusValuesIndexer from '../patientControl/DiseaseStatusValuesIndexer';
import Lang from 'lodash';
import ClusterPointsIndexer from '../patientControl/ClusterPointsIndexer';

class VisualizerManager {

    constructor(user) {
        this.user = user;
    }

    transformValuesOverTimeToColumns = (patient, condition, subsection) => {
        let newsection = {};

        const itemList = subsection.itemsFunction(patient, condition, subsection);

        const goodband = subsection.bands.find((band) => {
            return band.assessment === 'good';
        });
        const unit = (itemList && itemList.length > 0) ? itemList[0]["unit"] : "";
        let typicalRange = "";
        if (goodband) {
            typicalRange = " (";
            if (goodband.low === 'min' && goodband.high === 'max') {
                typicalRange += "all";
            } else {
                if (goodband.low !== 'min') {
                    typicalRange += goodband.low + " " + unit + " ";
                }
                if (goodband.high !== 'max') {
                    typicalRange += "to " + goodband.high + " " + unit;
                } else {
                    typicalRange += " or higher";
                }
            }

            typicalRange += ")";
        }

        newsection.name = subsection.name;
        newsection.name_suffix = typicalRange;
        newsection.headings = ["Date", "Value"];
        newsection.data_cache = itemList.map((labResult) => {
            return  [   {   value: labResult["start_time"] },
                        {   value: labResult[subsection.name] + " " + labResult["unit"] }
                    ];
        })
        newsection.formatFunction = this.formatLabResult.bind(this, goodband);
        return newsection;
    }

    transformMedicationsToColumns = (patient, condition, subsection) => {
        let newsection = {};

        const itemList = subsection.itemsFunction(patient, condition, subsection);

        newsection.name = "";
        newsection.headings = ["Medication", "Change", "Dosage", "Timing", "Start", "End"];
        newsection.data_cache = itemList.map((med) => {
            
            
            const dose = med.medication.amountPerDose ? `${med.medication.amountPerDose.value} ${med.medication.amountPerDose.units}` : "";
            const medicationChange = this.formatMedicationChange(med.medicationChange);
            const endDate = this.getEndDate(med);
            let timing;
            
            if (med.medication.timingOfDoses) {
                if (!Lang.isNull(med.medication.timingOfDoses.units)) {
                    timing = `${med.medication.timingOfDoses.value} ${med.medication.timingOfDoses.units}`;
                } else {
                    timing = med.medication.timingOfDoses.value;
                }
            } else {
                timing = "";
            }
            
            // isUnsigned is false by default
            let isUnsigned = false;
            let sourceClinicalNote;
            
            if (med.medicationChange) {
                isUnsigned = med.medicationChange.unsigned;
                sourceClinicalNote = med.medicationChange.sourceClinicalNote;
            }

            const asNeeded = med.medication.asNeededIndicator ? ' as needed' : '';

            return [    {   value: med.medication.medication },
                        {   value: medicationChange, 
                            unsigned: isUnsigned, 
                            source: sourceClinicalNote },
                        {   value: dose },
                        {   value: timing + asNeeded },
                        {   value: med.medication.expectedPerformanceTime.timePeriodStart },
                        {   value: endDate, 
                            unsigned: isUnsigned, 
                            source: sourceClinicalNote }
                    ];
        });

        // Format function used to 
        newsection.formatFunction = this.formatStoppedMedication;
        return newsection;
    };


    // Returns today's date if the medication has just been stopped 
    getEndDate = (med) => {
        let endDate = med.medication.expectedPerformanceTime.timePeriodEnd;
        if (med.medicationChange && med.medicationChange.type === "stop") {
            endDate = med.medicationChange.date;
        }
        return endDate;
    }

    formatMedicationChange = (medChange) => {
        let formattedMedicationChange = " ";
        if (medChange) {
            if (medChange.type === "stop") {
                formattedMedicationChange = FormatMedicationChange.stringForMedicationChangeType(medChange.type);
            } else {
                formattedMedicationChange = FormatMedicationChange.stringForMedicationChangeType(medChange.type) + FormatMedicationChange.stringForMedicationChangeDate(medChange.date) + FormatMedicationChange.stringForMedicationChangePriorAmount(medChange.type, medChange.medBeforeChange);
            }
        }
        return formattedMedicationChange;
    }

    // This is a formatting function passed into TabularListVisualizer with the 
    // medication columns.  It returns a css class if it finds a stopped medication.
    formatStoppedMedication = (elementText, element, columnNumber) => {
        if (elementText && elementText === "Stopped" && columnNumber === 1) {
            return "stopped-cell";
        }
        return "tabular-list";
    }

    // This is a formatting function passed into TabularListVisualizer with the
    // lab result columns. It returns a css class if it finds a lab resut out of
    // range
    formatLabResult = (goodrange, elementText, element, columnNumber) => {
        if (columnNumber === 1 && goodrange) {
            const valueAndUnits = elementText.split(' ');
            const value = valueAndUnits[0];
            if (goodrange.low !== 'min') {
                if (Number(value) < Number(goodrange.low)) {
                    return "stopped-cell";
                }
            }
            if (goodrange.high !== 'max') {
                if (Number(value) > Number(goodrange.high)) {
                    return "stopped-cell";
                }
            }
        }
        return "tabular-list";
    }

    transformNameValuePairToColumns = (patient, condition, subsection) => {
        let newsection = {};

        const { itemsFunction } = subsection;
        let { items } = subsection;
        let list = null;

        if (Lang.isUndefined(items)) {
            items = itemsFunction(patient, condition, subsection);
        }
        // call value functions and get values
        list = items.map((item, i) => {
            const itemValue = (Lang.isNull(item.value)) ? null : (Lang.isFunction(item.value) ? item.value(patient, condition, this.user) : item.value);
            return [    { value: item.name, isInsertable: false},
                        { value: itemValue || null, shortcut: item.shortcut || null}]
        });

        // need to eliminate when value is an array as came from value of a name/value pair. In that case the value array
        // contains [0] value, [1] isUnsigned, and [2] source
        newsection.name = subsection.name;
        newsection.data_cache = list;
        return newsection;
    };

    visualizers = [
                    { "dataType": "Columns", "visualizerType": "tabular", "visualizer": TabularListVisualizer },
                    { "dataType": "NameValuePairs", "visualizerType": "tabular", "visualizer": TabularListVisualizer, "transform": this.transformNameValuePairToColumns, renderedFormat: "Columns" },
                    { "dataType": "NameValuePairs", "visualizerType": "narrative", "visualizer": NarrativeNameValuePairsVisualizer },
                    { "dataType": "Events", "visualizerType": "timeline", "visualizer": TimelineEventsVisualizer },
                    { "dataType": "Medications", "visualizerType": "tabular", "visualizer": TabularListVisualizer, "transform": this.transformMedicationsToColumns, renderedFormat: "Columns" },
                    { "dataType": "Medications", "visualizerType": "chart", "visualizer": MedicationRangeChartVisualizer },
                    { "dataType": "ValueOverTime", "visualizerType": "chart", "visualizer": BandedLineChartVisualizer },
                    { "dataType": "ValueOverTime", "visualizerType": "tabular", "visualizer": TabularListVisualizer, "transform": this.transformValuesOverTimeToColumns, renderedFormat: "Columns" },
                    { "dataType": "NarrativeOnly", "visualizerType": "narrative", "visualizer": NarrativeNameValuePairsVisualizer },
                    { "dataType": "DiseaseStatusValues", "visualizerType": "chart", "visualizer": ProgressionLineChartVisualizer },
                    { "dataType": "ClusterPoints", "visualizerType": "scatter", "visualizer": ScatterPlotVisualizer}
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

    getIndexer(dataType) {
        switch(dataType) {
            case "NameValuePairs":
            case "NarrativeOnly":
                return new NameValuePairsIndexer();
            case "Columns":
                return new ColumnsIndexer();
            case "Events":
                return new EventsIndexer();
            case "Medications":
                return new MedicationsIndexer();
            case "ValueOverTime":
                return new ValueOverTimeIndexer();
            case "DiseaseStatusValues":
                return new DiseaseStatusValuesIndexer();
            case "ClusterPoints":
                return new ClusterPointsIndexer();
            default:
                return null;
        }
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