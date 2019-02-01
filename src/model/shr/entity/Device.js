import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Device.
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
   * @returns {DeviceUdi} The shr.entity.DeviceUdi
   */
  get deviceUdi() {
    return this._deviceUdi;
  }

  /**
   * Set the DeviceUdi.
   * This field/value is required.
   * @param {DeviceUdi} deviceUdi - The shr.entity.DeviceUdi
   */
  set deviceUdi(deviceUdi) {
    this._deviceUdi = deviceUdi;
  }

  /**
   * Set the DeviceUdi and return 'this' for chaining.
   * This field/value is required.
   * @param {DeviceUdi} deviceUdi - The shr.entity.DeviceUdi
   * @returns {Device} this.
   */
  withDeviceUdi(deviceUdi) {
    this.deviceUdi = deviceUdi; return this;
  }

  /**
   * Get the VendorModelNumber.
   * @returns {VendorModelNumber} The shr.entity.VendorModelNumber
   */
  get vendorModelNumber() {
    return this._vendorModelNumber;
  }

  /**
   * Set the VendorModelNumber.
   * @param {VendorModelNumber} vendorModelNumber - The shr.entity.VendorModelNumber
   */
  set vendorModelNumber(vendorModelNumber) {
    this._vendorModelNumber = vendorModelNumber;
  }

  /**
   * Set the VendorModelNumber and return 'this' for chaining.
   * @param {VendorModelNumber} vendorModelNumber - The shr.entity.VendorModelNumber
   * @returns {Device} this.
   */
  withVendorModelNumber(vendorModelNumber) {
    this.vendorModelNumber = vendorModelNumber; return this;
  }

  /**
   * Get the ManufacturerName.
   * @returns {ManufacturerName} The shr.entity.ManufacturerName
   */
  get manufacturerName() {
    return this._manufacturerName;
  }

  /**
   * Set the ManufacturerName.
   * @param {ManufacturerName} manufacturerName - The shr.entity.ManufacturerName
   */
  set manufacturerName(manufacturerName) {
    this._manufacturerName = manufacturerName;
  }

  /**
   * Set the ManufacturerName and return 'this' for chaining.
   * @param {ManufacturerName} manufacturerName - The shr.entity.ManufacturerName
   * @returns {Device} this.
   */
  withManufacturerName(manufacturerName) {
    this.manufacturerName = manufacturerName; return this;
  }

  /**
   * Get the ManufactureDate.
   * @returns {ManufactureDate} The shr.entity.ManufactureDate
   */
  get manufactureDate() {
    return this._manufactureDate;
  }

  /**
   * Set the ManufactureDate.
   * @param {ManufactureDate} manufactureDate - The shr.entity.ManufactureDate
   */
  set manufactureDate(manufactureDate) {
    this._manufactureDate = manufactureDate;
  }

  /**
   * Set the ManufactureDate and return 'this' for chaining.
   * @param {ManufactureDate} manufactureDate - The shr.entity.ManufactureDate
   * @returns {Device} this.
   */
  withManufactureDate(manufactureDate) {
    this.manufactureDate = manufactureDate; return this;
  }

  /**
   * Get the ExpirationDate.
   * @returns {ExpirationDate} The shr.entity.ExpirationDate
   */
  get expirationDate() {
    return this._expirationDate;
  }

  /**
   * Set the ExpirationDate.
   * @param {ExpirationDate} expirationDate - The shr.entity.ExpirationDate
   */
  set expirationDate(expirationDate) {
    this._expirationDate = expirationDate;
  }

  /**
   * Set the ExpirationDate and return 'this' for chaining.
   * @param {ExpirationDate} expirationDate - The shr.entity.ExpirationDate
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
   * @returns {Url} The shr.entity.Url
   */
  get url() {
    return this._url;
  }

  /**
   * Set the Url.
   * @param {Url} url - The shr.entity.Url
   */
  set url(url) {
    this._url = url;
  }

  /**
   * Set the Url and return 'this' for chaining.
   * @param {Url} url - The shr.entity.Url
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
    const inst = new Device();
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
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Device' };
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
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Device} An instance of Device populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Device();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Device');
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
    }
    if (fhir['udi'] != null) {
      if (fhir['udi']['carrierHRF'] != null) {
        inst.deviceUdi = FHIRHelper.createInstanceFromFHIR('shr.entity.DeviceUdi', fhir['udi']['carrierHRF'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['manufacturer'] != null) {
      inst.manufacturerName = FHIRHelper.createInstanceFromFHIR('shr.entity.ManufacturerName', fhir['manufacturer'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['manufactureDate'] != null) {
      inst.manufactureDate = FHIRHelper.createInstanceFromFHIR('shr.entity.ManufactureDate', fhir['manufactureDate'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['expirationDate'] != null) {
      inst.expirationDate = FHIRHelper.createInstanceFromFHIR('shr.entity.ExpirationDate', fhir['expirationDate'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['model'] != null) {
      inst.vendorModelNumber = FHIRHelper.createInstanceFromFHIR('shr.entity.VendorModelNumber', fhir['model'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['version'] != null) {
      inst.versionString = FHIRHelper.createInstanceFromFHIR('shr.core.VersionString', fhir['version'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['url'] != null) {
      inst.url = FHIRHelper.createInstanceFromFHIR('shr.entity.Url', fhir['url'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Device;
