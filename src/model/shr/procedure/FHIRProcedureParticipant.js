import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Participant from '../base/Participant';

/**
 * Generated class for shr.procedure.FHIRProcedureParticipant.
 * @extends Participant
 */
class FHIRProcedureParticipant extends Participant {

  /**
   * Get the choice value; one of: shr.entity.Practitioner reference, shr.entity.Organization reference, shr.entity.Patient reference, shr.entity.RelatedPerson reference, shr.entity.Device reference.
   * @returns {Reference} The choice value; one of: shr.entity.Practitioner reference, shr.entity.Organization reference, shr.entity.Patient reference, shr.entity.RelatedPerson reference, shr.entity.Device reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.entity.Practitioner reference, shr.entity.Organization reference, shr.entity.Patient reference, shr.entity.RelatedPerson reference, shr.entity.Device reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Practitioner reference, shr.entity.Organization reference, shr.entity.Patient reference, shr.entity.RelatedPerson reference, shr.entity.Device reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.entity.Practitioner reference, shr.entity.Organization reference, shr.entity.Patient reference, shr.entity.RelatedPerson reference, shr.entity.Device reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Practitioner reference, shr.entity.Organization reference, shr.entity.Patient reference, shr.entity.RelatedPerson reference, shr.entity.Device reference
   * @returns {FHIRProcedureParticipant} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FHIRProcedureParticipant class.
   * The JSON must be valid against the FHIRProcedureParticipant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FHIRProcedureParticipant} An instance of FHIRProcedureParticipant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FHIRProcedureParticipant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the FHIRProcedureParticipant class to a JSON object.
   * The JSON is expected to be valid against the FHIRProcedureParticipant JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/FHIRProcedureParticipant' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.participationType != null) {
      inst['ParticipationType'] = typeof this.participationType.toJSON === 'function' ? this.participationType.toJSON() : this.participationType;
    }
    if (this.participationPeriod != null) {
      inst['ParticipationPeriod'] = typeof this.participationPeriod.toJSON === 'function' ? this.participationPeriod.toJSON() : this.participationPeriod;
    }
    if (this.onBehalfOf != null) {
      inst['OnBehalfOf'] = typeof this.onBehalfOf.toJSON === 'function' ? this.onBehalfOf.toJSON() : this.onBehalfOf;
    }
    return inst;
  }

  /**
   * Serializes an instance of the FHIRProcedureParticipant class to a FHIR object.
   * The FHIR is expected to be valid against the FHIRProcedureParticipant FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the FHIRProcedureParticipant class.
   * The FHIR must be valid against the FHIRProcedureParticipant FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {FHIRProcedureParticipant} An instance of FHIRProcedureParticipant populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new FHIRProcedureParticipant();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default FHIRProcedureParticipant;
