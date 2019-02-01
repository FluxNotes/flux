import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.medication.Dosage.
 */
class Dosage {

  /**
   * Get the DoseAmount.
   * @returns {DoseAmount} The shr.medication.DoseAmount
   */
  get doseAmount() {
    return this._doseAmount;
  }

  /**
   * Set the DoseAmount.
   * @param {DoseAmount} doseAmount - The shr.medication.DoseAmount
   */
  set doseAmount(doseAmount) {
    this._doseAmount = doseAmount;
  }

  /**
   * Set the DoseAmount and return 'this' for chaining.
   * @param {DoseAmount} doseAmount - The shr.medication.DoseAmount
   * @returns {Dosage} this.
   */
  withDoseAmount(doseAmount) {
    this.doseAmount = doseAmount; return this;
  }

  /**
   * Get the TimingOfDoses.
   * @returns {TimingOfDoses} The shr.medication.TimingOfDoses
   */
  get timingOfDoses() {
    return this._timingOfDoses;
  }

  /**
   * Set the TimingOfDoses.
   * @param {TimingOfDoses} timingOfDoses - The shr.medication.TimingOfDoses
   */
  set timingOfDoses(timingOfDoses) {
    this._timingOfDoses = timingOfDoses;
  }

  /**
   * Set the TimingOfDoses and return 'this' for chaining.
   * @param {TimingOfDoses} timingOfDoses - The shr.medication.TimingOfDoses
   * @returns {Dosage} this.
   */
  withTimingOfDoses(timingOfDoses) {
    this.timingOfDoses = timingOfDoses; return this;
  }

  /**
   * Get the AsNeededIndicator.
   * @returns {AsNeededIndicator} The shr.medication.AsNeededIndicator
   */
  get asNeededIndicator() {
    return this._asNeededIndicator;
  }

  /**
   * Set the AsNeededIndicator.
   * @param {AsNeededIndicator} asNeededIndicator - The shr.medication.AsNeededIndicator
   */
  set asNeededIndicator(asNeededIndicator) {
    this._asNeededIndicator = asNeededIndicator;
  }

  /**
   * Set the AsNeededIndicator and return 'this' for chaining.
   * @param {AsNeededIndicator} asNeededIndicator - The shr.medication.AsNeededIndicator
   * @returns {Dosage} this.
   */
  withAsNeededIndicator(asNeededIndicator) {
    this.asNeededIndicator = asNeededIndicator; return this;
  }

  /**
   * Get the DosageInstructionsText.
   * @returns {DosageInstructionsText} The shr.medication.DosageInstructionsText
   */
  get dosageInstructionsText() {
    return this._dosageInstructionsText;
  }

  /**
   * Set the DosageInstructionsText.
   * @param {DosageInstructionsText} dosageInstructionsText - The shr.medication.DosageInstructionsText
   */
  set dosageInstructionsText(dosageInstructionsText) {
    this._dosageInstructionsText = dosageInstructionsText;
  }

  /**
   * Set the DosageInstructionsText and return 'this' for chaining.
   * @param {DosageInstructionsText} dosageInstructionsText - The shr.medication.DosageInstructionsText
   * @returns {Dosage} this.
   */
  withDosageInstructionsText(dosageInstructionsText) {
    this.dosageInstructionsText = dosageInstructionsText; return this;
  }

  /**
   * Get the AdditionalDosageInstruction array.
   * @returns {Array<AdditionalDosageInstruction>} The shr.medication.AdditionalDosageInstruction array
   */
  get additionalDosageInstruction() {
    return this._additionalDosageInstruction;
  }

  /**
   * Set the AdditionalDosageInstruction array.
   * @param {Array<AdditionalDosageInstruction>} additionalDosageInstruction - The shr.medication.AdditionalDosageInstruction array
   */
  set additionalDosageInstruction(additionalDosageInstruction) {
    this._additionalDosageInstruction = additionalDosageInstruction;
  }

  /**
   * Set the AdditionalDosageInstruction array and return 'this' for chaining.
   * @param {Array<AdditionalDosageInstruction>} additionalDosageInstruction - The shr.medication.AdditionalDosageInstruction array
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
   * @returns {DosageMethod} The shr.medication.DosageMethod
   */
  get dosageMethod() {
    return this._dosageMethod;
  }

  /**
   * Set the DosageMethod.
   * @param {DosageMethod} dosageMethod - The shr.medication.DosageMethod
   */
  set dosageMethod(dosageMethod) {
    this._dosageMethod = dosageMethod;
  }

  /**
   * Set the DosageMethod and return 'this' for chaining.
   * @param {DosageMethod} dosageMethod - The shr.medication.DosageMethod
   * @returns {Dosage} this.
   */
  withDosageMethod(dosageMethod) {
    this.dosageMethod = dosageMethod; return this;
  }

  /**
   * Get the DosageBodySite.
   * @returns {DosageBodySite} The shr.medication.DosageBodySite
   */
  get dosageBodySite() {
    return this._dosageBodySite;
  }

  /**
   * Set the DosageBodySite.
   * @param {DosageBodySite} dosageBodySite - The shr.medication.DosageBodySite
   */
  set dosageBodySite(dosageBodySite) {
    this._dosageBodySite = dosageBodySite;
  }

  /**
   * Set the DosageBodySite and return 'this' for chaining.
   * @param {DosageBodySite} dosageBodySite - The shr.medication.DosageBodySite
   * @returns {Dosage} this.
   */
  withDosageBodySite(dosageBodySite) {
    this.dosageBodySite = dosageBodySite; return this;
  }

  /**
   * Get the MaximumDosePerTimePeriod.
   * @returns {MaximumDosePerTimePeriod} The shr.medication.MaximumDosePerTimePeriod
   */
  get maximumDosePerTimePeriod() {
    return this._maximumDosePerTimePeriod;
  }

  /**
   * Set the MaximumDosePerTimePeriod.
   * @param {MaximumDosePerTimePeriod} maximumDosePerTimePeriod - The shr.medication.MaximumDosePerTimePeriod
   */
  set maximumDosePerTimePeriod(maximumDosePerTimePeriod) {
    this._maximumDosePerTimePeriod = maximumDosePerTimePeriod;
  }

  /**
   * Set the MaximumDosePerTimePeriod and return 'this' for chaining.
   * @param {MaximumDosePerTimePeriod} maximumDosePerTimePeriod - The shr.medication.MaximumDosePerTimePeriod
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
    const inst = new Dosage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Dosage class to a JSON object.
   * The JSON is expected to be valid against the Dosage JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/Dosage' } };
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
    if (this.dosageBodySite != null) {
      inst['DosageBodySite'] = typeof this.dosageBodySite.toJSON === 'function' ? this.dosageBodySite.toJSON() : this.dosageBodySite;
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
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Dosage} An instance of Dosage populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Dosage();
    if (fhir['text'] != null) {
      inst.dosageInstructionsText = FHIRHelper.createInstanceFromFHIR('shr.medication.DosageInstructionsText', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_additionalInstruction of fhir['additionalInstruction'] || []) {
      inst.additionalDosageInstruction = inst.additionalDosageInstruction || [];
      const inst_additionalDosageInstruction = FHIRHelper.createInstanceFromFHIR('shr.medication.AdditionalDosageInstruction', fhir_additionalInstruction, shrId, allEntries, mappedResources, referencesOut, false);
      inst.additionalDosageInstruction.push(inst_additionalDosageInstruction);
    }
    if (fhir['timing'] != null) {
      inst.timingOfDoses = FHIRHelper.createInstanceFromFHIR('shr.medication.TimingOfDoses', fhir['timing'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['asNeededBoolean'] != null) {
      inst.asNeededIndicator = FHIRHelper.createInstanceFromFHIR('shr.medication.AsNeededIndicator', fhir['asNeededBoolean'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['asNeededCodeableConcept'] != null) {
      inst.asNeededIndicator = FHIRHelper.createInstanceFromFHIR('shr.medication.AsNeededIndicator', fhir['asNeededCodeableConcept'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['site'] != null) {
      inst.dosageBodySite = inst.dosageBodySite || FHIRHelper.createInstanceFromFHIR('shr.medication.DosageBodySite', {}, shrId);
      inst.dosageBodySite.value = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationPrecoordinated', fhir['site'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['route'] != null) {
      inst.routeIntoBody = FHIRHelper.createInstanceFromFHIR('shr.core.RouteIntoBody', fhir['route'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['method'] != null) {
      inst.dosageMethod = FHIRHelper.createInstanceFromFHIR('shr.medication.DosageMethod', fhir['method'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['doseQuantity'] != null) {
      inst.doseAmount = FHIRHelper.createInstanceFromFHIR('shr.medication.DoseAmount', fhir['doseQuantity'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['doseRange'] != null) {
      inst.doseAmount = FHIRHelper.createInstanceFromFHIR('shr.medication.DoseAmount', fhir['doseRange'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['maxDosePerPeriod'] != null) {
      inst.maximumDosePerTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.medication.MaximumDosePerTimePeriod', fhir['maxDosePerPeriod'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default Dosage;
