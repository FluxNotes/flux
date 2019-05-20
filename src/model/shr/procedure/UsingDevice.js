import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.procedure.UsingDevice.
 */
class UsingDevice {

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
   * @returns {UsingDevice} this.
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
   * @returns {UsingDevice} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Deserializes JSON data to an instance of the UsingDevice class.
   * The JSON must be valid against the UsingDevice JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UsingDevice} An instance of UsingDevice populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new UsingDevice();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the UsingDevice class to a JSON object.
   * The JSON is expected to be valid against the UsingDevice JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/UsingDevice' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the UsingDevice class.
   * The FHIR must be valid against the UsingDevice FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {UsingDevice} An instance of UsingDevice populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new UsingDevice();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.Device', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default UsingDevice;
