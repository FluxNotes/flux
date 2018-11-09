import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Participant.
 */
class Participant {

  /**
   * Get the value (aliases entityOrRole).
   * @returns {Reference} The shr.entity.EntityOrRole reference
   */
  get value() {
    return this._entityOrRole;
  }

  /**
   * Set the value (aliases entityOrRole).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.EntityOrRole reference
   */
  set value(value) {
    this._entityOrRole = value;
  }

  /**
   * Set the value (aliases entityOrRole) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.EntityOrRole reference
   * @returns {Participant} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.EntityOrRole reference.
   * @returns {Reference} The shr.entity.EntityOrRole reference
   */
  get entityOrRole() {
    return this._entityOrRole;
  }

  /**
   * Set the shr.entity.EntityOrRole reference.
   * This field/value is required.
   * @param {Reference} entityOrRole - The shr.entity.EntityOrRole reference
   */
  set entityOrRole(entityOrRole) {
    this._entityOrRole = entityOrRole;
  }

  /**
   * Set the shr.entity.EntityOrRole reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} entityOrRole - The shr.entity.EntityOrRole reference
   * @returns {Participant} this.
   */
  withEntityOrRole(entityOrRole) {
    this.entityOrRole = entityOrRole; return this;
  }

  /**
   * Get the ParticipationType.
   * @returns {ParticipationType} The shr.base.ParticipationType
   */
  get participationType() {
    return this._participationType;
  }

  /**
   * Set the ParticipationType.
   * @param {ParticipationType} participationType - The shr.base.ParticipationType
   */
  set participationType(participationType) {
    this._participationType = participationType;
  }

  /**
   * Set the ParticipationType and return 'this' for chaining.
   * @param {ParticipationType} participationType - The shr.base.ParticipationType
   * @returns {Participant} this.
   */
  withParticipationType(participationType) {
    this.participationType = participationType; return this;
  }

  /**
   * Get the ParticipationPeriod.
   * @returns {ParticipationPeriod} The shr.base.ParticipationPeriod
   */
  get participationPeriod() {
    return this._participationPeriod;
  }

  /**
   * Set the ParticipationPeriod.
   * @param {ParticipationPeriod} participationPeriod - The shr.base.ParticipationPeriod
   */
  set participationPeriod(participationPeriod) {
    this._participationPeriod = participationPeriod;
  }

  /**
   * Set the ParticipationPeriod and return 'this' for chaining.
   * @param {ParticipationPeriod} participationPeriod - The shr.base.ParticipationPeriod
   * @returns {Participant} this.
   */
  withParticipationPeriod(participationPeriod) {
    this.participationPeriod = participationPeriod; return this;
  }

  /**
   * Get the OnBehalfOf.
   * @returns {OnBehalfOf} The shr.core.OnBehalfOf
   */
  get onBehalfOf() {
    return this._onBehalfOf;
  }

  /**
   * Set the OnBehalfOf.
   * @param {OnBehalfOf} onBehalfOf - The shr.core.OnBehalfOf
   */
  set onBehalfOf(onBehalfOf) {
    this._onBehalfOf = onBehalfOf;
  }

  /**
   * Set the OnBehalfOf and return 'this' for chaining.
   * @param {OnBehalfOf} onBehalfOf - The shr.core.OnBehalfOf
   * @returns {Participant} this.
   */
  withOnBehalfOf(onBehalfOf) {
    this.onBehalfOf = onBehalfOf; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Participant class.
   * The JSON must be valid against the Participant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Participant} An instance of Participant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Participant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Participant class to a JSON object.
   * The JSON is expected to be valid against the Participant JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Participant' } };
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
   * Serializes an instance of the Participant class to a FHIR object.
   * The FHIR is expected to be valid against the Participant FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.entityOrRole != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.entityOrRole.toFHIR(true));
      }
      if (this.participationType != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.participationType.toFHIR(true));
      }
      if (this.participationPeriod != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.participationPeriod.toFHIR(true));
      }
      if (this.onBehalfOf != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.onBehalfOf.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-Participant-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Participant class.
   * The FHIR must be valid against the Participant FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Participant} An instance of Participant populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Participant();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-EntityOrRole-extension');
      if (match_1 != null) {
        inst.entityOrRole = createInstanceFromFHIR('shr.entity.EntityOrRole', match_1, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ParticipationType-extension');
      if (match_2 != null) {
        inst.participationType = createInstanceFromFHIR('shr.base.ParticipationType', match_2, true);
      }
      const match_3 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ParticipationPeriod-extension');
      if (match_3 != null) {
        inst.participationPeriod = createInstanceFromFHIR('shr.base.ParticipationPeriod', match_3, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-OnBehalfOf-extension');
      if (match_4 != null) {
        inst.onBehalfOf = createInstanceFromFHIR('shr.core.OnBehalfOf', match_4, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.entity.EntityOrRole', fhir);
    }
    return inst;
  }

}
export default Participant;
