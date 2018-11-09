import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Role from './Role';

/**
 * Generated class for shr.entity.Patient.
 * @extends Role
 */
class Patient extends Role {

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
   * @returns {Patient} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the shr.entity.Person reference.
   * @returns {Reference} The shr.entity.Person reference
   */
  get person() {
    return this._person;
  }

  /**
   * Set the shr.entity.Person reference.
   * This field/value is required.
   * @param {Reference} person - The shr.entity.Person reference
   */
  set person(person) {
    this._person = person;
  }

  /**
   * Set the shr.entity.Person reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} person - The shr.entity.Person reference
   * @returns {Patient} this.
   */
  withPerson(person) {
    this.person = person; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Patient class.
   * The JSON must be valid against the Patient JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Patient} An instance of Patient populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Patient();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Patient class to a JSON object.
   * The JSON is expected to be valid against the Patient JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Patient' };
    if (this.person != null) {
      inst['Person'] = typeof this.person.toJSON === 'function' ? this.person.toJSON() : this.person;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Patient class to a FHIR object.
   * The FHIR is expected to be valid against the Patient FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Patient';
    if (this.person != null && this.person.activeFlag != null) {
      inst['active'] = typeof this.person.activeFlag.toFHIR === 'function' ? this.person.activeFlag.toFHIR() : this.person.activeFlag;
    }
    if (this.person != null && this.person.humanName != null) {
      inst['name'] = inst ['name'] || [];
      inst['name'].push(typeof this.person.humanName.toFHIR === 'function' ? this.person.humanName.toFHIR() : this.person.humanName);
    }
    if (this.person != null && this.person.contactPoint != null) {
      inst['telecom'] = inst ['telecom'] || [];
      inst['telecom'].push(typeof this.person.contactPoint.toFHIR === 'function' ? this.person.contactPoint.toFHIR() : this.person.contactPoint);
    }
    if (this.person != null && this.person.administrativeGender != null) {
      inst['gender'] = typeof this.person.administrativeGender.toFHIR === 'function' ? this.person.administrativeGender.toFHIR() : this.person.administrativeGender;
    }
    if (this.person != null && this.person.dateOfBirth != null) {
      inst['birthDate'] = typeof this.person.dateOfBirth.toFHIR === 'function' ? this.person.dateOfBirth.toFHIR() : this.person.dateOfBirth;
    }
    if (this.person != null && this.person.address != null) {
      inst['address'] = inst ['address'] || [];
      inst['address'].push(typeof this.person.address.toFHIR === 'function' ? this.person.address.toFHIR() : this.person.address);
    }
    if (this.person != null && this.person.maritalStatus != null) {
      inst['maritalStatus'] = typeof this.person.maritalStatus.toFHIR === 'function' ? this.person.maritalStatus.toFHIR() : this.person.maritalStatus;
    }
    if (this.person != null && this.person.headshot != null) {
      inst['photo'] = inst ['photo'] || [];
      inst['photo'].push(typeof this.person.headshot.toFHIR === 'function' ? this.person.headshot.toFHIR() : this.person.headshot);
    }
    if (this.person != null && this.person.languageUsed != null) {
      inst['communication'] = inst ['communication'] || [];
      inst['communication'].push(typeof this.person.languageUsed.toFHIR === 'function' ? this.person.languageUsed.toFHIR() : this.person.languageUsed);
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Patient class.
   * The FHIR must be valid against the Patient FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Patient} An instance of Patient populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Patient();
    if (fhir['active'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.activeFlag = createInstanceFromFHIR('shr.entity.ActiveFlag', fhir['active']);
    }
    if (fhir['name'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.humanName = inst.person.humanName || [];
      inst.person.humanName = inst.person.humanName.concat(fhir['name'].map(f => createInstanceFromFHIR('shr.core.HumanName', f)));
    }
    if (fhir['telecom'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.contactPoint = inst.person.contactPoint || [];
      inst.person.contactPoint = inst.person.contactPoint.concat(fhir['telecom'].map(f => createInstanceFromFHIR('shr.core.ContactPoint', f)));
    }
    if (fhir['gender'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.administrativeGender = createInstanceFromFHIR('shr.entity.AdministrativeGender', fhir['gender']);
    }
    if (fhir['birthDate'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.dateOfBirth = createInstanceFromFHIR('shr.entity.DateOfBirth', fhir['birthDate']);
    }
    if (fhir['address'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.address = inst.person.address || [];
      inst.person.address = inst.person.address.concat(fhir['address'].map(f => createInstanceFromFHIR('shr.core.Address', f)));
    }
    if (fhir['maritalStatus'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.maritalStatus = createInstanceFromFHIR('shr.entity.MaritalStatus', fhir['maritalStatus']);
    }
    if (fhir['photo'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.headshot = inst.person.headshot || [];
      inst.person.headshot = inst.person.headshot.concat(fhir['photo'].map(f => createInstanceFromFHIR('shr.entity.Headshot', f)));
    }
    if (fhir['communication'] != null) {
      if(inst.person == null) {
        inst.person = createInstanceFromFHIR('shr.entity.Person', {});
      }
      inst.person.languageUsed = inst.person.languageUsed || [];
      inst.person.languageUsed = inst.person.languageUsed.concat(fhir['communication'].map(f => createInstanceFromFHIR('shr.entity.LanguageUsed', f)));
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Patient;
