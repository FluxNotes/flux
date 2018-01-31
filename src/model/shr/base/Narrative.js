import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.Narrative.
 */
class Narrative {

  /**
   * Get the value (aliases xhtml).
   * @returns {xhtml} The xhtml
   */
  get value() {
    return this._xhtml;
  }

  /**
   * Set the value (aliases xhtml).
   * @param {xhtml} value - The xhtml
   */
  set value(value) {
    this._xhtml = value;
  }

  /**
   * Get the xhtml.
   * @returns {xhtml} The xhtml
   */
  get xhtml() {
    return this._xhtml;
  }

  /**
   * Set the xhtml.
   * @param {xhtml} xhtml - The xhtml
   */
  set xhtml(xhtml) {
    this._xhtml = xhtml;
  }

  /**
   * Get the NarrativeQualifier.
   * @returns {NarrativeQualifier} The shr.base.NarrativeQualifier
   */
  get narrativeQualifier() {
    return this._narrativeQualifier;
  }

  /**
   * Set the NarrativeQualifier.
   * @param {NarrativeQualifier} narrativeQualifier - The shr.base.NarrativeQualifier
   */
  set narrativeQualifier(narrativeQualifier) {
    this._narrativeQualifier = narrativeQualifier;
  }

  /**
   * Deserializes JSON data to an instance of the Narrative class.
   * The JSON must be valid against the Narrative JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Narrative} An instance of Narrative populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Narrative();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Narrative;
