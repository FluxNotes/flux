import Device from '../device/Device';

/** Generated from SHR definition for shr.skin.SupportSurface */
class SupportSurface extends Device {

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
   * Getter for shr.skin.SupportSurfaceCategory
   */
  get supportSurfaceCategory() {
    return this._supportSurfaceCategory;
  }

  /**
   * Setter for shr.skin.SupportSurfaceCategory
   */
  set supportSurfaceCategory(supportSurfaceCategoryVal) {
    this._supportSurfaceCategory = supportSurfaceCategoryVal;
  }

  /**
   * Getter for shr.skin.SupportSurfaceBodyPosition
   */
  get supportSurfaceBodyPosition() {
    return this._supportSurfaceBodyPosition;
  }

  /**
   * Setter for shr.skin.SupportSurfaceBodyPosition
   */
  set supportSurfaceBodyPosition(supportSurfaceBodyPositionVal) {
    this._supportSurfaceBodyPosition = supportSurfaceBodyPositionVal;
  }

  /**
   * Getter for shr.skin.SupportSurfaceComponent[]
   */
  get supportSurfaceComponent() {
    return this._supportSurfaceComponent;
  }

  /**
   * Setter for shr.skin.SupportSurfaceComponent[]
   */
  set supportSurfaceComponent(supportSurfaceComponentVal) {
    this._supportSurfaceComponent = supportSurfaceComponentVal;
  }

}

export default SupportSurface;
