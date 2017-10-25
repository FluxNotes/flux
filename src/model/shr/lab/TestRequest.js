import Request from '../base/Request';

/** Generated from SHR definition for shr.lab.TestRequest */
class TestRequest extends Request {

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.core.SpecificType
   */
  get specificType() {
    return this._specificType;
  }

  /**
   * Setter for shr.core.SpecificType
   */
  set specificType(specificTypeVal) {
    this._specificType = specificTypeVal;
  }

  /**
   * Getter for shr.core.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Setter for shr.core.BodySite
   */
  set bodySite(bodySiteVal) {
    this._bodySite = bodySiteVal;
  }

  /**
   * Getter for shr.lab.SpecimenType (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  get specimenType() {
    return this._specimenType;
  }

  /**
   * Setter for shr.lab.SpecimenType (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  set specimenType(specimenTypeVal) {
    this._specimenType = specimenTypeVal;
  }

}

export default TestRequest;
