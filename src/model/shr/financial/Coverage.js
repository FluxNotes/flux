// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import DomainResource from '../core/DomainResource';

/**
 * Generated class for shr.financial.Coverage.
 * @extends DomainResource
 */
class Coverage extends DomainResource {

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
   * @returns {Coverage} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * @param {Status} status - The shr.core.Status
   * @returns {Coverage} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the CoverageType.
   * @returns {CoverageType} The shr.financial.CoverageType
   */
  get coverageType() {
    return this._coverageType;
  }

  /**
   * Set the CoverageType.
   * @param {CoverageType} coverageType - The shr.financial.CoverageType
   */
  set coverageType(coverageType) {
    this._coverageType = coverageType;
  }

  /**
   * Set the CoverageType and return 'this' for chaining.
   * @param {CoverageType} coverageType - The shr.financial.CoverageType
   * @returns {Coverage} this.
   */
  withCoverageType(coverageType) {
    this.coverageType = coverageType; return this;
  }

  /**
   * Get the Subscriber.
   * @returns {Subscriber} The shr.financial.Subscriber
   */
  get subscriber() {
    return this._subscriber;
  }

  /**
   * Set the Subscriber.
   * @param {Subscriber} subscriber - The shr.financial.Subscriber
   */
  set subscriber(subscriber) {
    this._subscriber = subscriber;
  }

  /**
   * Set the Subscriber and return 'this' for chaining.
   * @param {Subscriber} subscriber - The shr.financial.Subscriber
   * @returns {Coverage} this.
   */
  withSubscriber(subscriber) {
    this.subscriber = subscriber; return this;
  }

  /**
   * Get the SubscriberId.
   * @returns {SubscriberId} The shr.financial.SubscriberId
   */
  get subscriberId() {
    return this._subscriberId;
  }

  /**
   * Set the SubscriberId.
   * @param {SubscriberId} subscriberId - The shr.financial.SubscriberId
   */
  set subscriberId(subscriberId) {
    this._subscriberId = subscriberId;
  }

  /**
   * Set the SubscriberId and return 'this' for chaining.
   * @param {SubscriberId} subscriberId - The shr.financial.SubscriberId
   * @returns {Coverage} this.
   */
  withSubscriberId(subscriberId) {
    this.subscriberId = subscriberId; return this;
  }

  /**
   * Get the Beneficiary.
   * @returns {Beneficiary} The shr.financial.Beneficiary
   */
  get beneficiary() {
    return this._beneficiary;
  }

  /**
   * Set the Beneficiary.
   * @param {Beneficiary} beneficiary - The shr.financial.Beneficiary
   */
  set beneficiary(beneficiary) {
    this._beneficiary = beneficiary;
  }

  /**
   * Set the Beneficiary and return 'this' for chaining.
   * @param {Beneficiary} beneficiary - The shr.financial.Beneficiary
   * @returns {Coverage} this.
   */
  withBeneficiary(beneficiary) {
    this.beneficiary = beneficiary; return this;
  }

  /**
   * Get the PolicyHolder.
   * @returns {PolicyHolder} The shr.financial.PolicyHolder
   */
  get policyHolder() {
    return this._policyHolder;
  }

  /**
   * Set the PolicyHolder.
   * @param {PolicyHolder} policyHolder - The shr.financial.PolicyHolder
   */
  set policyHolder(policyHolder) {
    this._policyHolder = policyHolder;
  }

  /**
   * Set the PolicyHolder and return 'this' for chaining.
   * @param {PolicyHolder} policyHolder - The shr.financial.PolicyHolder
   * @returns {Coverage} this.
   */
  withPolicyHolder(policyHolder) {
    this.policyHolder = policyHolder; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {Coverage} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Coverage class.
   * The JSON must be valid against the Coverage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Coverage} An instance of Coverage populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.financial', 'Coverage');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Coverage class to a JSON object.
   * The JSON is expected to be valid against the Coverage JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/financial/Coverage' };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.coverageType != null) {
      inst['CoverageType'] = typeof this.coverageType.toJSON === 'function' ? this.coverageType.toJSON() : this.coverageType;
    }
    if (this.subscriber != null) {
      inst['Subscriber'] = typeof this.subscriber.toJSON === 'function' ? this.subscriber.toJSON() : this.subscriber;
    }
    if (this.subscriberId != null) {
      inst['SubscriberId'] = typeof this.subscriberId.toJSON === 'function' ? this.subscriberId.toJSON() : this.subscriberId;
    }
    if (this.beneficiary != null) {
      inst['Beneficiary'] = typeof this.beneficiary.toJSON === 'function' ? this.beneficiary.toJSON() : this.beneficiary;
    }
    if (this.policyHolder != null) {
      inst['PolicyHolder'] = typeof this.policyHolder.toJSON === 'function' ? this.policyHolder.toJSON() : this.policyHolder;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Coverage class.
   * The FHIR must be valid against the Coverage FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Coverage} An instance of Coverage populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.financial', 'Coverage');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/financial/Coverage', 'uri');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.status.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-financial-Beneficiary-extension') {
        inst.beneficiary = FHIRHelper.createInstanceFromFHIR('shr.financial.Beneficiary', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-financial-PolicyHolder-extension') {
        inst.policyHolder = FHIRHelper.createInstanceFromFHIR('shr.financial.PolicyHolder', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.coverageType = FHIRHelper.createInstanceFromFHIR('shr.financial.CoverageType', fhir['type'], 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['subscriberId'] != null) {
      inst.subscriberId = FHIRHelper.createInstanceFromFHIR('shr.financial.SubscriberId', fhir['subscriberId'], 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['subscriber'] != null) {
      const entryId = fhir['subscriber']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.subscriber = mappedResources[entryId];
    }
    return inst;
  }

}
export default Coverage;
