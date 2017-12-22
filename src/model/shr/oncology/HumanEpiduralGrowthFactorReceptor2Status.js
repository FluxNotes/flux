import Entry from '../base/Entry';
import ReceptorStatusObservation from './ReceptorStatusObservation';
import ReceptorType from './ReceptorType';
import SpecificType from '../core/SpecificType';

/** Generated from SHR definition for shr.oncology.HumanEpiduralGrowthFactorReceptor2Status */
class HumanEpiduralGrowthFactorReceptor2Status extends ReceptorStatusObservation {
    constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
            if (json.specificType) this._specificType = new SpecificType(json.specificType);
            if (json.receptorType) this._receptorType = new ReceptorType(json.receptorType);
        } else {
            this._entryInfo = Entry.createEntry(    "http://standardhealthrecord.org/oncology/HumanEpiduralGrowthFactorReceptor2Status",
                                                    "http://standardhealthrecord.org/oncology/ReceptorStatusObservation",
                                                    "http://standardhealthrecord.org/observation/Observation",
                                                    "http://standardhealthrecord.org/base/Action");
            this._specificType = new SpecificType({"value":{"coding": [{"value": "48676-1", "codeSystem": {"value":"http://loinc.org"}, "displayText": "Human Epidural Growth Factor"}]}});
            this._receptorType = new ReceptorType({"value": {"coding": [{"value": "C0069515", "codeSystem": {"value":"http://ncimeta.nci.nih.gov"}, "displayText": "Human Epidural Growth Factor"}]}});
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
   * Getter for shr.oncology.ReceptorType
   */
  get receptorType() {
    return this._receptorType;
  }

  /**
   * Setter for shr.oncology.ReceptorType
   */
  set receptorType(receptorTypeVal) {
    this._receptorType = receptorTypeVal;
  }

  /**
   * Getter for shr.observation.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Setter for shr.observation.Method
   */
  set method(methodVal) {
    this._method = methodVal;
  }

}

export default HumanEpiduralGrowthFactorReceptor2Status;
