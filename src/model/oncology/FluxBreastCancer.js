import BreastCancer from '../shr/oncology/BreastCancer';
import FluxTest from '../lab/FluxTest';
import FluxTNMStage from './FluxTNMStage';
import ReceptorStatusObservation from '../shr/oncology/ReceptorStatusObservation';
import SpecificType from '../shr/core/SpecificType';
import Lang from 'lodash'
import moment from 'moment';
import lookup from '../../lib/cancer_lookup.jsx';

class FluxBreastCancer extends BreastCancer {
    get diagnosisDate() {
        return this.whenClinicallyRecognized.value.value.value.timePeriodStart.value;
    }
    get type() {
        if (!this.specificType) return null;
        return this.specificType.value.coding[0].displayText.value;
    }
    
    set type(cancerType) {
        if (!this.specificType) this.specificType = new SpecificType();
        this.specificType.value = lookup.getCancerCodeableConcept(cancerType);
    }
    
    getObservationsOfType(type) {
        if (!this.observation) return [];
        return this.observation.filter((item) => { 
            return item instanceof type;
        });
    }
    addObservation(observation) {
        let currentObservations = this.observation;
        currentObservations.push(observation);
        this.observation = currentObservations;
    }
    
       getTests() {
        return this.getObservationsOfType(FluxTest);
    }

       _observationTimeSorter(a, b) {
        const a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
        const b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
        if (a_startTime < b_startTime) { return -1; }
        if (a_startTime > b_startTime) { return 1; }
        return 0;
    }

    _getReceptorStatus(receptorType) {
        let listObs = this.getObservationsOfType(ReceptorStatusObservation);
        let list = listObs.filter((item) => {
            return item.receptorType && item.receptorType.value.coding[0].value === receptorType;
        });
        if (list.length === 0) return null; else return list[0];
    }
    
    getERReceptorStatus() {
        return this._getReceptorStatus("23307004");
    }
    getPRReceptorStatus() {
        return this._getReceptorStatus("C0034833");
    }
    getHER2ReceptorStatus() {
        return this._getReceptorStatus("C0069515");
    }

    getMostRecentStaging(sinceDate = null) {
        let stagingList = this.getObservationsOfType(FluxTNMStage);
        if (stagingList.length === 0) return null;
        const sortedStagingList = stagingList.sort(this._observationTimeSorter);
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

export default FluxBreastCancer;