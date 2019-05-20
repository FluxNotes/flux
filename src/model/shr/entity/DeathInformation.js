import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.entity.DeathInformation.
 */
class DeathInformation {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {DeathInformation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the IsDeceased.
   * @returns {IsDeceased} The shr.entity.IsDeceased
   */
  get isDeceased() {
    return this._isDeceased;
  }

  /**
   * Set the IsDeceased.
   * This field/value is required.
   * @param {IsDeceased} isDeceased - The shr.entity.IsDeceased
   */
  set isDeceased(isDeceased) {
    this._isDeceased = isDeceased;
  }

  /**
   * Set the IsDeceased and return 'this' for chaining.
   * This field/value is required.
   * @param {IsDeceased} isDeceased - The shr.entity.IsDeceased
   * @returns {DeathInformation} this.
   */
  withIsDeceased(isDeceased) {
    this.isDeceased = isDeceased; return this;
  }

  /**
   * Get the DateOfDeath.
   * @returns {DateOfDeath} The shr.entity.DateOfDeath
   */
  get dateOfDeath() {
    return this._dateOfDeath;
  }

  /**
   * Set the DateOfDeath.
   * @param {DateOfDeath} dateOfDeath - The shr.entity.DateOfDeath
   */
  set dateOfDeath(dateOfDeath) {
    this._dateOfDeath = dateOfDeath;
  }

  /**
   * Set the DateOfDeath and return 'this' for chaining.
   * @param {DateOfDeath} dateOfDeath - The shr.entity.DateOfDeath
   * @returns {DeathInformation} this.
   */
  withDateOfDeath(dateOfDeath) {
    this.dateOfDeath = dateOfDeath; return this;
  }

  /**
   * Get the AgeAtDeath.
   * @returns {AgeAtDeath} The shr.entity.AgeAtDeath
   */
  get ageAtDeath() {
    return this._ageAtDeath;
  }

  /**
   * Set the AgeAtDeath.
   * @param {AgeAtDeath} ageAtDeath - The shr.entity.AgeAtDeath
   */
  set ageAtDeath(ageAtDeath) {
    this._ageAtDeath = ageAtDeath;
  }

  /**
   * Set the AgeAtDeath and return 'this' for chaining.
   * @param {AgeAtDeath} ageAtDeath - The shr.entity.AgeAtDeath
   * @returns {DeathInformation} this.
   */
  withAgeAtDeath(ageAtDeath) {
    this.ageAtDeath = ageAtDeath; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DeathInformation class.
   * The JSON must be valid against the DeathInformation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DeathInformation} An instance of DeathInformation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DeathInformation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DeathInformation class to a JSON object.
   * The JSON is expected to be valid against the DeathInformation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/DeathInformation' };
    if (this.isDeceased != null) {
      inst['IsDeceased'] = typeof this.isDeceased.toJSON === 'function' ? this.isDeceased.toJSON() : this.isDeceased;
    }
    if (this.dateOfDeath != null) {
      inst['DateOfDeath'] = typeof this.dateOfDeath.toJSON === 'function' ? this.dateOfDeath.toJSON() : this.dateOfDeath;
    }
    if (this.ageAtDeath != null) {
      inst['AgeAtDeath'] = typeof this.ageAtDeath.toJSON === 'function' ? this.ageAtDeath.toJSON() : this.ageAtDeath;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DeathInformation class.
   * The FHIR must be valid against the DeathInformation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DeathInformation} An instance of DeathInformation populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new DeathInformation();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/DeathInformation');
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-IsDeceased-extension') {
        inst.isDeceased = FHIRHelper.createInstanceFromFHIR('shr.entity.IsDeceased', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-DateOfDeath-extension') {
        inst.dateOfDeath = FHIRHelper.createInstanceFromFHIR('shr.entity.DateOfDeath', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-AgeAtDeath-extension') {
        inst.ageAtDeath = FHIRHelper.createInstanceFromFHIR('shr.entity.AgeAtDeath', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default DeathInformation;
