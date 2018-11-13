import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import NonLaboratoryObservation from './NonLaboratoryObservation';

/**
 * Generated class for shr.base.ComponentOnlyNonLaboratoryObservation.
 * @extends NonLaboratoryObservation
 */
class ComponentOnlyNonLaboratoryObservation extends NonLaboratoryObservation {

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
   * @returns {ComponentOnlyNonLaboratoryObservation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod.
   * @returns {(Quantity|CodeableConcept|string|Range|Ratio|time|dateTime|TimePeriod)} The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|time|dateTime|TimePeriod)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod and return 'this' for chaining.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|time|dateTime|TimePeriod)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod
   * @returns {ComponentOnlyNonLaboratoryObservation} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

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
   * @returns {ComponentOnlyNonLaboratoryObservation} this.
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
   * @returns {ComponentOnlyNonLaboratoryObservation} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
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
   * @returns {ComponentOnlyNonLaboratoryObservation} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ComponentOnlyNonLaboratoryObservation class.
   * The JSON must be valid against the ComponentOnlyNonLaboratoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ComponentOnlyNonLaboratoryObservation} An instance of ComponentOnlyNonLaboratoryObservation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ComponentOnlyNonLaboratoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ComponentOnlyNonLaboratoryObservation class to a JSON object.
   * The JSON is expected to be valid against the ComponentOnlyNonLaboratoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ComponentOnlyNonLaboratoryObservation' };
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
    return inst;
  }

  /**
   * Serializes an instance of the ComponentOnlyNonLaboratoryObservation class to a FHIR object.
   * The FHIR is expected to be valid against the ComponentOnlyNonLaboratoryObservation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
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
   * Deserializes FHIR JSON data to an instance of the ComponentOnlyNonLaboratoryObservation class.
   * The FHIR must be valid against the ComponentOnlyNonLaboratoryObservation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ComponentOnlyNonLaboratoryObservation} An instance of ComponentOnlyNonLaboratoryObservation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ComponentOnlyNonLaboratoryObservation();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/StructureDefinition/observation-delta');
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
    if (fhir['interpretation'] != null) {
      inst.interpretation = createInstanceFromFHIR('shr.base.Interpretation', fhir['interpretation']);
    }
    if (fhir['comment'] != null) {
      inst.commentOrDescription = createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['comment']);
    }
    if (fhir['bodySite'] != null) {
      if(inst.anatomicalLocation == null) {
        inst.anatomicalLocation = createInstanceFromFHIR('shr.core.AnatomicalLocation', {});
      }
      inst.anatomicalLocation.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['bodySite']);
    }
    if (fhir['method'] != null) {
      inst.findingMethod = createInstanceFromFHIR('shr.base.FindingMethod', fhir['method']);
    }
    if (fhir['device'] != null) {
      inst.device = createInstanceFromFHIR('shr.entity.Device', fhir['device']);
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
export default ComponentOnlyNonLaboratoryObservation;
