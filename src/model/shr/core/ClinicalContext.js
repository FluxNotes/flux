// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.ClinicalContext.
 */
class ClinicalContext {

  /**
   * Get the shr.core.Encounter reference.
   * @returns {Reference} The shr.core.Encounter reference
   */
  get encounter() {
    return this._encounter;
  }

  /**
   * Set the shr.core.Encounter reference.
   * @param {Reference} encounter - The shr.core.Encounter reference
   */
  set encounter(encounter) {
    this._encounter = encounter;
  }

  /**
   * Set the shr.core.Encounter reference and return 'this' for chaining.
   * @param {Reference} encounter - The shr.core.Encounter reference
   * @returns {ClinicalContext} this.
   */
  withEncounter(encounter) {
    this.encounter = encounter; return this;
  }

  /**
   * Get the Event array.
   * @returns {Array<Event>} The shr.core.Event array
   */
  get event() {
    return this._event;
  }

  /**
   * Set the Event array.
   * @param {Array<Event>} event - The shr.core.Event array
   */
  set event(event) {
    this._event = event;
  }

  /**
   * Set the Event array and return 'this' for chaining.
   * @param {Array<Event>} event - The shr.core.Event array
   * @returns {ClinicalContext} this.
   */
  withEvent(event) {
    this.event = event; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {ClinicalContext} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Get the FacilityType.
   * @returns {FacilityType} The shr.core.FacilityType
   */
  get facilityType() {
    return this._facilityType;
  }

  /**
   * Set the FacilityType.
   * @param {FacilityType} facilityType - The shr.core.FacilityType
   */
  set facilityType(facilityType) {
    this._facilityType = facilityType;
  }

  /**
   * Set the FacilityType and return 'this' for chaining.
   * @param {FacilityType} facilityType - The shr.core.FacilityType
   * @returns {ClinicalContext} this.
   */
  withFacilityType(facilityType) {
    this.facilityType = facilityType; return this;
  }

  /**
   * Get the Setting.
   * @returns {Setting} The shr.core.Setting
   */
  get setting() {
    return this._setting;
  }

  /**
   * Set the Setting.
   * @param {Setting} setting - The shr.core.Setting
   */
  set setting(setting) {
    this._setting = setting;
  }

  /**
   * Set the Setting and return 'this' for chaining.
   * @param {Setting} setting - The shr.core.Setting
   * @returns {ClinicalContext} this.
   */
  withSetting(setting) {
    this.setting = setting; return this;
  }

  /**
   * Get the ContemporaneousPatientInformation.
   * @returns {ContemporaneousPatientInformation} The shr.core.ContemporaneousPatientInformation
   */
  get contemporaneousPatientInformation() {
    return this._contemporaneousPatientInformation;
  }

  /**
   * Set the ContemporaneousPatientInformation.
   * @param {ContemporaneousPatientInformation} contemporaneousPatientInformation - The shr.core.ContemporaneousPatientInformation
   */
  set contemporaneousPatientInformation(contemporaneousPatientInformation) {
    this._contemporaneousPatientInformation = contemporaneousPatientInformation;
  }

  /**
   * Set the ContemporaneousPatientInformation and return 'this' for chaining.
   * @param {ContemporaneousPatientInformation} contemporaneousPatientInformation - The shr.core.ContemporaneousPatientInformation
   * @returns {ClinicalContext} this.
   */
  withContemporaneousPatientInformation(contemporaneousPatientInformation) {
    this.contemporaneousPatientInformation = contemporaneousPatientInformation; return this;
  }

  /**
   * Get the RelatedInformation array.
   * @returns {Array<RelatedInformation>} The shr.core.RelatedInformation array
   */
  get relatedInformation() {
    return this._relatedInformation;
  }

  /**
   * Set the RelatedInformation array.
   * @param {Array<RelatedInformation>} relatedInformation - The shr.core.RelatedInformation array
   */
  set relatedInformation(relatedInformation) {
    this._relatedInformation = relatedInformation;
  }

  /**
   * Set the RelatedInformation array and return 'this' for chaining.
   * @param {Array<RelatedInformation>} relatedInformation - The shr.core.RelatedInformation array
   * @returns {ClinicalContext} this.
   */
  withRelatedInformation(relatedInformation) {
    this.relatedInformation = relatedInformation; return this;
  }

  /**
   * Get the Identifier array.
   * @returns {Array<Identifier>} The shr.core.Identifier array
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier array.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier array and return 'this' for chaining.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   * @returns {ClinicalContext} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ClinicalContext class.
   * The JSON must be valid against the ClinicalContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClinicalContext} An instance of ClinicalContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ClinicalContext');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ClinicalContext class to a JSON object.
   * The JSON is expected to be valid against the ClinicalContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ClinicalContext' } };
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.event != null) {
      inst['Event'] = this.event.map(f => f.toJSON());
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    if (this.facilityType != null) {
      inst['FacilityType'] = typeof this.facilityType.toJSON === 'function' ? this.facilityType.toJSON() : this.facilityType;
    }
    if (this.setting != null) {
      inst['Setting'] = typeof this.setting.toJSON === 'function' ? this.setting.toJSON() : this.setting;
    }
    if (this.contemporaneousPatientInformation != null) {
      inst['ContemporaneousPatientInformation'] = typeof this.contemporaneousPatientInformation.toJSON === 'function' ? this.contemporaneousPatientInformation.toJSON() : this.contemporaneousPatientInformation;
    }
    if (this.relatedInformation != null) {
      inst['RelatedInformation'] = this.relatedInformation.map(f => f.toJSON());
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ClinicalContext class.
   * The FHIR must be valid against the ClinicalContext FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ClinicalContext} An instance of ClinicalContext populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ClinicalContext');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Encounter-extension');
      if (match_3 != null) {
        inst.encounter = FHIRHelper.createInstanceFromFHIR('shr.core.Encounter', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Event-extension');
      if (match_4 != null) {
        inst.event = FHIRHelper.createInstanceFromFHIR('shr.core.Event', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TimePeriod-extension');
      if (match_5 != null) {
        inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-FacilityType-extension');
      if (match_6 != null) {
        inst.facilityType = FHIRHelper.createInstanceFromFHIR('shr.core.FacilityType', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_7 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Setting-extension');
      if (match_7 != null) {
        inst.setting = FHIRHelper.createInstanceFromFHIR('shr.core.Setting', match_7, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_8 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ContemporaneousPatientInformation-extension');
      if (match_8 != null) {
        inst.contemporaneousPatientInformation = FHIRHelper.createInstanceFromFHIR('shr.core.ContemporaneousPatientInformation', match_8, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_9 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelatedInformation-extension');
      if (match_9 != null) {
        inst.relatedInformation = FHIRHelper.createInstanceFromFHIR('shr.core.RelatedInformation', match_9, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_10 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension');
      if (match_10 != null) {
        inst.identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', match_10, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ClinicalContext;
