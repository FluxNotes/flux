// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.RelatedDocument.
 */
class RelatedDocument {

  /**
   * Get the Relationship.
   * @returns {Relationship} The shr.core.Relationship
   */
  get relationship() {
    return this._relationship;
  }

  /**
   * Set the Relationship.
   * This field/value is required.
   * @param {Relationship} relationship - The shr.core.Relationship
   */
  set relationship(relationship) {
    this._relationship = relationship;
  }

  /**
   * Set the Relationship and return 'this' for chaining.
   * This field/value is required.
   * @param {Relationship} relationship - The shr.core.Relationship
   * @returns {RelatedDocument} this.
   */
  withRelationship(relationship) {
    this.relationship = relationship; return this;
  }

  /**
   * Get the shr.core.DocumentReference reference.
   * @returns {Reference} The shr.core.DocumentReference reference
   */
  get documentReference() {
    return this._documentReference;
  }

  /**
   * Set the shr.core.DocumentReference reference.
   * This field/value is required.
   * @param {Reference} documentReference - The shr.core.DocumentReference reference
   */
  set documentReference(documentReference) {
    this._documentReference = documentReference;
  }

  /**
   * Set the shr.core.DocumentReference reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} documentReference - The shr.core.DocumentReference reference
   * @returns {RelatedDocument} this.
   */
  withDocumentReference(documentReference) {
    this.documentReference = documentReference; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RelatedDocument class.
   * The JSON must be valid against the RelatedDocument JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelatedDocument} An instance of RelatedDocument populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'RelatedDocument');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RelatedDocument class to a JSON object.
   * The JSON is expected to be valid against the RelatedDocument JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/RelatedDocument' } };
    if (this.relationship != null) {
      inst['Relationship'] = typeof this.relationship.toJSON === 'function' ? this.relationship.toJSON() : this.relationship;
    }
    if (this.documentReference != null) {
      inst['DocumentReference'] = typeof this.documentReference.toJSON === 'function' ? this.documentReference.toJSON() : this.documentReference;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RelatedDocument class.
   * The FHIR must be valid against the RelatedDocument FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RelatedDocument} An instance of RelatedDocument populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'RelatedDocument');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Relationship-extension');
      if (match_3 != null) {
        inst.relationship = FHIRHelper.createInstanceFromFHIR('shr.core.Relationship', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_8 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DocumentReference-extension');
      if (match_8 != null) {
        inst.documentReference = FHIRHelper.createInstanceFromFHIR('shr.core.DocumentReference', match_8, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default RelatedDocument;
