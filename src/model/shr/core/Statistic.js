import Quantity from './Quantity';

/** Generated from SHR definition for shr.core.Statistic */
class Statistic extends Quantity {

  /**
   * Getter for shr.core.StatisticType
   */
  get statisticType() {
    return this._statisticType;
  }

  /**
   * Setter for shr.core.StatisticType
   */
  set statisticType(statisticTypeVal) {
    this._statisticType = statisticTypeVal;
  }

}

export default Statistic;
