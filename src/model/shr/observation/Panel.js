import Entry from '../base/Entry';
import Observation from './Observation';
import PanelMembers from './PanelMembers';

/** Generated from SHR definition for shr.observation.Panel */
class Panel extends Observation {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
        if (json.panelMembers) this._panelMembers = new PanelMembers(json.panelMembers);
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
   * Getter for shr.observation.DataAbsentReason
   */
  get dataAbsentReason() {
    return this._dataAbsentReason;
  }

  /**
   * Setter for shr.observation.DataAbsentReason
   */
  set dataAbsentReason(dataAbsentReasonVal) {
    this._dataAbsentReason = dataAbsentReasonVal;
  }

  /**
   * Getter for shr.observation.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Setter for shr.observation.PanelMembers
   */
  set panelMembers(panelMembersVal) {
    this._panelMembers = panelMembersVal;
  }

}

export default Panel;
