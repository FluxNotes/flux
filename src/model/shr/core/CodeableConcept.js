import Coding from '../core/Coding';
import DisplayText from '../core/DisplayText';

/** Generated from SHR definition for shr.core.CodeableConcept */
class CodeableConcept {
    constructor(json) {
        if (json) {
            if (json.coding) this._coding = json.coding.map((c) => new Coding(c));
            if (json.coding[0].displayText) this._displayText = new DisplayText(json.coding[0].displayText);
        } else {
            this._coding = [ new Coding() ];
        }
    }

  /**
   * Getter for shr.core.Coding[]
   */
  get coding() {
    return this._coding;
  }

  /**
   * Setter for shr.core.Coding[]
   */
  set coding(codingVal) {
    this._coding = codingVal;
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

export default CodeableConcept;
