import Entry from '../shr/base/Entry';
import CreationTime from '../shr/core/CreationTime';
import LastUpdated from '../shr/base/LastUpdated';
import moment from 'moment';

class FluxPatientIdentifier {
    constructor(json) {
        this._entryInfo = new Entry();
        this._entryInfo.shrId = json['shr.base.ShrId'];
        this._entryInfo.entryId = json['shr.base.EntryId'];
        let today = new moment().format("D MMM YYYY");
        this._entryInfo.creationTime = new CreationTime();
        this._entryInfo.creationTime.dateTime = today;
        this._entryInfo.lastUpdated = new LastUpdated();
        this._entryInfo.lastUpdated.instant = today;
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

export default FluxPatientIdentifier;