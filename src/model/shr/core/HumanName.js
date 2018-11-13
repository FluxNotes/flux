import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import PersonName from './PersonName';

/**
 * Generated class for shr.core.HumanName.
 * @extends PersonName
 */
class HumanName extends PersonName {

  /**
   * Get the MiddleName array.
   * @returns {Array<MiddleName>} The shr.core.MiddleName array
   */
  get middleName() {
    return this._middleName;
  }

  /**
   * Set the MiddleName array.
   * @param {Array<MiddleName>} middleName - The shr.core.MiddleName array
   */
  set middleName(middleName) {
    this._middleName = middleName;
  }

  /**
   * Set the MiddleName array and return 'this' for chaining.
   * @param {Array<MiddleName>} middleName - The shr.core.MiddleName array
   * @returns {HumanName} this.
   */
  withMiddleName(middleName) {
    this.middleName = middleName; return this;
  }

  /**
   * Get the FamilyName array.
   * @returns {Array<FamilyName>} The shr.core.FamilyName array
   */
  get familyName() {
    return this._familyName;
  }

  /**
   * Set the FamilyName array.
   * @param {Array<FamilyName>} familyName - The shr.core.FamilyName array
   */
  set familyName(familyName) {
    this._familyName = familyName;
  }

  /**
   * Set the FamilyName array and return 'this' for chaining.
   * @param {Array<FamilyName>} familyName - The shr.core.FamilyName array
   * @returns {HumanName} this.
   */
  withFamilyName(familyName) {
    this.familyName = familyName; return this;
  }

  /**
   * Deserializes JSON data to an instance of the HumanName class.
   * The JSON must be valid against the HumanName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HumanName} An instance of HumanName populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new HumanName();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the HumanName class to a JSON object.
   * The JSON is expected to be valid against the HumanName JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/HumanName' } };
    if (this.nameAsText != null) {
      inst['NameAsText'] = typeof this.nameAsText.toJSON === 'function' ? this.nameAsText.toJSON() : this.nameAsText;
    }
    if (this.purpose != null) {
      inst['Purpose'] = this.purpose.map(f => f.toJSON());
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    if (this.prefix != null) {
      inst['Prefix'] = this.prefix.map(f => f.toJSON());
    }
    if (this.givenName != null) {
      inst['GivenName'] = this.givenName.map(f => f.toJSON());
    }
    if (this.middleName != null) {
      inst['MiddleName'] = this.middleName.map(f => f.toJSON());
    }
    if (this.familyName != null) {
      inst['FamilyName'] = this.familyName.map(f => f.toJSON());
    }
    if (this.suffix != null) {
      inst['Suffix'] = this.suffix.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the HumanName class to a FHIR object.
   * The FHIR is expected to be valid against the HumanName FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.purpose != null && this.purpose.coding != null && this.purpose.coding.code != null) {
      inst['use'] = inst ['use'] || [];
      inst['use'] = inst['use'].concat(this.purpose.coding.code.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nameAsText != null) {
      inst['text'] = typeof this.nameAsText.toFHIR === 'function' ? this.nameAsText.toFHIR() : this.nameAsText;
    }
    if (this.familyName != null) {
      inst['family'] = inst ['family'] || [];
      inst['family'] = inst['family'].concat(this.familyName.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.givenName != null) {
      inst['given'] = inst ['given'] || [];
      inst['given'] = inst['given'].concat(this.givenName.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.prefix != null) {
      inst['prefix'] = inst ['prefix'] || [];
      inst['prefix'] = inst['prefix'].concat(this.prefix.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.suffix != null) {
      inst['suffix'] = inst ['suffix'] || [];
      inst['suffix'] = inst['suffix'].concat(this.suffix.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-HumanName-extension';
      inst['valueHumanName'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the HumanName class.
   * The FHIR must be valid against the HumanName FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {HumanName} An instance of HumanName populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new HumanName();
    if (fhir['use'] != null) {
      if(inst.purpose == null) {
        inst.purpose = createInstanceFromFHIR('shr.core.Purpose', {});
      }
      if(inst.purpose.value == null) {
        inst.purpose.value = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.purpose.value.code = createInstanceFromFHIR('shr.core.Code', fhir['use']);
    }
    if (fhir['text'] != null) {
      inst.nameAsText = createInstanceFromFHIR('shr.core.NameAsText', fhir['text']);
    }
    if (fhir['family'] != null) {
      inst.familyName = inst.familyName || [];
      inst.familyName = inst.familyName.concat(fhir['family'].map(f => createInstanceFromFHIR('shr.core.FamilyName', f)));
    }
    if (fhir['given'] != null) {
      inst.givenName = inst.givenName || [];
      inst.givenName = inst.givenName.concat(fhir['given'].map(f => createInstanceFromFHIR('shr.core.GivenName', f)));
    }
    if (fhir['prefix'] != null) {
      inst.prefix = inst.prefix || [];
      inst.prefix = inst.prefix.concat(fhir['prefix'].map(f => createInstanceFromFHIR('shr.core.Prefix', f)));
    }
    if (fhir['suffix'] != null) {
      inst.suffix = inst.suffix || [];
      inst.suffix = inst.suffix.concat(fhir['suffix'].map(f => createInstanceFromFHIR('shr.core.Suffix', f)));
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period']);
    }
    if (asExtension) {
      inst.value = fhir['valueHumanName'];
    }
    return inst;
  }

}
export default HumanName;
