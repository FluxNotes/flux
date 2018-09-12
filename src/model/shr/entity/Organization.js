import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Organization.
 * @extends Entity
 */
class Organization extends Entity {

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
   * @returns {Organization} this.
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
   * @returns {Organization} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the OrganizationName.
   * @returns {OrganizationName} The shr.entity.OrganizationName
   */
  get organizationName() {
    return this._organizationName;
  }

  /**
   * Set the OrganizationName.
   * This field/value is required.
   * @param {OrganizationName} organizationName - The shr.entity.OrganizationName
   */
  set organizationName(organizationName) {
    this._organizationName = organizationName;
  }

  /**
   * Set the OrganizationName and return 'this' for chaining.
   * This field/value is required.
   * @param {OrganizationName} organizationName - The shr.entity.OrganizationName
   * @returns {Organization} this.
   */
  withOrganizationName(organizationName) {
    this.organizationName = organizationName; return this;
  }

  /**
   * Get the OrganizationAlias array.
   * @returns {Array<OrganizationAlias>} The shr.entity.OrganizationAlias array
   */
  get organizationAlias() {
    return this._organizationAlias;
  }

  /**
   * Set the OrganizationAlias array.
   * @param {Array<OrganizationAlias>} organizationAlias - The shr.entity.OrganizationAlias array
   */
  set organizationAlias(organizationAlias) {
    this._organizationAlias = organizationAlias;
  }

  /**
   * Set the OrganizationAlias array and return 'this' for chaining.
   * @param {Array<OrganizationAlias>} organizationAlias - The shr.entity.OrganizationAlias array
   * @returns {Organization} this.
   */
  withOrganizationAlias(organizationAlias) {
    this.organizationAlias = organizationAlias; return this;
  }

  /**
   * Get the OrganizationIdentifier array.
   * @returns {Array<OrganizationIdentifier>} The shr.entity.OrganizationIdentifier array
   */
  get organizationIdentifier() {
    return this._organizationIdentifier;
  }

  /**
   * Set the OrganizationIdentifier array.
   * This field/value is required.
   * @param {Array<OrganizationIdentifier>} organizationIdentifier - The shr.entity.OrganizationIdentifier array
   */
  set organizationIdentifier(organizationIdentifier) {
    this._organizationIdentifier = organizationIdentifier;
  }

  /**
   * Set the OrganizationIdentifier array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<OrganizationIdentifier>} organizationIdentifier - The shr.entity.OrganizationIdentifier array
   * @returns {Organization} this.
   */
  withOrganizationIdentifier(organizationIdentifier) {
    this.organizationIdentifier = organizationIdentifier; return this;
  }

  /**
   * Get the Address array.
   * @returns {Array<Address>} The shr.core.Address array
   */
  get address() {
    return this._address;
  }

  /**
   * Set the Address array.
   * This field/value is required.
   * @param {Array<Address>} address - The shr.core.Address array
   */
  set address(address) {
    this._address = address;
  }

  /**
   * Set the Address array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Address>} address - The shr.core.Address array
   * @returns {Organization} this.
   */
  withAddress(address) {
    this.address = address; return this;
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
   * This field/value is required.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Set the ContactPoint array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   * @returns {Organization} this.
   */
  withContactPoint(contactPoint) {
    this.contactPoint = contactPoint; return this;
  }

  /**
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The shr.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * This field/value is required.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * This field/value is required.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   * @returns {Organization} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.entity.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.entity.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.entity.PartOf
   * @returns {Organization} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Organization class.
   * The JSON must be valid against the Organization JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Organization} An instance of Organization populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Organization();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Organization class to a JSON object.
   * The JSON is expected to be valid against the Organization JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/Organization' };
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
    if (this.organizationName != null) {
      inst['OrganizationName'] = typeof this.organizationName.toJSON === 'function' ? this.organizationName.toJSON() : this.organizationName;
    }
    if (this.organizationAlias != null) {
      inst['OrganizationAlias'] = this.organizationAlias.map(f => f.toJSON());
    }
    if (this.organizationIdentifier != null) {
      inst['OrganizationIdentifier'] = this.organizationIdentifier.map(f => f.toJSON());
    }
    if (this.address != null) {
      inst['Address'] = this.address.map(f => f.toJSON());
    }
    if (this.contactPoint != null) {
      inst['ContactPoint'] = this.contactPoint.map(f => f.toJSON());
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Organization class to a FHIR object.
   * The FHIR is expected to be valid against the Organization FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Organization';
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
    if (this.organizationIdentifier != null) {
      inst['identifier'] = inst['identifier'] || [];
      inst['identifier'].concat(this.organizationIdentifier.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.activeFlag != null) {
      inst['active'] = typeof this.activeFlag.toFHIR === 'function' ? this.activeFlag.toFHIR() : this.activeFlag;
    }
    if (this.type != null) {
      inst['type'] = inst['type'] || [];
      inst['type'].push(typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type);
    }
    if (this.organizationName != null) {
      inst['name'] = typeof this.organizationName.toFHIR === 'function' ? this.organizationName.toFHIR() : this.organizationName;
    }
    if (this.organizationAlias != null) {
      inst['alias'] = inst['alias'] || [];
      inst['alias'].concat(this.organizationAlias.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.address != null) {
      inst['address'] = inst['address'] || [];
      inst['address'].concat(this.address.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.partOf != null && this.partOf.content != null) {
      inst['partOf'] = typeof this.partOf.content.toFHIR === 'function' ? this.partOf.content.toFHIR() : this.partOf.content;
    }
    if (this.contactPoint != null) {
      inst['contact'] = inst['contact'] || [];
      inst['contact'].concat(this.contactPoint.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-Organization-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default Organization;
