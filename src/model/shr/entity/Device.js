import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Device.
 * @extends Entity
 */
class Device extends Entity {

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
   * Get the DeviceUdi array.
   * @returns {Array<DeviceUdi>} The shr.entity.DeviceUdi array
   */
  get deviceUdi() {
    return this._deviceUdi;
  }

  /**
   * Set the DeviceUdi array.
   * @param {Array<DeviceUdi>} deviceUdi - The shr.entity.DeviceUdi array
   */
  set deviceUdi(deviceUdi) {
    this._deviceUdi = deviceUdi;
  }

  /**
   * Set the DeviceUdi array and return 'this' for chaining.
   * @param {Array<DeviceUdi>} deviceUdi - The shr.entity.DeviceUdi array
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
   * Get the Version.
   * @returns {Version} The shr.core.Version
   */
  get version() {
    return this._version;
  }

  /**
   * Set the Version.
   * @param {Version} version - The shr.core.Version
   */
  set version(version) {
    this._version = version;
  }

  /**
   * Set the Version and return 'this' for chaining.
   * @param {Version} version - The shr.core.Version
   * @returns {Device} this.
   */
  withVersion(version) {
    this.version = version; return this;
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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Device' } };
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.deviceUdi != null) {
      inst['DeviceUdi'] = this.deviceUdi.map(f => f.toJSON());
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
    if (this.version != null) {
      inst['Version'] = typeof this.version.toJSON === 'function' ? this.version.toJSON() : this.version;
    }
    if (this.url != null) {
      inst['Url'] = typeof this.url.toJSON === 'function' ? this.url.toJSON() : this.url;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Device class to a FHIR object.
   * The FHIR is expected to be valid against the Device FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.deviceUdi != null) {
      if(inst['udi'] === undefined) {
        inst['udi'] = {};
      }
      inst['udi']['carrierHRF'] = inst ['udi']['carrierHRF'] || [];
      inst['udi']['carrierHRF'] = inst['udi']['carrierHRF'].concat(this.deviceUdi.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.manufacturerName != null) {
      inst['manufacturer'] = typeof this.manufacturerName.toFHIR === 'function' ? this.manufacturerName.toFHIR() : this.manufacturerName;
    }
    if (this.manufactureDate != null) {
      inst['manufactureDate'] = typeof this.manufactureDate.toFHIR === 'function' ? this.manufactureDate.toFHIR() : this.manufactureDate;
    }
    if (this.expirationDate != null) {
      inst['expirationDate'] = typeof this.expirationDate.toFHIR === 'function' ? this.expirationDate.toFHIR() : this.expirationDate;
    }
    if (this.vendorModelNumber != null) {
      inst['model'] = typeof this.vendorModelNumber.toFHIR === 'function' ? this.vendorModelNumber.toFHIR() : this.vendorModelNumber;
    }
    if (this.version != null) {
      inst['version'] = typeof this.version.toFHIR === 'function' ? this.version.toFHIR() : this.version;
    }
    if (this.url != null) {
      inst['url'] = typeof this.url.toFHIR === 'function' ? this.url.toFHIR() : this.url;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-Device-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Device class.
   * The FHIR must be valid against the Device FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Device} An instance of Device populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Device();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['udi'] != null && fhir['udi']['carrierHRF'] != null) {
      inst.deviceUdi = inst.deviceUdi || [];
      inst.deviceUdi = inst.deviceUdi.concat(fhir['udi']['carrierHRF'].map(f => createInstanceFromFHIR('shr.entity.DeviceUdi', f)));
    }
    if (fhir['type'] != null) {
      inst.type = createInstanceFromFHIR('shr.core.Type', fhir['type']);
    }
    if (fhir['manufacturer'] != null) {
      inst.manufacturerName = createInstanceFromFHIR('shr.entity.ManufacturerName', fhir['manufacturer']);
    }
    if (fhir['manufactureDate'] != null) {
      inst.manufactureDate = createInstanceFromFHIR('shr.entity.ManufactureDate', fhir['manufactureDate']);
    }
    if (fhir['expirationDate'] != null) {
      inst.expirationDate = createInstanceFromFHIR('shr.entity.ExpirationDate', fhir['expirationDate']);
    }
    if (fhir['model'] != null) {
      inst.vendorModelNumber = createInstanceFromFHIR('shr.entity.VendorModelNumber', fhir['model']);
    }
    if (fhir['version'] != null) {
      inst.version = createInstanceFromFHIR('shr.core.Version', fhir['version']);
    }
    if (fhir['url'] != null) {
      inst.url = createInstanceFromFHIR('shr.entity.Url', fhir['url']);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Device;
