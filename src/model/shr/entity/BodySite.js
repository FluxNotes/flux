import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.BodySite.
 * @extends Entity
 */
class BodySite extends Entity {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {BodySite} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {BodySite} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the Laterality.
   * @returns {Laterality} The shr.entity.Laterality
   */
  get laterality() {
    return this._laterality;
  }

  /**
   * Set the Laterality.
   * @param {Laterality} laterality - The shr.entity.Laterality
   */
  set laterality(laterality) {
    this._laterality = laterality;
  }

  /**
   * Set the Laterality and return 'this' for chaining.
   * @param {Laterality} laterality - The shr.entity.Laterality
   * @returns {BodySite} this.
   */
  withLaterality(laterality) {
    this.laterality = laterality; return this;
  }

  /**
   * Get the Directionality.
   * @returns {Directionality} The shr.entity.Directionality
   */
  get directionality() {
    return this._directionality;
  }

  /**
   * Set the Directionality.
   * @param {Directionality} directionality - The shr.entity.Directionality
   */
  set directionality(directionality) {
    this._directionality = directionality;
  }

  /**
   * Set the Directionality and return 'this' for chaining.
   * @param {Directionality} directionality - The shr.entity.Directionality
   * @returns {BodySite} this.
   */
  withDirectionality(directionality) {
    this.directionality = directionality; return this;
  }

  /**
   * Get the PortionTotality.
   * @returns {PortionTotality} The shr.entity.PortionTotality
   */
  get portionTotality() {
    return this._portionTotality;
  }

  /**
   * Set the PortionTotality.
   * @param {PortionTotality} portionTotality - The shr.entity.PortionTotality
   */
  set portionTotality(portionTotality) {
    this._portionTotality = portionTotality;
  }

  /**
   * Set the PortionTotality and return 'this' for chaining.
   * @param {PortionTotality} portionTotality - The shr.entity.PortionTotality
   * @returns {BodySite} this.
   */
  withPortionTotality(portionTotality) {
    this.portionTotality = portionTotality; return this;
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
   * @returns {BodySite} this.
   */
  withClockDirection(clockDirection) {
    this.clockDirection = clockDirection; return this;
  }

  /**
   * Get the Distance.
   * @returns {Distance} The shr.core.Distance
   */
  get distance() {
    return this._distance;
  }

  /**
   * Set the Distance.
   * @param {Distance} distance - The shr.core.Distance
   */
  set distance(distance) {
    this._distance = distance;
  }

  /**
   * Set the Distance and return 'this' for chaining.
   * @param {Distance} distance - The shr.core.Distance
   * @returns {BodySite} this.
   */
  withDistance(distance) {
    this.distance = distance; return this;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {BodySite} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the BodySiteMarker.
   * @returns {BodySiteMarker} The shr.entity.BodySiteMarker
   */
  get bodySiteMarker() {
    return this._bodySiteMarker;
  }

  /**
   * Set the BodySiteMarker.
   * @param {BodySiteMarker} bodySiteMarker - The shr.entity.BodySiteMarker
   */
  set bodySiteMarker(bodySiteMarker) {
    this._bodySiteMarker = bodySiteMarker;
  }

  /**
   * Set the BodySiteMarker and return 'this' for chaining.
   * @param {BodySiteMarker} bodySiteMarker - The shr.entity.BodySiteMarker
   * @returns {BodySite} this.
   */
  withBodySiteMarker(bodySiteMarker) {
    this.bodySiteMarker = bodySiteMarker; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BodySite class.
   * The JSON must be valid against the BodySite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodySite} An instance of BodySite populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BodySite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BodySite class to a JSON object.
   * The JSON is expected to be valid against the BodySite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/BodySite' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.laterality != null) {
      inst['Laterality'] = typeof this.laterality.toJSON === 'function' ? this.laterality.toJSON() : this.laterality;
    }
    if (this.directionality != null) {
      inst['Directionality'] = typeof this.directionality.toJSON === 'function' ? this.directionality.toJSON() : this.directionality;
    }
    if (this.portionTotality != null) {
      inst['PortionTotality'] = typeof this.portionTotality.toJSON === 'function' ? this.portionTotality.toJSON() : this.portionTotality;
    }
    if (this.clockDirection != null) {
      inst['ClockDirection'] = typeof this.clockDirection.toJSON === 'function' ? this.clockDirection.toJSON() : this.clockDirection;
    }
    if (this.distance != null) {
      inst['Distance'] = typeof this.distance.toJSON === 'function' ? this.distance.toJSON() : this.distance;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.bodySiteMarker != null) {
      inst['BodySiteMarker'] = typeof this.bodySiteMarker.toJSON === 'function' ? this.bodySiteMarker.toJSON() : this.bodySiteMarker;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BodySite class to a FHIR object.
   * The FHIR is expected to be valid against the BodySite FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
    }
    if (this.clockDirection != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.clockDirection.toFHIR(true));
    }
    if (this.distance != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.distance.toFHIR(true));
    }
    if (this.bodySiteMarker != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.bodySiteMarker.toFHIR(true));
    }
    if (this.laterality != null) {
      inst['qualifier'] = typeof this.laterality.toFHIR === 'function' ? this.laterality.toFHIR() : this.laterality;
    }
    if (this.directionality != null) {
      inst['qualifier'] = typeof this.directionality.toFHIR === 'function' ? this.directionality.toFHIR() : this.directionality;
    }
    if (this.portionTotality != null) {
      inst['qualifier'] = typeof this.portionTotality.toFHIR === 'function' ? this.portionTotality.toFHIR() : this.portionTotality;
    }
    if (this.details != null) {
      inst['description'] = typeof this.details.toFHIR === 'function' ? this.details.toFHIR() : this.details;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-BodySite-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default BodySite;
