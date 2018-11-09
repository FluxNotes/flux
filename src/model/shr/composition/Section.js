import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import InformationItem from '../base/InformationItem';

/**
 * Generated class for shr.composition.Section.
 * @extends InformationItem
 */
class Section extends InformationItem {

  /**
   * Get the InformationItem array.
   * @returns {Array<InformationItem>} The shr.base.InformationItem array
   */
  get informationItem() {
    return this._informationItem;
  }

  /**
   * Set the InformationItem array.
   * @param {Array<InformationItem>} informationItem - The shr.base.InformationItem array
   */
  set informationItem(informationItem) {
    this._informationItem = informationItem;
  }

  /**
   * Set the InformationItem array and return 'this' for chaining.
   * @param {Array<InformationItem>} informationItem - The shr.base.InformationItem array
   * @returns {Section} this.
   */
  withInformationItem(informationItem) {
    this.informationItem = informationItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Section class.
   * The JSON must be valid against the Section JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Section} An instance of Section populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Section();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Section class to a JSON object.
   * The JSON is expected to be valid against the Section JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/composition/Section' } };
    if (this.informationItem != null) {
      inst['InformationItem'] = this.informationItem.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the Section class to a FHIR object.
   * The FHIR is expected to be valid against the Section FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.informationItem != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.informationItem.toFHIR === 'function' ? this.informationItem.toFHIR(true) : this.informationItem);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Section class.
   * The FHIR must be valid against the Section FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Section} An instance of Section populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Section();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-InformationItem-extension');
      if (match != null) {
        inst.informationItem = createInstanceFromFHIR('shr.base.InformationItem', match, true);
      }
    }
    return inst;
  }

}
export default Section;
