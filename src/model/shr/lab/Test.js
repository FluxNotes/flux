import Observation from '../observation/Observation';
import Entry from '../base/Entry';
import SpecificType from '../core/SpecificType';

/** Generated from SHR definition for shr.lab.Test */
class Test extends Observation {
    constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
            if (json.specificType) this._specificType = new SpecificType(json.specificType);
        } else {
            this._entryInfo = Entry.createEntry("http://standardhealthrecord.org/lab/Test",
                "http://standardhealthrecord.org/observation/Observation",
                "http://standardhealthrecord.org/base/Action");
        }
    }

    /**
     * Getter for shr.core.SpecificType
     */
    get specificType() {
        return this._specificType;
    }

    /**
     * Setter for shr.core.SpecificType
     */
    set specificType(specificTypeVal) {
        this._specificType = specificTypeVal;
    }

    /**
     * Getter for shr.observation.Method
     */
    get method() {
        return this._method;
    }

    /**
     * Setter for shr.observation.Method
     */
    set method(methodVal) {
        this._method = methodVal;
    }

    /**
     * Getter for shr.core.BodyPosition
     */
    get bodyPosition() {
        return this._bodyPosition;
    }

    /**
     * Setter for shr.core.BodyPosition
     */
    set bodyPosition(bodyPositionVal) {
        this._bodyPosition = bodyPositionVal;
    }

    /**
     * Getter for shr.device.Device
     */
    get device() {
        return this._device;
    }

    /**
     * Setter for shr.device.Device
     */
    set device(deviceVal) {
        this._device = deviceVal;
    }

    // Ommitting getter/setter for field: TBD<Specimen>

    /**
     * Getter for shr.observation.ReferenceRange
     */
    get referenceRange() {
        return this._referenceRange;
    }

    /**
     * Setter for shr.observation.ReferenceRange
     */
    set referenceRange(referenceRangeVal) {
        this._referenceRange = referenceRangeVal;
    }

    /**
     * Getter for shr.lab.ChangeFlag
     */
    get changeFlag() {
        return this._changeFlag;
    }

    /**
     * Setter for shr.lab.ChangeFlag
     */
    set changeFlag(changeFlagVal) {
        this._changeFlag = changeFlagVal;
    }

    /**
     * Getter for shr.lab.TestRequest
     */
    get testRequest() {
        return this._testRequest;
    }

    /**
     * Setter for shr.lab.TestRequest
     */
    set testRequest(testRequestVal) {
        this._testRequest = testRequestVal;
    }

}

export default Test;
