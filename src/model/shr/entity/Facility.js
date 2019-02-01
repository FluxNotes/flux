import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Facility.
 * @extends Entity
 */
class Facility extends Entity {

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
   * @returns {Facility} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the FacilityName.
   * @returns {FacilityName} The shr.entity.FacilityName
   */
  get facilityName() {
    return this._facilityName;
  }

  /**
   * Set the FacilityName.
   * This field/value is required.
   * @param {FacilityName} facilityName - The shr.entity.FacilityName
   */
  set facilityName(facilityName) {
    this._facilityName = facilityName;
  }

  /**
   * Set the FacilityName and return 'this' for chaining.
   * This field/value is required.
   * @param {FacilityName} facilityName - The shr.entity.FacilityName
   * @returns {Facility} this.
   */
  withFacilityName(facilityName) {
    this.facilityName = facilityName; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {Facility} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Location.
   * @returns {Location} The shr.entity.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Set the Location.
   * This field/value is required.
   * @param {Location} location - The shr.entity.Location
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Set the Location and return 'this' for chaining.
   * This field/value is required.
   * @param {Location} location - The shr.entity.Location
   * @returns {Facility} this.
   */
  withLocation(location) {
    this.location = location; return this;
  }

  /**
   * Get the MobileFacility.
   * @returns {MobileFacility} The shr.entity.MobileFacility
   */
  get mobileFacility() {
    return this._mobileFacility;
  }

  /**
   * Set the MobileFacility.
   * @param {MobileFacility} mobileFacility - The shr.entity.MobileFacility
   */
  set mobileFacility(mobileFacility) {
    this._mobileFacility = mobileFacility;
  }

  /**
   * Set the MobileFacility and return 'this' for chaining.
   * @param {MobileFacility} mobileFacility - The shr.entity.MobileFacility
   * @returns {Facility} this.
   */
  withMobileFacility(mobileFacility) {
    this.mobileFacility = mobileFacility; return this;
  }

  /**
   * Get the ContactPoint.
   * @returns {ContactPoint} The shr.core.ContactPoint
   */
  get contactPoint() {
    return this._contactPoint;
  }

  /**
   * Set the ContactPoint.
   * @param {ContactPoint} contactPoint - The shr.core.ContactPoint
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Set the ContactPoint and return 'this' for chaining.
   * @param {ContactPoint} contactPoint - The shr.core.ContactPoint
   * @returns {Facility} this.
   */
  withContactPoint(contactPoint) {
    this.contactPoint = contactPoint; return this;
  }

  /**
   * Get the shr.entity.ManagingOrganization reference.
   * @returns {Reference} The shr.entity.ManagingOrganization reference
   */
  get managingOrganization() {
    return this._managingOrganization;
  }

  /**
   * Set the shr.entity.ManagingOrganization reference.
   * This field/value is required.
   * @param {Reference} managingOrganization - The shr.entity.ManagingOrganization reference
   */
  set managingOrganization(managingOrganization) {
    this._managingOrganization = managingOrganization;
  }

  /**
   * Set the shr.entity.ManagingOrganization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} managingOrganization - The shr.entity.ManagingOrganization reference
   * @returns {Facility} this.
   */
  withManagingOrganization(managingOrganization) {
    this.managingOrganization = managingOrganization; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Facility class.
   * The JSON must be valid against the Facility JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Facility} An instance of Facility populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Facility();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Facility class to a JSON object.
   * The JSON is expected to be valid against the Facility JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Facility' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.facilityName != null) {
      inst['FacilityName'] = typeof this.facilityName.toJSON === 'function' ? this.facilityName.toJSON() : this.facilityName;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    if (this.mobileFacility != null) {
      inst['MobileFacility'] = typeof this.mobileFacility.toJSON === 'function' ? this.mobileFacility.toJSON() : this.mobileFacility;
    }
    if (this.contactPoint != null) {
      inst['ContactPoint'] = typeof this.contactPoint.toJSON === 'function' ? this.contactPoint.toJSON() : this.contactPoint;
    }
    if (this.managingOrganization != null) {
      inst['ManagingOrganization'] = typeof this.managingOrganization.toJSON === 'function' ? this.managingOrganization.toJSON() : this.managingOrganization;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Facility class.
   * The FHIR must be valid against the Facility FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Facility} An instance of Facility populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Facility();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Facility');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.entity.PartOf', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-MobileFacility-extension') {
        inst.mobileFacility = FHIRHelper.createInstanceFromFHIR('shr.entity.MobileFacility', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['name'] != null) {
      inst.facilityName = FHIRHelper.createInstanceFromFHIR('shr.entity.FacilityName', fhir['name'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['telecom'] != null && fhir['telecom'][0] != null) {
      inst.contactPoint = FHIRHelper.createInstanceFromFHIR('shr.core.ContactPoint', fhir['telecom'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['address'] != null) {
      inst.location = inst.location || FHIRHelper.createInstanceFromFHIR('shr.entity.Location', {}, shrId);
      inst.location.value = FHIRHelper.createInstanceFromFHIR('shr.core.Address', fhir['address'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['position'] != null) {
      if (fhir['position']['longitude'] != null) {
        inst.location = inst.location || FHIRHelper.createInstanceFromFHIR('shr.entity.Location', {}, shrId);
        inst.location.value = inst.location.value || FHIRHelper.createInstanceFromFHIR('shr.core.Geoposition', {}, shrId);
        inst.location.value.longitude = FHIRHelper.createInstanceFromFHIR('shr.core.Longitude', fhir['position']['longitude'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['position']['latitude'] != null) {
        inst.location = inst.location || FHIRHelper.createInstanceFromFHIR('shr.entity.Location', {}, shrId);
        inst.location.value = inst.location.value || FHIRHelper.createInstanceFromFHIR('shr.core.Geoposition', {}, shrId);
        inst.location.value.latitude = FHIRHelper.createInstanceFromFHIR('shr.core.Latitude', fhir['position']['latitude'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['position']['altitude'] != null) {
        inst.location = inst.location || FHIRHelper.createInstanceFromFHIR('shr.entity.Location', {}, shrId);
        inst.location.value = inst.location.value || FHIRHelper.createInstanceFromFHIR('shr.core.Geoposition', {}, shrId);
        inst.location.value.altitude = FHIRHelper.createInstanceFromFHIR('shr.core.Altitude', fhir['position']['altitude'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['managingOrganization'] != null) {
      const entryId = fhir['managingOrganization']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.managingOrganization = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/entity/Organization';
        inst.managingOrganization = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Facility;
