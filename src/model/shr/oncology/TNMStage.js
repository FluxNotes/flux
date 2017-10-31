import CodeableConcept from '../core/CodeableConcept';
import Entry from '../base/Entry';
import Observation from '../observation/Observation';
import T_Stage from './T_Stage';
import N_Stage from './N_Stage';
import M_Stage from './M_Stage';

/** Generated from SHR definition for shr.oncology.TNMStage */
class TNMStage extends Observation {
    constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
            this.codeableConcept = new CodeableConcept(json.value);
            this._codeableConcept = this.codeableConcept;
            this._value = this.codeableConcept;
            if (json.tStage) this._t_Stage = new T_Stage(json.tStage);
            if (json.nStage) this._n_Stage = new N_Stage(json.nStage);
            if (json.mStage) this._m_Stage = new M_Stage(json.mStage);
        } else {
            this._entryInfo = Entry.createEntry(    "http://standardhealthrecord.org/oncology/TNMStage",
                                                    "http://standardhealthrecord.org/observation/Observation",
                                                    "http://standardhealthrecord.org/base/Action");
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
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

  /**
   * Getter for shr.oncology.StagingSystem
   */
  get stagingSystem() {
    return this._stagingSystem;
  }

  /**
   * Setter for shr.oncology.StagingSystem
   */
  set stagingSystem(stagingSystemVal) {
    this._stagingSystem = stagingSystemVal;
  }

  /**
   * Getter for shr.oncology.StagingTiming
   */
  get stagingTiming() {
    return this._stagingTiming;
  }

  /**
   * Setter for shr.oncology.StagingTiming
   */
  set stagingTiming(stagingTimingVal) {
    this._stagingTiming = stagingTimingVal;
  }

  /**
   * Getter for shr.oncology.T-Stage
   */
  get t_Stage() {
    return this._t_Stage;
  }

  /**
   * Setter for shr.oncology.T-Stage
   */
  set t_Stage(t_StageVal) {
    this._t_Stage = t_StageVal;
  }

  /**
   * Getter for shr.oncology.N-Stage
   */
  get n_Stage() {
    return this._n_Stage;
  }

  /**
   * Setter for shr.oncology.N-Stage
   */
  set n_Stage(n_StageVal) {
    this._n_Stage = n_StageVal;
  }

  /**
   * Getter for shr.oncology.M-Stage
   */
  get m_Stage() {
    return this._m_Stage;
  }

  /**
   * Setter for shr.oncology.M-Stage
   */
  set m_Stage(m_StageVal) {
    this._m_Stage = m_StageVal;
  }

}

export default TNMStage;
