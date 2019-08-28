import * as lookup from '../../../../lib/progression_lookup.jsx';
import CancerDiseaseStatus from '../../../onco/core/CancerDiseaseStatus';
import FluxEntry from '../../base/FluxEntry';
import FluxEvidenceType from './FluxEvidenceType';
import RelevantTime from '../../../shr/core/RelevantTime';
import Reference from '../../../Reference';
import RelatedCancerCondition from '../../../onco/core/RelatedCancerCondition';
import DataValue from '../../../shr/core/DataValue';
import StatementDateTime from '../../../shr/core/StatementDateTime';

export default class FluxCancerDiseaseStatus extends FluxEntry {
    constructor(json) {
        super();

        this._entry = this._cancerDiseaseStatus = CancerDiseaseStatus.fromJSON(json);
        if (!this._cancerDiseaseStatus.entryInfo) {
            this._cancerDiseaseStatus.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/CancerDiseaseStatus');
        }
    }

    get metadata() {
        return this._cancerDiseaseStatus.metadata;
    }

    set metadata(metadata) {
        this._cancerDiseaseStatus.metadata = metadata;
    }

    /**
     *  Getter for status
     *  This will return the displayText string from CodeableConcept Value
     */
    get status() {
        if (!this._cancerDiseaseStatus.dataValue
            || !this._cancerDiseaseStatus.dataValue.value
            || !this._cancerDiseaseStatus.dataValue.value.coding
            || !this._cancerDiseaseStatus.dataValue.value.coding[0]
            || !this._cancerDiseaseStatus.dataValue.value.coding[0].displayText) return null;
        return this._cancerDiseaseStatus.dataValue.value.coding[0].displayText.value;
    }

    /**
     *  Setter for status
     *  The setter method is expecting a status sting
     *  The method will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set status(status) {
        if (!this._cancerDiseaseStatus.dataValue) this._cancerDiseaseStatus.dataValue = new DataValue();
        this._cancerDiseaseStatus.dataValue.value = lookup.getStatusCodeableConcept(status);
    }

    /**
     *  Getter for status' code
     *  This will return the code string from CodeableConcept, corresponding to the status' code
     */
    get statusAsCode() {
        if (!this._cancerDiseaseStatus.dataValue
            || !this._cancerDiseaseStatus.dataValue.value
            || !this._cancerDiseaseStatus.dataValue.value.coding
            || !this._cancerDiseaseStatus.dataValue.value.coding[0]
            || !this._cancerDiseaseStatus.dataValue.value.coding[0].codeValue) return null;
        return this._cancerDiseaseStatus.dataValue.value.coding[0].codeValue.value;
    }

    /**
     *  Getter for evidence
     *  This will return an array of displayText strings from Evidence array
     */
    get evidence() {
        if (!this._cancerDiseaseStatus.evidenceType) return [];
        return this._cancerDiseaseStatus.evidenceType.map((e) => {
            return e.value;
        });
    }

    /**
     *  Setter for evidence
     *  The method is expecting an array of reason strings
     *  The method will lookup the corresponding coding/codesystem and set the evidence array
     */
    set evidence(evidence) {
        // filter evidence to ignore case and to make sure there are no duplicates
        const filteredEvidence = evidence.map(e => e.toLowerCase()).filter((e, index, arr) => {
            return arr.indexOf(e) === index;
        });

        this._cancerDiseaseStatus.evidenceType = filteredEvidence.map((e) => {
            let ev = new FluxEvidenceType();
            ev.value = lookup.getEvidenceCodeableConcept(e);
            return ev;
        });
    }

    get referenceDate() {
        if (!this._cancerDiseaseStatus.relevantTime) return null;
        return this._cancerDiseaseStatus.relevantTime.value;
    }

    set referenceDate(date) {
        if (!date) return;
        if (!this._cancerDiseaseStatus.relevantTime) {
            let relevantTime = new RelevantTime();
            relevantTime.value = date;
            this._cancerDiseaseStatus.relevantTime = relevantTime;
        } else {
            this._cancerDiseaseStatus.relevantTime.value = date;
        }
    }

    get asOfDate() {
        if (!this._cancerDiseaseStatus.statementDateTime
            || !this._cancerDiseaseStatus.statementDateTime.value) return null;

        return this._cancerDiseaseStatus.statementDateTime.value;
    }

    set asOfDate(date) {
        if (!date) return;
        if (!this._cancerDiseaseStatus.statementDateTime) {
            let statementDateTime = new StatementDateTime();
            statementDateTime.value = date;
            this._cancerDiseaseStatus.statementDateTime = statementDateTime;
        } else {
            this._cancerDiseaseStatus.statementDateTime.value = date;
        }
    }

    get relatedCancerCondition() {
        if (this._cancerDiseaseStatus.relatedCancerCondition) {
            return this._cancerDiseaseStatus.relatedCancerCondition.value || this._cancerDiseaseStatus.relatedCancerCondition;
        }
        return null;
    }

    set relatedCancerCondition(val) {
        this._cancerDiseaseStatus.relatedCancerCondition = val;
    }

    setRelatedCancerCondition(obj) {
        if (!obj) {
            this.relatedCancerCondition = null;
        } else {
            let ref = new Reference(obj.entryInfo.shrId.value, obj.entryInfo.entryId.value, obj.entryInfo.entryType.value);
            let rcc = new RelatedCancerCondition();
            rcc.value = ref;
            this.relatedCancerCondition = rcc;
        }
    }
}
