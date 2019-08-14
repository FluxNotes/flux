import * as lookup from '../../../../lib/progression_lookup.jsx';
import CancerDiseaseStatus from '../../../onco/core/CancerDiseaseStatus';
import FluxEntry from '../../base/FluxEntry';
import FluxEvidenceType from './FluxEvidenceType';
import RelevantTime from '../../../shr/core/RelevantTime';
import Reference from '../../../Reference';
import RelatedCancerCondition from '../../../onco/core/RelatedCancerCondition.js';
import EntryType from '../../../shr/base/EntryType';
import Metadata from '../../../shr/core/Metadata';
// import AuthoredDateTime from '../shr/base/AuthoredDateTime.js';
import DataValue from '../../../shr/core/DataValue.js';

import ClassRegistry from '../../../ClassRegistry';

export default class FluxCancerDiseaseStatus extends FluxEntry {
    constructor(json) {
        super();

        this._entry = this._cancerDiseaseStatus = CancerDiseaseStatus.fromJSON(json);
        if (!this._cancerDiseaseStatus.entryInfo) {
            const Entry = ClassRegistry.get('shr.base', 'Entry');
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/onco/core/CancerDiseaseStatus';
            this._cancerDiseaseStatus.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._cancerDiseaseStatus.entryInfo;
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
        if (!this._cancerDiseaseStatus.dataValue || !this._cancerDiseaseStatus.dataValue.value) return null;
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

    // Flux added
    get asOfDate() {
        if (this._cancerDiseaseStatus.statementDateTime
            && this._cancerDiseaseStatus.statementDateTime.value) {
            return this._cancerDiseaseStatus.statementDateTime.value;
        }

        if (this._cancerDiseaseStatus.metadata 
            && this._cancerDiseaseStatus.metadata.authoredDateTime
            && this._cancerDiseaseStatus.metadata.authoredDateTime.value) {
            return this._cancerDiseaseStatus.metadata.authoredDateTime.value;
        }

        return null;
    }

    set asOfDate(val) {
        if (!this._cancerDiseaseStatus.metadata) this._cancerDiseaseStatus.metadata = new Metadata();
        if (!this._cancerDiseaseStatus.metadata.authoredDateTime) {
            // const authoredDateTime = new AuthoredDateTime();
            const authoredDateTime = {};
            authoredDateTime.value = val;
            this._cancerDiseaseStatus.metadata.authoredDateTime = authoredDateTime;
        } else {
            this._cancerDiseaseStatus.metadata.authoredDateTime.value = val;
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
            let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
            let rcc = new RelatedCancerCondition();
            rcc.value = ref;
            this.relatedCancerCondition = rcc;
        }
    }

    toJSON() {
        return this._cancerDiseaseStatus.toJSON();
    }
}