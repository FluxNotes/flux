import FluxCondition from '../condition/FluxCondition';
import FluxHistologicGrade from './FluxHistologicGrade';
import FluxTNMStage from '../oncology/FluxTNMStage';
import Lang from 'lodash';
import moment from 'moment';

class FluxSolidTumorCancer extends FluxCondition {
    getHistologicalGrades() {
        return this.getObservationsOfType(FluxHistologicGrade);
    }
    
    getMostRecentHistologicalGrade() {
        let results = this.getObservationsOfTypeChronologicalOrder(FluxHistologicGrade);
        if (!results || results.length === 0) return null;
        return results.pop();
    }

    _getMostRecentReceptorStatus(receptorType) {
        const list = this.getObservationsOfType(receptorType);
        const sortedList = list.sort(this._observationsTimeSorter);
        if (list.length === 0) return null; else return sortedList.pop();
    }

    getMostRecentStaging(sinceDate = null) {
        let stagingList = this.getObservationsOfType(FluxTNMStage);
        if (stagingList.length === 0) return null; 
        const sortedStagingList = stagingList.sort(this._stageTimeSorter);
        const length = sortedStagingList.length;
        let s = (sortedStagingList[length - 1]);
        if (Lang.isNull(sinceDate)) return s; 
        const startTime = new moment(s.occurrenceTime, "D MMM YYYY");
        if (startTime < sinceDate) {
            return null;
        } else {
            return s;
        }
    }
}

export default FluxSolidTumorCancer;