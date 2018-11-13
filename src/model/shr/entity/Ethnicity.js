import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Ethnicity.
 */
class Ethnicity {

  /**
   * Get the EthnicityCode.
   * @returns {EthnicityCode} The shr.entity.EthnicityCode
   */
  get ethnicityCode() {
    return this._ethnicityCode;
  }

  /**
   * Set the EthnicityCode.
   * This field/value is required.
   * @param {EthnicityCode} ethnicityCode - The shr.entity.EthnicityCode
   */
  set ethnicityCode(ethnicityCode) {
    this._ethnicityCode = ethnicityCode;
  }

  /**
   * Set the EthnicityCode and return 'this' for chaining.
   * This field/value is required.
   * @param {EthnicityCode} ethnicityCode - The shr.entity.EthnicityCode
   * @returns {Ethnicity} this.
   */
  withEthnicityCode(ethnicityCode) {
    this.ethnicityCode = ethnicityCode; return this;
  }

  /**
   * Get the EthnicityDetail array.
   * @returns {Array<EthnicityDetail>} The shr.entity.EthnicityDetail array
   */
  get ethnicityDetail() {
    return this._ethnicityDetail;
  }

  /**
   * Set the EthnicityDetail array.
   * @param {Array<EthnicityDetail>} ethnicityDetail - The shr.entity.EthnicityDetail array
   */
  set ethnicityDetail(ethnicityDetail) {
    this._ethnicityDetail = ethnicityDetail;
  }

  /**
   * Set the EthnicityDetail array and return 'this' for chaining.
   * @param {Array<EthnicityDetail>} ethnicityDetail - The shr.entity.EthnicityDetail array
   * @returns {Ethnicity} this.
   */
  withEthnicityDetail(ethnicityDetail) {
    this.ethnicityDetail = ethnicityDetail; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Ethnicity class.
   * The JSON must be valid against the Ethnicity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ethnicity} An instance of Ethnicity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Ethnicity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Ethnicity class to a JSON object.
   * The JSON is expected to be valid against the Ethnicity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Ethnicity' } };
    if (this.ethnicityCode != null) {
      inst['EthnicityCode'] = typeof this.ethnicityCode.toJSON === 'function' ? this.ethnicityCode.toJSON() : this.ethnicityCode;
    }
    if (this.ethnicityDetail != null) {
      inst['EthnicityDetail'] = this.ethnicityDetail.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the Ethnicity class to a FHIR object.
   * The FHIR is expected to be valid against the Ethnicity FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Ethnicity class.
   * The FHIR must be valid against the Ethnicity FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Ethnicity} An instance of Ethnicity populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Ethnicity();
    return inst;
  }

}
export default Ethnicity;
