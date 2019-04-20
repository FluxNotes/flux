import Lang from 'lodash';
import moment from 'moment';
import FluxConditionPresentAssertion from '../base/FluxConditionPresentAssertion';
import CancerDisorderPresent from './CancerDisorderPresent';
import FluxTumorDimensions from '../tumor/FluxTumorDimensions';
import FluxCancerHistologicType from '../oncocore/FluxCancerHistologicType';
import FluxCancerHistologicGrade from '../oncocore/FluxCancerHistologicGrade';
import FluxTNMClinicalStageGroup from '../oncocore/FluxTNMClinicalStageGroup';
import FluxKarnofskyPerformanceStatus from '../oncocore/FluxKarnofskyPerformanceStatus';
import FluxECOGPerformanceStatus from '../oncocore/FluxECOGPerformanceStatus';
import FluxTNMStageGroup from '../oncocore/FluxTNMStageGroup';
import FluxTumorMarker from '../oncocore/FluxTumorMarker';
import FluxTNMPathologicStageGroup from '../oncocore/FluxTNMPathologicStageGroup';
import lookup from '../../lib/cancer_lookup';

class FluxCancerDisorderPresent extends FluxConditionPresentAssertion {
    constructor(json, type, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = this._entry = CancerDisorderPresent.fromJSON(json);
    }

    toJSON() {
        return this._condition.toJSON();
    }

    // migrated from FluxGastrointestinalStromalTumor
    // assumed to be "safe" for other cancer types so no type checking is performed
    getMostRecentMitosis() {
        let results = this.getObservationsWithObservationCodeChronologicalOrder('7041004'); // code for mitosis observations
        if (!results || results.length === 0) return null;
        return results.pop();
    }

    /**
     *  function to build HPI Narrative
     *  Starts with initial summary of patient information
     *  Then details chronological history of patient's procedures, medications, and most recent progression
     */
    buildHpiNarrative(patient) {
        let hpiText = this.buildInitialPatientDiagnosisPreamble(patient);

        if (this.isCancerType("Gastrointestinal stromal tumor")) {
            hpiText += this.buildHpiNarrativeForFluxGastrointestinalStromalTumor(patient);
        }
        else if (this.isCancerType("Invasive ductal carcinoma of breast")) {
            hpiText += this.buildHpiNarrativeForBreastCancer(patient);
        }
        return hpiText;
    }

    buildHpiNarrativeForFluxGastrointestinalStromalTumor(patient) {
        let hpiText = "";

        // Staging
        const staging = this.getMostRecentStaging();
        if (staging) {
            hpiText += "-";
            if (staging.stage) {
                hpiText += ` Stage ${staging.stage}`;
            }
            if (!Lang.isUndefined(staging.t_Stage) && !Lang.isNull(staging.t_Stage)) {
                hpiText += ` ${staging.t_Stage}`;
            }
            if (!Lang.isUndefined(staging.n_Stage) && !Lang.isNull(staging.n_Stage)) {
                hpiText += ` ${staging.n_Stage}`;
            }
            if (!Lang.isUndefined(staging.m_Stage) && !Lang.isNull(staging.m_Stage) && staging.m_Stage !== 'M0') { // don't show m if it is 0
                hpiText += ` ${staging.m_Stage}`;
            }
            if (staging.mitoticRate) {
                hpiText += `. Mitotic rate ${staging.mitoticRate}`;
            }
            hpiText += '.';
            hpiText += "\r\n";
        }

        // Tumor Size and HistologicGrade
        const tumorSize = this.getObservationsOfType(FluxTumorDimensions);
        const histologicGrade = this.getObservationsOfType(FluxCancerHistologicGrade);
        if (tumorSize.length > 0) {
            hpiText += "-";
            hpiText += ` Primary tumor size ${tumorSize[tumorSize.length - 1].quantity.number} ${tumorSize[tumorSize.length - 1].quantity.unit}.`;
            hpiText += "\r\n";
        }
        if (histologicGrade.length > 0) {
            hpiText += "-";
            hpiText += ` ${histologicGrade[0].grade}.`;
            hpiText += "\r\n";
        }
        
        // genetics
        const geneticpanels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
        //const geneticspanelMostRecent = geneticpanels[geneticpanels.length - 1];
        if (geneticpanels && geneticpanels.length > 0) {
            hpiText += "-";
            const panel = geneticpanels.pop();
            hpiText += " " + panel.members.map((item) => {
                const v = item.value === 'Positive' ? '+' : '-';
                return item.abbreviatedName + v;
            }).join("\r\n - ");
        }

        // Other Events
        hpiText = this.buildEventNarrative(hpiText, patient, this.code);
        return hpiText;
    }

    buildHpiNarrativeForBreastCancer(patient) {
        let hpiText = "";

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
        const histologicGrade = this.getObservationsOfType(FluxCancerHistologicGrade);
        if (tumorSize.length > 0) {
            hpiText += ` Primary tumor size ${tumorSize[0].quantity.number} ${tumorSize[0].quantity.unit}.`;
        }
        if (histologicGrade.length > 0) {
            hpiText += ` Histological grade ${histologicGrade[0].grade}.`;
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

        hpiText = this.buildEventNarrative(hpiText, patient, this.code);

        return hpiText;
    }

    // migrated from FluxGastrointestinalStromalTumor
    // assumed to be undefined for other cancer types so only returns a value if this is a GIST cancer
    getGeneticMutationValue(geneticMutationAbbreviatedName, patient) {
        if (this.isCancerType("Gastrointestinal stromal tumor")) {
            const geneticpanels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
            const panel = geneticpanels.pop();
            const mutation = panel.members.find((item) => {
                return (item.abbreviatedName.startsWith(geneticMutationAbbreviatedName));
            });
            if (Lang.isEmpty(mutation)) return undefined;
            return mutation.value;
        }

        return null;
    }

    ///// Breast Cancer-specific functions
    // the following functions were migrated from FluxBreastCancerDisorderPresent
    // assumed to be undefined for other cancer types so only returns a value if this is a GIST cancer
    getMostRecentERReceptorStatus() {
        // TODO: Address whether or not a hardcoded code here is the best solution
        if (this.isCancerType("Invasive ductal carcinoma of breast")) {
            return this._getMostRecentReceptorStatus('Estrogen Receptor');
        }

        return null;
    }

    getMostRecentPRReceptorStatus() {
        if (this.isCancerType("Invasive ductal carcinoma of breast")) {
            return this._getMostRecentReceptorStatus('Progesterone Receptor');
        }

        return null;
    }
    getMostRecentHER2ReceptorStatus() {
        if (this.isCancerType("Invasive ductal carcinoma of breast")) {
            return this._getMostRecentReceptorStatus('HER2 Receptor');
        }

        return null;
    }

    ///// Solid Tumor related functions
    // the following functions were migrated from FluxSolidTumorCancer,
    // assumed to be relevant for all cancer types so no type checking is performed
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
        return this._patientRecord.getEntriesOfType(FluxTumorMarker).filter(item => {
            // Filter our TumorMarkers to those with the specified type
            return item.receptorType === receptorType && item.specificFocusOfFinding && item.specificFocusOfFinding._entryId === conditionEntryId;
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

    // Pass in cancer name and return true/false
    isCancerType(cancerName) {
        const code = lookup.getCancerCodeableConcept(cancerName);

        return (this.code === code.coding[0].code.code);
    }
}

export default FluxCancerDisorderPresent;
