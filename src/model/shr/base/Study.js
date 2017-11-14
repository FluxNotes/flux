import Entry from '../base/Entry';
import Identifier from '../core/Identifier';
import Title from '../core/Title';

/** Generated from SHR definition for shr.base.Study */
class Study {
    constructor(json) {
        if (json) {
            this._entryInfo = new Entry(json);
            this._title = json.title ? new Title(json.title) : new Title();
            if (json.identifier) this._identifier = new Identifier(json.identifier);
        } else {
            this._entryInfo = Entry.createEntry("http://standardhealthrecord.org/base/Study");            
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
   * Getter for shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Setter for shr.core.Title
   */
  set title(titleVal) {
    this._title = titleVal;
  }

  /**
   * Getter for shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Setter for shr.core.Identifier
   */
  set identifier(identifierVal) {
    this._identifier = identifierVal;
  }
}

export default Study;
