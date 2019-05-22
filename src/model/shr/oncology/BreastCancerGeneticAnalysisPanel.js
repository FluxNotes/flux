/* eslint-disable */
import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../base/Observation';

/**
 * Generated class for shr.oncology.BreastCancerGeneticAnalysisPanel.
 * @extends Observation
 */
class BreastCancerGeneticAnalysisPanel extends Observation {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {BreastCancerGeneticAnalysisPanel} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Set the ObservationCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   * @returns {BreastCancerGeneticAnalysisPanel} this.
   */
  withObservationCode(observationCode) {
    this.observationCode = observationCode; return this;
  }

  /**
   * Get the Members.
   * @returns {Members} The shr.finding.Members
   */
  get members() {
    return this._members;
  }

  /**
   * Set the Members.
   * This field/value is required.
   * @param {Members} members - The shr.finding.Members
   */
  set members(members) {
    this._members = members;
  }

  /**
   * Set the Members and return 'this' for chaining.
   * This field/value is required.
   * @param {Members} members - The shr.finding.Members
   * @returns {BreastCancerGeneticAnalysisPanel} this.
   */
  withMembers(members) {
    this.members = members; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastCancerGeneticAnalysisPanel class.
   * The JSON must be valid against the BreastCancerGeneticAnalysisPanel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancerGeneticAnalysisPanel} An instance of BreastCancerGeneticAnalysisPanel populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastCancerGeneticAnalysisPanel();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastCancerGeneticAnalysisPanel class to a JSON object.
   * The JSON is expected to be valid against the BreastCancerGeneticAnalysisPanel JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastCancerGeneticAnalysisPanel' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.valueAbsentReason != null) {
      inst['ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.relevantTime != null) {
      inst['relevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.changeFlag != null) {
      inst['ChangeFlag'] = typeof this.changeFlag.toJSON === 'function' ? this.changeFlag.toJSON() : this.changeFlag;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.observationQualifier != null) {
      inst['ObservationQualifier'] = this.observationQualifier.map(f => f.toJSON());
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.observationComponent != null) {
      inst['ObservationComponent'] = this.observationComponent.map(f => f.toJSON());
    }
    if (this.members != null) {
      inst['Members'] = typeof this.members.toJSON === 'function' ? this.members.toJSON() : this.members;
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BreastCancerGeneticAnalysisPanel class to a FHIR object.
   * The FHIR is expected to be valid against the BreastCancerGeneticAnalysisPanel FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.focalSubject != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubject.toFHIR(true));
    }
    if (this.focalSubjectReference != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubjectReference.toFHIR(true));
    }
    if (this.evidence != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.evidence.toFHIR(true));
    }
    if (this.changeFlag != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.changeFlag.toFHIR(true));
    }
    if (this.observationQualifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.observationQualifier.toFHIR(true));
    }
    if (this.findingStatus != null) {
      inst['status'] = typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR() : this.findingStatus;
    }
    if (this.category != null) {
      inst['category'] = inst['category'] || [];
      inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.observationCode != null) {
      inst['code'] = typeof this.observationCode.toFHIR === 'function' ? this.observationCode.toFHIR() : this.observationCode;
    }
    if (this.subject != null) {
      inst['subject'] = typeof this.subject.toFHIR === 'function' ? this.subject.toFHIR() : this.subject;
    }
    if (this.relatedEncounter != null) {
      inst['context'] = typeof this.relatedEncounter.toFHIR === 'function' ? this.relatedEncounter.toFHIR() : this.relatedEncounter;
    }
    if (this.relevantTime != null) {
      inst['effective[x]'] = typeof this.relevantTime.toFHIR === 'function' ? this.relevantTime.toFHIR() : this.relevantTime;
    }
    if (this.valueAbsentReason != null) {
      inst['dataAbsentReason'] = typeof this.valueAbsentReason.toFHIR === 'function' ? this.valueAbsentReason.toFHIR() : this.valueAbsentReason;
    }
    if (this.interpretation != null) {
      inst['interpretation'] = typeof this.interpretation.toFHIR === 'function' ? this.interpretation.toFHIR() : this.interpretation;
    }
    if (this.details != null) {
      inst['comment'] = typeof this.details.toFHIR === 'function' ? this.details.toFHIR() : this.details;
    }
    if (this.bodySite != null) {
      inst['bodySite'] = typeof this.bodySite.toFHIR === 'function' ? this.bodySite.toFHIR() : this.bodySite;
    }
    if (this.findingMethod != null) {
      inst['method'] = typeof this.findingMethod.toFHIR === 'function' ? this.findingMethod.toFHIR() : this.findingMethod;
    }
    if (this.specimen != null) {
      inst['specimen'] = typeof this.specimen.toFHIR === 'function' ? this.specimen.toFHIR() : this.specimen;
    }
    if (this.device != null) {
      inst['device'] = typeof this.device.toFHIR === 'function' ? this.device.toFHIR() : this.device;
    }
    if (this.referenceRange != null) {
      inst['referenceRange'] = inst['referenceRange'] || [];
      inst['referenceRange'].concat(this.referenceRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.lowerBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['low'] = inst['referenceRange']['low'] || [];
      inst['referenceRange']['low'].concat(this.referenceRange.range.lowerBound.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.upperBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['high'] = inst['referenceRange']['high'] || [];
      inst['referenceRange']['high'].concat(this.referenceRange.range.upperBound.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.type != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['type'] = inst['referenceRange']['type'] || [];
      inst['referenceRange']['type'].concat(this.referenceRange.type.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.applicableSubpopulation != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['appliesTo'] = inst['referenceRange']['appliesTo'] || [];
      inst['referenceRange']['appliesTo'].concat(this.referenceRange.applicableSubpopulation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.applicableAgeRange != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['age'] = inst['referenceRange']['age'] || [];
      inst['referenceRange']['age'].concat(this.referenceRange.applicableAgeRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.members != null && this.members.observation != null) {
      if (inst['related'] === undefined) {
        inst['related'] = [];
      }
      this.members.observation.forEach((elem) => {
        let containerInst = {};
        containerInst['target'] = {};
        containerInst['target'] = typeof elem.toFHIR === 'function' ? elem.toFHIR() : elem;
        inst['related'].push(containerInst);
      }
      );
    }
    if (this.observationComponent != null) {
      inst['component'] = inst['component'] || [];
      inst['component'].concat(this.observationComponent.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.observationComponent != null && this.observationComponent.observationCode != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['code'] = inst['component']['code'] || [];
      inst['component']['code'].concat(this.observationComponent.observationCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.observationComponent != null && this.observationComponent.quantity != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['value[x]'] = inst['component']['value[x]'] || [];
      inst['component']['value[x]'].concat(this.observationComponent.quantity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.observationComponent != null && this.observationComponent.valueAbsentReason != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['dataAbsentReason'] = inst['component']['dataAbsentReason'] || [];
      inst['component']['dataAbsentReason'].concat(this.observationComponent.valueAbsentReason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.observationComponent != null && this.observationComponent.interpretation != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['interpretation'] = inst['component']['interpretation'] || [];
      inst['component']['interpretation'].concat(this.observationComponent.interpretation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.observationComponent != null && this.observationComponent.referenceRange != null) {
      if (inst['component'] === undefined) {
        inst['component'] = {};
      }
      inst['component']['referenceRange'] = inst['component']['referenceRange'] || [];
      inst['component']['referenceRange'].concat(this.observationComponent.referenceRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default BreastCancerGeneticAnalysisPanel;
