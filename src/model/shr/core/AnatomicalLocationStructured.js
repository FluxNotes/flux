import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.AnatomicalLocationStructured.
 */
class AnatomicalLocationStructured {

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
   * @returns {AnatomicalLocationStructured} this.
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
   * @param {Laterality} laterality - The shr.core.Laterality
   */
  set laterality(laterality) {
    this._laterality = laterality;
  }

  /**
   * Set the Laterality and return 'this' for chaining.
   * @param {Laterality} laterality - The shr.core.Laterality
   * @returns {AnatomicalLocationStructured} this.
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
   * @returns {AnatomicalLocationStructured} this.
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
   * @returns {AnatomicalLocationStructured} this.
   */
  withAnatomicalDirection(anatomicalDirection) {
    this.anatomicalDirection = anatomicalDirection; return this;
  }

  /**
   * Get the ClockDirection.
   * @returns {ClockDirection} The shr.core.ClockDirection
   */
  get clockDirection() {
    return this._clockDirection;
  }

  /**
   * Set the ClockDirection.
   * @param {ClockDirection} clockDirection - The shr.core.ClockDirection
   */
  set clockDirection(clockDirection) {
    this._clockDirection = clockDirection;
  }

  /**
   * Set the ClockDirection and return 'this' for chaining.
   * @param {ClockDirection} clockDirection - The shr.core.ClockDirection
   * @returns {AnatomicalLocationStructured} this.
   */
  withClockDirection(clockDirection) {
    this.clockDirection = clockDirection; return this;
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
   * @returns {AnatomicalLocationStructured} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
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
   * @returns {AnatomicalLocationStructured} this.
   */
  withMedia(media) {
    this.media = media; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AnatomicalLocationStructured class.
   * The JSON must be valid against the AnatomicalLocationStructured JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AnatomicalLocationStructured} An instance of AnatomicalLocationStructured populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AnatomicalLocationStructured();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AnatomicalLocationStructured class to a JSON object.
   * The JSON is expected to be valid against the AnatomicalLocationStructured JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/AnatomicalLocationStructured' } };
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
   * Deserializes FHIR JSON data to an instance of the AnatomicalLocationStructured class.
   * The FHIR must be valid against the AnatomicalLocationStructured FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AnatomicalLocationStructured} An instance of AnatomicalLocationStructured populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AnatomicalLocationStructured();
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
      if (fhir_modifier['coding'] != null && fhir_modifier['coding'].some(g => g['code'] != null && FHIRHelper.valueSet('http://example.com/shr/core/vs/AnatomicalDirectionVS').includes(g['code']))) {
        inst.anatomicalDirection = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalDirection', fhir_modifier, shrId, allEntries, mappedResources, referencesOut, false);
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
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default AnatomicalLocationStructured;
