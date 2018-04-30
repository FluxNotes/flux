import { setPropertiesFromJSON } from '../../json-helper';

import Device from '../device/Device';

/**
 * Generated class for shr.skin.SupportSurface.
 * @extends Device
 */
class SupportSurface extends Device {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {SupportSurface} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {SupportSurface} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the SupportSurfaceCategory.
   * @returns {SupportSurfaceCategory} The shr.skin.SupportSurfaceCategory
   */
  get supportSurfaceCategory() {
    return this._supportSurfaceCategory;
  }

  /**
   * Set the SupportSurfaceCategory.
   * @param {SupportSurfaceCategory} supportSurfaceCategory - The shr.skin.SupportSurfaceCategory
   */
  set supportSurfaceCategory(supportSurfaceCategory) {
    this._supportSurfaceCategory = supportSurfaceCategory;
  }

  /**
   * Set the SupportSurfaceCategory and return 'this' for chaining.
   * @param {SupportSurfaceCategory} supportSurfaceCategory - The shr.skin.SupportSurfaceCategory
   * @returns {SupportSurface} this.
   */
  withSupportSurfaceCategory(supportSurfaceCategory) {
    this.supportSurfaceCategory = supportSurfaceCategory; return this;
  }

  /**
   * Get the SupportSurfaceBodyPosition.
   * @returns {SupportSurfaceBodyPosition} The shr.skin.SupportSurfaceBodyPosition
   */
  get supportSurfaceBodyPosition() {
    return this._supportSurfaceBodyPosition;
  }

  /**
   * Set the SupportSurfaceBodyPosition.
   * @param {SupportSurfaceBodyPosition} supportSurfaceBodyPosition - The shr.skin.SupportSurfaceBodyPosition
   */
  set supportSurfaceBodyPosition(supportSurfaceBodyPosition) {
    this._supportSurfaceBodyPosition = supportSurfaceBodyPosition;
  }

  /**
   * Set the SupportSurfaceBodyPosition and return 'this' for chaining.
   * @param {SupportSurfaceBodyPosition} supportSurfaceBodyPosition - The shr.skin.SupportSurfaceBodyPosition
   * @returns {SupportSurface} this.
   */
  withSupportSurfaceBodyPosition(supportSurfaceBodyPosition) {
    this.supportSurfaceBodyPosition = supportSurfaceBodyPosition; return this;
  }

  /**
   * Get the SupportSurfaceComponent array.
   * @returns {Array<SupportSurfaceComponent>} The shr.skin.SupportSurfaceComponent array
   */
  get supportSurfaceComponent() {
    return this._supportSurfaceComponent;
  }

  /**
   * Set the SupportSurfaceComponent array.
   * @param {Array<SupportSurfaceComponent>} supportSurfaceComponent - The shr.skin.SupportSurfaceComponent array
   */
  set supportSurfaceComponent(supportSurfaceComponent) {
    this._supportSurfaceComponent = supportSurfaceComponent;
  }

  /**
   * Set the SupportSurfaceComponent array and return 'this' for chaining.
   * @param {Array<SupportSurfaceComponent>} supportSurfaceComponent - The shr.skin.SupportSurfaceComponent array
   * @returns {SupportSurface} this.
   */
  withSupportSurfaceComponent(supportSurfaceComponent) {
    this.supportSurfaceComponent = supportSurfaceComponent; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SupportSurface class.
   * The JSON must be valid against the SupportSurface JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SupportSurface} An instance of SupportSurface populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SupportSurface();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SupportSurface class to a JSON object.
   * The JSON is expected to be valid against the SupportSurface JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/skin/SupportSurface' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
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
    if (this.deviceUdi != null) {
      inst['DeviceUdi'] = this.deviceUdi.map(f => f.toJSON());
    }
    if (this.vendorModelNumber != null) {
      inst['VendorModelNumber'] = typeof this.vendorModelNumber.toJSON === 'function' ? this.vendorModelNumber.toJSON() : this.vendorModelNumber;
    }
    if (this.supportSurfaceCategory != null) {
      inst['SupportSurfaceCategory'] = typeof this.supportSurfaceCategory.toJSON === 'function' ? this.supportSurfaceCategory.toJSON() : this.supportSurfaceCategory;
    }
    if (this.supportSurfaceBodyPosition != null) {
      inst['SupportSurfaceBodyPosition'] = typeof this.supportSurfaceBodyPosition.toJSON === 'function' ? this.supportSurfaceBodyPosition.toJSON() : this.supportSurfaceBodyPosition;
    }
    if (this.supportSurfaceComponent != null) {
      inst['SupportSurfaceComponent'] = this.supportSurfaceComponent.map(f => f.toJSON());
    }
    return inst;
  }
}
export default SupportSurface;
