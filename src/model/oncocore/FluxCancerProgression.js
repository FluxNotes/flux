import { getStatusCodeableConcept, getEvidenceCodeableConcept } from '../../lib/progression_lookup.jsx';
import CancerProgression from './CancerProgression';
import FluxEntry from '../base/FluxEntry';
import FluxCancerProgressionEvidence from './FluxCancerProgressionEvidence';
import RelevantTime from '../shr/base/RelevantTime';
import Entry from '../shr/base/Entry';
import Reference from '../Reference';
import EntryType from '../shr/base/EntryType';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding.js';
import Metadata from '../shr/base/Metadata.js';
import AuthoredDateTime from '../shr/base/AuthoredDateTime.js';
import FindingResult from '../shr/base/FindingResult.js';

export default class FluxCancerProgression extends FluxEntry {
    constructor(json) {
        super();

        this._entry = this._cancerProgression = CancerProgression.fromJSON(json);
        if (!this._cancerProgression.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/CancerProgression';
            this._cancerProgression.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._cancerProgression.entryInfo;
    }

    get metadata() {
        return this._cancerProgression.metadata;
    }

    set metadata(metadata) {
        this._cancerProgression.metadata = metadata;
    }

    /**
     *  Getter for status
     *  This will return the displayText string from CodeableConcept Value
     */
    get status() {
        if (!this._cancerProgression.findingResult || !this._cancerProgression.findingResult.value) return null;
        return this._cancerProgression.findingResult.value.coding[0].displayText.value;
    }

    /**
     *  Setter for status
     *  The setter method is expecting a status sting
     *  The method will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set status(status) {
        if (!this._cancerProgression.findingResult) this._cancerProgression.findingResult = new FindingResult();
        this._cancerProgression.findingResult.value = getStatusCodeableConcept(status);
    }

    /**
     *  Getter for status' code
     *  This will return the code string from CodeableConcept, corresponding to the status' code
     */
    get statusAsCode() {
        return this._cancerProgression.findingResult.value.coding[0].code.value;
    }

    /**
     *  Getter for evidence
     *  This will return an array of displayText strings from Evidence array
     */
    get evidence() {
        if (!this._cancerProgression.cancerProgressionEvidence) return [];
        return this._cancerProgression.cancerProgressionEvidence.map((e) => {
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

        this._cancerProgression.cancerProgressionEvidence = filteredEvidence.map((e) => {
            let ev = new FluxCancerProgressionEvidence();
            ev.value = getEvidenceCodeableConcept(e);
            return ev;
        });
    }

    get referenceDate() {
        if (!this._cancerProgression.relevantTime) return null;
        return this._cancerProgression.relevantTime.value;
    }

    set referenceDate(date) {
        if (!date) return;
        if (!this._cancerProgression.relevantTime) {
            let relevantTime = new RelevantTime();
            relevantTime.value = date;
            this._cancerProgression.relevantTime = relevantTime;
        } else {
            this._cancerProgression.relevantTime.value = date;
        }
    }

    // Flux added
    get asOfDate() {
        if (!this._cancerProgression.metadata || !this._cancerProgression.metadata.authoredDateTime) return null;
        return this._cancerProgression.metadata.authoredDateTime.value;
    }

    set asOfDate(val) {
        if (!this._cancerProgression.metadata) this._cancerProgression.metadata = new Metadata();
        if (!this._cancerProgression.metadata.authoredDateTime) {
            const authoredDateTime = new AuthoredDateTime();
            authoredDateTime.value = val;
            this._cancerProgression.metadata.authoredDateTime = authoredDateTime;
        } else {
            this._cancerProgression.metadata.authoredDateTime.value = val;
        }
    }

    get specificFocusOfFinding() {
        if (this._cancerProgression.specificFocusOfFinding) {
            return this._cancerProgression.specificFocusOfFinding.value || this._cancerProgression.specificFocusOfFinding;
        }
        return null;
    }

    set specificFocusOfFinding(val) {
        this._cancerProgression.specificFocusOfFinding = val;
    }

    setSpecificFocusOfFinding(obj) {
        if (!obj) {
            this.specificFocusOfFinding = null;
        } else {
            let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
            let sff = new SpecificFocusOfFinding();
            sff.value = ref;
            this.specificFocusOfFinding = sff;
        }
    }

    toJSON() {
        return this._cancerProgression.toJSON();
    }
}