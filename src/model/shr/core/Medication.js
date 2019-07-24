// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Entity from './Entity';

/**
 * Generated class for shr.core.Medication.
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
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * @param {Status} status - The shr.core.Status
   * @returns {Medication} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.core.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.core.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.core.PartOf
   * @returns {Medication} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
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
   * @returns {DoseForm} The shr.core.DoseForm
   */
  get doseForm() {
    return this._doseForm;
  }

  /**
   * Set the DoseForm.
   * @param {DoseForm} doseForm - The shr.core.DoseForm
   */
  set doseForm(doseForm) {
    this._doseForm = doseForm;
  }

  /**
   * Set the DoseForm and return 'this' for chaining.
   * @param {DoseForm} doseForm - The shr.core.DoseForm
   * @returns {Medication} this.
   */
  withDoseForm(doseForm) {
    this.doseForm = doseForm; return this;
  }

  /**
   * Get the Brand.
   * @returns {Brand} The shr.core.Brand
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the Brand.
   * @param {Brand} brand - The shr.core.Brand
   */
  set brand(brand) {
    this._brand = brand;
  }

  /**
   * Set the Brand and return 'this' for chaining.
   * @param {Brand} brand - The shr.core.Brand
   * @returns {Medication} this.
   */
  withBrand(brand) {
    this.brand = brand; return this;
  }

  /**
   * Get the OverTheCounter.
   * @returns {OverTheCounter} The shr.core.OverTheCounter
   */
  get overTheCounter() {
    return this._overTheCounter;
  }

  /**
   * Set the OverTheCounter.
   * @param {OverTheCounter} overTheCounter - The shr.core.OverTheCounter
   */
  set overTheCounter(overTheCounter) {
    this._overTheCounter = overTheCounter;
  }

  /**
   * Set the OverTheCounter and return 'this' for chaining.
   * @param {OverTheCounter} overTheCounter - The shr.core.OverTheCounter
   * @returns {Medication} this.
   */
  withOverTheCounter(overTheCounter) {
    this.overTheCounter = overTheCounter; return this;
  }

  /**
   * Get the Ingredient array.
   * @returns {Array<Ingredient>} The shr.core.Ingredient array
   */
  get ingredient() {
    return this._ingredient;
  }

  /**
   * Set the Ingredient array.
   * @param {Array<Ingredient>} ingredient - The shr.core.Ingredient array
   */
  set ingredient(ingredient) {
    this._ingredient = ingredient;
  }

  /**
   * Set the Ingredient array and return 'this' for chaining.
   * @param {Array<Ingredient>} ingredient - The shr.core.Ingredient array
   * @returns {Medication} this.
   */
  withIngredient(ingredient) {
    this.ingredient = ingredient; return this;
  }

  /**
   * Get the Manufacturer.
   * @returns {Manufacturer} The shr.core.Manufacturer
   */
  get manufacturer() {
    return this._manufacturer;
  }

  /**
   * Set the Manufacturer.
   * @param {Manufacturer} manufacturer - The shr.core.Manufacturer
   */
  set manufacturer(manufacturer) {
    this._manufacturer = manufacturer;
  }

  /**
   * Set the Manufacturer and return 'this' for chaining.
   * @param {Manufacturer} manufacturer - The shr.core.Manufacturer
   * @returns {Medication} this.
   */
  withManufacturer(manufacturer) {
    this.manufacturer = manufacturer; return this;
  }

  /**
   * Get the LotNumber.
   * @returns {LotNumber} The shr.core.LotNumber
   */
  get lotNumber() {
    return this._lotNumber;
  }

  /**
   * Set the LotNumber.
   * @param {LotNumber} lotNumber - The shr.core.LotNumber
   */
  set lotNumber(lotNumber) {
    this._lotNumber = lotNumber;
  }

  /**
   * Set the LotNumber and return 'this' for chaining.
   * @param {LotNumber} lotNumber - The shr.core.LotNumber
   * @returns {Medication} this.
   */
  withLotNumber(lotNumber) {
    this.lotNumber = lotNumber; return this;
  }

  /**
   * Get the ExpirationDate.
   * @returns {ExpirationDate} The shr.core.ExpirationDate
   */
  get expirationDate() {
    return this._expirationDate;
  }

  /**
   * Set the ExpirationDate.
   * @param {ExpirationDate} expirationDate - The shr.core.ExpirationDate
   */
  set expirationDate(expirationDate) {
    this._expirationDate = expirationDate;
  }

  /**
   * Set the ExpirationDate and return 'this' for chaining.
   * @param {ExpirationDate} expirationDate - The shr.core.ExpirationDate
   * @returns {Medication} this.
   */
  withExpirationDate(expirationDate) {
    this.expirationDate = expirationDate; return this;
  }

  /**
   * Get the Package.
   * @returns {Package} The shr.core.Package
   */
  get package() {
    return this._package;
  }

  /**
   * Set the Package.
   * @param {Package} packageVar - The shr.core.Package
   */
  set package(packageVar) {
    this._package = packageVar;
  }

  /**
   * Set the Package and return 'this' for chaining.
   * @param {Package} packageVar - The shr.core.Package
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
    const klass = ClassRegistry.get('shr.core', 'Medication');
    const inst = new klass();
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
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Medication' };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
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
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Medication} An instance of Medication populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Medication');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Medication', 'uri');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = inst.identifier || [];
        const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.identifier.push(inst_identifier);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.status.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-OverTheCounter-extension') {
        inst.overTheCounter = FHIRHelper.createInstanceFromFHIR('shr.core.OverTheCounter', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['code'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['isBrand'] != null) {
      inst.brand = inst.brand || FHIRHelper.createInstanceFromFHIR('shr.core.Brand', {}, null, shrId);
      inst.brand.isBrand = FHIRHelper.createInstanceFromFHIR('shr.core.IsBrand', fhir['isBrand'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['manufacturer'] != null) {
      const entryId = fhir['manufacturer']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Organization', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.manufacturer = mappedResources[entryId];
    }
    if (fhir['product'] != null) {
      if (fhir['product']['form'] != null) {
        inst.doseForm = FHIRHelper.createInstanceFromFHIR('shr.core.DoseForm', fhir['product']['form'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['product']['ingredient'] != null && fhir['product']['ingredient'][0] != null) {
        if (fhir['product']['ingredient'][0]['item'] != null) {
          inst.ingredient = inst.ingredient || [];
          const inst_ingredient = FHIRHelper.createInstanceFromFHIR('shr.core.Ingredient', {}, null, shrId);
          inst.ingredient.push(inst_ingredient);
          const entryId = fhir['product']['ingredient'][0]['item']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Substance', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          inst_ingredient.substanceOrCode = mappedResources[entryId];
        }
        if (fhir['product']['ingredient'][0]['amount'] != null) {
          inst.ingredient = inst.ingredient || [];
          const inst_ingredient = FHIRHelper.createInstanceFromFHIR('shr.core.Ingredient', {}, null, shrId);
          inst.ingredient.push(inst_ingredient);
          inst_ingredient.ingredientAmount = FHIRHelper.createInstanceFromFHIR('shr.core.IngredientAmount', fhir['product']['ingredient'][0]['amount'], 'Ratio', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir['product']['batch'] != null && fhir['product']['batch'][0] != null) {
        if (fhir['product']['batch'][0]['lotNumber'] != null) {
          inst.lotNumber = FHIRHelper.createInstanceFromFHIR('shr.core.LotNumber', fhir['product']['batch'][0]['lotNumber'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
        }
        if (fhir['product']['batch'][0]['expirationDate'] != null) {
          inst.expirationDate = FHIRHelper.createInstanceFromFHIR('shr.core.ExpirationDate', fhir['product']['batch'][0]['expirationDate'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    if (fhir['package'] != null) {
      if (fhir['package']['container'] != null) {
        inst.package = FHIRHelper.createInstanceFromFHIR('shr.core.Package', fhir['package']['container'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Medication;
