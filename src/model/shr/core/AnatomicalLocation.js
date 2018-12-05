import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.AnatomicalLocation.
 */
class AnatomicalLocation {

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
   * @returns {AnatomicalLocation} this.
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
   * @returns {AnatomicalLocation} this.
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
   * @returns {AnatomicalLocation} this.
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
   * @returns {AnatomicalLocation} this.
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
   * @returns {AnatomicalLocation} this.
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
   * @returns {AnatomicalLocation} this.
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
   * @returns {AnatomicalLocation} this.
   */
  withMedia(media) {
    this.media = media; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AnatomicalLocation class.
   * The JSON must be valid against the AnatomicalLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AnatomicalLocation} An instance of AnatomicalLocation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new AnatomicalLocation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AnatomicalLocation class to a JSON object.
   * The JSON is expected to be valid against the AnatomicalLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/AnatomicalLocation' } };
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
   * Serializes an instance of the AnatomicalLocation class to a FHIR object.
   * The FHIR is expected to be valid against the AnatomicalLocation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.distanceFromLandmark != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.distanceFromLandmark.toFHIR === 'function' ? this.distanceFromLandmark.toFHIR(true) : this.distanceFromLandmark);
    }
    if (this.clockDirection != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.clockDirection.toFHIR === 'function' ? this.clockDirection.toFHIR(true) : this.clockDirection);
    }
    if (this.anatomicalLocationOrLandmarkCode != null) {
      inst['code'] = typeof this.anatomicalLocationOrLandmarkCode.toFHIR === 'function' ? this.anatomicalLocationOrLandmarkCode.toFHIR() : this.anatomicalLocationOrLandmarkCode;
    }
    if (this.laterality != null) {
      inst['qualifier'] = typeof this.laterality.toFHIR === 'function' ? this.laterality.toFHIR() : this.laterality;
    }
    if (this.anatomicalDirection != null) {
      inst['qualifier'] = typeof this.anatomicalDirection.toFHIR === 'function' ? this.anatomicalDirection.toFHIR() : this.anatomicalDirection;
    }
    if (this.commentOrDescription != null) {
      inst['description'] = typeof this.commentOrDescription.toFHIR === 'function' ? this.commentOrDescription.toFHIR() : this.commentOrDescription;
    }
    if (this.media != null) {
      inst['image'] = inst['image'] || [];
      inst['image'] = inst['image'].concat(this.media.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-AnatomicalLocation-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AnatomicalLocation class.
   * The FHIR must be valid against the AnatomicalLocation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AnatomicalLocation} An instance of AnatomicalLocation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new AnatomicalLocation();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://example.com/fhir/StructureDefinition/shr-core-DistanceFromLandmark-extension');
      if (match != null) {
        inst.distanceFromLandmark = createInstanceFromFHIR('shr.core.DistanceFromLandmark', match, true);
      }
    }
    if (fhir['code'] != null) {
      inst.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['code']);
    }
    if (fhir['qualifier'] != null) {
      inst.laterality = createInstanceFromFHIR('shr.core.Laterality', fhir['qualifier']);
    }
    if (fhir['description'] != null) {
      inst.commentOrDescription = createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['description']);
    }
    if (fhir['image'] != null) {
      inst.media = inst.media || [];
      inst.media = inst.media.concat(fhir['image'].map(f => createInstanceFromFHIR('shr.core.Media', f)));
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default AnatomicalLocation;
