import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import Section from '../shr/composition/Section';

/**
 * Generated class for odh.OccupationalDataSection.
 * @extends Section
 */
class OccupationalDataSection extends Section {

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
   * @returns {OccupationalDataSection} this.
   */
  withInformationItem(informationItem) {
    this.informationItem = informationItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OccupationalDataSection class.
   * The JSON must be valid against the OccupationalDataSection JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccupationalDataSection} An instance of OccupationalDataSection populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OccupationalDataSection();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the OccupationalDataSection class to a JSON object.
   * The JSON is expected to be valid against the OccupationalDataSection JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/odh/OccupationalDataSection' } };
    if (this.informationItem != null) {
      inst['InformationItem'] = this.informationItem.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the OccupationalDataSection class to a FHIR object.
   * The FHIR is expected to be valid against the OccupationalDataSection FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
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
   * Deserializes FHIR JSON data to an instance of the OccupationalDataSection class.
   * The FHIR must be valid against the OccupationalDataSection FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {OccupationalDataSection} An instance of OccupationalDataSection populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new OccupationalDataSection();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-InformationItem-extension');
      if (match != null) {
        inst.informationItem = createInstanceFromFHIR('shr.base.InformationItem', match, true);
      }
    }
    return inst;
  }

}
export default OccupationalDataSection;
