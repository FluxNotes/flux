// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Entity from './Entity';

/**
 * Generated class for shr.core.Location.
 * @extends Entity
 */
class Location extends Entity {

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
   * @returns {Location} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * @param {Status} status - The shr.core.Status
   * @returns {Location} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.core.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.core.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.core.PartOf
   * @returns {Location} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Get the OperationalStatus.
   * @returns {OperationalStatus} The shr.core.OperationalStatus
   */
  get operationalStatus() {
    return this._operationalStatus;
  }

  /**
   * Set the OperationalStatus.
   * @param {OperationalStatus} operationalStatus - The shr.core.OperationalStatus
   */
  set operationalStatus(operationalStatus) {
    this._operationalStatus = operationalStatus;
  }

  /**
   * Set the OperationalStatus and return 'this' for chaining.
   * @param {OperationalStatus} operationalStatus - The shr.core.OperationalStatus
   * @returns {Location} this.
   */
  withOperationalStatus(operationalStatus) {
    this.operationalStatus = operationalStatus; return this;
  }

  /**
   * Get the LocationName.
   * @returns {LocationName} The shr.core.LocationName
   */
  get locationName() {
    return this._locationName;
  }

  /**
   * Set the LocationName.
   * This field/value is required.
   * @param {LocationName} locationName - The shr.core.LocationName
   */
  set locationName(locationName) {
    this._locationName = locationName;
  }

  /**
   * Set the LocationName and return 'this' for chaining.
   * This field/value is required.
   * @param {LocationName} locationName - The shr.core.LocationName
   * @returns {Location} this.
   */
  withLocationName(locationName) {
    this.locationName = locationName; return this;
  }

  /**
   * Get the Alias array.
   * @returns {Array<Alias>} The shr.core.Alias array
   */
  get alias() {
    return this._alias;
  }

  /**
   * Set the Alias array.
   * @param {Array<Alias>} alias - The shr.core.Alias array
   */
  set alias(alias) {
    this._alias = alias;
  }

  /**
   * Set the Alias array and return 'this' for chaining.
   * @param {Array<Alias>} alias - The shr.core.Alias array
   * @returns {Location} this.
   */
  withAlias(alias) {
    this.alias = alias; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {Location} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Get the Mode.
   * @returns {Mode} The shr.core.Mode
   */
  get mode() {
    return this._mode;
  }

  /**
   * Set the Mode.
   * @param {Mode} mode - The shr.core.Mode
   */
  set mode(mode) {
    this._mode = mode;
  }

  /**
   * Set the Mode and return 'this' for chaining.
   * @param {Mode} mode - The shr.core.Mode
   * @returns {Location} this.
   */
  withMode(mode) {
    this.mode = mode; return this;
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
   * @returns {Location} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the ContactPoint array.
   * @returns {Array<ContactPoint>} The shr.core.ContactPoint array
   */
  get contactPoint() {
    return this._contactPoint;
  }

  /**
   * Set the ContactPoint array.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Set the ContactPoint array and return 'this' for chaining.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   * @returns {Location} this.
   */
  withContactPoint(contactPoint) {
    this.contactPoint = contactPoint; return this;
  }

  /**
   * Get the Address.
   * @returns {Address} The shr.core.Address
   */
  get address() {
    return this._address;
  }

  /**
   * Set the Address.
   * @param {Address} address - The shr.core.Address
   */
  set address(address) {
    this._address = address;
  }

  /**
   * Set the Address and return 'this' for chaining.
   * @param {Address} address - The shr.core.Address
   * @returns {Location} this.
   */
  withAddress(address) {
    this.address = address; return this;
  }

  /**
   * Get the PhysicalType.
   * @returns {PhysicalType} The shr.core.PhysicalType
   */
  get physicalType() {
    return this._physicalType;
  }

  /**
   * Set the PhysicalType.
   * @param {PhysicalType} physicalType - The shr.core.PhysicalType
   */
  set physicalType(physicalType) {
    this._physicalType = physicalType;
  }

  /**
   * Set the PhysicalType and return 'this' for chaining.
   * @param {PhysicalType} physicalType - The shr.core.PhysicalType
   * @returns {Location} this.
   */
  withPhysicalType(physicalType) {
    this.physicalType = physicalType; return this;
  }

  /**
   * Get the Geoposition.
   * @returns {Geoposition} The shr.core.Geoposition
   */
  get geoposition() {
    return this._geoposition;
  }

  /**
   * Set the Geoposition.
   * @param {Geoposition} geoposition - The shr.core.Geoposition
   */
  set geoposition(geoposition) {
    this._geoposition = geoposition;
  }

  /**
   * Set the Geoposition and return 'this' for chaining.
   * @param {Geoposition} geoposition - The shr.core.Geoposition
   * @returns {Location} this.
   */
  withGeoposition(geoposition) {
    this.geoposition = geoposition; return this;
  }

  /**
   * Get the MobileFacility.
   * @returns {MobileFacility} The shr.core.MobileFacility
   */
  get mobileFacility() {
    return this._mobileFacility;
  }

  /**
   * Set the MobileFacility.
   * @param {MobileFacility} mobileFacility - The shr.core.MobileFacility
   */
  set mobileFacility(mobileFacility) {
    this._mobileFacility = mobileFacility;
  }

  /**
   * Set the MobileFacility and return 'this' for chaining.
   * @param {MobileFacility} mobileFacility - The shr.core.MobileFacility
   * @returns {Location} this.
   */
  withMobileFacility(mobileFacility) {
    this.mobileFacility = mobileFacility; return this;
  }

  /**
   * Get the shr.core.ManagingOrganization reference.
   * @returns {Reference} The shr.core.ManagingOrganization reference
   */
  get managingOrganization() {
    return this._managingOrganization;
  }

  /**
   * Set the shr.core.ManagingOrganization reference.
   * This field/value is required.
   * @param {Reference} managingOrganization - The shr.core.ManagingOrganization reference
   */
  set managingOrganization(managingOrganization) {
    this._managingOrganization = managingOrganization;
  }

  /**
   * Set the shr.core.ManagingOrganization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} managingOrganization - The shr.core.ManagingOrganization reference
   * @returns {Location} this.
   */
  withManagingOrganization(managingOrganization) {
    this.managingOrganization = managingOrganization; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Location class.
   * The JSON must be valid against the Location JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Location} An instance of Location populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Location');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Location class to a JSON object.
   * The JSON is expected to be valid against the Location JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Location' };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.operationalStatus != null) {
      inst['OperationalStatus'] = typeof this.operationalStatus.toJSON === 'function' ? this.operationalStatus.toJSON() : this.operationalStatus;
    }
    if (this.locationName != null) {
      inst['LocationName'] = typeof this.locationName.toJSON === 'function' ? this.locationName.toJSON() : this.locationName;
    }
    if (this.alias != null) {
      inst['Alias'] = this.alias.map(f => f.toJSON());
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.mode != null) {
      inst['Mode'] = typeof this.mode.toJSON === 'function' ? this.mode.toJSON() : this.mode;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.contactPoint != null) {
      inst['ContactPoint'] = this.contactPoint.map(f => f.toJSON());
    }
    if (this.address != null) {
      inst['Address'] = typeof this.address.toJSON === 'function' ? this.address.toJSON() : this.address;
    }
    if (this.physicalType != null) {
      inst['PhysicalType'] = typeof this.physicalType.toJSON === 'function' ? this.physicalType.toJSON() : this.physicalType;
    }
    if (this.geoposition != null) {
      inst['Geoposition'] = typeof this.geoposition.toJSON === 'function' ? this.geoposition.toJSON() : this.geoposition;
    }
    if (this.mobileFacility != null) {
      inst['MobileFacility'] = typeof this.mobileFacility.toJSON === 'function' ? this.mobileFacility.toJSON() : this.mobileFacility;
    }
    if (this.managingOrganization != null) {
      inst['ManagingOrganization'] = typeof this.managingOrganization.toJSON === 'function' ? this.managingOrganization.toJSON() : this.managingOrganization;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Location class.
   * The FHIR must be valid against the Location FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Location} An instance of Location populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Location');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Location', 'uri');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-OperationalStatus-extension') {
        inst.operationalStatus = FHIRHelper.createInstanceFromFHIR('shr.core.OperationalStatus', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Alias-extension') {
        inst.alias = inst.alias || [];
        const inst_alias = FHIRHelper.createInstanceFromFHIR('shr.core.Alias', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.alias.push(inst_alias);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MobileFacility-extension') {
        inst.mobileFacility = FHIRHelper.createInstanceFromFHIR('shr.core.MobileFacility', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['name'] != null) {
      inst.locationName = FHIRHelper.createInstanceFromFHIR('shr.core.LocationName', fhir['name'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['description'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['description'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['mode'] != null) {
      inst.mode = FHIRHelper.createInstanceFromFHIR('shr.core.Mode', fhir['mode'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_telecom of fhir['telecom'] || []) {
      inst.contactPoint = inst.contactPoint || [];
      const inst_contactPoint = FHIRHelper.createInstanceFromFHIR('shr.core.ContactPoint', fhir_telecom, 'ContactPoint', shrId, allEntries, mappedResources, referencesOut, false);
      inst.contactPoint.push(inst_contactPoint);
    }
    if (fhir['address'] != null) {
      inst.address = FHIRHelper.createInstanceFromFHIR('shr.core.Address', fhir['address'], 'Address', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['physicalType'] != null) {
      inst.physicalType = FHIRHelper.createInstanceFromFHIR('shr.core.PhysicalType', fhir['physicalType'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['position'] != null) {
      if (fhir['position']['longitude'] != null) {
        inst.geoposition = inst.geoposition || FHIRHelper.createInstanceFromFHIR('shr.core.Geoposition', {}, null, shrId);
        inst.geoposition.longitude = FHIRHelper.createInstanceFromFHIR('shr.core.Longitude', fhir['position']['longitude'], 'decimal', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['position']['latitude'] != null) {
        inst.geoposition = inst.geoposition || FHIRHelper.createInstanceFromFHIR('shr.core.Geoposition', {}, null, shrId);
        inst.geoposition.latitude = FHIRHelper.createInstanceFromFHIR('shr.core.Latitude', fhir['position']['latitude'], 'decimal', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['position']['altitude'] != null) {
        inst.geoposition = inst.geoposition || FHIRHelper.createInstanceFromFHIR('shr.core.Geoposition', {}, null, shrId);
        inst.geoposition.altitude = FHIRHelper.createInstanceFromFHIR('shr.core.Altitude', fhir['position']['altitude'], 'decimal', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['managingOrganization'] != null) {
      const entryId = fhir['managingOrganization']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Organization', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.managingOrganization = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Organization';
        inst.managingOrganization = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (fhir['partOf'] != null) {
      const entryId = fhir['partOf']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Location', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.partOf = mappedResources[entryId];
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Location;
