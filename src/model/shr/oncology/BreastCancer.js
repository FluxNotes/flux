import BodySite from '../core/BodySite';
import Category from '../base/Category';
import Condition from '../condition/Condition';
import Entry from '../base/Entry';
import SpecificType from '../core/SpecificType';
import Stage from '../condition/Stage';

/** Generated from SHR definition for shr.oncology.BreastCancer */
class BreastCancer extends Condition {
    constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
            if (json.specificType) this._specificType = new SpecificType(json.specificType);
            if (json.category) this._category = new Category(json.category);
            if (json.stage) this._stage = new Stage(json.stage);
            if (json.bodySite) this._bodySite = new BodySite(json.bodySite);
        } else {
            this._entryInfo = Entry.createEntry(    "http://standardhealthrecord.org/oncology/BreastCancer",
                                                    "http://standardhealthrecord.org/condition/Condition");
        }
    }

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
   * Getter for shr.base.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.condition.Stage
   */
  get stage() {
    return this._stage;
  }

  /**
   * Setter for shr.condition.Stage
   */
  set stage(stageVal) {
    this._stage = stageVal;
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

}

export default BreastCancer;
