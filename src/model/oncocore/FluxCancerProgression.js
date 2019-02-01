import lookup from '../../lib/progression_lookup.jsx';
import CancerProgression from './CancerProgression';
import CreationTime from '../shr/core/CreationTime';
import FluxEntry from '../base/FluxEntry';
import FluxEvidence from './FluxEvidence';
import RelevantTime from '../shr/base/RelevantTime';
import Entry from '../shr/base/Entry';
import Reference from '../Reference';
import EntryType from '../shr/base/EntryType';
import moment from 'moment';
import LastUpdated from '../shr/base/LastUpdated';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding.js';
import Lang from 'lodash';

export default class FluxCancerProgression extends FluxEntry {
    constructor(json) {
        super();
        const evidence = json["Evidence"];
        if (evidence) {
            this._evidence = evidence.map(e => {
                return new FluxEvidence(e);
            });
        }

        // Clone the json first otherwise the backend test fails
        const clonedJSON = Lang.cloneDeep(json);
        delete clonedJSON.Evidence;
        this._entry = this._cancerProgression = CancerProgression.fromJSON(clonedJSON);
        if (!this._cancerProgression.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/mcode/CancerProgression';
            let today = new moment().format("D MMM YYYY");
            entry.lastUpdated = new LastUpdated();
            entry.lastUpdated.instant = today;
            this._cancerProgression.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._cancerProgression.entryInfo;
    }

    /**
     *  Getter for status
     *  This will return the displayText string from CodeableConcept Value
     */
    get status() {
        if (!this._cancerProgression.value) return null;
        return this._cancerProgression.value.coding[0].displayText.value;
    }

    /**
     *  Setter for status
     *  The setter method is expecting a status sting
     *  The method will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set status(status) {
        this._cancerProgression.value = lookup.getStatusCodeableConcept(status);
    }

    /**
     *  Getter for status' code
     *  This will return the code string from CodeableConcept, corresponding to the status' code
     */
    get statusAsCode() {
        return this._cancerProgression.value.coding[0].code;
    }

    /**
     *  Getter for evidence
     *  This will return an array of displayText strings from Evidence array
     */
    get evidence() {
        if (!this._evidence) return [];
        return this._evidence.map((e) => {
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

        this._evidence = filteredEvidence.map((e) => {
            let ev = new FluxEvidence();
            ev.value = lookup.getEvidenceCodeableConcept(e);
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
        if (!this._cancerProgression.entryInfo || !this._cancerProgression.entryInfo.creationTime) return null;
        return this._cancerProgression.entryInfo.creationTime.value;
    }

    set asOfDate(val) {
        if (!this._cancerProgression.entryInfo.creationTime) {
            let creationTime = new CreationTime();
            creationTime.value = val;
            this._cancerProgression.entryInfo.creationTime = creationTime;
        } else {
            this._cancerProgression.entryInfo.creationTime.value = val;
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