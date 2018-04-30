import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import CreationTime from '../shr/core/CreationTime';
import LastUpdated from '../shr/base/LastUpdated';
import PersonOfRecord from '../shr/base/PersonOfRecord';
import moment from 'moment';
import Lang from 'lodash';

class FluxClinicalNote {
    constructor(json) {
        this._entryInfo = new Entry();
        this._entryInfo.shrId = json['ShrId'];
        this._entryInfo.entryId = json['EntryId'];
        this._entryInfo.entryType = new EntryType();
        this._entryInfo.entryType.value = "http://standardhealthrecord.org/spec/shr/core/ClinicalNote";
        let today = new moment().format("D MMM YYYY");
        this._entryInfo.creationTime = new CreationTime();
        this._entryInfo.creationTime.dateTime = today;
        this._entryInfo.lastUpdated = new LastUpdated();
        this._entryInfo.lastUpdated.instant = today;
        this._entryInfo.personOfRecord = new PersonOfRecord();
        this._entryInfo.personOfRecord.value = json['PersonOfRecord'];
        if (json.date) this._date = json.date;
        if (json.subject) this._subject = json.subject;
        if (json.hospital) this._hospital = json.hospital;
        if (json.clinician) this._clinician = json.clinician;
        // Ensures even empty strings result in content definition
        if (json.content || json.content === "") this._content = json.content;
        if (!Lang.isUndefined(json.signed)) this._signed = json.signed;
    }
    /**
     * Getter for entry information (shr.base.Entry)
     */
    get entryInfo() {
        return this._entryInfo;
    }

    /**
     * Setter for entry information (shr.base.Entry)
     */
    set entryInfo(entryVal) {
        this._entryInfo = entryVal;
    }
    
    get date() {
        return this._date;
    }

    set date(val) {
        this._date = val;
    }

    get subject() {
        return this._subject;
    }

    set subject(val) {
        this._subject = val;
    }

    get hospital() {
        return this._hospital;
    }

    set hospital(val) {
        this._hospital = val;
    }

    get clinician() {
        return this._clinician;
    }

    set clinician(val) {
        this._clinician = val;
    }

    get content() {
        return this._content;
    }

    set content(val) {
        this._content = val;
    }
    
    get signed() {
        return this._signed;
    }
    
    set signed(val) {
        this._signed = val;
    }

    toJSON() {
        let clinicalNoteJSON = {};
        clinicalNoteJSON.ShrId = this.entryInfo.shrId;
        clinicalNoteJSON.EntryId = this.entryInfo.entryId;
        clinicalNoteJSON.EntryType = this.entryInfo.entryType;
        clinicalNoteJSON.PersonOfRecord = this.entryInfo.personOfRecord;
        clinicalNoteJSON.date = this.date;
        clinicalNoteJSON.subject = this.subject;
        clinicalNoteJSON.hospital = this.hospital;
        clinicalNoteJSON.clinician = this.clinician;
        clinicalNoteJSON.content = this.content;
        clinicalNoteJSON.CreationTime = this.entryInfo.creationTime;
        clinicalNoteJSON.LastUpdated = this.entryInfo.lastUpdated;
        clinicalNoteJSON.signed = this.signed;
        return clinicalNoteJSON;
    }
}

export default FluxClinicalNote;