import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Medication.
 * @extends Entity
 */
class Medication extends Entity {

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
   * @returns {Medication} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {Medication} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the DoseForm.
   * @returns {DoseForm} The shr.entity.DoseForm
   */
  get doseForm() {
    return this._doseForm;
  }

  /**
   * Set the DoseForm.
   * @param {DoseForm} doseForm - The shr.entity.DoseForm
   */
  set doseForm(doseForm) {
    this._doseForm = doseForm;
  }

  /**
   * Set the DoseForm and return 'this' for chaining.
   * @param {DoseForm} doseForm - The shr.entity.DoseForm
   * @returns {Medication} this.
   */
  withDoseForm(doseForm) {
    this.doseForm = doseForm; return this;
  }

  /**
   * Get the Brand.
   * @returns {Brand} The shr.entity.Brand
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the Brand.
   * @param {Brand} brand - The shr.entity.Brand
   */
  set brand(brand) {
    this._brand = brand;
  }

  /**
   * Set the Brand and return 'this' for chaining.
   * @param {Brand} brand - The shr.entity.Brand
   * @returns {Medication} this.
   */
  withBrand(brand) {
    this.brand = brand; return this;
  }

  /**
   * Get the OverTheCounter.
   * @returns {OverTheCounter} The shr.entity.OverTheCounter
   */
  get overTheCounter() {
    return this._overTheCounter;
  }

  /**
   * Set the OverTheCounter.
   * @param {OverTheCounter} overTheCounter - The shr.entity.OverTheCounter
   */
  set overTheCounter(overTheCounter) {
    this._overTheCounter = overTheCounter;
  }

  /**
   * Set the OverTheCounter and return 'this' for chaining.
   * @param {OverTheCounter} overTheCounter - The shr.entity.OverTheCounter
   * @returns {Medication} this.
   */
  withOverTheCounter(overTheCounter) {
    this.overTheCounter = overTheCounter; return this;
  }

  /**
   * Get the MedicationIngredient array.
   * @returns {Array<MedicationIngredient>} The shr.entity.MedicationIngredient array
   */
  get medicationIngredient() {
    return this._medicationIngredient;
  }

  /**
   * Set the MedicationIngredient array.
   * @param {Array<MedicationIngredient>} medicationIngredient - The shr.entity.MedicationIngredient array
   */
  set medicationIngredient(medicationIngredient) {
    this._medicationIngredient = medicationIngredient;
  }

  /**
   * Set the MedicationIngredient array and return 'this' for chaining.
   * @param {Array<MedicationIngredient>} medicationIngredient - The shr.entity.MedicationIngredient array
   * @returns {Medication} this.
   */
  withMedicationIngredient(medicationIngredient) {
    this.medicationIngredient = medicationIngredient; return this;
  }

  /**
   * Get the Manufacturer.
   * @returns {Manufacturer} The shr.entity.Manufacturer
   */
  get manufacturer() {
    return this._manufacturer;
  }

  /**
   * Set the Manufacturer.
   * @param {Manufacturer} manufacturer - The shr.entity.Manufacturer
   */
  set manufacturer(manufacturer) {
    this._manufacturer = manufacturer;
  }

  /**
   * Set the Manufacturer and return 'this' for chaining.
   * @param {Manufacturer} manufacturer - The shr.entity.Manufacturer
   * @returns {Medication} this.
   */
  withManufacturer(manufacturer) {
    this.manufacturer = manufacturer; return this;
  }

  /**
   * Get the LotNumber.
   * @returns {LotNumber} The shr.entity.LotNumber
   */
  get lotNumber() {
    return this._lotNumber;
  }

  /**
   * Set the LotNumber.
   * @param {LotNumber} lotNumber - The shr.entity.LotNumber
   */
  set lotNumber(lotNumber) {
    this._lotNumber = lotNumber;
  }

  /**
   * Set the LotNumber and return 'this' for chaining.
   * @param {LotNumber} lotNumber - The shr.entity.LotNumber
   * @returns {Medication} this.
   */
  withLotNumber(lotNumber) {
    this.lotNumber = lotNumber; return this;
  }

  /**
   * Get the ExpirationDate.
   * @returns {ExpirationDate} The shr.entity.ExpirationDate
   */
  get expirationDate() {
    return this._expirationDate;
  }

  /**
   * Set the ExpirationDate.
   * @param {ExpirationDate} expirationDate - The shr.entity.ExpirationDate
   */
  set expirationDate(expirationDate) {
    this._expirationDate = expirationDate;
  }

  /**
   * Set the ExpirationDate and return 'this' for chaining.
   * @param {ExpirationDate} expirationDate - The shr.entity.ExpirationDate
   * @returns {Medication} this.
   */
  withExpirationDate(expirationDate) {
    this.expirationDate = expirationDate; return this;
  }

  /**
   * Get the Package.
   * @returns {Package} The shr.entity.Package
   */
  get package() {
    return this._package;
  }

  /**
   * Set the Package.
   * @param {Package} packageVar - The shr.entity.Package
   */
  set package(packageVar) {
    this._package = packageVar;
  }

  /**
   * Set the Package and return 'this' for chaining.
   * @param {Package} packageVar - The shr.entity.Package
   * @returns {Medication} this.
   */
  withPackage(packageVar) {
    this.package = packageVar; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Medication class.
   * The JSON must be valid against the Medication JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Medication} An instance of Medication populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Medication();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Medication class to a JSON object.
   * The JSON is expected to be valid against the Medication JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Medication' };
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.doseForm != null) {
      inst['DoseForm'] = typeof this.doseForm.toJSON === 'function' ? this.doseForm.toJSON() : this.doseForm;
    }
    if (this.brand != null) {
      inst['Brand'] = typeof this.brand.toJSON === 'function' ? this.brand.toJSON() : this.brand;
    }
    if (this.overTheCounter != null) {
      inst['OverTheCounter'] = typeof this.overTheCounter.toJSON === 'function' ? this.overTheCounter.toJSON() : this.overTheCounter;
    }
    if (this.medicationIngredient != null) {
      inst['MedicationIngredient'] = this.medicationIngredient.map(f => f.toJSON());
    }
    if (this.manufacturer != null) {
      inst['Manufacturer'] = typeof this.manufacturer.toJSON === 'function' ? this.manufacturer.toJSON() : this.manufacturer;
    }
    if (this.lotNumber != null) {
      inst['LotNumber'] = typeof this.lotNumber.toJSON === 'function' ? this.lotNumber.toJSON() : this.lotNumber;
    }
    if (this.expirationDate != null) {
      inst['ExpirationDate'] = typeof this.expirationDate.toJSON === 'function' ? this.expirationDate.toJSON() : this.expirationDate;
    }
    if (this.package != null) {
      inst['Package'] = typeof this.package.toJSON === 'function' ? this.package.toJSON() : this.package;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Medication class to a FHIR object.
   * The FHIR is expected to be valid against the Medication FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Medication';
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.type != null) {
      inst['code'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.brand != null) {
      inst['isBrand'] = typeof this.brand.toFHIR === 'function' ? this.brand.toFHIR() : this.brand;
    }
    if (this.overTheCounter != null) {
      inst['isOverTheCounter'] = typeof this.overTheCounter.toFHIR === 'function' ? this.overTheCounter.toFHIR() : this.overTheCounter;
    }
    if (this.manufacturer != null) {
      inst['manufacturer'] = typeof this.manufacturer.toFHIR === 'function' ? this.manufacturer.toFHIR() : this.manufacturer;
    }
    if (this.doseForm != null) {
      inst['form'] = typeof this.doseForm.toFHIR === 'function' ? this.doseForm.toFHIR() : this.doseForm;
    }
    if (this.medicationIngredient != null && this.medicationIngredient.codeableConcept != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['item[x]'] = inst ['ingredient']['item[x]'] || [];
      inst['ingredient']['item[x]'] = inst['ingredient']['item[x]'].concat(this.medicationIngredient.codeableConcept.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.medicationIngredient != null && this.medicationIngredient.isActiveIngredient != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['isActive'] = inst ['ingredient']['isActive'] || [];
      inst['ingredient']['isActive'] = inst['ingredient']['isActive'].concat(this.medicationIngredient.isActiveIngredient.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.medicationIngredient != null && this.medicationIngredient.ingredientAmount != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['amount'] = inst ['ingredient']['amount'] || [];
      inst['ingredient']['amount'] = inst['ingredient']['amount'].concat(this.medicationIngredient.ingredientAmount.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.package != null) {
      if(inst['package'] === undefined) {
        inst['package'] = {};
      }
      inst['package']['container'] = typeof this.package.toFHIR === 'function' ? this.package.toFHIR() : this.package;
    }
    if (this.lotNumber != null) {
      if(inst['package'] === undefined) {
        inst['package'] = {};
      }
      if(inst['package']['batch'] === undefined) {
        inst['package']['batch'] = {};
      }
      inst['package']['batch']['lotNumber'] = typeof this.lotNumber.toFHIR === 'function' ? this.lotNumber.toFHIR() : this.lotNumber;
    }
    if (this.expirationDate != null) {
      if(inst['package'] === undefined) {
        inst['package'] = {};
      }
      if(inst['package']['batch'] === undefined) {
        inst['package']['batch'] = {};
      }
      inst['package']['batch']['expirationDate'] = typeof this.expirationDate.toFHIR === 'function' ? this.expirationDate.toFHIR() : this.expirationDate;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-Medication-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Medication class.
   * The FHIR must be valid against the Medication FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Medication} An instance of Medication populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Medication();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['code'] != null) {
      inst.type = createInstanceFromFHIR('shr.core.Type', fhir['code']);
    }
    if (fhir['isBrand'] != null) {
      inst.brand = createInstanceFromFHIR('shr.entity.Brand', fhir['isBrand']);
    }
    if (fhir['isOverTheCounter'] != null) {
      inst.overTheCounter = createInstanceFromFHIR('shr.entity.OverTheCounter', fhir['isOverTheCounter']);
    }
    if (fhir['manufacturer'] != null) {
      inst.manufacturer = createInstanceFromFHIR('shr.entity.Manufacturer', fhir['manufacturer']);
    }
    if (fhir['form'] != null) {
      inst.doseForm = createInstanceFromFHIR('shr.entity.DoseForm', fhir['form']);
    }
    if (fhir['ingredient'] != null && fhir['ingredient']['item[x]'] != null) {
      if(inst.medicationIngredient == null) {
        inst.medicationIngredient = createInstanceFromFHIR('shr.entity.MedicationIngredient', {});
      }
      inst.medicationIngredient.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', fhir['ingredient']['item[x]'][0]);
    }
    if (fhir['ingredient'] != null && fhir['ingredient']['isActive'] != null) {
      if(inst.medicationIngredient == null) {
        inst.medicationIngredient = createInstanceFromFHIR('shr.entity.MedicationIngredient', {});
      }
      inst.medicationIngredient.isActiveIngredient = createInstanceFromFHIR('shr.entity.IsActiveIngredient', fhir['ingredient']['isActive']);
    }
    if (fhir['ingredient'] != null && fhir['ingredient']['amount'] != null) {
      if(inst.medicationIngredient == null) {
        inst.medicationIngredient = createInstanceFromFHIR('shr.entity.MedicationIngredient', {});
      }
      inst.medicationIngredient.ingredientAmount = createInstanceFromFHIR('shr.entity.IngredientAmount', fhir['ingredient']['amount']);
    }
    if (fhir['package'] != null && fhir['package']['container'] != null) {
      inst.package = createInstanceFromFHIR('shr.entity.Package', fhir['package']['container']);
    }
    if (fhir['package'] != null && fhir['package']['batch'] != null && fhir['package']['batch']['lotNumber'] != null) {
      inst.lotNumber = createInstanceFromFHIR('shr.entity.LotNumber', fhir['package']['batch']['lotNumber']);
    }
    if (fhir['package'] != null && fhir['package']['batch'] != null && fhir['package']['batch']['expirationDate'] != null) {
      inst.expirationDate = createInstanceFromFHIR('shr.entity.ExpirationDate', fhir['package']['batch']['expirationDate']);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Medication;
