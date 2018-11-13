import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Serializes an instance of the Group class to a FHIR object.
   * The FHIR is expected to be valid against the Group FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Group';
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.activeFlag != null) {
      inst['active'] = typeof this.activeFlag.toFHIR === 'function' ? this.activeFlag.toFHIR() : this.activeFlag;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.actual != null) {
      inst['actual'] = typeof this.actual.toFHIR === 'function' ? this.actual.toFHIR() : this.actual;
    }
    if (this.title != null) {
      inst['name'] = typeof this.title.toFHIR === 'function' ? this.title.toFHIR() : this.title;
    }
    if (this.count != null) {
      inst['quantity'] = typeof this.count.toFHIR === 'function' ? this.count.toFHIR() : this.count;
    }
    if (this.groupCharacteristic != null && this.groupCharacteristic.groupCharacteristicCode != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['code'] = inst ['characteristic']['code'] || [];
      inst['characteristic']['code'] = inst['characteristic']['code'].concat(this.groupCharacteristic.groupCharacteristicCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.groupCharacteristic != null && this.groupCharacteristic.groupCharacteristicValue != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['value[x]'] = inst ['characteristic']['value[x]'] || [];
      inst['characteristic']['value[x]'] = inst['characteristic']['value[x]'].concat(this.groupCharacteristic.groupCharacteristicValue.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.groupCharacteristic != null && this.groupCharacteristic.excludeFlag != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['exclude'] = inst ['characteristic']['exclude'] || [];
      inst['characteristic']['exclude'] = inst['characteristic']['exclude'].concat(this.groupCharacteristic.excludeFlag.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.groupCharacteristic != null && this.groupCharacteristic.timePeriod != null) {
      if(inst['characteristic'] === undefined) {
        inst['characteristic'] = {};
      }
      inst['characteristic']['period'] = inst ['characteristic']['period'] || [];
      inst['characteristic']['period'] = inst['characteristic']['period'].concat(this.groupCharacteristic.timePeriod.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.memberParticipation != null && this.memberParticipation.member != null) {
      if(inst['member'] === undefined) {
        inst['member'] = {};
      }
      inst['member']['entity'] = inst ['member']['entity'] || [];
      inst['member']['entity'] = inst['member']['entity'].concat(this.memberParticipation.member.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.memberParticipation != null && this.memberParticipation.participationPeriod != null) {
      if(inst['member'] === undefined) {
        inst['member'] = {};
      }
      inst['member']['period'] = inst ['member']['period'] || [];
      inst['member']['period'] = inst['member']['period'].concat(this.memberParticipation.participationPeriod.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.memberParticipation != null && this.memberParticipation.activeFlag != null) {
      if(inst['member'] === undefined) {
        inst['member'] = {};
      }
      inst['member']['inactive'] = inst ['member']['inactive'] || [];
      inst['member']['inactive'] = inst['member']['inactive'].concat(this.memberParticipation.activeFlag.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Group class.
   * The FHIR must be valid against the Group FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Group} An instance of Group populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Group();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['active'] != null) {
      inst.activeFlag = createInstanceFromFHIR('shr.entity.ActiveFlag', fhir['active']);
    }
    if (fhir['type'] != null) {
      inst.type = createInstanceFromFHIR('shr.core.Type', fhir['type']);
    }
    if (fhir['actual'] != null) {
      inst.actual = createInstanceFromFHIR('shr.entity.Actual', fhir['actual']);
    }
    if (fhir['name'] != null) {
      inst.title = createInstanceFromFHIR('shr.core.Title', fhir['name']);
    }
    if (fhir['quantity'] != null) {
      inst.count = createInstanceFromFHIR('shr.core.Count', fhir['quantity']);
    }
    if (fhir['characteristic'] != null && fhir['characteristic']['code'] != null) {
      if(inst.groupCharacteristic == null) {
        inst.groupCharacteristic = createInstanceFromFHIR('shr.entity.GroupCharacteristic', {});
      }
      inst.groupCharacteristic.groupCharacteristicCode = createInstanceFromFHIR('shr.entity.GroupCharacteristicCode', fhir['characteristic']['code']);
    }
    if (fhir['characteristic'] != null && fhir['characteristic']['valueBoolean'] != null) {
      if(inst.groupCharacteristic == null) {
        inst.groupCharacteristic = createInstanceFromFHIR('shr.entity.GroupCharacteristic', {});
      }
      inst.groupCharacteristic.groupCharacteristicValue = createInstanceFromFHIR('shr.entity.GroupCharacteristicValue', fhir['characteristic']['valueBoolean']);
    }
    if (fhir['characteristic'] != null && fhir['characteristic']['valueQuantity'] != null) {
      if(inst.groupCharacteristic == null) {
        inst.groupCharacteristic = createInstanceFromFHIR('shr.entity.GroupCharacteristic', {});
      }
      inst.groupCharacteristic.groupCharacteristicValue = createInstanceFromFHIR('shr.entity.GroupCharacteristicValue', fhir['characteristic']['valueQuantity']);
    }
    if (fhir['characteristic'] != null && fhir['characteristic']['valueRange'] != null) {
      if(inst.groupCharacteristic == null) {
        inst.groupCharacteristic = createInstanceFromFHIR('shr.entity.GroupCharacteristic', {});
      }
      inst.groupCharacteristic.groupCharacteristicValue = createInstanceFromFHIR('shr.entity.GroupCharacteristicValue', fhir['characteristic']['valueRange']);
    }
    if (fhir['characteristic'] != null && fhir['characteristic']['exclude'] != null) {
      if(inst.groupCharacteristic == null) {
        inst.groupCharacteristic = createInstanceFromFHIR('shr.entity.GroupCharacteristic', {});
      }
      inst.groupCharacteristic.excludeFlag = createInstanceFromFHIR('shr.entity.ExcludeFlag', fhir['characteristic']['exclude']);
    }
    if (fhir['characteristic'] != null && fhir['characteristic']['period'] != null) {
      if(inst.groupCharacteristic == null) {
        inst.groupCharacteristic = createInstanceFromFHIR('shr.entity.GroupCharacteristic', {});
      }
      inst.groupCharacteristic.timePeriod = createInstanceFromFHIR('shr.core.TimePeriod', fhir['characteristic']['period']);
    }
    if (fhir['member'] != null && fhir['member']['entity'] != null) {
      if(inst.memberParticipation == null) {
        inst.memberParticipation = createInstanceFromFHIR('shr.entity.MemberParticipation', {});
      }
      inst.memberParticipation.member = createInstanceFromFHIR('shr.entity.Member', fhir['member']['entity']);
    }
    if (fhir['member'] != null && fhir['member']['period'] != null) {
      if(inst.memberParticipation == null) {
        inst.memberParticipation = createInstanceFromFHIR('shr.entity.MemberParticipation', {});
      }
      inst.memberParticipation.participationPeriod = createInstanceFromFHIR('shr.base.ParticipationPeriod', fhir['member']['period']);
    }
    if (fhir['member'] != null && fhir['member']['inactive'] != null) {
      if(inst.memberParticipation == null) {
        inst.memberParticipation = createInstanceFromFHIR('shr.entity.MemberParticipation', {});
      }
      inst.memberParticipation.activeFlag = createInstanceFromFHIR('shr.entity.ActiveFlag', fhir['member']['inactive']);
    }
    return inst;
  }

}
export default Group;
