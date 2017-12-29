import Category from '../base/Category';
import ClinicalStatus from './ClinicalStatus';
import Entry from '../base/Entry';
import ShrObjectFactory from '../../ShrObjectFactory';
import SpecificType from '../core/SpecificType';
import WhenClinicallyRecognized from './WhenClinicallyRecognized';

var Condition;

export function initCondition() {
    if (Condition) {
        return;
    }
    
    /** Generated from SHR definition for shr.condition.Condition */
    Condition = class Condition {
        constructor(json) {
            if (json) {
                this._entryInfo = new Entry(json);
                this._specificType = new SpecificType(json.specificType);
                if (json.category) this._category = json.category.map((c) => new Category(c));
                if (json.clinicalStatus) this._clinicalStatus = new ClinicalStatus(json.clinicalStatus);
                this._whenClinicallyRecognized = new WhenClinicallyRecognized(json.whenClinicallyRecognized);
                if (json.observation) this._observation = json.observation.map((o) => ShrObjectFactory.createInstance(o.entryType[0], o));
            } else {
                this._entryInfo = Entry.createEntry("http://standardhealthrecord.org/condition/Condition");
            }
        }

        fromFHIR(entry) {
            const resource = entry.resource;
            this._specificType = new SpecificType();
            this._specificType.fromFHIR(resource.code);
        }

      get entryInfo() {
        return this._entryInfo;
      }

      set entryInfo(entryVal) {
        this._entryInfo = entryVal;
      }

      get specificType() {
        return this._specificType;
      }

      set specificType(specificTypeVal) {
        this._specificType = specificTypeVal;
      }

      get category() {
        return this._category;
      }

      set category(categoryVal) {
        this._category = categoryVal;
      }

      get clinicalStatus() {
        return this._clinicalStatus;
      }

      set clinicalStatus(clinicalStatusVal) {
        this._clinicalStatus = clinicalStatusVal;
      }

      get includeOnProblemList() {
        return this._includeOnProblemList;
      }

      set includeOnProblemList(includeOnProblemListVal) {
        this._includeOnProblemList = includeOnProblemListVal;
      }

      get onset() {
        return this._onset;
      }

      set onset(onsetVal) {
        this._onset = onsetVal;
      }

      get whenClinicallyRecognized() {
        return this._whenClinicallyRecognized;
      }

      set whenClinicallyRecognized(whenClinicallyRecognizedVal) {
        this._whenClinicallyRecognized = whenClinicallyRecognizedVal;
      }

      get preexisting() {
        return this._preexisting;
      }

      set preexisting(preexistingVal) {
        this._preexisting = preexistingVal;
      }

      get abatement() {
        return this._abatement;
      }

      set abatement(abatementVal) {
        this._abatement = abatementVal;
      }

      get bodySite() {
        return this._bodySite;
      }

      set bodySite(bodySiteVal) {
        this._bodySite = bodySiteVal;
      }

      get severity() {
        return this._severity;
      }

      set severity(severityVal) {
        this._severity = severityVal;
      }

      get criticality() {
        return this._criticality;
      }

      set criticality(criticalityVal) {
        this._criticality = criticalityVal;
      }

      get stage() {
        return this._stage;
      }

      set stage(stageVal) {
        this._stage = stageVal;
      }

      get observation() {
        return this._observation;
      }

      set observation(observationVal) {
        this._observation = observationVal;
      }
    }
}

initCondition();

export {Condition as default};