import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.reserved.ReservedWordEntry.
 */
class ReservedWordEntry {

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
   * @returns {ReservedWordEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases package).
   * @returns {Package} The shr.reserved.Package
   */
  get value() {
    return this._package;
  }

  /**
   * Set the value (aliases package).
   * This field/value is required.
   * @param {Package} value - The shr.reserved.Package
   */
  set value(value) {
    this._package = value;
  }

  /**
   * Set the value (aliases package) and return 'this' for chaining.
   * This field/value is required.
   * @param {Package} value - The shr.reserved.Package
   * @returns {ReservedWordEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Package.
   * @returns {Package} The shr.reserved.Package
   */
  get package() {
    return this._package;
  }

  /**
   * Set the Package.
   * This field/value is required.
   * @param {Package} packageVar - The shr.reserved.Package
   */
  set package(packageVar) {
    this._package = packageVar;
  }

  /**
   * Set the Package and return 'this' for chaining.
   * This field/value is required.
   * @param {Package} packageVar - The shr.reserved.Package
   * @returns {ReservedWordEntry} this.
   */
  withPackage(packageVar) {
    this.package = packageVar; return this;
  }

  /**
   * Get the Class.
   * @returns {Class} The shr.reserved.Class
   */
  get class() {
    return this._class;
  }

  /**
   * Set the Class.
   * @param {Class} classVar - The shr.reserved.Class
   */
  set class(classVar) {
    this._class = classVar;
  }

  /**
   * Set the Class and return 'this' for chaining.
   * @param {Class} classVar - The shr.reserved.Class
   * @returns {ReservedWordEntry} this.
   */
  withClass(classVar) {
    this.class = classVar; return this;
  }

  /**
   * Get the Enum.
   * @returns {Enum} The shr.reserved.Enum
   */
  get enum() {
    return this._enum;
  }

  /**
   * Set the Enum.
   * @param {Enum} enumVar - The shr.reserved.Enum
   */
  set enum(enumVar) {
    this._enum = enumVar;
  }

  /**
   * Set the Enum and return 'this' for chaining.
   * @param {Enum} enumVar - The shr.reserved.Enum
   * @returns {ReservedWordEntry} this.
   */
  withEnum(enumVar) {
    this.enum = enumVar; return this;
  }

  /**
   * Get the Await.
   * @returns {Await} The shr.reserved.Await
   */
  get await() {
    return this._await;
  }

  /**
   * Set the Await.
   * @param {Await} awaitVar - The shr.reserved.Await
   */
  set await(awaitVar) {
    this._await = awaitVar;
  }

  /**
   * Set the Await and return 'this' for chaining.
   * @param {Await} awaitVar - The shr.reserved.Await
   * @returns {ReservedWordEntry} this.
   */
  withAwait(awaitVar) {
    this.await = awaitVar; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ReservedWordEntry class.
   * The JSON must be valid against the ReservedWordEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReservedWordEntry} An instance of ReservedWordEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ReservedWordEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ReservedWordEntry class to a JSON object.
   * The JSON is expected to be valid against the ReservedWordEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/reserved/ReservedWordEntry' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.class != null) {
      inst['Class'] = typeof this.class.toJSON === 'function' ? this.class.toJSON() : this.class;
    }
    if (this.enum != null) {
      inst['Enum'] = typeof this.enum.toJSON === 'function' ? this.enum.toJSON() : this.enum;
    }
    if (this.await != null) {
      inst['Await'] = typeof this.await.toJSON === 'function' ? this.await.toJSON() : this.await;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ReservedWordEntry class to a FHIR object.
   * The FHIR is expected to be valid against the ReservedWordEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.class != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.class.toFHIR(true));
    }
    if (this.enum != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.enum.toFHIR(true));
    }
    if (this.await != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.await.toFHIR(true));
    }
    return inst;
  }
}
export default ReservedWordEntry;
