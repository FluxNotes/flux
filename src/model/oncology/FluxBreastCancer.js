import BreastCancer from '../shr/oncology/BreastCancer';
import FluxCondition from '../condition/FluxCondition';
import FluxEstrogenReceptorStatus from './FluxEstrogenReceptorStatus';
import FluxHER2ReceptorStatus from './FluxHER2ReceptorStatus';
import FluxHistologicGrade from './FluxHistologicGrade';
import FluxProgesteroneReceptorStatus from './FluxProgesteroneReceptorStatus';
import FluxTNMStage from '../oncology/FluxTNMStage';
import FluxTumorDimensions from '../oncology/FluxTumorDimensions';
import Lang from 'lodash';
import moment from 'moment';

class FluxBreastCancer extends FluxCondition {
    constructor(json, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = BreastCancer.fromJSON(json);
    }
    
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

    getMostRecentERReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxEstrogenReceptorStatus);
    }

    getMostRecentPRReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxProgesteroneReceptorStatus);
    }

    getMostRecentHER2ReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxHER2ReceptorStatus);
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

    /**
     *  function to build HPI Narrative
     *  Starts with initial summary of patient information
     *  Then details chronological history of patient's procedures, medications, and most recent progression
     */
    buildHpiNarrative(patient) {
        // Initial patient introduction section
        const name = patient.getName();
        const age = patient.getAge();
        const gender = patient.getGender();

        let hpiText = `${name} is a ${age} year old ${gender}.`;
        hpiText += ` Patient was diagnosed with ${this.type} on ${this.diagnosisDate}.`;
        
        // Laterality
        if (this.laterality) {
            hpiText += ` Breast cancer diagnosed in ${this.laterality} breast.`;
        }

        // Staging
        const staging = this.getMostRecentStaging();
        if (staging && staging.stage) {
            hpiText += ` Stage ${staging.stage} ${staging.t_Stage} ${staging.n_Stage} ${staging.m_Stage} disease.`;
        }

        // Tumor Size and HistologicGrade
        const tumorSize = this.getObservationsOfType(FluxTumorDimensions);
        const histologicGrade = this.getObservationsOfType(FluxHistologicGrade);
        if (tumorSize.length > 0) {
            hpiText += ` Primary tumor size was ${tumorSize[0].quantity.value} ${tumorSize[0].quantity.unit}.`;
        }
        if (histologicGrade.length > 0) {
            hpiText += ` Histological grade was ${histologicGrade[0].grade}.`;
        }

        // ER, PR, HER2
        const erStatus = this.getMostRecentERReceptorStatus();
        const prStatus = this.getMostRecentPRReceptorStatus();
        const her2Status = this.getMostRecentHER2ReceptorStatus();
        if (erStatus) {
            hpiText += ` Estrogen receptor was ${erStatus.status}.`;
        }
        if (prStatus) {
            hpiText += ` Progesteron receptor was ${prStatus.status}.`;
        }
        if (her2Status) {
            hpiText += ` HER2 was ${her2Status.status}.`;
        }

        hpiText = this.buildEventNarrative(hpiText, patient);
        
        return hpiText;
    }

    toJSON() {
        return this._condition.toJSON();
    }
}

export default FluxBreastCancer;