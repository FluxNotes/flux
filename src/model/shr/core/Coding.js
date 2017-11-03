import CodeSystem from '../core/CodeSystem';
import CodeSystemVersion from '../core/CodeSystemVersion';
import DisplayText from '../core/DisplayText';

/** Generated from SHR definition for shr.core.Coding */
class Coding {
    constructor(json) {
        if (json) {
            if(json.value) this.code = json.value;
            if(json.value) this._code = json.value;
            if (json.codeSystem) this._codeSystem = new CodeSystem(json.codeSystem);
            if (json.codeSystemVersion) this._codeSystemVersion = new CodeSystemVersion(json.codeSystemVersion);
            this._displayText = new DisplayText(json.displayText);
        } else {
            this._displayText = new DisplayText();
        }
    }
  /**
   * Convenience getter for value (accesses this.code)
   */
  get value() {
    return this.code;
  }

  /**
   * Convenience setter for value (sets this.code)
   */
  set value(val) {
    this.code = val;
  }

  /**
   * Getter for code
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for code
   */
  set code(codeVal) {
    this._code = codeVal;
  }

  /**
   * Getter for shr.core.CodeSystem
   */
  get codeSystem() {
    return this._codeSystem;
  }

  /**
   * Setter for shr.core.CodeSystem
   */
  set codeSystem(codeSystemVal) {
    this._codeSystem = codeSystemVal;
  }

  /**
   * Getter for shr.core.CodeSystemVersion
   */
  get codeSystemVersion() {
    return this._codeSystemVersion;
  }

  /**
   * Setter for shr.core.CodeSystemVersion
   */
  set codeSystemVersion(codeSystemVersionVal) {
    this._codeSystemVersion = codeSystemVersionVal;
  }

  /**
   * Getter for shr.core.DisplayText
   */
  get displayText() {
    return this._displayText;
  }

  /**
   * Setter for shr.core.DisplayText
   */
  set displayText(displayTextVal) {
    this._displayText = displayTextVal;
  }

}

export default Coding;
