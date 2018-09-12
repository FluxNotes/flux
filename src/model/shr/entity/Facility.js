import { setPropertiesFromJSON } from '../../json-helper';

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
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {Facility} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Get the Location.
   * @returns {Location} The shr.core.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Set the Location.
   * This field/value is required.
   * @param {Location} location - The shr.core.Location
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Set the Location and return 'this' for chaining.
   * This field/value is required.
   * @param {Location} location - The shr.core.Location
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
   * Get the ManagingOrganization.
   * @returns {ManagingOrganization} The shr.entity.ManagingOrganization
   */
  get managingOrganization() {
    return this._managingOrganization;
  }

  /**
   * Set the ManagingOrganization.
   * This field/value is required.
   * @param {ManagingOrganization} managingOrganization - The shr.entity.ManagingOrganization
   */
  set managingOrganization(managingOrganization) {
    this._managingOrganization = managingOrganization;
  }

  /**
   * Set the ManagingOrganization and return 'this' for chaining.
   * This field/value is required.
   * @param {ManagingOrganization} managingOrganization - The shr.entity.ManagingOrganization
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
  static fromJSON(json = {}) {
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
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/Facility' };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.facilityName != null) {
      inst['FacilityName'] = typeof this.facilityName.toJSON === 'function' ? this.facilityName.toJSON() : this.facilityName;
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
   * Serializes an instance of the Facility class to a FHIR object.
   * The FHIR is expected to be valid against the Facility FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Location';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.mobileFacility != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.mobileFacility.toFHIR(true));
    }
    if (this.facilityName != null) {
      inst['name'] = typeof this.facilityName.toFHIR === 'function' ? this.facilityName.toFHIR() : this.facilityName;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.contactPoint != null) {
      inst['telecom'] = inst['telecom'] || [];
      inst['telecom'].push(typeof this.contactPoint.toFHIR === 'function' ? this.contactPoint.toFHIR() : this.contactPoint);
    }
    if (this.location != null && this.location.address != null) {
      inst['address'] = typeof this.location.address.toFHIR === 'function' ? this.location.address.toFHIR() : this.location.address;
    }
    if (this.location != null && this.location.geoposition != null && this.location.geoposition.longitude != null) {
      if (inst['position'] === undefined) {
        inst['position'] = {};
      }
      inst['position']['longitude'] = typeof this.location.geoposition.longitude.toFHIR === 'function' ? this.location.geoposition.longitude.toFHIR() : this.location.geoposition.longitude;
    }
    if (this.location != null && this.location.geoposition != null && this.location.geoposition.latitude != null) {
      if (inst['position'] === undefined) {
        inst['position'] = {};
      }
      inst['position']['latitude'] = typeof this.location.geoposition.latitude.toFHIR === 'function' ? this.location.geoposition.latitude.toFHIR() : this.location.geoposition.latitude;
    }
    if (this.location != null && this.location.geoposition != null && this.location.geoposition.altitude != null) {
      if (inst['position'] === undefined) {
        inst['position'] = {};
      }
      inst['position']['altitude'] = typeof this.location.geoposition.altitude.toFHIR === 'function' ? this.location.geoposition.altitude.toFHIR() : this.location.geoposition.altitude;
    }
    if (this.managingOrganization != null) {
      inst['managingOrganization'] = typeof this.managingOrganization.toFHIR === 'function' ? this.managingOrganization.toFHIR() : this.managingOrganization;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-Facility-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default Facility;
