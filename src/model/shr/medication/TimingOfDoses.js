/** Generated from SHR definition for shr.medication.TimingOfDoses */
class TimingOfDoses {
    constructor(json) {
        this._value = json.value;
        this._units = json.units.coding.value;
    }
  // Ommitting getter/setter for value: TBD<Timing>
    get value() {
        return this._value;
    }
    
    set value(val) {
        this._value = val;
    }
    
    get units() {
        return this._units;
    }
    
    set units(val) {
        this._units = val;
    }
}

export default TimingOfDoses;
