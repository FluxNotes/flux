import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.behavior.PhysicalActivityPanel.
 * @extends Observation
 */
class PhysicalActivityPanel extends Observation {

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
   * Get the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @returns {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @param {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Get the Members.
   * @returns {Members} The shr.finding.Members
   */
  get members() {
    return this._members;
  }

  /**
   * Set the Members.
   * @param {Members} members - The shr.finding.Members
   */
  set members(members) {
    this._members = members;
  }

  /**
   * Deserializes JSON data to an instance of the PhysicalActivityPanel class.
   * The JSON must be valid against the PhysicalActivityPanel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PhysicalActivityPanel} An instance of PhysicalActivityPanel populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PhysicalActivityPanel();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PhysicalActivityPanel;
