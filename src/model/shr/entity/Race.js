import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Race.
 */
class Race {

  /**
   * Get the RaceCode.
   * @returns {RaceCode} The shr.entity.RaceCode
   */
  get raceCode() {
    return this._raceCode;
  }

  /**
   * Set the RaceCode.
   * @param {RaceCode} raceCode - The shr.entity.RaceCode
   */
  set raceCode(raceCode) {
    this._raceCode = raceCode;
  }

  /**
   * Set the RaceCode and return 'this' for chaining.
   * @param {RaceCode} raceCode - The shr.entity.RaceCode
   * @returns {Race} this.
   */
  withRaceCode(raceCode) {
    this.raceCode = raceCode; return this;
  }

  /**
   * Get the RaceDetail array.
   * @returns {Array<RaceDetail>} The shr.entity.RaceDetail array
   */
  get raceDetail() {
    return this._raceDetail;
  }

  /**
   * Set the RaceDetail array.
   * @param {Array<RaceDetail>} raceDetail - The shr.entity.RaceDetail array
   */
  set raceDetail(raceDetail) {
    this._raceDetail = raceDetail;
  }

  /**
   * Set the RaceDetail array and return 'this' for chaining.
   * @param {Array<RaceDetail>} raceDetail - The shr.entity.RaceDetail array
   * @returns {Race} this.
   */
  withRaceDetail(raceDetail) {
    this.raceDetail = raceDetail; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Race class.
   * The JSON must be valid against the Race JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Race} An instance of Race populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Race();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Race class to a JSON object.
   * The JSON is expected to be valid against the Race JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Race' } };
    if (this.raceCode != null) {
      inst['RaceCode'] = typeof this.raceCode.toJSON === 'function' ? this.raceCode.toJSON() : this.raceCode;
    }
    if (this.raceDetail != null) {
      inst['RaceDetail'] = this.raceDetail.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the Race class to a FHIR object.
   * The FHIR is expected to be valid against the Race FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Race class.
   * The FHIR must be valid against the Race FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Race} An instance of Race populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Race();
    return inst;
  }

}
export default Race;
