import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.procedure.UsingAccessDevice.
 */
class UsingAccessDevice {

  /**
   * Get the value (aliases device).
   * @returns {Device} The shr.entity.Device
   */
  get value() {
    return this._device;
  }

  /**
   * Set the value (aliases device).
   * This field/value is required.
   * @param {Device} value - The shr.entity.Device
   */
  set value(value) {
    this._device = value;
  }

  /**
   * Set the value (aliases device) and return 'this' for chaining.
   * This field/value is required.
   * @param {Device} value - The shr.entity.Device
   * @returns {UsingAccessDevice} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Device.
   * @returns {Device} The shr.entity.Device
   */
  get device() {
    return this._device;
  }

  /**
   * Set the Device.
   * This field/value is required.
   * @param {Device} device - The shr.entity.Device
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the Device and return 'this' for chaining.
   * This field/value is required.
   * @param {Device} device - The shr.entity.Device
   * @returns {UsingAccessDevice} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Deserializes JSON data to an instance of the UsingAccessDevice class.
   * The JSON must be valid against the UsingAccessDevice JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UsingAccessDevice} An instance of UsingAccessDevice populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new UsingAccessDevice();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the UsingAccessDevice class to a JSON object.
   * The JSON is expected to be valid against the UsingAccessDevice JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/UsingAccessDevice' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the UsingAccessDevice class to a FHIR object.
   * The FHIR is expected to be valid against the UsingAccessDevice FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-procedure-UsingAccessDevice-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the UsingAccessDevice class.
   * The FHIR must be valid against the UsingAccessDevice FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {UsingAccessDevice} An instance of UsingAccessDevice populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new UsingAccessDevice();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.entity.Device', fhir);
    }
    return inst;
  }

}
export default UsingAccessDevice;
