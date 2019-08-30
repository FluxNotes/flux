// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Dosage.
 */
class Dosage {

  /**
   * Get the DoseAmount.
   * @returns {DoseAmount} The shr.core.DoseAmount
   */
  get doseAmount() {
    return this._doseAmount;
  }

  /**
   * Set the DoseAmount.
   * @param {DoseAmount} doseAmount - The shr.core.DoseAmount
   */
  set doseAmount(doseAmount) {
    this._doseAmount = doseAmount;
  }

  /**
   * Set the DoseAmount and return 'this' for chaining.
   * @param {DoseAmount} doseAmount - The shr.core.DoseAmount
   * @returns {Dosage} this.
   */
  withDoseAmount(doseAmount) {
    this.doseAmount = doseAmount; return this;
  }

  /**
   * Get the TimingOfDoses.
   * @returns {TimingOfDoses} The shr.core.TimingOfDoses
   */
  get timingOfDoses() {
    return this._timingOfDoses;
  }

  /**
   * Set the TimingOfDoses.
   * @param {TimingOfDoses} timingOfDoses - The shr.core.TimingOfDoses
   */
  set timingOfDoses(timingOfDoses) {
    this._timingOfDoses = timingOfDoses;
  }

  /**
   * Set the TimingOfDoses and return 'this' for chaining.
   * @param {TimingOfDoses} timingOfDoses - The shr.core.TimingOfDoses
   * @returns {Dosage} this.
   */
  withTimingOfDoses(timingOfDoses) {
    this.timingOfDoses = timingOfDoses; return this;
  }

  /**
   * Get the AsNeededIndicator.
   * @returns {AsNeededIndicator} The shr.core.AsNeededIndicator
   */
  get asNeededIndicator() {
    return this._asNeededIndicator;
  }

  /**
   * Set the AsNeededIndicator.
   * @param {AsNeededIndicator} asNeededIndicator - The shr.core.AsNeededIndicator
   */
  set asNeededIndicator(asNeededIndicator) {
    this._asNeededIndicator = asNeededIndicator;
  }

  /**
   * Set the AsNeededIndicator and return 'this' for chaining.
   * @param {AsNeededIndicator} asNeededIndicator - The shr.core.AsNeededIndicator
   * @returns {Dosage} this.
   */
  withAsNeededIndicator(asNeededIndicator) {
    this.asNeededIndicator = asNeededIndicator; return this;
  }

  /**
   * Get the DosageInstructionsText.
   * @returns {DosageInstructionsText} The shr.core.DosageInstructionsText
   */
  get dosageInstructionsText() {
    return this._dosageInstructionsText;
  }

  /**
   * Set the DosageInstructionsText.
   * @param {DosageInstructionsText} dosageInstructionsText - The shr.core.DosageInstructionsText
   */
  set dosageInstructionsText(dosageInstructionsText) {
    this._dosageInstructionsText = dosageInstructionsText;
  }

  /**
   * Set the DosageInstructionsText and return 'this' for chaining.
   * @param {DosageInstructionsText} dosageInstructionsText - The shr.core.DosageInstructionsText
   * @returns {Dosage} this.
   */
  withDosageInstructionsText(dosageInstructionsText) {
    this.dosageInstructionsText = dosageInstructionsText; return this;
  }

  /**
   * Get the AdditionalDosageInstruction array.
   * @returns {Array<AdditionalDosageInstruction>} The shr.core.AdditionalDosageInstruction array
   */
  get additionalDosageInstruction() {
    return this._additionalDosageInstruction;
  }

  /**
   * Set the AdditionalDosageInstruction array.
   * @param {Array<AdditionalDosageInstruction>} additionalDosageInstruction - The shr.core.AdditionalDosageInstruction array
   */
  set additionalDosageInstruction(additionalDosageInstruction) {
    this._additionalDosageInstruction = additionalDosageInstruction;
  }

  /**
   * Set the AdditionalDosageInstruction array and return 'this' for chaining.
   * @param {Array<AdditionalDosageInstruction>} additionalDosageInstruction - The shr.core.AdditionalDosageInstruction array
   * @returns {Dosage} this.
   */
  withAdditionalDosageInstruction(additionalDosageInstruction) {
    this.additionalDosageInstruction = additionalDosageInstruction; return this;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The shr.core.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The shr.core.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Set the RouteIntoBody and return 'this' for chaining.
   * @param {RouteIntoBody} routeIntoBody - The shr.core.RouteIntoBody
   * @returns {Dosage} this.
   */
  withRouteIntoBody(routeIntoBody) {
    this.routeIntoBody = routeIntoBody; return this;
  }

  /**
   * Get the DosageMethod.
   * @returns {DosageMethod} The shr.core.DosageMethod
   */
  get dosageMethod() {
    return this._dosageMethod;
  }

  /**
   * Set the DosageMethod.
   * @param {DosageMethod} dosageMethod - The shr.core.DosageMethod
   */
  set dosageMethod(dosageMethod) {
    this._dosageMethod = dosageMethod;
  }

  /**
   * Set the DosageMethod and return 'this' for chaining.
   * @param {DosageMethod} dosageMethod - The shr.core.DosageMethod
   * @returns {Dosage} this.
   */
  withDosageMethod(dosageMethod) {
    this.dosageMethod = dosageMethod; return this;
  }

  /**
   * Get the DosageBodyLocation.
   * @returns {DosageBodyLocation} The shr.core.DosageBodyLocation
   */
  get dosageBodyLocation() {
    return this._dosageBodyLocation;
  }

  /**
   * Set the DosageBodyLocation.
   * @param {DosageBodyLocation} dosageBodyLocation - The shr.core.DosageBodyLocation
   */
  set dosageBodyLocation(dosageBodyLocation) {
    this._dosageBodyLocation = dosageBodyLocation;
  }

  /**
   * Set the DosageBodyLocation and return 'this' for chaining.
   * @param {DosageBodyLocation} dosageBodyLocation - The shr.core.DosageBodyLocation
   * @returns {Dosage} this.
   */
  withDosageBodyLocation(dosageBodyLocation) {
    this.dosageBodyLocation = dosageBodyLocation; return this;
  }

  /**
   * Get the MaximumDosePerTimePeriod.
   * @returns {MaximumDosePerTimePeriod} The shr.core.MaximumDosePerTimePeriod
   */
  get maximumDosePerTimePeriod() {
    return this._maximumDosePerTimePeriod;
  }

  /**
   * Set the MaximumDosePerTimePeriod.
   * @param {MaximumDosePerTimePeriod} maximumDosePerTimePeriod - The shr.core.MaximumDosePerTimePeriod
   */
  set maximumDosePerTimePeriod(maximumDosePerTimePeriod) {
    this._maximumDosePerTimePeriod = maximumDosePerTimePeriod;
  }

  /**
   * Set the MaximumDosePerTimePeriod and return 'this' for chaining.
   * @param {MaximumDosePerTimePeriod} maximumDosePerTimePeriod - The shr.core.MaximumDosePerTimePeriod
   * @returns {Dosage} this.
   */
  withMaximumDosePerTimePeriod(maximumDosePerTimePeriod) {
    this.maximumDosePerTimePeriod = maximumDosePerTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Dosage class.
   * The JSON must be valid against the Dosage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Dosage} An instance of Dosage populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Dosage');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Dosage class to a JSON object.
   * The JSON is expected to be valid against the Dosage JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Dosage' } };
    if (this.doseAmount != null) {
      inst['DoseAmount'] = typeof this.doseAmount.toJSON === 'function' ? this.doseAmount.toJSON() : this.doseAmount;
    }
    if (this.timingOfDoses != null) {
      inst['TimingOfDoses'] = typeof this.timingOfDoses.toJSON === 'function' ? this.timingOfDoses.toJSON() : this.timingOfDoses;
    }
    if (this.asNeededIndicator != null) {
      inst['AsNeededIndicator'] = typeof this.asNeededIndicator.toJSON === 'function' ? this.asNeededIndicator.toJSON() : this.asNeededIndicator;
    }
    if (this.dosageInstructionsText != null) {
      inst['DosageInstructionsText'] = typeof this.dosageInstructionsText.toJSON === 'function' ? this.dosageInstructionsText.toJSON() : this.dosageInstructionsText;
    }
    if (this.additionalDosageInstruction != null) {
      inst['AdditionalDosageInstruction'] = this.additionalDosageInstruction.map(f => f.toJSON());
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    if (this.dosageMethod != null) {
      inst['DosageMethod'] = typeof this.dosageMethod.toJSON === 'function' ? this.dosageMethod.toJSON() : this.dosageMethod;
    }
    if (this.dosageBodyLocation != null) {
      inst['DosageBodyLocation'] = typeof this.dosageBodyLocation.toJSON === 'function' ? this.dosageBodyLocation.toJSON() : this.dosageBodyLocation;
    }
    if (this.maximumDosePerTimePeriod != null) {
      inst['MaximumDosePerTimePeriod'] = typeof this.maximumDosePerTimePeriod.toJSON === 'function' ? this.maximumDosePerTimePeriod.toJSON() : this.maximumDosePerTimePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Dosage class.
   * The FHIR must be valid against the Dosage FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Dosage} An instance of Dosage populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Dosage');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DoseAmount-extension');
      if (match_3 != null) {
        inst.doseAmount = FHIRHelper.createInstanceFromFHIR('shr.core.DoseAmount', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TimingOfDoses-extension');
      if (match_4 != null) {
        inst.timingOfDoses = FHIRHelper.createInstanceFromFHIR('shr.core.TimingOfDoses', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AsNeededIndicator-extension');
      if (match_5 != null) {
        inst.asNeededIndicator = FHIRHelper.createInstanceFromFHIR('shr.core.AsNeededIndicator', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DosageInstructionsText-extension');
      if (match_6 != null) {
        inst.dosageInstructionsText = FHIRHelper.createInstanceFromFHIR('shr.core.DosageInstructionsText', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_7 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AdditionalDosageInstruction-extension');
      if (match_7 != null) {
        inst.additionalDosageInstruction = FHIRHelper.createInstanceFromFHIR('shr.core.AdditionalDosageInstruction', match_7, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_12 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RouteIntoBody-extension');
      if (match_12 != null) {
        inst.routeIntoBody = FHIRHelper.createInstanceFromFHIR('shr.core.RouteIntoBody', match_12, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_13 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DosageMethod-extension');
      if (match_13 != null) {
        inst.dosageMethod = FHIRHelper.createInstanceFromFHIR('shr.core.DosageMethod', match_13, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_18 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DosageBodyLocation-extension');
      if (match_18 != null) {
        inst.dosageBodyLocation = FHIRHelper.createInstanceFromFHIR('shr.core.DosageBodyLocation', match_18, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_19 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MaximumDosePerTimePeriod-extension');
      if (match_19 != null) {
        inst.maximumDosePerTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.MaximumDosePerTimePeriod', match_19, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default Dosage;
