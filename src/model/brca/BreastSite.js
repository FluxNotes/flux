import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

import AnatomicalLocationStructured from '../shr/core/AnatomicalLocationStructured';

/**
 * Generated class for brca.BreastSite.
 * @extends AnatomicalLocationStructured
 */
class BreastSite extends AnatomicalLocationStructured {

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
   * @returns {BreastSite} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the AnatomicalLocationOrLandmarkCode.
   * @returns {AnatomicalLocationOrLandmarkCode} The shr.core.AnatomicalLocationOrLandmarkCode
   */
  get anatomicalLocationOrLandmarkCode() {
    return this._anatomicalLocationOrLandmarkCode;
  }

  /**
   * Set the AnatomicalLocationOrLandmarkCode.
   * This field/value is required.
   * @param {AnatomicalLocationOrLandmarkCode} anatomicalLocationOrLandmarkCode - The shr.core.AnatomicalLocationOrLandmarkCode
   */
  set anatomicalLocationOrLandmarkCode(anatomicalLocationOrLandmarkCode) {
    this._anatomicalLocationOrLandmarkCode = anatomicalLocationOrLandmarkCode;
  }

  /**
   * Set the AnatomicalLocationOrLandmarkCode and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocationOrLandmarkCode} anatomicalLocationOrLandmarkCode - The shr.core.AnatomicalLocationOrLandmarkCode
   * @returns {BreastSite} this.
   */
  withAnatomicalLocationOrLandmarkCode(anatomicalLocationOrLandmarkCode) {
    this.anatomicalLocationOrLandmarkCode = anatomicalLocationOrLandmarkCode; return this;
  }

  /**
   * Get the Laterality.
   * @returns {Laterality} The shr.core.Laterality
   */
  get laterality() {
    return this._laterality;
  }

  /**
   * Set the Laterality.
   * This field/value is required.
   * @param {Laterality} laterality - The shr.core.Laterality
   */
  set laterality(laterality) {
    this._laterality = laterality;
  }

  /**
   * Set the Laterality and return 'this' for chaining.
   * This field/value is required.
   * @param {Laterality} laterality - The shr.core.Laterality
   * @returns {BreastSite} this.
   */
  withLaterality(laterality) {
    this.laterality = laterality; return this;
  }

  /**
   * Get the DistanceFromLandmark.
   * @returns {DistanceFromLandmark} The shr.core.DistanceFromLandmark
   */
  get distanceFromLandmark() {
    return this._distanceFromLandmark;
  }

  /**
   * Set the DistanceFromLandmark.
   * @param {DistanceFromLandmark} distanceFromLandmark - The shr.core.DistanceFromLandmark
   */
  set distanceFromLandmark(distanceFromLandmark) {
    this._distanceFromLandmark = distanceFromLandmark;
  }

  /**
   * Set the DistanceFromLandmark and return 'this' for chaining.
   * @param {DistanceFromLandmark} distanceFromLandmark - The shr.core.DistanceFromLandmark
   * @returns {BreastSite} this.
   */
  withDistanceFromLandmark(distanceFromLandmark) {
    this.distanceFromLandmark = distanceFromLandmark; return this;
  }

  /**
   * Get the AnatomicalDirection.
   * @returns {AnatomicalDirection} The shr.core.AnatomicalDirection
   */
  get anatomicalDirection() {
    return this._anatomicalDirection;
  }

  /**
   * Set the AnatomicalDirection.
   * @param {AnatomicalDirection} anatomicalDirection - The shr.core.AnatomicalDirection
   */
  set anatomicalDirection(anatomicalDirection) {
    this._anatomicalDirection = anatomicalDirection;
  }

  /**
   * Set the AnatomicalDirection and return 'this' for chaining.
   * @param {AnatomicalDirection} anatomicalDirection - The shr.core.AnatomicalDirection
   * @returns {BreastSite} this.
   */
  withAnatomicalDirection(anatomicalDirection) {
    this.anatomicalDirection = anatomicalDirection; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastSite class.
   * The JSON must be valid against the BreastSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastSite} An instance of BreastSite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BreastSite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the BreastSite class to a JSON object.
   * The JSON is expected to be valid against the BreastSite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/brca/BreastSite' };
    if (this.anatomicalLocationOrLandmarkCode != null) {
      inst['AnatomicalLocationOrLandmarkCode'] = typeof this.anatomicalLocationOrLandmarkCode.toJSON === 'function' ? this.anatomicalLocationOrLandmarkCode.toJSON() : this.anatomicalLocationOrLandmarkCode;
    }
    if (this.laterality != null) {
      inst['Laterality'] = typeof this.laterality.toJSON === 'function' ? this.laterality.toJSON() : this.laterality;
    }
    if (this.distanceFromLandmark != null) {
      inst['DistanceFromLandmark'] = typeof this.distanceFromLandmark.toJSON === 'function' ? this.distanceFromLandmark.toJSON() : this.distanceFromLandmark;
    }
    if (this.anatomicalDirection != null) {
      inst['AnatomicalDirection'] = typeof this.anatomicalDirection.toJSON === 'function' ? this.anatomicalDirection.toJSON() : this.anatomicalDirection;
    }
    if (this.clockDirection != null) {
      inst['ClockDirection'] = typeof this.clockDirection.toJSON === 'function' ? this.clockDirection.toJSON() : this.clockDirection;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the BreastSite class.
   * The FHIR must be valid against the BreastSite FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {BreastSite} An instance of BreastSite populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new BreastSite();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/brca/BreastSite');
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-DistanceFromLandmark-extension') {
        inst.distanceFromLandmark = FHIRHelper.createInstanceFromFHIR('shr.core.DistanceFromLandmark', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-ClockDirection-extension') {
        inst.clockDirection = FHIRHelper.createInstanceFromFHIR('shr.core.ClockDirection', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['code'] != null) {
      inst.anatomicalLocationOrLandmarkCode = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_modifier of fhir['modifier'] || []) {
      if (fhir_modifier['coding'] != null && fhir_modifier['coding'].some(g => g['code'] != null && FHIRHelper.valueSet('http://hl7.org/fhir/ValueSet/bodysite-laterality').includes(g['code']))) {
        inst.laterality = FHIRHelper.createInstanceFromFHIR('shr.core.Laterality', fhir_modifier, shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['description'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['description'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_image of fhir['image'] || []) {
      inst.media = inst.media || [];
      const inst_media = FHIRHelper.createInstanceFromFHIR('shr.core.Media', fhir_image, shrId, allEntries, mappedResources, referencesOut, false);
      inst.media.push(inst_media);
    }
    return inst;
  }

}
export default BreastSite;
