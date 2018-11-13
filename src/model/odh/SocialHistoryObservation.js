import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import Observation from '../shr/base/Observation';

/**
 * Generated class for odh.SocialHistoryObservation.
 * @extends Observation
 */
class SocialHistoryObservation extends Observation {

  /**
   * Get the ExceptionValue.
   * @returns {ExceptionValue} The shr.base.ExceptionValue
   */
  get exceptionValue() {
    return this._exceptionValue;
  }

  /**
   * Set the ExceptionValue.
   * @param {ExceptionValue} exceptionValue - The shr.base.ExceptionValue
   */
  set exceptionValue(exceptionValue) {
    this._exceptionValue = exceptionValue;
  }

  /**
   * Set the ExceptionValue and return 'this' for chaining.
   * @param {ExceptionValue} exceptionValue - The shr.base.ExceptionValue
   * @returns {SocialHistoryObservation} this.
   */
  withExceptionValue(exceptionValue) {
    this.exceptionValue = exceptionValue; return this;
  }

  /**
   * Get the ReferenceRange.
   * @returns {ReferenceRange} The shr.base.ReferenceRange
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange.
   * @param {ReferenceRange} referenceRange - The shr.base.ReferenceRange
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Set the ReferenceRange and return 'this' for chaining.
   * @param {ReferenceRange} referenceRange - The shr.base.ReferenceRange
   * @returns {SocialHistoryObservation} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Get the Encounter.
   * @returns {Encounter} The shr.encounter.Encounter
   */
  get encounter() {
    return this._encounter;
  }

  /**
   * Set the Encounter.
   * @param {Encounter} encounter - The shr.encounter.Encounter
   */
  set encounter(encounter) {
    this._encounter = encounter;
  }

  /**
   * Set the Encounter and return 'this' for chaining.
   * @param {Encounter} encounter - The shr.encounter.Encounter
   * @returns {SocialHistoryObservation} this.
   */
  withEncounter(encounter) {
    this.encounter = encounter; return this;
  }

  /**
   * Get the FindingMethod.
   * @returns {FindingMethod} The shr.base.FindingMethod
   */
  get findingMethod() {
    return this._findingMethod;
  }

  /**
   * Set the FindingMethod.
   * @param {FindingMethod} findingMethod - The shr.base.FindingMethod
   */
  set findingMethod(findingMethod) {
    this._findingMethod = findingMethod;
  }

  /**
   * Set the FindingMethod and return 'this' for chaining.
   * @param {FindingMethod} findingMethod - The shr.base.FindingMethod
   * @returns {SocialHistoryObservation} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
  }

  /**
   * Get the DeltaFlag.
   * @returns {DeltaFlag} The shr.base.DeltaFlag
   */
  get deltaFlag() {
    return this._deltaFlag;
  }

  /**
   * Set the DeltaFlag.
   * @param {DeltaFlag} deltaFlag - The shr.base.DeltaFlag
   */
  set deltaFlag(deltaFlag) {
    this._deltaFlag = deltaFlag;
  }

  /**
   * Set the DeltaFlag and return 'this' for chaining.
   * @param {DeltaFlag} deltaFlag - The shr.base.DeltaFlag
   * @returns {SocialHistoryObservation} this.
   */
  withDeltaFlag(deltaFlag) {
    this.deltaFlag = deltaFlag; return this;
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
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {SocialHistoryObservation} this.
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
   * @returns {SocialHistoryObservation} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {SocialHistoryObservation} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Get the Interpretation.
   * @returns {Interpretation} The shr.base.Interpretation
   */
  get interpretation() {
    return this._interpretation;
  }

  /**
   * Set the Interpretation.
   * @param {Interpretation} interpretation - The shr.base.Interpretation
   */
  set interpretation(interpretation) {
    this._interpretation = interpretation;
  }

  /**
   * Set the Interpretation and return 'this' for chaining.
   * @param {Interpretation} interpretation - The shr.base.Interpretation
   * @returns {SocialHistoryObservation} this.
   */
  withInterpretation(interpretation) {
    this.interpretation = interpretation; return this;
  }

  /**
   * Get the Device.
   * @returns {Device} The shr.entity.Device
   */
  get device() {
    return this._device;
  }

  /**
   * Set the Device.
   * @param {Device} device - The shr.entity.Device
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the Device and return 'this' for chaining.
   * @param {Device} device - The shr.entity.Device
   * @returns {SocialHistoryObservation} this.
   */
  withDevice(device) {
    this.device = device; return this;
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
   * @param {Specimen} specimen - The shr.entity.Specimen
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the Specimen and return 'this' for chaining.
   * @param {Specimen} specimen - The shr.entity.Specimen
   * @returns {SocialHistoryObservation} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Get the Media array.
   * @returns {Array<Media>} The shr.core.Media array
   */
  get media() {
    return this._media;
  }

  /**
   * Set the Media array.
   * @param {Array<Media>} media - The shr.core.Media array
   */
  set media(media) {
    this._media = media;
  }

  /**
   * Set the Media array and return 'this' for chaining.
   * @param {Array<Media>} media - The shr.core.Media array
   * @returns {SocialHistoryObservation} this.
   */
  withMedia(media) {
    this.media = media; return this;
  }

  /**
   * Get the PanelMembers.
   * @returns {PanelMembers} The shr.base.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Set the PanelMembers.
   * @param {PanelMembers} panelMembers - The shr.base.PanelMembers
   */
  set panelMembers(panelMembers) {
    this._panelMembers = panelMembers;
  }

  /**
   * Set the PanelMembers and return 'this' for chaining.
   * @param {PanelMembers} panelMembers - The shr.base.PanelMembers
   * @returns {SocialHistoryObservation} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Get the FocalSubjectModifier.
   * @returns {FocalSubjectModifier} The odh.FocalSubjectModifier
   */
  get focalSubjectModifier() {
    return this._focalSubjectModifier;
  }

  /**
   * Set the FocalSubjectModifier.
   * @param {FocalSubjectModifier} focalSubjectModifier - The odh.FocalSubjectModifier
   */
  set focalSubjectModifier(focalSubjectModifier) {
    this._focalSubjectModifier = focalSubjectModifier;
  }

  /**
   * Set the FocalSubjectModifier and return 'this' for chaining.
   * @param {FocalSubjectModifier} focalSubjectModifier - The odh.FocalSubjectModifier
   * @returns {SocialHistoryObservation} this.
   */
  withFocalSubjectModifier(focalSubjectModifier) {
    this.focalSubjectModifier = focalSubjectModifier; return this;
  }

  /**
   * Get the Precondition.
   * @returns {Precondition} The shr.base.Precondition
   */
  get precondition() {
    return this._precondition;
  }

  /**
   * Set the Precondition.
   * @param {Precondition} precondition - The shr.base.Precondition
   */
  set precondition(precondition) {
    this._precondition = precondition;
  }

  /**
   * Set the Precondition and return 'this' for chaining.
   * @param {Precondition} precondition - The shr.base.Precondition
   * @returns {SocialHistoryObservation} this.
   */
  withPrecondition(precondition) {
    this.precondition = precondition; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SocialHistoryObservation class.
   * The JSON must be valid against the SocialHistoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SocialHistoryObservation} An instance of SocialHistoryObservation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SocialHistoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SocialHistoryObservation class to a JSON object.
   * The JSON is expected to be valid against the SocialHistoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/odh/SocialHistoryObservation' } };
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
    if (this.focalSubjectModifier != null) {
      inst['FocalSubjectModifier'] = typeof this.focalSubjectModifier.toJSON === 'function' ? this.focalSubjectModifier.toJSON() : this.focalSubjectModifier;
    }
    if (this.precondition != null) {
      inst['Precondition'] = typeof this.precondition.toJSON === 'function' ? this.precondition.toJSON() : this.precondition;
    }
    return inst;
  }

  /**
   * Serializes an instance of the SocialHistoryObservation class to a FHIR object.
   * The FHIR is expected to be valid against the SocialHistoryObservation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.focalSubjectModifier != null) {
      inst['modifierExtension'] = typeof this.focalSubjectModifier.toFHIR === 'function' ? this.focalSubjectModifier.toFHIR() : this.focalSubjectModifier;
    }
    if (this.findingStatus != null) {
      inst['status'] = typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR() : this.findingStatus;
    }
    if (this.category != null) {
      inst['category'] = inst ['category'] || [];
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
      inst['referenceRange'] = typeof this.referenceRange.toFHIR === 'function' ? this.referenceRange.toFHIR() : this.referenceRange;
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.lowerBound != null) {
      if(inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['low'] = typeof this.referenceRange.range.lowerBound.toFHIR === 'function' ? this.referenceRange.range.lowerBound.toFHIR() : this.referenceRange.range.lowerBound;
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.upperBound != null) {
      if(inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['high'] = typeof this.referenceRange.range.upperBound.toFHIR === 'function' ? this.referenceRange.range.upperBound.toFHIR() : this.referenceRange.range.upperBound;
    }
    if (this.referenceRange != null && this.referenceRange.type != null) {
      if(inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['type'] = typeof this.referenceRange.type.toFHIR === 'function' ? this.referenceRange.type.toFHIR() : this.referenceRange.type;
    }
    if (this.referenceRange != null && this.referenceRange.applicableSubpopulation != null) {
      if(inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['appliesTo'] = typeof this.referenceRange.applicableSubpopulation.toFHIR === 'function' ? this.referenceRange.applicableSubpopulation.toFHIR() : this.referenceRange.applicableSubpopulation;
    }
    if (this.referenceRange != null && this.referenceRange.applicableAgeRange != null) {
      if(inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['age'] = typeof this.referenceRange.applicableAgeRange.toFHIR === 'function' ? this.referenceRange.applicableAgeRange.toFHIR() : this.referenceRange.applicableAgeRange;
    }
    if (this.panelMembers != null) {
      inst['related'] = typeof this.panelMembers.toFHIR === 'function' ? this.panelMembers.toFHIR() : this.panelMembers;
    }
    if (this.panelMembers != null && this.panelMembers.observation != null) {
      if(inst['related'] === undefined) {
        inst['related'] = {};
      }
      inst['related']['target'] = typeof this.panelMembers.observation.toFHIR === 'function' ? this.panelMembers.observation.toFHIR() : this.panelMembers.observation;
    }
    if (this.nonIndependentFinding != null) {
      inst['component'] = inst ['component'] || [];
      inst['component'] = inst['component'].concat(this.nonIndependentFinding.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.findingTopicCode != null) {
      if(inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['code'] = inst ['component']['code'] || [];
      inst['component']['code'] = inst['component']['code'].concat(this.nonIndependentFinding.findingTopicCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.quantity != null) {
      if(inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['value[x]'] = inst ['component']['value[x]'] || [];
      inst['component']['value[x]'] = inst['component']['value[x]'].concat(this.nonIndependentFinding.quantity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.exceptionValue != null) {
      if(inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['dataAbsentReason'] = inst ['component']['dataAbsentReason'] || [];
      inst['component']['dataAbsentReason'] = inst['component']['dataAbsentReason'].concat(this.nonIndependentFinding.exceptionValue.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.nonIndependentFinding != null && this.nonIndependentFinding.referenceRange != null) {
      if(inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['referenceRange'] = inst ['component']['referenceRange'] || [];
      inst['component']['referenceRange'] = inst['component']['referenceRange'].concat(this.nonIndependentFinding.referenceRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SocialHistoryObservation class.
   * The FHIR must be valid against the SocialHistoryObservation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SocialHistoryObservation} An instance of SocialHistoryObservation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new SocialHistoryObservation();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-SpecificFocusOfFinding-extension');
      if (match != null) {
        inst.specificFocusOfFinding = createInstanceFromFHIR('shr.base.SpecificFocusOfFinding', match, true);
      }
    }
    if (fhir['modifierExtension'] != null) {
      inst.focalSubjectModifier = createInstanceFromFHIR('odh.FocalSubjectModifier', fhir['modifierExtension']);
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
    if (fhir['component'] != null) {
      inst.nonIndependentFinding = inst.nonIndependentFinding || [];
      inst.nonIndependentFinding = inst.nonIndependentFinding.concat(fhir['component'].map(f => createInstanceFromFHIR('shr.base.NonIndependentFinding', f)));
    }
    if (fhir['component'] != null && fhir['component']['code'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['component']['code']);
    }
    if (fhir['component'] != null && fhir['component']['valueQuantity'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.Quantity', fhir['component']['valueQuantity']);
    }
    if (fhir['component'] != null && fhir['component']['valueCodeableConcept'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir['component']['valueCodeableConcept']);
    }
    if (fhir['component'] != null && fhir['component']['valueRange'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.Range', fhir['component']['valueRange']);
    }
    if (fhir['component'] != null && fhir['component']['valueRatio'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.Ratio', fhir['component']['valueRatio']);
    }
    if (fhir['component'] != null && fhir['component']['valuePeriod'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.value = createInstanceFromFHIR('shr.core.TimePeriod', fhir['component']['valuePeriod']);
    }
    if (fhir['component'] != null && fhir['component']['dataAbsentReason'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', fhir['component']['dataAbsentReason']);
    }
    if (fhir['component'] != null && fhir['component']['referenceRange'] != null) {
      if(inst.nonIndependentFinding == null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', {});
      }
      inst.nonIndependentFinding.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', fhir['component']['referenceRange']);
    }
    return inst;
  }

}
export default SocialHistoryObservation;
