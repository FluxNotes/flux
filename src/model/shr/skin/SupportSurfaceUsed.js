import { setPropertiesFromJSON } from '../../json-helper';

import DeviceUsed from '../device/DeviceUsed';

/**
 * Generated class for shr.skin.SupportSurfaceUsed.
 * @extends DeviceUsed
 */
class SupportSurfaceUsed extends DeviceUsed {

  /**
   * Get the value (aliases device).
   * @returns {SupportSurface} The shr.skin.SupportSurface
   */
  get value() {
    return this._device;
  }

  /**
   * Set the value (aliases device).
   * This field/value is required.
   * @param {SupportSurface} value - The shr.skin.SupportSurface
   */
  set value(value) {
    this._device = value;
  }

  /**
   * Set the value (aliases device) and return 'this' for chaining.
   * This field/value is required.
   * @param {SupportSurface} value - The shr.skin.SupportSurface
   * @returns {SupportSurfaceUsed} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the SupportSurface.
   * @returns {SupportSurface} The shr.skin.SupportSurface
   */
  get device() {
    return this._device;
  }

  /**
   * Set the SupportSurface.
   * This field/value is required.
   * @param {SupportSurface} device - The shr.skin.SupportSurface
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the SupportSurface and return 'this' for chaining.
   * This field/value is required.
   * @param {SupportSurface} device - The shr.skin.SupportSurface
   * @returns {SupportSurfaceUsed} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the Implanted.
   * @returns {Implanted} The shr.device.Implanted
   */
  get implanted() {
    return this._implanted;
  }

  /**
   * Set the Implanted.
   * @param {Implanted} implanted - The shr.device.Implanted
   */
  set implanted(implanted) {
    this._implanted = implanted;
  }

  /**
   * Set the Implanted and return 'this' for chaining.
   * @param {Implanted} implanted - The shr.device.Implanted
   * @returns {SupportSurfaceUsed} this.
   */
  withImplanted(implanted) {
    this.implanted = implanted; return this;
  }

  /**
   * Get the ImmersionDepth.
   * @returns {ImmersionDepth} The shr.skin.ImmersionDepth
   */
  get immersionDepth() {
    return this._immersionDepth;
  }

  /**
   * Set the ImmersionDepth.
   * @param {ImmersionDepth} immersionDepth - The shr.skin.ImmersionDepth
   */
  set immersionDepth(immersionDepth) {
    this._immersionDepth = immersionDepth;
  }

  /**
   * Set the ImmersionDepth and return 'this' for chaining.
   * @param {ImmersionDepth} immersionDepth - The shr.skin.ImmersionDepth
   * @returns {SupportSurfaceUsed} this.
   */
  withImmersionDepth(immersionDepth) {
    this.immersionDepth = immersionDepth; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SupportSurfaceUsed class.
   * The JSON must be valid against the SupportSurfaceUsed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SupportSurfaceUsed} An instance of SupportSurfaceUsed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SupportSurfaceUsed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SupportSurfaceUsed class to a JSON object.
   * The JSON is expected to be valid against the SupportSurfaceUsed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/skin/SupportSurfaceUsed' } };
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
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.actionContext != null) {
      inst['ActionContext'] = typeof this.actionContext.toJSON === 'function' ? this.actionContext.toJSON() : this.actionContext;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.implanted != null) {
      inst['Implanted'] = typeof this.implanted.toJSON === 'function' ? this.implanted.toJSON() : this.implanted;
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.immersionDepth != null) {
      inst['ImmersionDepth'] = typeof this.immersionDepth.toJSON === 'function' ? this.immersionDepth.toJSON() : this.immersionDepth;
    }
    return inst;
  }
}
export default SupportSurfaceUsed;
