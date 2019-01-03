import FluxHistologicGrade from './FluxHistologicGrade';
import FluxTNMStage from '../oncology/FluxTNMStage';
import Lang from 'lodash';
import moment from 'moment';
import FluxCancerDisorder from '../mcode/FluxCancerDisorder';
import FluxCancerHistologicType from '../mcode/FluxCancerHistologicType';
import FluxKarnofskyPerformanceStatus from '../mcode/FluxKarnofskyPerformanceStatus';
import FluxECOGPerformanceStatus from '../mcode/FluxECOGPerformanceStatus';

class FluxSolidTumorCancer extends FluxCancerDisorder {
    getHistologicalGrades() {
        return this.getObservationsOfType(FluxHistologicGrade);
    }
    
    getMostRecentHistologicalGrade() {
        let results = this.getObservationsOfTypeChronologicalOrder(FluxHistologicGrade);
        if (!results || results.length === 0) return null;
        return results.pop();
    }

    getMostRecentHistologicType() {
        let results = this.getObservationsOfTypeChronologicalOrder(FluxCancerHistologicType);
        if (!results || results.length === 0) return null;
        return results.pop();
    }

    _getMostRecentReceptorStatus(receptorType) {
        const list = this.getObservationsOfType(receptorType);
        const sortedList = list.sort(this._observationsTimeSorter);
        if (list.length === 0) return null; else return sortedList.pop();
    }

    getMostRecentClinicalStaging(sinceDate = null) {
        let stagingList = this.getObservationsOfType(FluxTNMStage).filter((s) => !s.isPathologic());
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

    getMostRecentECOGPerformanceStatus() {
        const ecogPerformanceStatuses = this._patientRecord.getEntriesOfType(FluxECOGPerformanceStatus);
        if (ecogPerformanceStatuses.length === 0) return null;
        const sortedEcogPerformanceStatuses = ecogPerformanceStatuses.sort(this._lastUpdatedStatusSorter);
        return sortedEcogPerformanceStatuses[0];
    }

    getMostRecentKarnofskyPerformanceStatus() {
        const karnofskyPerformanceStatuses = this._patientRecord.getEntriesOfType(FluxKarnofskyPerformanceStatus);
        if (karnofskyPerformanceStatuses.length === 0) return null;
        const sortedKarnofskyPerformanceStatuses = karnofskyPerformanceStatuses.sort(this._lastUpdatedStatusSorter);
        return sortedKarnofskyPerformanceStatuses[0];
    }

    _lastUpdatedStatusSorter(a, b) {
        const a_startTime = new moment(a.entryInfo.lastUpdated.value, "D MMM YYYY");
        const b_startTime = new moment(b.entryInfo.lastUpdated.value, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }

    getMostRecentPathologicStaging(sinceDate = null) {
        let stagingList = this.getObservationsOfType(FluxTNMStage).filter((s) => s.isPathologic());
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