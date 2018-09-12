import { setPropertiesFromJSON } from '../../json-helper';

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
   * This field/value is required.
   * @param {DoseAmount} doseAmount - The shr.medication.DoseAmount
   */
  set doseAmount(doseAmount) {
    this._doseAmount = doseAmount;
  }

  /**
   * Set the DoseAmount and return 'this' for chaining.
   * This field/value is required.
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
   * This field/value is required.
   * @param {TimingOfDoses} timingOfDoses - The shr.medication.TimingOfDoses
   */
  set timingOfDoses(timingOfDoses) {
    this._timingOfDoses = timingOfDoses;
  }

  /**
   * Set the TimingOfDoses and return 'this' for chaining.
   * This field/value is required.
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
   * This field/value is required.
   * @param {AsNeededIndicator} asNeededIndicator - The shr.medication.AsNeededIndicator
   */
  set asNeededIndicator(asNeededIndicator) {
    this._asNeededIndicator = asNeededIndicator;
  }

  /**
   * Set the AsNeededIndicator and return 'this' for chaining.
   * This field/value is required.
   * @param {AsNeededIndicator} asNeededIndicator - The shr.medication.AsNeededIndicator
   * @returns {Dosage} this.
   */
  withAsNeededIndicator(asNeededIndicator) {
    this.asNeededIndicator = asNeededIndicator; return this;
  }

  /**
   * Get the DoseInstructionsText.
   * @returns {DoseInstructionsText} The shr.medication.DoseInstructionsText
   */
  get doseInstructionsText() {
    return this._doseInstructionsText;
  }

  /**
   * Set the DoseInstructionsText.
   * @param {DoseInstructionsText} doseInstructionsText - The shr.medication.DoseInstructionsText
   */
  set doseInstructionsText(doseInstructionsText) {
    this._doseInstructionsText = doseInstructionsText;
  }

  /**
   * Set the DoseInstructionsText and return 'this' for chaining.
   * @param {DoseInstructionsText} doseInstructionsText - The shr.medication.DoseInstructionsText
   * @returns {Dosage} this.
   */
  withDoseInstructionsText(doseInstructionsText) {
    this.doseInstructionsText = doseInstructionsText; return this;
  }

  /**
   * Get the AdditionalDoseInstruction array.
   * @returns {Array<AdditionalDoseInstruction>} The shr.medication.AdditionalDoseInstruction array
   */
  get additionalDoseInstruction() {
    return this._additionalDoseInstruction;
  }

  /**
   * Set the AdditionalDoseInstruction array.
   * @param {Array<AdditionalDoseInstruction>} additionalDoseInstruction - The shr.medication.AdditionalDoseInstruction array
   */
  set additionalDoseInstruction(additionalDoseInstruction) {
    this._additionalDoseInstruction = additionalDoseInstruction;
  }

  /**
   * Set the AdditionalDoseInstruction array and return 'this' for chaining.
   * @param {Array<AdditionalDoseInstruction>} additionalDoseInstruction - The shr.medication.AdditionalDoseInstruction array
   * @returns {Dosage} this.
   */
  withAdditionalDoseInstruction(additionalDoseInstruction) {
    this.additionalDoseInstruction = additionalDoseInstruction; return this;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The shr.medication.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Set the RouteIntoBody and return 'this' for chaining.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   * @returns {Dosage} this.
   */
  withRouteIntoBody(routeIntoBody) {
    this.routeIntoBody = routeIntoBody; return this;
  }

  /**
   * Get the AdministrationMethod.
   * @returns {AdministrationMethod} The shr.medication.AdministrationMethod
   */
  get administrationMethod() {
    return this._administrationMethod;
  }

  /**
   * Set the AdministrationMethod.
   * @param {AdministrationMethod} administrationMethod - The shr.medication.AdministrationMethod
   */
  set administrationMethod(administrationMethod) {
    this._administrationMethod = administrationMethod;
  }

  /**
   * Set the AdministrationMethod and return 'this' for chaining.
   * @param {AdministrationMethod} administrationMethod - The shr.medication.AdministrationMethod
   * @returns {Dosage} this.
   */
  withAdministrationMethod(administrationMethod) {
    this.administrationMethod = administrationMethod; return this;
  }

  /**
   * Get the AdministrationBodySite.
   * @returns {AdministrationBodySite} The shr.medication.AdministrationBodySite
   */
  get administrationBodySite() {
    return this._administrationBodySite;
  }

  /**
   * Set the AdministrationBodySite.
   * @param {AdministrationBodySite} administrationBodySite - The shr.medication.AdministrationBodySite
   */
  set administrationBodySite(administrationBodySite) {
    this._administrationBodySite = administrationBodySite;
  }

  /**
   * Set the AdministrationBodySite and return 'this' for chaining.
   * @param {AdministrationBodySite} administrationBodySite - The shr.medication.AdministrationBodySite
   * @returns {Dosage} this.
   */
  withAdministrationBodySite(administrationBodySite) {
    this.administrationBodySite = administrationBodySite; return this;
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
  static fromJSON(json = {}) {
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
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/medication/Dosage' } };
    if (this.doseAmount != null) {
      inst['DoseAmount'] = typeof this.doseAmount.toJSON === 'function' ? this.doseAmount.toJSON() : this.doseAmount;
    }
    if (this.timingOfDoses != null) {
      inst['TimingOfDoses'] = typeof this.timingOfDoses.toJSON === 'function' ? this.timingOfDoses.toJSON() : this.timingOfDoses;
    }
    if (this.asNeededIndicator != null) {
      inst['AsNeededIndicator'] = typeof this.asNeededIndicator.toJSON === 'function' ? this.asNeededIndicator.toJSON() : this.asNeededIndicator;
    }
    if (this.doseInstructionsText != null) {
      inst['DoseInstructionsText'] = typeof this.doseInstructionsText.toJSON === 'function' ? this.doseInstructionsText.toJSON() : this.doseInstructionsText;
    }
    if (this.additionalDoseInstruction != null) {
      inst['AdditionalDoseInstruction'] = this.additionalDoseInstruction.map(f => f.toJSON());
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    if (this.administrationMethod != null) {
      inst['AdministrationMethod'] = typeof this.administrationMethod.toJSON === 'function' ? this.administrationMethod.toJSON() : this.administrationMethod;
    }
    if (this.administrationBodySite != null) {
      inst['AdministrationBodySite'] = typeof this.administrationBodySite.toJSON === 'function' ? this.administrationBodySite.toJSON() : this.administrationBodySite;
    }
    if (this.maximumDosePerTimePeriod != null) {
      inst['MaximumDosePerTimePeriod'] = typeof this.maximumDosePerTimePeriod.toJSON === 'function' ? this.maximumDosePerTimePeriod.toJSON() : this.maximumDosePerTimePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Dosage class to a FHIR object.
   * The FHIR is expected to be valid against the Dosage FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.doseInstructionsText != null) {
      inst['text'] = typeof this.doseInstructionsText.toFHIR === 'function' ? this.doseInstructionsText.toFHIR() : this.doseInstructionsText;
    }
    if (this.additionalDoseInstruction != null) {
      inst['additionalInstruction'] = inst['additionalInstruction'] || [];
      inst['additionalInstruction'].concat(this.additionalDoseInstruction.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.timingOfDoses != null) {
      inst['timing'] = typeof this.timingOfDoses.toFHIR === 'function' ? this.timingOfDoses.toFHIR() : this.timingOfDoses;
    }
    if (this.asNeededIndicator != null) {
      inst['asNeeded[x]'] = typeof this.asNeededIndicator.toFHIR === 'function' ? this.asNeededIndicator.toFHIR() : this.asNeededIndicator;
    }
    if (this.administrationBodySite != null) {
      inst['site'] = typeof this.administrationBodySite.toFHIR === 'function' ? this.administrationBodySite.toFHIR() : this.administrationBodySite;
    }
    if (this.routeIntoBody != null) {
      inst['route'] = typeof this.routeIntoBody.toFHIR === 'function' ? this.routeIntoBody.toFHIR() : this.routeIntoBody;
    }
    if (this.administrationMethod != null) {
      inst['method'] = typeof this.administrationMethod.toFHIR === 'function' ? this.administrationMethod.toFHIR() : this.administrationMethod;
    }
    if (this.doseAmount != null) {
      inst['dose[x]'] = typeof this.doseAmount.toFHIR === 'function' ? this.doseAmount.toFHIR() : this.doseAmount;
    }
    if (this.maximumDosePerTimePeriod != null) {
      inst['maxDosePerPeriod'] = typeof this.maximumDosePerTimePeriod.toFHIR === 'function' ? this.maximumDosePerTimePeriod.toFHIR() : this.maximumDosePerTimePeriod;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-medication-Dosage-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default Dosage;
