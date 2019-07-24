// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.ValueSetExpansion.
 */
class ValueSetExpansion {

  /**
   * Get the Url.
   * @returns {Url} The shr.core.Url
   */
  get url() {
    return this._url;
  }

  /**
   * Set the Url.
   * @param {Url} url - The shr.core.Url
   */
  set url(url) {
    this._url = url;
  }

  /**
   * Set the Url and return 'this' for chaining.
   * @param {Url} url - The shr.core.Url
   * @returns {ValueSetExpansion} this.
   */
  withUrl(url) {
    this.url = url; return this;
  }

  /**
   * Get the CreationDateTime.
   * @returns {CreationDateTime} The shr.core.CreationDateTime
   */
  get creationDateTime() {
    return this._creationDateTime;
  }

  /**
   * Set the CreationDateTime.
   * This field/value is required.
   * @param {CreationDateTime} creationDateTime - The shr.core.CreationDateTime
   */
  set creationDateTime(creationDateTime) {
    this._creationDateTime = creationDateTime;
  }

  /**
   * Set the CreationDateTime and return 'this' for chaining.
   * This field/value is required.
   * @param {CreationDateTime} creationDateTime - The shr.core.CreationDateTime
   * @returns {ValueSetExpansion} this.
   */
  withCreationDateTime(creationDateTime) {
    this.creationDateTime = creationDateTime; return this;
  }

  /**
   * Get the TotalCount.
   * @returns {TotalCount} The shr.core.TotalCount
   */
  get totalCount() {
    return this._totalCount;
  }

  /**
   * Set the TotalCount.
   * @param {TotalCount} totalCount - The shr.core.TotalCount
   */
  set totalCount(totalCount) {
    this._totalCount = totalCount;
  }

  /**
   * Set the TotalCount and return 'this' for chaining.
   * @param {TotalCount} totalCount - The shr.core.TotalCount
   * @returns {ValueSetExpansion} this.
   */
  withTotalCount(totalCount) {
    this.totalCount = totalCount; return this;
  }

  /**
   * Get the Offset.
   * @returns {Offset} The shr.core.Offset
   */
  get offset() {
    return this._offset;
  }

  /**
   * Set the Offset.
   * @param {Offset} offset - The shr.core.Offset
   */
  set offset(offset) {
    this._offset = offset;
  }

  /**
   * Set the Offset and return 'this' for chaining.
   * @param {Offset} offset - The shr.core.Offset
   * @returns {ValueSetExpansion} this.
   */
  withOffset(offset) {
    this.offset = offset; return this;
  }

  /**
   * Get the ExpansionParameter array.
   * @returns {Array<ExpansionParameter>} The shr.core.ExpansionParameter array
   */
  get expansionParameter() {
    return this._expansionParameter;
  }

  /**
   * Set the ExpansionParameter array.
   * @param {Array<ExpansionParameter>} expansionParameter - The shr.core.ExpansionParameter array
   */
  set expansionParameter(expansionParameter) {
    this._expansionParameter = expansionParameter;
  }

  /**
   * Set the ExpansionParameter array and return 'this' for chaining.
   * @param {Array<ExpansionParameter>} expansionParameter - The shr.core.ExpansionParameter array
   * @returns {ValueSetExpansion} this.
   */
  withExpansionParameter(expansionParameter) {
    this.expansionParameter = expansionParameter; return this;
  }

  /**
   * Get the ExpansionCoding array.
   * @returns {Array<ExpansionCoding>} The shr.core.ExpansionCoding array
   */
  get expansionCoding() {
    return this._expansionCoding;
  }

  /**
   * Set the ExpansionCoding array.
   * @param {Array<ExpansionCoding>} expansionCoding - The shr.core.ExpansionCoding array
   */
  set expansionCoding(expansionCoding) {
    this._expansionCoding = expansionCoding;
  }

  /**
   * Set the ExpansionCoding array and return 'this' for chaining.
   * @param {Array<ExpansionCoding>} expansionCoding - The shr.core.ExpansionCoding array
   * @returns {ValueSetExpansion} this.
   */
  withExpansionCoding(expansionCoding) {
    this.expansionCoding = expansionCoding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ValueSetExpansion class.
   * The JSON must be valid against the ValueSetExpansion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ValueSetExpansion} An instance of ValueSetExpansion populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ValueSetExpansion');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ValueSetExpansion class to a JSON object.
   * The JSON is expected to be valid against the ValueSetExpansion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ValueSetExpansion' } };
    if (this.url != null) {
      inst['Url'] = typeof this.url.toJSON === 'function' ? this.url.toJSON() : this.url;
    }
    if (this.creationDateTime != null) {
      inst['CreationDateTime'] = typeof this.creationDateTime.toJSON === 'function' ? this.creationDateTime.toJSON() : this.creationDateTime;
    }
    if (this.totalCount != null) {
      inst['TotalCount'] = typeof this.totalCount.toJSON === 'function' ? this.totalCount.toJSON() : this.totalCount;
    }
    if (this.offset != null) {
      inst['Offset'] = typeof this.offset.toJSON === 'function' ? this.offset.toJSON() : this.offset;
    }
    if (this.expansionParameter != null) {
      inst['ExpansionParameter'] = this.expansionParameter.map(f => f.toJSON());
    }
    if (this.expansionCoding != null) {
      inst['ExpansionCoding'] = this.expansionCoding.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ValueSetExpansion class.
   * The FHIR must be valid against the ValueSetExpansion FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ValueSetExpansion} An instance of ValueSetExpansion populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ValueSetExpansion');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Url-extension');
      if (match_3 != null) {
        inst.url = FHIRHelper.createInstanceFromFHIR('shr.core.Url', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CreationDateTime-extension');
      if (match_4 != null) {
        inst.creationDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.CreationDateTime', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TotalCount-extension');
      if (match_5 != null) {
        inst.totalCount = FHIRHelper.createInstanceFromFHIR('shr.core.TotalCount', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Offset-extension');
      if (match_6 != null) {
        inst.offset = FHIRHelper.createInstanceFromFHIR('shr.core.Offset', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_7 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExpansionParameter-extension');
      if (match_7 != null) {
        inst.expansionParameter = FHIRHelper.createInstanceFromFHIR('shr.core.ExpansionParameter', match_7, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_8 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExpansionCoding-extension');
      if (match_8 != null) {
        inst.expansionCoding = FHIRHelper.createInstanceFromFHIR('shr.core.ExpansionCoding', match_8, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ValueSetExpansion;
