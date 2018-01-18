import Entry from '../shr/base/Entry';

class FluxClinicalNote {
    constructor(json) {
        this._entryInfo = new Entry(json);
        if (json.date) this._date = json.date;
        if (json.subject) this._subject = json.subject;
        if (json.hospital) this._hospital = json.hospital;
        if (json.clinician) this._clinician = json.clinician;
        if (json.content) this._content = json.content;
        if (json.signed) this._signed = json.signed;
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
}

export default FluxClinicalNote;