import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import CreationTime from '../shr/core/CreationTime';
import LastUpdated from '../shr/base/LastUpdated';
import moment from 'moment';

class FluxPatientIdentifier {
    constructor(json) {
        this._entryInfo = new Entry();
        this._entryInfo.shrId = json['ShrId'];
        this._entryInfo.entryId = json['EntryId'];
        this._entryInfo.entryType = new EntryType();
        this._entryInfo.entryType.value = "http://standardhealthrecord.org/spec/shr/base/PatientIdentifier";
        let today = new moment().format("D MMM YYYY");
        this._entryInfo.creationTime = new CreationTime();
        this._entryInfo.creationTime.dateTime = today;
        this._entryInfo.lastUpdated = new LastUpdated();
        this._entryInfo.lastUpdated.instant = today;
        if (json.organization) this._organization = json.organization;
        if (json.identifierType) this._identifierType = json.identifierType;
        if (json.value) this._value = json.value;
        if (json.fictionalPerson) this._fictionalPerson = json.fictionalPerson;
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

    get fictionalPerson() {
        return this._value;
    }

    set fictionalPerson(val) {
        this._value = val;
    }

    toJSON() {
        let patientIdentifierJSON = {};
        patientIdentifierJSON.identifierType = this.identifierType;
        patientIdentifierJSON.organization = this.organization;
        patientIdentifierJSON.CreationTime = this.entryInfo.creationTime;
        patientIdentifierJSON.EntryId = this.entryInfo.entryId;
        patientIdentifierJSON.EntryType = this.entryInfo.entryType.toJSON();
        patientIdentifierJSON.LastUpdated = this.entryInfo.lastUpdated;
        patientIdentifierJSON.PersonOfRecord = this.entryInfo.personOfRecord;
        patientIdentifierJSON.ShrId = this.entryInfo.shrId;
        patientIdentifierJSON.value = this.value;
        patientIdentifierJSON.fictionalPerson = this.fictionalPerson;
        return patientIdentifierJSON;
    }
}

export default FluxPatientIdentifier;