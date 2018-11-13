import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import AnatomicalLocation from '../shr/core/AnatomicalLocation';

/**
 * Generated class for sw.WoundAnatomicalLocation.
 * @extends AnatomicalLocation
 */
class WoundAnatomicalLocation extends AnatomicalLocation {

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
   * @returns {WoundAnatomicalLocation} this.
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
   * @returns {WoundAnatomicalLocation} this.
   */
  withLaterality(laterality) {
    this.laterality = laterality; return this;
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
   * @returns {WoundAnatomicalLocation} this.
   */
  withAnatomicalDirection(anatomicalDirection) {
    this.anatomicalDirection = anatomicalDirection; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundAnatomicalLocation class.
   * The JSON must be valid against the WoundAnatomicalLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundAnatomicalLocation} An instance of WoundAnatomicalLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundAnatomicalLocation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the WoundAnatomicalLocation class to a JSON object.
   * The JSON is expected to be valid against the WoundAnatomicalLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/sw/WoundAnatomicalLocation' } };
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
   * Serializes an instance of the WoundAnatomicalLocation class to a FHIR object.
   * The FHIR is expected to be valid against the WoundAnatomicalLocation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
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
      inst['image'] = inst ['image'] || [];
      inst['image'] = inst['image'].concat(this.media.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/sw-WoundAnatomicalLocation-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the WoundAnatomicalLocation class.
   * The FHIR must be valid against the WoundAnatomicalLocation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {WoundAnatomicalLocation} An instance of WoundAnatomicalLocation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new WoundAnatomicalLocation();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-DistanceFromLandmark-extension');
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
export default WoundAnatomicalLocation;
