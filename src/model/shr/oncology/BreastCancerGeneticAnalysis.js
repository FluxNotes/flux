import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.oncology.BreastCancerGeneticAnalysis */
class BreastCancerGeneticAnalysis extends Panel {

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

export default BreastCancerGeneticAnalysis;
