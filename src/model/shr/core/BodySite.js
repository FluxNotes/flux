import Laterality from './Laterality';
/** Generated from SHR definition for shr.core.BodySite */
class BodySite {
        constructor(json) {
        if (json) {
            this._laterality = new Laterality(json.laterality);
            
        } 
    }

  /**
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

  /**
   * Getter for shr.core.Laterality
   */
  get laterality() {
    return this._laterality;
  }

  /**
   * Setter for shr.core.Laterality
   */
  set laterality(lateralityVal) {
    this._laterality = lateralityVal;
  }

  /**
   * Getter for shr.core.Directionality
   */
  get directionality() {
    return this._directionality;
  }

  /**
   * Setter for shr.core.Directionality
   */
  set directionality(directionalityVal) {
    this._directionality = directionalityVal;
  }

  /**
   * Getter for shr.core.PortionTotality
   */
  get portionTotality() {
    return this._portionTotality;
  }

  /**
   * Setter for shr.core.PortionTotality
   */
  set portionTotality(portionTotalityVal) {
    this._portionTotality = portionTotalityVal;
  }

  /**
   * Getter for shr.core.ClockDirection
   */
  get clockDirection() {
    return this._clockDirection;
  }

  /**
   * Setter for shr.core.ClockDirection
   */
  set clockDirection(clockDirectionVal) {
    this._clockDirection = clockDirectionVal;
  }

  /**
   * Getter for shr.core.Distance
   */
  get distance() {
    return this._distance;
  }

  /**
   * Setter for shr.core.Distance
   */
  set distance(distanceVal) {
    this._distance = distanceVal;
  }

  /**
   * Getter for shr.core.Description
   */
  get description() {
    return this._description;
  }

  /**
   * Setter for shr.core.Description
   */
  set description(descriptionVal) {
    this._description = descriptionVal;
  }

  /**
   * Getter for shr.core.BodySiteMarker
   */
  get bodySiteMarker() {
    return this._bodySiteMarker;
  }

  /**
   * Setter for shr.core.BodySiteMarker
   */
  set bodySiteMarker(bodySiteMarkerVal) {
    this._bodySiteMarker = bodySiteMarkerVal;
  }

}

export default BodySite;
