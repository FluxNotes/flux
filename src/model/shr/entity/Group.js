import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Group.
 * @extends Entity
 */
class Group extends Entity {

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
   * @returns {Group} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The shr.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   * @returns {Group} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {Group} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Set the Title and return 'this' for chaining.
   * @param {Title} title - The shr.core.Title
   * @returns {Group} this.
   */
  withTitle(title) {
    this.title = title; return this;
  }

  /**
   * Get the Actual.
   * @returns {Actual} The shr.entity.Actual
   */
  get actual() {
    return this._actual;
  }

  /**
   * Set the Actual.
   * This field/value is required.
   * @param {Actual} actual - The shr.entity.Actual
   */
  set actual(actual) {
    this._actual = actual;
  }

  /**
   * Set the Actual and return 'this' for chaining.
   * This field/value is required.
   * @param {Actual} actual - The shr.entity.Actual
   * @returns {Group} this.
   */
  withActual(actual) {
    this.actual = actual; return this;
  }

  /**
   * Get the GroupCharacteristic array.
   * @returns {Array<GroupCharacteristic>} The shr.entity.GroupCharacteristic array
   */
  get groupCharacteristic() {
    return this._groupCharacteristic;
  }

  /**
   * Set the GroupCharacteristic array.
   * @param {Array<GroupCharacteristic>} groupCharacteristic - The shr.entity.GroupCharacteristic array
   */
  set groupCharacteristic(groupCharacteristic) {
    this._groupCharacteristic = groupCharacteristic;
  }

  /**
   * Set the GroupCharacteristic array and return 'this' for chaining.
   * @param {Array<GroupCharacteristic>} groupCharacteristic - The shr.entity.GroupCharacteristic array
   * @returns {Group} this.
   */
  withGroupCharacteristic(groupCharacteristic) {
    this.groupCharacteristic = groupCharacteristic; return this;
  }

  /**
   * Get the MemberParticipation array.
   * @returns {Array<MemberParticipation>} The shr.entity.MemberParticipation array
   */
  get memberParticipation() {
    return this._memberParticipation;
  }

  /**
   * Set the MemberParticipation array.
   * @param {Array<MemberParticipation>} memberParticipation - The shr.entity.MemberParticipation array
   */
  set memberParticipation(memberParticipation) {
    this._memberParticipation = memberParticipation;
  }

  /**
   * Set the MemberParticipation array and return 'this' for chaining.
   * @param {Array<MemberParticipation>} memberParticipation - The shr.entity.MemberParticipation array
   * @returns {Group} this.
   */
  withMemberParticipation(memberParticipation) {
    this.memberParticipation = memberParticipation; return this;
  }

  /**
   * Get the Count.
   * @returns {Count} The shr.core.Count
   */
  get count() {
    return this._count;
  }

  /**
   * Set the Count.
   * @param {Count} count - The shr.core.Count
   */
  set count(count) {
    this._count = count;
  }

  /**
   * Set the Count and return 'this' for chaining.
   * @param {Count} count - The shr.core.Count
   * @returns {Group} this.
   */
  withCount(count) {
    this.count = count; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Group class.
   * The JSON must be valid against the Group JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Group} An instance of Group populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Group();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Group class to a JSON object.
   * The JSON is expected to be valid against the Group JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Group' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.actual != null) {
      inst['Actual'] = typeof this.actual.toJSON === 'function' ? this.actual.toJSON() : this.actual;
    }
    if (this.groupCharacteristic != null) {
      inst['GroupCharacteristic'] = this.groupCharacteristic.map(f => f.toJSON());
    }
    if (this.memberParticipation != null) {
      inst['MemberParticipation'] = this.memberParticipation.map(f => f.toJSON());
    }
    if (this.count != null) {
      inst['Count'] = typeof this.count.toJSON === 'function' ? this.count.toJSON() : this.count;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Group class.
   * The FHIR must be valid against the Group FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Group} An instance of Group populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Group();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Group');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.entity.PartOf', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-ActiveFlag-extension') {
        inst.activeFlag = FHIRHelper.createInstanceFromFHIR('shr.entity.ActiveFlag', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['actual'] != null) {
      inst.actual = FHIRHelper.createInstanceFromFHIR('shr.entity.Actual', fhir['actual'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['name'] != null) {
      inst.title = FHIRHelper.createInstanceFromFHIR('shr.core.Title', fhir['name'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['quantity'] != null) {
      inst.count = FHIRHelper.createInstanceFromFHIR('shr.core.Count', fhir['quantity'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['characteristic'] != null && fhir['characteristic'][0] != null) {
      if (fhir['characteristic'][0]['code'] != null) {
        inst.groupCharacteristic = inst.groupCharacteristic || [];
        const inst_groupCharacteristic = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristic', {}, shrId);
        inst.groupCharacteristic.push(inst_groupCharacteristic);
        inst_groupCharacteristic.groupCharacteristicCode = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristicCode', fhir['characteristic'][0]['code'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['characteristic'][0]['valueBoolean'] != null) {
        inst.groupCharacteristic = inst.groupCharacteristic || [];
        const inst_groupCharacteristic = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristic', {}, shrId);
        inst.groupCharacteristic.push(inst_groupCharacteristic);
        inst_groupCharacteristic.groupCharacteristicValue = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristicValue', fhir['characteristic'][0]['valueBoolean'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['characteristic'][0]['valueQuantity'] != null) {
        inst.groupCharacteristic = inst.groupCharacteristic || [];
        const inst_groupCharacteristic = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristic', {}, shrId);
        inst.groupCharacteristic.push(inst_groupCharacteristic);
        inst_groupCharacteristic.groupCharacteristicValue = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristicValue', fhir['characteristic'][0]['valueQuantity'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['characteristic'][0]['valueRange'] != null) {
        inst.groupCharacteristic = inst.groupCharacteristic || [];
        const inst_groupCharacteristic = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristic', {}, shrId);
        inst.groupCharacteristic.push(inst_groupCharacteristic);
        inst_groupCharacteristic.groupCharacteristicValue = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristicValue', fhir['characteristic'][0]['valueRange'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['characteristic'][0]['exclude'] != null) {
        inst.groupCharacteristic = inst.groupCharacteristic || [];
        const inst_groupCharacteristic = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristic', {}, shrId);
        inst.groupCharacteristic.push(inst_groupCharacteristic);
        inst_groupCharacteristic.excludeFlag = FHIRHelper.createInstanceFromFHIR('shr.entity.ExcludeFlag', fhir['characteristic'][0]['exclude'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['characteristic'][0]['period'] != null) {
        inst.groupCharacteristic = inst.groupCharacteristic || [];
        const inst_groupCharacteristic = FHIRHelper.createInstanceFromFHIR('shr.entity.GroupCharacteristic', {}, shrId);
        inst.groupCharacteristic.push(inst_groupCharacteristic);
        inst_groupCharacteristic.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir['characteristic'][0]['period'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['member'] != null && fhir['member'][0] != null) {
      if (fhir['member'][0]['entity'] != null) {
        inst.memberParticipation = inst.memberParticipation || [];
        const inst_memberParticipation = FHIRHelper.createInstanceFromFHIR('shr.entity.MemberParticipation', {}, shrId);
        inst.memberParticipation.push(inst_memberParticipation);
        const entryId = fhir['member'][0]['entity']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst_memberParticipation.member = mappedResources[entryId];
      }
      if (fhir['member'][0]['period'] != null) {
        inst.memberParticipation = inst.memberParticipation || [];
        const inst_memberParticipation = FHIRHelper.createInstanceFromFHIR('shr.entity.MemberParticipation', {}, shrId);
        inst.memberParticipation.push(inst_memberParticipation);
        inst_memberParticipation.participationPeriod = FHIRHelper.createInstanceFromFHIR('shr.base.ParticipationPeriod', fhir['member'][0]['period'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['member'][0]['inactive'] != null) {
        inst.memberParticipation = inst.memberParticipation || [];
        const inst_memberParticipation = FHIRHelper.createInstanceFromFHIR('shr.entity.MemberParticipation', {}, shrId);
        inst.memberParticipation.push(inst_memberParticipation);
        inst_memberParticipation.inactiveFlag = FHIRHelper.createInstanceFromFHIR('shr.entity.InactiveFlag', fhir['member'][0]['inactive'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default Group;
