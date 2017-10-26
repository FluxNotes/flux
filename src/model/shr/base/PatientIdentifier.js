import Entry from '../base/Entry';

class PatientIdentifier {
    constructor(json) {
        this._entryInfo = new Entry(json);
        if (json.organization) this._organization = json.organization;
        if (json.identifierType) this._identifierType = json.identifierType;
        if (json.value) this._value = json.value;
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
    
    get organization() {
        return this._organization;
    }

    set organization(val) {
        this._organization = val;
    }

    get identifierType() {
        return this._identifierType;
    }

    set identifierType(val) {
        this._identifierType = val;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
    }
}

export default PatientIdentifier;