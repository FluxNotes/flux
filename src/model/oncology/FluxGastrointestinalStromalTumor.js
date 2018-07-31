import FluxTNMStage from '../oncology/FluxTNMStage';
import FluxCondition from '../condition/FluxCondition';
import FluxHistologicGrade from './FluxHistologicGrade';
import Lang from 'lodash';
import moment from 'moment';

class FluxGastrointestinalStromalTumor extends FluxCondition {
    constructor(json, patientRecord) {
        super(json, patientRecord);
        this._patientRecord = patientRecord;
        //this._condition = Condition.fromJSON(json);
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
    
    getHistologicalGrades() {
        return this.getObservationsOfType(FluxHistologicGrade);
    }
    
    getMostRecentHistologicalGrade() {
        let results = this.getObservationsOfTypeChronologicalOrder(FluxHistologicGrade);
        if (!results || results.length === 0) return null;
        return results.pop();
    }

}
export default FluxGastrointestinalStromalTumor;
