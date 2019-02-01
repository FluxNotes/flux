import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

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
   * Get the Ingredient array.
   * @returns {Array<Ingredient>} The shr.entity.Ingredient array
   */
  get ingredient() {
    return this._ingredient;
  }

  /**
   * Set the Ingredient array.
   * @param {Array<Ingredient>} ingredient - The shr.entity.Ingredient array
   */
  set ingredient(ingredient) {
    this._ingredient = ingredient;
  }

  /**
   * Set the Ingredient array and return 'this' for chaining.
   * @param {Array<Ingredient>} ingredient - The shr.entity.Ingredient array
   * @returns {Medication} this.
   */
  withIngredient(ingredient) {
    this.ingredient = ingredient; return this;
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
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
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
    if (this.ingredient != null) {
      inst['Ingredient'] = this.ingredient.map(f => f.toJSON());
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
   * Deserializes FHIR JSON data to an instance of the Medication class.
   * The FHIR must be valid against the Medication FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Medication} An instance of Medication populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Medication();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Medication');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.entity.PartOf', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['code'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['isBrand'] != null) {
      inst.brand = inst.brand || FHIRHelper.createInstanceFromFHIR('shr.entity.Brand', {}, shrId);
      inst.brand.isBrand = FHIRHelper.createInstanceFromFHIR('shr.entity.IsBrand', fhir['isBrand'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['isOverTheCounter'] != null) {
      inst.overTheCounter = FHIRHelper.createInstanceFromFHIR('shr.entity.OverTheCounter', fhir['isOverTheCounter'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['manufacturer'] != null) {
      const entryId = fhir['manufacturer']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.manufacturer = mappedResources[entryId];
    }
    if (fhir['form'] != null) {
      inst.doseForm = FHIRHelper.createInstanceFromFHIR('shr.entity.DoseForm', fhir['form'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['ingredient'] != null && fhir['ingredient'][0] != null) {
      if (fhir['ingredient'][0]['itemCodeableConcept'] != null) {
        inst.ingredient = inst.ingredient || [];
        const inst_ingredient = FHIRHelper.createInstanceFromFHIR('shr.entity.Ingredient', {}, shrId);
        inst.ingredient.push(inst_ingredient);
        inst_ingredient.substanceOrCode = FHIRHelper.createInstanceFromFHIR('shr.entity.SubstanceOrCode', fhir['ingredient'][0]['itemCodeableConcept'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['ingredient'][0]['isActive'] != null) {
        inst.ingredient = inst.ingredient || [];
        const inst_ingredient = FHIRHelper.createInstanceFromFHIR('shr.entity.Ingredient', {}, shrId);
        inst.ingredient.push(inst_ingredient);
        inst_ingredient.isActiveIngredient = FHIRHelper.createInstanceFromFHIR('shr.entity.IsActiveIngredient', fhir['ingredient'][0]['isActive'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['ingredient'][0]['amount'] != null) {
        inst.ingredient = inst.ingredient || [];
        const inst_ingredient = FHIRHelper.createInstanceFromFHIR('shr.entity.Ingredient', {}, shrId);
        inst.ingredient.push(inst_ingredient);
        inst_ingredient.ingredientAmount = FHIRHelper.createInstanceFromFHIR('shr.entity.IngredientAmount', fhir['ingredient'][0]['amount'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['package'] != null) {
      if (fhir['package']['container'] != null) {
        inst.package = FHIRHelper.createInstanceFromFHIR('shr.entity.Package', fhir['package']['container'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['package']['batch'] != null && fhir['package']['batch'][0] != null) {
        if (fhir['package']['batch'][0]['lotNumber'] != null) {
          inst.lotNumber = FHIRHelper.createInstanceFromFHIR('shr.entity.LotNumber', fhir['package']['batch'][0]['lotNumber'], shrId, allEntries, mappedResources, referencesOut, false);
        }
        if (fhir['package']['batch'][0]['expirationDate'] != null) {
          inst.expirationDate = FHIRHelper.createInstanceFromFHIR('shr.entity.ExpirationDate', fhir['package']['batch'][0]['expirationDate'], shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Medication;
