import FluxCancerHistologicGrade from '../oncocore/FluxCancerHistologicGrade';
import FluxTNMClinicalStageGroup from '../oncocore/FluxTNMClinicalStageGroup';
import Lang from 'lodash';
import moment from 'moment';
import FluxCancerDisorderPresent from '../oncocore/FluxCancerDisorderPresent';
import FluxCancerHistologicType from '../oncocore/FluxCancerHistologicType';
import FluxKarnofskyPerformanceStatus from '../oncocore/FluxKarnofskyPerformanceStatus';
import FluxECOGPerformanceStatus from '../oncocore/FluxECOGPerformanceStatus';
import FluxTNMStageGroup from '../oncocore/FluxTNMStageGroup';
import FluxTumorMarker from '../oncocore/FluxTumorMarker';
import FluxTNMPathologicStageGroup from '../oncocore/FluxTNMPathologicStageGroup';

class FluxSolidTumorCancer extends FluxCancerDisorderPresent {
    getHistologicalGrades() {
        return this.getObservationsOfType(FluxCancerHistologicGrade);
    }

    getMostRecentHistologicalGrade() {
        let results = this.getObservationsOfTypeChronologicalOrder(FluxCancerHistologicGrade);
        if (!results || results.length === 0) return null;
        return results.pop();
    }

    getMostRecentHistologicType() {
        let results = this.getObservationsOfTypeChronologicalOrder(FluxCancerHistologicType);
        if (!results || results.length === 0) return null;
        return results.pop();
    }

    _getMostRecentReceptorStatus(receptorType) {
        const list = this.getReceptorsOfType(receptorType);
        const sortedList = list.sort(this._observationsTimeSorter);
        if (list.length === 0) return null; else return sortedList.pop();
    }

    getReceptorsOfType(receptorType) {
        if (!this._condition.entryInfo) return [];
        const conditionEntryId = this._condition.entryInfo.entryId;
        return this._patientRecord.getEntriesOfType(receptorType).filter(item => {
            return item.specificFocusOfFinding && item.specificFocusOfFinding._entryId === conditionEntryId;
        });
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

    getMostRecentClinicalStaging(sinceDate = null) {
        let stagingList = this._patientRecord.getEntriesOfType(FluxTNMClinicalStageGroup);
        if (stagingList.length === 0) return null; 
        // Sort to get the most recent
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

    getMostRecentPathologicStaging(sinceDate = null) {
        let stagingList = this._patientRecord.getEntriesOfType(FluxTNMPathologicStageGroup);
        if (stagingList.length === 0) return null; 
        const sortedStagingList = stagingList.sort(this._stageTimeSorter);
        const length = sortedStagingList.length;
        let s = (sortedStagingList[length - 1]);
        if (Lang.isNull(sinceDate)) return s; 
        const startTime = new moment(s.relevantTime, "D MMM YYYY");
        if (startTime < sinceDate) {
            return null;
        } else {
            return s;
        }
    }

    getMostRecentStaging(sinceDate = null) {
        let stagingList = this._patientRecord.getEntriesOfType(FluxTNMStageGroup);
        if (stagingList.length === 0) return null; 
        const sortedStagingList = stagingList.sort(this._stageTimeSorter);
        const length = sortedStagingList.length;
        let s = (sortedStagingList[length - 1]);
        if (Lang.isNull(sinceDate)) return s; 
        const startTime = new moment(s.relevantTime, "D MMM YYYY");
        if (startTime < sinceDate) {
            return null;
        } else {
            return s;
        }
    }

    getMostRecentTumorMarkers(sinceDate = null) { 
        let tumorMarkersList = this._patientRecord.getEntriesOfType(FluxTumorMarker);
        // If we have none, return null
        if (tumorMarkersList.length === 0) return null; 
        const sortedTumorMarkersList = tumorMarkersList
        .sort(this._stageTimeSorter);
        // If we have no sinceDate, return them all sorted
        if (Lang.isNull(sinceDate)) return sortedTumorMarkersList; 
        const filteredSortedTumorMarkerList = sortedTumorMarkersList.filter(tm => new moment(tm.relevantTime, "D MMM YYYY") < sinceDate);
        if (filteredSortedTumorMarkerList.length === 0) return null;
        return filteredSortedTumorMarkerList;
    }
}

export default FluxSolidTumorCancer;
