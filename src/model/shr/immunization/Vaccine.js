/** Generated from SHR definition for shr.immunization.Vaccine */
class Vaccine {

  /**
   * Convenience getter for value (accesses this.specificType)
   */
  get value() {
    return this.specificType;
  }

  /**
   * Convenience setter for value (sets this.specificType)
   */
  set value(val) {
    this.specificType = val;
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
   * Getter for shr.immunization.VaccineManufacturer
   */
  get vaccineManufacturer() {
    return this._vaccineManufacturer;
  }

  /**
   * Setter for shr.immunization.VaccineManufacturer
   */
  set vaccineManufacturer(vaccineManufacturerVal) {
    this._vaccineManufacturer = vaccineManufacturerVal;
  }

  /**
   * Getter for shr.immunization.LotNumber
   */
  get lotNumber() {
    return this._lotNumber;
  }

  /**
   * Setter for shr.immunization.LotNumber
   */
  set lotNumber(lotNumberVal) {
    this._lotNumber = lotNumberVal;
  }

}

export default Vaccine;
