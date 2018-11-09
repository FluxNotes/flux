import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.PanelMembers.
 */
class PanelMembers {

  /**
   * Get the shr.base.Observation reference array.
   * @returns {Array<Reference>} The shr.base.Observation reference array
   */
  get observation() {
    return this._observation;
  }

  /**
   * Set the shr.base.Observation reference array.
   * @param {Array<Reference>} observation - The shr.base.Observation reference array
   */
  set observation(observation) {
    this._observation = observation;
  }

  /**
   * Set the shr.base.Observation reference array and return 'this' for chaining.
   * @param {Array<Reference>} observation - The shr.base.Observation reference array
   * @returns {PanelMembers} this.
   */
  withObservation(observation) {
    this.observation = observation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PanelMembers class.
   * The JSON must be valid against the PanelMembers JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PanelMembers} An instance of PanelMembers populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PanelMembers();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the PanelMembers class to a JSON object.
   * The JSON is expected to be valid against the PanelMembers JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/PanelMembers' } };
    if (this.observation != null) {
      inst['Observation'] = this.observation.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the PanelMembers class to a FHIR object.
   * The FHIR is expected to be valid against the PanelMembers FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the PanelMembers class.
   * The FHIR must be valid against the PanelMembers FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {PanelMembers} An instance of PanelMembers populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new PanelMembers();
    return inst;
  }

}
export default PanelMembers;
