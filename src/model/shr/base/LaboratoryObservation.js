import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for shr.base.LaboratoryObservation.
 * @extends Observation
 */
class LaboratoryObservation extends Observation {

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
   * @returns {LaboratoryObservation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Patient.
   * @returns {Patient} The shr.entity.Patient
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the Patient.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the Patient and return 'this' for chaining.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   * @returns {LaboratoryObservation} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {LaboratoryObservation} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The shr.core.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   * @returns {LaboratoryObservation} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the Specimen.
   * @returns {Specimen} The shr.entity.Specimen
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the Specimen.
   * This field/value is required.
   * @param {Specimen} specimen - The shr.entity.Specimen
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the Specimen and return 'this' for chaining.
   * This field/value is required.
   * @param {Specimen} specimen - The shr.entity.Specimen
   * @returns {LaboratoryObservation} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Get the DiagnosticService array.
   * @returns {Array<DiagnosticService>} The shr.base.DiagnosticService array
   */
  get diagnosticService() {
    return this._diagnosticService;
  }

  /**
   * Set the DiagnosticService array.
   * @param {Array<DiagnosticService>} diagnosticService - The shr.base.DiagnosticService array
   */
  set diagnosticService(diagnosticService) {
    this._diagnosticService = diagnosticService;
  }

  /**
   * Set the DiagnosticService array and return 'this' for chaining.
   * @param {Array<DiagnosticService>} diagnosticService - The shr.base.DiagnosticService array
   * @returns {LaboratoryObservation} this.
   */
  withDiagnosticService(diagnosticService) {
    this.diagnosticService = diagnosticService; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LaboratoryObservation class.
   * The JSON must be valid against the LaboratoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryObservation} An instance of LaboratoryObservation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new LaboratoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the LaboratoryObservation class to a JSON object.
   * The JSON is expected to be valid against the LaboratoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/base/LaboratoryObservation' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.findingTopicCode != null) {
      inst['FindingTopicCode'] = typeof this.findingTopicCode.toJSON === 'function' ? this.findingTopicCode.toJSON() : this.findingTopicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.nonIndependentFinding != null) {
      inst['NonIndependentFinding'] = this.nonIndependentFinding.map(f => f.toJSON());
    }
    if (this.deltaFlag != null) {
      inst['DeltaFlag'] = typeof this.deltaFlag.toJSON === 'function' ? this.deltaFlag.toJSON() : this.deltaFlag;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    if (this.diagnosticService != null) {
      inst['DiagnosticService'] = this.diagnosticService.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the LaboratoryObservation class to a FHIR object.
   * The FHIR is expected to be valid against the LaboratoryObservation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.deltaFlag != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.deltaFlag.toFHIR === 'function' ? this.deltaFlag.toFHIR(true) : this.deltaFlag);
    }
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.media != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.media.toFHIR === 'function' ? this.media.toFHIR(true) : this.media);
    }
    if (this.diagnosticService != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.diagnosticService.toFHIR === 'function' ? this.diagnosticService.toFHIR(true) : this.diagnosticService);
    }
    if (this.findingStatus != null) {
      inst['status'] = typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR() : this.findingStatus;
    }
    if (this.category != null) {
      inst['category'] = inst['category'] || [];
      inst['category'] = inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.findingTopicCode != null) {
      inst['code'] = typeof this.findingTopicCode.toFHIR === 'function' ? this.findingTopicCode.toFHIR() : this.findingTopicCode;
    }
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.encounter != null) {
      inst['context'] = typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR() : this.encounter;
    }
    if (this.relevantTime != null) {
      inst['effective[x]'] = typeof this.relevantTime.toFHIR === 'function' ? this.relevantTime.toFHIR() : this.relevantTime;
    }
    if (this.exceptionValue != null) {
      inst['dataAbsentReason'] = typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR() : this.exceptionValue;
    }
    if (this.interpretation != null) {
      inst['interpretation'] = typeof this.interpretation.toFHIR === 'function' ? this.interpretation.toFHIR() : this.interpretation;
    }
    if (this.commentOrDescription != null) {
      inst['comment'] = typeof this.commentOrDescription.toFHIR === 'function' ? this.commentOrDescription.toFHIR() : this.commentOrDescription;
    }
    if (this.anatomicalLocation != null && this.anatomicalLocation.anatomicalLocationOrLandmarkCode != null) {
      inst['bodySite'] = typeof this.anatomicalLocation.anatomicalLocationOrLandmarkCode.toFHIR === 'function' ? this.anatomicalLocation.anatomicalLocationOrLandmarkCode.toFHIR() : this.anatomicalLocation.anatomicalLocationOrLandmarkCode;
    }
    if (this.findingMethod != null) {
      inst['method'] = typeof this.findingMethod.toFHIR === 'function' ? this.findingMethod.toFHIR() : this.findingMethod;
    }
    if (this.specimen != null) {
      inst['specimen'] = typeof this.specimen.toFHIR === 'function' ? this.specimen.toFHIR() : this.specimen;
    }
    if (this.device != null) {
      inst['device'] = typeof this.device.toFHIR === 'function' ? this.device.toFHIR() : this.device;
    }
    if (this.referenceRange != null) {
      inst['referenceRange'] = inst['referenceRange'] || [];
      inst['referenceRange'].push(typeof this.referenceRange.toFHIR === 'function' ? this.referenceRange.toFHIR() : this.referenceRange);
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.lowerBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['low'] = typeof this.referenceRange.range.lowerBound.toFHIR === 'function' ? this.referenceRange.range.lowerBound.toFHIR() : this.referenceRange.range.lowerBound;
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.upperBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['high'] = typeof this.referenceRange.range.upperBound.toFHIR === 'function' ? this.referenceRange.range.upperBound.toFHIR() : this.referenceRange.range.upperBound;
    }
    if (this.referenceRange != null && this.referenceRange.type != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['type'] = typeof this.referenceRange.type.toFHIR === 'function' ? this.referenceRange.type.toFHIR() : this.referenceRange.type;
    }
    if (this.referenceRange != null && this.referenceRange.applicableSubpopulation != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['appliesTo'] = inst['referenceRange']['appliesTo'] || [];
      inst['referenceRange']['appliesTo'].push(typeof this.referenceRange.applicableSubpopulation.toFHIR === 'function' ? this.referenceRange.applicableSubpopulation.toFHIR() : this.referenceRange.applicableSubpopulation);
    }
    if (this.referenceRange != null && this.referenceRange.applicableAgeRange != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['age'] = typeof this.referenceRange.applicableAgeRange.toFHIR === 'function' ? this.referenceRange.applicableAgeRange.toFHIR() : this.referenceRange.applicableAgeRange;
    }
    if (this.panelMembers != null) {
      inst['related'] = inst['related'] || [];
      inst['related'].push(typeof this.panelMembers.toFHIR === 'function' ? this.panelMembers.toFHIR() : this.panelMembers);
    }
    if (this.panelMembers != null && this.panelMembers.observation != null) {
      if (inst['related'] === undefined) {
        inst['related'] = {};
      }
      inst['related']['target'] = typeof this.panelMembers.observation.toFHIR === 'function' ? this.panelMembers.observation.toFHIR() : this.panelMembers.observation;
    }
    if (this.nonIndependentFinding != null) {
      inst['component'] = inst['component'] || [];
      inst['component'] = inst['component'].concat(this.nonIndependentFinding.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.findingTopicCode != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['code'] = inst['component']['code'] || [];
      inst['component']['code'] = inst['component']['code'].concat(this.nonIndependentFinding.findingTopicCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.quantity != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['value[x]'] = inst['component']['value[x]'] || [];
      inst['component']['value[x]'] = inst['component']['value[x]'].concat(this.nonIndependentFinding.quantity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.exceptionValue != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['dataAbsentReason'] = inst['component']['dataAbsentReason'] || [];
      inst['component']['dataAbsentReason'] = inst['component']['dataAbsentReason'].concat(this.nonIndependentFinding.exceptionValue.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.referenceRange != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['referenceRange'] = inst['component']['referenceRange'] || [];
      inst['component']['referenceRange'] = inst['component']['referenceRange'].concat(this.nonIndependentFinding.referenceRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the LaboratoryObservation class.
   * The FHIR must be valid against the LaboratoryObservation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {LaboratoryObservation} An instance of LaboratoryObservation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new LaboratoryObservation();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://hl7.org/fhir/StructureDefinition/observation-delta');
      if (match != null) {
        inst.deltaFlag = createInstanceFromFHIR('shr.base.DeltaFlag', match, true);
      }
    }
    if (fhir['status'] != null) {
      inst.findingStatus = createInstanceFromFHIR('shr.base.FindingStatus', fhir['status']);
    }
    if (fhir['category'] != null) {
      inst.category = inst.category || [];
      inst.category = inst.category.concat(fhir['category'].map(f => createInstanceFromFHIR('shr.core.Category', f)));
    }
    if (fhir['code'] != null) {
      inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['code']);
    }
    if (fhir['subject'] != null) {
      inst.patient = createInstanceFromFHIR('shr.entity.Patient', fhir['subject']);
    }
    if (fhir['context'] != null) {
      inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', fhir['context']);
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.relevantTime = createInstanceFromFHIR('shr.base.RelevantTime', fhir['effectiveDateTime']);
    }
    if (fhir['effectivePeriod'] != null) {
      inst.relevantTime = createInstanceFromFHIR('shr.base.RelevantTime', fhir['effectivePeriod']);
    }
    if (fhir['valueQuantity'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.Quantity', fhir['valueQuantity']);
    }
    if (fhir['valueCodeableConcept'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir['valueCodeableConcept']);
    }
    if (fhir['valueRange'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.Range', fhir['valueRange']);
    }
    if (fhir['valueRatio'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.Ratio', fhir['valueRatio']);
    }
    if (fhir['valuePeriod'] != null) {
      inst.value = createInstanceFromFHIR('shr.core.TimePeriod', fhir['valuePeriod']);
    }
    if (fhir['dataAbsentReason'] != null) {
      inst.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', fhir['dataAbsentReason']);
    }
    if (fhir['interpretation'] != null) {
      inst.interpretation = createInstanceFromFHIR('shr.base.Interpretation', fhir['interpretation']);
    }
    if (fhir['comment'] != null) {
      inst.commentOrDescription = createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['comment']);
    }
    if (fhir['method'] != null) {
      inst.findingMethod = createInstanceFromFHIR('shr.base.FindingMethod', fhir['method']);
    }
    if (fhir['specimen'] != null) {
      inst.specimen = createInstanceFromFHIR('shr.entity.Specimen', fhir['specimen']);
    }
    if (fhir['device'] != null) {
      inst.device = createInstanceFromFHIR('shr.entity.Device', fhir['device']);
    }
    if (fhir['referenceRange'] != null) {
      inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', fhir['referenceRange'][0]);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['low'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      if (inst.referenceRange.range === null) {
        inst.referenceRange.range = createInstanceFromFHIR('shr.core.Range', {});
      }
      inst.referenceRange.range.lowerBound = createInstanceFromFHIR('shr.core.LowerBound', fhir['referenceRange']['low']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['high'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      if (inst.referenceRange.range === null) {
        inst.referenceRange.range = createInstanceFromFHIR('shr.core.Range', {});
      }
      inst.referenceRange.range.upperBound = createInstanceFromFHIR('shr.core.UpperBound', fhir['referenceRange']['high']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['type'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      inst.referenceRange.type = createInstanceFromFHIR('shr.core.Type', fhir['referenceRange']['type']);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['appliesTo'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      inst.referenceRange.applicableSubpopulation = createInstanceFromFHIR('shr.base.ApplicableSubpopulation', fhir['referenceRange']['appliesTo'][0]);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange']['age'] != null) {
      if (inst.referenceRange === null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', {});
      }
      inst.referenceRange.applicableAgeRange = createInstanceFromFHIR('shr.base.ApplicableAgeRange', fhir['referenceRange']['age']);
    }
    if (fhir['related'] != null) {
      inst.panelMembers = createInstanceFromFHIR('shr.base.PanelMembers', fhir['related'][0]);
    }
    if (fhir['related'] != null && fhir['related']['target'] != null) {
      if (inst.panelMembers === null) {
        inst.panelMembers = createInstanceFromFHIR('shr.base.PanelMembers', {});
      }
      inst.panelMembers.observation = inst.panelMembers.observation || [];
      inst.panelMembers.observation = inst.panelMembers.observation.concat(fhir['related']['target'].map(f => createInstanceFromFHIR('shr.base.Observation', f)));
    }
    if (fhir['component'] != null) {
      inst.nonIndependentFinding = inst.nonIndependentFinding || [];
      inst.nonIndependentFinding = inst.nonIndependentFinding.concat(fhir['component'].map(f => createInstanceFromFHIR('shr.base.NonIndependentFinding', f)));
    }
    if (fhir['component'] != null && fhir['component']['code'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['component']['code']);
    }
    if (fhir['component'] != null && fhir['component']['valueQuantity'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.Quantity', fhir['component']['valueQuantity']);
    }
    if (fhir['component'] != null && fhir['component']['valueCodeableConcept'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir['component']['valueCodeableConcept']);
    }
    if (fhir['component'] != null && fhir['component']['valueRange'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.Range', fhir['component']['valueRange']);
    }
    if (fhir['component'] != null && fhir['component']['valueRatio'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.Ratio', fhir['component']['valueRatio']);
    }
    if (fhir['component'] != null && fhir['component']['valuePeriod'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.TimePeriod', fhir['component']['valuePeriod']);
    }
    if (fhir['component'] != null && fhir['component']['dataAbsentReason'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', fhir['component']['dataAbsentReason']);
    }
    if (fhir['component'] != null && fhir['component']['referenceRange'] != null) {
      if (inst.nonIndependentFinding === null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', fhir['component']['referenceRange'][0]);
    }
    return inst;
  }

}
export default LaboratoryObservation;
