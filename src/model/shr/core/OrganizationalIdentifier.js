import { setPropertiesFromJSON } from '../../json-helper';

import Identifier from './Identifier';

/**
 * Generated class for shr.core.OrganizationalIdentifier.
 * @extends Identifier
 */
class OrganizationalIdentifier extends Identifier {

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
   * @returns {OrganizationalIdentifier} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Get the Organization.
   * @returns {Organization} The shr.entity.Organization
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the Organization.
   * @param {Organization} organization - The shr.entity.Organization
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Set the Organization and return 'this' for chaining.
   * @param {Organization} organization - The shr.entity.Organization
   * @returns {OrganizationalIdentifier} this.
   */
  withOrganization(organization) {
    this.organization = organization; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OrganizationalIdentifier class.
   * The JSON must be valid against the OrganizationalIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OrganizationalIdentifier} An instance of OrganizationalIdentifier populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OrganizationalIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OrganizationalIdentifier class to a JSON object.
   * The JSON is expected to be valid against the OrganizationalIdentifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/OrganizationalIdentifier' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.codeSystem != null) {
      inst['CodeSystem'] = typeof this.codeSystem.toJSON === 'function' ? this.codeSystem.toJSON() : this.codeSystem;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    if (this.issuer != null) {
      inst['Issuer'] = typeof this.issuer.toJSON === 'function' ? this.issuer.toJSON() : this.issuer;
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    if (this.organization != null) {
      inst['Organization'] = typeof this.organization.toJSON === 'function' ? this.organization.toJSON() : this.organization;
    }
    return inst;
  }
  /**
   * Serializes an instance of the OrganizationalIdentifier class to a FHIR object.
   * The FHIR is expected to be valid against the OrganizationalIdentifier FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.timePeriod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.timePeriod.toFHIR(true));
    }
    if (this.organization != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.organization.toFHIR(true));
    }
    if (this.purpose != null) {
      inst['use'] = typeof this.purpose.toFHIR === 'function' ? this.purpose.toFHIR() : this.purpose;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.codeSystem != null) {
      inst['system'] = typeof this.codeSystem.toFHIR === 'function' ? this.codeSystem.toFHIR() : this.codeSystem;
    }
    if (this.value != null) {
      inst['value'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    if (this.issuer != null) {
      inst['assigner'] = typeof this.issuer.toFHIR === 'function' ? this.issuer.toFHIR() : this.issuer;
    }
    return inst;
  }
}
export default OrganizationalIdentifier;
