import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.oncology.TumorSize */
class TumorSize extends Observation {

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
   * Convenience getter for value (accesses this.quantity)
   */
  get value() {
    return this.quantity;
  }

  /**
   * Convenience setter for value (sets this.quantity)
   */
  set value(val) {
    this.quantity = val;
  }

  /**
   * Getter for shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Setter for shr.core.Quantity
   */
  set quantity(quantityVal) {
    this._quantity = quantityVal;
  }

  // Ommitting getter/setter for field: TBD<Specimen>

  /**
   * Getter for shr.oncology.TumorSecondaryDimensionSize
   */
  get tumorSecondaryDimensionSize() {
    return this._tumorSecondaryDimensionSize;
  }

  /**
   * Setter for shr.oncology.TumorSecondaryDimensionSize
   */
  set tumorSecondaryDimensionSize(tumorSecondaryDimensionSizeVal) {
    this._tumorSecondaryDimensionSize = tumorSecondaryDimensionSizeVal;
  }

  /**
   * Getter for shr.oncology.SizeOfGrossTumorBed
   */
  get sizeOfGrossTumorBed() {
    return this._sizeOfGrossTumorBed;
  }

  /**
   * Setter for shr.oncology.SizeOfGrossTumorBed
   */
  set sizeOfGrossTumorBed(sizeOfGrossTumorBedVal) {
    this._sizeOfGrossTumorBed = sizeOfGrossTumorBedVal;
  }

  /**
   * Getter for shr.oncology.TumorMargins
   */
  get tumorMargins() {
    return this._tumorMargins;
  }

  /**
   * Setter for shr.oncology.TumorMargins
   */
  set tumorMargins(tumorMarginsVal) {
    this._tumorMargins = tumorMarginsVal;
  }

  /**
   * Getter for shr.oncology.Cellularity
   */
  get cellularity() {
    return this._cellularity;
  }

  /**
   * Setter for shr.oncology.Cellularity
   */
  set cellularity(cellularityVal) {
    this._cellularity = cellularityVal;
  }

  /**
   * Getter for shr.oncology.PercentageInSituCarcinoma
   */
  get percentageInSituCarcinoma() {
    return this._percentageInSituCarcinoma;
  }

  /**
   * Setter for shr.oncology.PercentageInSituCarcinoma
   */
  set percentageInSituCarcinoma(percentageInSituCarcinomaVal) {
    this._percentageInSituCarcinoma = percentageInSituCarcinomaVal;
  }

}

export default TumorSize;
