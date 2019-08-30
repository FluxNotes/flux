// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Entity from './Entity';

/**
 * Generated class for shr.core.Device.
 * @extends Entity
 */
class Device extends Entity {

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
   * @returns {Device} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {Device} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
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
   * @returns {Device} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the DeviceUdi.
   * @returns {DeviceUdi} The shr.core.DeviceUdi
   */
  get deviceUdi() {
    return this._deviceUdi;
  }

  /**
   * Set the DeviceUdi.
   * This field/value is required.
   * @param {DeviceUdi} deviceUdi - The shr.core.DeviceUdi
   */
  set deviceUdi(deviceUdi) {
    this._deviceUdi = deviceUdi;
  }

  /**
   * Set the DeviceUdi and return 'this' for chaining.
   * This field/value is required.
   * @param {DeviceUdi} deviceUdi - The shr.core.DeviceUdi
   * @returns {Device} this.
   */
  withDeviceUdi(deviceUdi) {
    this.deviceUdi = deviceUdi; return this;
  }

  /**
   * Get the VendorModelNumber.
   * @returns {VendorModelNumber} The shr.core.VendorModelNumber
   */
  get vendorModelNumber() {
    return this._vendorModelNumber;
  }

  /**
   * Set the VendorModelNumber.
   * @param {VendorModelNumber} vendorModelNumber - The shr.core.VendorModelNumber
   */
  set vendorModelNumber(vendorModelNumber) {
    this._vendorModelNumber = vendorModelNumber;
  }

  /**
   * Set the VendorModelNumber and return 'this' for chaining.
   * @param {VendorModelNumber} vendorModelNumber - The shr.core.VendorModelNumber
   * @returns {Device} this.
   */
  withVendorModelNumber(vendorModelNumber) {
    this.vendorModelNumber = vendorModelNumber; return this;
  }

  /**
   * Get the ManufacturerName.
   * @returns {ManufacturerName} The shr.core.ManufacturerName
   */
  get manufacturerName() {
    return this._manufacturerName;
  }

  /**
   * Set the ManufacturerName.
   * @param {ManufacturerName} manufacturerName - The shr.core.ManufacturerName
   */
  set manufacturerName(manufacturerName) {
    this._manufacturerName = manufacturerName;
  }

  /**
   * Set the ManufacturerName and return 'this' for chaining.
   * @param {ManufacturerName} manufacturerName - The shr.core.ManufacturerName
   * @returns {Device} this.
   */
  withManufacturerName(manufacturerName) {
    this.manufacturerName = manufacturerName; return this;
  }

  /**
   * Get the ManufactureDate.
   * @returns {ManufactureDate} The shr.core.ManufactureDate
   */
  get manufactureDate() {
    return this._manufactureDate;
  }

  /**
   * Set the ManufactureDate.
   * @param {ManufactureDate} manufactureDate - The shr.core.ManufactureDate
   */
  set manufactureDate(manufactureDate) {
    this._manufactureDate = manufactureDate;
  }

  /**
   * Set the ManufactureDate and return 'this' for chaining.
   * @param {ManufactureDate} manufactureDate - The shr.core.ManufactureDate
   * @returns {Device} this.
   */
  withManufactureDate(manufactureDate) {
    this.manufactureDate = manufactureDate; return this;
  }

  /**
   * Get the ExpirationDate.
   * @returns {ExpirationDate} The shr.core.ExpirationDate
   */
  get expirationDate() {
    return this._expirationDate;
  }

  /**
   * Set the ExpirationDate.
   * @param {ExpirationDate} expirationDate - The shr.core.ExpirationDate
   */
  set expirationDate(expirationDate) {
    this._expirationDate = expirationDate;
  }

  /**
   * Set the ExpirationDate and return 'this' for chaining.
   * @param {ExpirationDate} expirationDate - The shr.core.ExpirationDate
   * @returns {Device} this.
   */
  withExpirationDate(expirationDate) {
    this.expirationDate = expirationDate; return this;
  }

  /**
   * Get the VersionString.
   * @returns {VersionString} The shr.core.VersionString
   */
  get versionString() {
    return this._versionString;
  }

  /**
   * Set the VersionString.
   * @param {VersionString} versionString - The shr.core.VersionString
   */
  set versionString(versionString) {
    this._versionString = versionString;
  }

  /**
   * Set the VersionString and return 'this' for chaining.
   * @param {VersionString} versionString - The shr.core.VersionString
   * @returns {Device} this.
   */
  withVersionString(versionString) {
    this.versionString = versionString; return this;
  }

  /**
   * Get the Url.
   * @returns {Url} The shr.core.Url
   */
  get url() {
    return this._url;
  }

  /**
   * Set the Url.
   * @param {Url} url - The shr.core.Url
   */
  set url(url) {
    this._url = url;
  }

  /**
   * Set the Url and return 'this' for chaining.
   * @param {Url} url - The shr.core.Url
   * @returns {Device} this.
   */
  withUrl(url) {
    this.url = url; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Device class.
   * The JSON must be valid against the Device JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Device} An instance of Device populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Device');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Device class to a JSON object.
   * The JSON is expected to be valid against the Device JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Device' };
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
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.deviceUdi != null) {
      inst['DeviceUdi'] = typeof this.deviceUdi.toJSON === 'function' ? this.deviceUdi.toJSON() : this.deviceUdi;
    }
    if (this.vendorModelNumber != null) {
      inst['VendorModelNumber'] = typeof this.vendorModelNumber.toJSON === 'function' ? this.vendorModelNumber.toJSON() : this.vendorModelNumber;
    }
    if (this.manufacturerName != null) {
      inst['ManufacturerName'] = typeof this.manufacturerName.toJSON === 'function' ? this.manufacturerName.toJSON() : this.manufacturerName;
    }
    if (this.manufactureDate != null) {
      inst['ManufactureDate'] = typeof this.manufactureDate.toJSON === 'function' ? this.manufactureDate.toJSON() : this.manufactureDate;
    }
    if (this.expirationDate != null) {
      inst['ExpirationDate'] = typeof this.expirationDate.toJSON === 'function' ? this.expirationDate.toJSON() : this.expirationDate;
    }
    if (this.versionString != null) {
      inst['VersionString'] = typeof this.versionString.toJSON === 'function' ? this.versionString.toJSON() : this.versionString;
    }
    if (this.url != null) {
      inst['Url'] = typeof this.url.toJSON === 'function' ? this.url.toJSON() : this.url;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Device class.
   * The FHIR must be valid against the Device FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Device} An instance of Device populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Device');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Device', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PartOf-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.core.PartOf', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueReference'] != null) {
          const entryId = fhir_extension['valueReference']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Device', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          if (mappedResources[entryId]) {
            inst.partOf.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/core/Device';
            inst.partOf.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
        }
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['manufacturer'] != null) {
      inst.manufacturerName = FHIRHelper.createInstanceFromFHIR('shr.core.ManufacturerName', fhir['manufacturer'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['model'] != null) {
      inst.vendorModelNumber = FHIRHelper.createInstanceFromFHIR('shr.core.VendorModelNumber', fhir['model'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['version'] != null) {
      inst.versionString = FHIRHelper.createInstanceFromFHIR('shr.core.VersionString', fhir['version'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['manufactureDate'] != null) {
      inst.manufactureDate = FHIRHelper.createInstanceFromFHIR('shr.core.ManufactureDate', fhir['manufactureDate'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['expiry'] != null) {
      inst.expirationDate = FHIRHelper.createInstanceFromFHIR('shr.core.ExpirationDate', fhir['expiry'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['udi'] != null) {
      inst.deviceUdi = FHIRHelper.createInstanceFromFHIR('shr.core.DeviceUdi', fhir['udi'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['url'] != null) {
      inst.url = FHIRHelper.createInstanceFromFHIR('shr.core.Url', fhir['url'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Device;
