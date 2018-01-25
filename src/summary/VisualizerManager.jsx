import TabularListVisualizer from './TabularListVisualizer'; //ordering of these lines matters
import TabularNameValuePairsVisualizer from './TabularNameValuePairsVisualizer';
import NarrativeNameValuePairsVisualizer from './NarrativeNameValuePairsVisualizer';
import BandedLineChartVisualizer from './BandedLineChartVisualizer';
import ProgressionLineChartVisualizer from './ProgressionLineChartVisualizer';
import TimelineEventsVisualizer from '../timeline/TimelineEventsVisualizer';
import MedicationRangeChartVisualizer from './MedicationRangeChartVisualizer';
import TabularMedicationsVisualizer from './TabularMedicationsVisualizer';

class VisualizerManager {
    visualizers = [
                    { "dataType": "Columns", "visualizerType": "tabular", "visualizer": TabularListVisualizer },
                    { "dataType": "NameValuePairs", "visualizerType": "tabular", "visualizer": TabularNameValuePairsVisualizer },
                    { "dataType": "NameValuePairs", "visualizerType": "narrative", "visualizer": NarrativeNameValuePairsVisualizer },
                    { "dataType": "Events", "visualizerType": "timeline", "visualizer": TimelineEventsVisualizer },
                    { "dataType": "Medications", "visualizerType": "tabular", "visualizer": TabularMedicationsVisualizer },
                    { "dataType": "Medications", "visualizerType": "chart", "visualizer": MedicationRangeChartVisualizer },
                    { "dataType": "ValueOverTime", "visualizerType": "chart", "visualizer": BandedLineChartVisualizer },
                    { "dataType": "DiseaseStatusValues", "visualizerType": "chart", "visualizer": ProgressionLineChartVisualizer }
                  ];
    
    getVisualizersForDataType(dataType) {
        return visualizers.filter((viz) => {
            return (viz.dataType === dataType);
        });
    }
}

export default VisualizerManager;