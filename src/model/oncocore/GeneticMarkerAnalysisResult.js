import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

import LaboratoryObservation from '../shr/base/LaboratoryObservation';

/**
 * Generated class for oncocore.GeneticMarkerAnalysisResult.
 * @extends LaboratoryObservation
 */
class GeneticMarkerAnalysisResult extends LaboratoryObservation {

  /**
   * Get the FindingResult.
   * @returns {FindingResult} The shr.base.FindingResult
   */
  get findingResult() {
    return this._findingResult;
  }

  /**
   * Set the FindingResult.
   * @param {FindingResult} findingResult - The shr.base.FindingResult
   */
  set findingResult(findingResult) {
    this._findingResult = findingResult;
  }

  /**
   * Set the FindingResult and return 'this' for chaining.
   * @param {FindingResult} findingResult - The shr.base.FindingResult
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withFindingResult(findingResult) {
    this.findingResult = findingResult; return this;
  }

  /**
   * Get the FindingTopicCode.
   * @returns {FindingTopicCode} The shr.base.FindingTopicCode
   */
  get findingTopicCode() {
    return this._findingTopicCode;
  }

  /**
   * Set the FindingTopicCode.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   */
  set findingTopicCode(findingTopicCode) {
    this._findingTopicCode = findingTopicCode;
  }

  /**
   * Set the FindingTopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
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
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Get the SpecificFocusOfFinding.
   * @returns {SpecificFocusOfFinding} The shr.base.SpecificFocusOfFinding
   */
  get specificFocusOfFinding() {
    return this._specificFocusOfFinding;
  }

  /**
   * Set the SpecificFocusOfFinding.
   * @param {SpecificFocusOfFinding} specificFocusOfFinding - The shr.base.SpecificFocusOfFinding
   */
  set specificFocusOfFinding(specificFocusOfFinding) {
    this._specificFocusOfFinding = specificFocusOfFinding;
  }

  /**
   * Set the SpecificFocusOfFinding and return 'this' for chaining.
   * @param {SpecificFocusOfFinding} specificFocusOfFinding - The shr.base.SpecificFocusOfFinding
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withSpecificFocusOfFinding(specificFocusOfFinding) {
    this.specificFocusOfFinding = specificFocusOfFinding; return this;
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
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
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
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
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
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Get the GenomicSourceClass.
   * @returns {GenomicSourceClass} The oncocore.GenomicSourceClass
   */
  get genomicSourceClass() {
    return this._genomicSourceClass;
  }

  /**
   * Set the GenomicSourceClass.
   * @param {GenomicSourceClass} genomicSourceClass - The oncocore.GenomicSourceClass
   */
  set genomicSourceClass(genomicSourceClass) {
    this._genomicSourceClass = genomicSourceClass;
  }

  /**
   * Set the GenomicSourceClass and return 'this' for chaining.
   * @param {GenomicSourceClass} genomicSourceClass - The oncocore.GenomicSourceClass
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withGenomicSourceClass(genomicSourceClass) {
    this.genomicSourceClass = genomicSourceClass; return this;
  }

  /**
   * Get the GeneName.
   * @returns {GeneName} The oncocore.GeneName
   */
  get geneName() {
    return this._geneName;
  }

  /**
   * Set the GeneName.
   * @param {GeneName} geneName - The oncocore.GeneName
   */
  set geneName(geneName) {
    this._geneName = geneName;
  }

  /**
   * Set the GeneName and return 'this' for chaining.
   * @param {GeneName} geneName - The oncocore.GeneName
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withGeneName(geneName) {
    this.geneName = geneName; return this;
  }

  /**
   * Get the DNARegionName.
   * @returns {DNARegionName} The oncocore.DNARegionName
   */
  get dNARegionName() {
    return this._dNARegionName;
  }

  /**
   * Set the DNARegionName.
   * @param {DNARegionName} dNARegionName - The oncocore.DNARegionName
   */
  set dNARegionName(dNARegionName) {
    this._dNARegionName = dNARegionName;
  }

  /**
   * Set the DNARegionName and return 'this' for chaining.
   * @param {DNARegionName} dNARegionName - The oncocore.DNARegionName
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withDNARegionName(dNARegionName) {
    this.dNARegionName = dNARegionName; return this;
  }

  /**
   * Get the DNASequenceVariantName.
   * @returns {DNASequenceVariantName} The oncocore.DNASequenceVariantName
   */
  get dNASequenceVariantName() {
    return this._dNASequenceVariantName;
  }

  /**
   * Set the DNASequenceVariantName.
   * @param {DNASequenceVariantName} dNASequenceVariantName - The oncocore.DNASequenceVariantName
   */
  set dNASequenceVariantName(dNASequenceVariantName) {
    this._dNASequenceVariantName = dNASequenceVariantName;
  }

  /**
   * Set the DNASequenceVariantName and return 'this' for chaining.
   * @param {DNASequenceVariantName} dNASequenceVariantName - The oncocore.DNASequenceVariantName
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withDNASequenceVariantName(dNASequenceVariantName) {
    this.dNASequenceVariantName = dNASequenceVariantName; return this;
  }

  /**
   * Get the DNASequenceVariantId.
   * @returns {DNASequenceVariantId} The oncocore.DNASequenceVariantId
   */
  get dNASequenceVariantId() {
    return this._dNASequenceVariantId;
  }

  /**
   * Set the DNASequenceVariantId.
   * @param {DNASequenceVariantId} dNASequenceVariantId - The oncocore.DNASequenceVariantId
   */
  set dNASequenceVariantId(dNASequenceVariantId) {
    this._dNASequenceVariantId = dNASequenceVariantId;
  }

  /**
   * Set the DNASequenceVariantId and return 'this' for chaining.
   * @param {DNASequenceVariantId} dNASequenceVariantId - The oncocore.DNASequenceVariantId
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withDNASequenceVariantId(dNASequenceVariantId) {
    this.dNASequenceVariantId = dNASequenceVariantId; return this;
  }

  /**
   * Get the DNASequenceVariantType.
   * @returns {DNASequenceVariantType} The oncocore.DNASequenceVariantType
   */
  get dNASequenceVariantType() {
    return this._dNASequenceVariantType;
  }

  /**
   * Set the DNASequenceVariantType.
   * @param {DNASequenceVariantType} dNASequenceVariantType - The oncocore.DNASequenceVariantType
   */
  set dNASequenceVariantType(dNASequenceVariantType) {
    this._dNASequenceVariantType = dNASequenceVariantType;
  }

  /**
   * Set the DNASequenceVariantType and return 'this' for chaining.
   * @param {DNASequenceVariantType} dNASequenceVariantType - The oncocore.DNASequenceVariantType
   * @returns {GeneticMarkerAnalysisResult} this.
   */
  withDNASequenceVariantType(dNASequenceVariantType) {
    this.dNASequenceVariantType = dNASequenceVariantType; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GeneticMarkerAnalysisResult class.
   * The JSON must be valid against the GeneticMarkerAnalysisResult JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneticMarkerAnalysisResult} An instance of GeneticMarkerAnalysisResult populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneticMarkerAnalysisResult();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the GeneticMarkerAnalysisResult class to a JSON object.
   * The JSON is expected to be valid against the GeneticMarkerAnalysisResult JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/oncocore/GeneticMarkerAnalysisResult' } };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.findingResult != null) {
      inst['FindingResult'] = typeof this.findingResult.toJSON === 'function' ? this.findingResult.toJSON() : this.findingResult;
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
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
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
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.genomicSourceClass != null) {
      inst['GenomicSourceClass'] = typeof this.genomicSourceClass.toJSON === 'function' ? this.genomicSourceClass.toJSON() : this.genomicSourceClass;
    }
    if (this.geneName != null) {
      inst['GeneName'] = typeof this.geneName.toJSON === 'function' ? this.geneName.toJSON() : this.geneName;
    }
    if (this.dNARegionName != null) {
      inst['DNARegionName'] = typeof this.dNARegionName.toJSON === 'function' ? this.dNARegionName.toJSON() : this.dNARegionName;
    }
    if (this.dNASequenceVariantName != null) {
      inst['DNASequenceVariantName'] = typeof this.dNASequenceVariantName.toJSON === 'function' ? this.dNASequenceVariantName.toJSON() : this.dNASequenceVariantName;
    }
    if (this.dNASequenceVariantId != null) {
      inst['DNASequenceVariantId'] = typeof this.dNASequenceVariantId.toJSON === 'function' ? this.dNASequenceVariantId.toJSON() : this.dNASequenceVariantId;
    }
    if (this.dNASequenceVariantType != null) {
      inst['DNASequenceVariantType'] = typeof this.dNASequenceVariantType.toJSON === 'function' ? this.dNASequenceVariantType.toJSON() : this.dNASequenceVariantType;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the GeneticMarkerAnalysisResult class.
   * The FHIR must be valid against the GeneticMarkerAnalysisResult FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {GeneticMarkerAnalysisResult} An instance of GeneticMarkerAnalysisResult populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new GeneticMarkerAnalysisResult();
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/observation-geneticsDNASequenceVariantName') {
        inst.dNASequenceVariantName = FHIRHelper.createInstanceFromFHIR('oncocore.DNASequenceVariantName', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/observation-geneticsDNAVariantId') {
        inst.dNASequenceVariantId = FHIRHelper.createInstanceFromFHIR('oncocore.DNASequenceVariantId', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/observation-geneticsDNASequenceVariantType') {
        inst.dNASequenceVariantType = FHIRHelper.createInstanceFromFHIR('oncocore.DNASequenceVariantType', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/observation-geneticsGene') {
        inst.geneName = FHIRHelper.createInstanceFromFHIR('oncocore.GeneName', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/observation-geneticsDNARegionName') {
        inst.dNARegionName = FHIRHelper.createInstanceFromFHIR('oncocore.DNARegionName', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass') {
        inst.genomicSourceClass = FHIRHelper.createInstanceFromFHIR('oncocore.GenomicSourceClass', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Interpretation-extension') {
        inst.interpretation = FHIRHelper.createInstanceFromFHIR('shr.base.Interpretation', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Narrative-extension') {
        inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Language-extension') {
        inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Metadata-extension') {
        inst.metadata = FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension') {
        inst.findingTopicCode = FHIRHelper.createInstanceFromFHIR('shr.base.FindingTopicCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExceptionValue-extension') {
        inst.exceptionValue = FHIRHelper.createInstanceFromFHIR('shr.base.ExceptionValue', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension') {
        inst.patient = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension') {
        inst.encounter = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-FindingStatus-extension') {
        inst.findingStatus = FHIRHelper.createInstanceFromFHIR('shr.base.FindingStatus', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-FindingMethod-extension') {
        inst.findingMethod = FHIRHelper.createInstanceFromFHIR('shr.base.FindingMethod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-RelevantTime-extension') {
        inst.relevantTime = FHIRHelper.createInstanceFromFHIR('shr.base.RelevantTime', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-NonIndependentFinding-extension') {
        inst.nonIndependentFinding = inst.nonIndependentFinding || [];
        const inst_nonIndependentFinding = FHIRHelper.createInstanceFromFHIR('shr.base.NonIndependentFinding', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.nonIndependentFinding.push(inst_nonIndependentFinding);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Category-extension') {
        inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-CommentOrDescription-extension') {
        inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Device-extension') {
        inst.device = FHIRHelper.createInstanceFromFHIR('shr.entity.Device', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Specimen-extension') {
        inst.specimen = FHIRHelper.createInstanceFromFHIR('shr.entity.Specimen', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default GeneticMarkerAnalysisResult;
