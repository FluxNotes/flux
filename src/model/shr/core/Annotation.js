// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Annotation.
 */
class Annotation {

  /**
   * Get the Text.
   * @returns {Text} The shr.core.Text
   */
  get text() {
    return this._text;
  }

  /**
   * Set the Text.
   * This field/value is required.
   * @param {Text} text - The shr.core.Text
   */
  set text(text) {
    this._text = text;
  }

  /**
   * Set the Text and return 'this' for chaining.
   * This field/value is required.
   * @param {Text} text - The shr.core.Text
   * @returns {Annotation} this.
   */
  withText(text) {
    this.text = text; return this;
  }

  /**
   * Get the AnnotationAuthor.
   * @returns {AnnotationAuthor} The shr.core.AnnotationAuthor
   */
  get annotationAuthor() {
    return this._annotationAuthor;
  }

  /**
   * Set the AnnotationAuthor.
   * This field/value is required.
   * @param {AnnotationAuthor} annotationAuthor - The shr.core.AnnotationAuthor
   */
  set annotationAuthor(annotationAuthor) {
    this._annotationAuthor = annotationAuthor;
  }

  /**
   * Set the AnnotationAuthor and return 'this' for chaining.
   * This field/value is required.
   * @param {AnnotationAuthor} annotationAuthor - The shr.core.AnnotationAuthor
   * @returns {Annotation} this.
   */
  withAnnotationAuthor(annotationAuthor) {
    this.annotationAuthor = annotationAuthor; return this;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Set the OccurrenceTime and return 'this' for chaining.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   * @returns {Annotation} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Annotation class.
   * The JSON must be valid against the Annotation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Annotation} An instance of Annotation populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Annotation');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Annotation class to a JSON object.
   * The JSON is expected to be valid against the Annotation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Annotation' } };
    if (this.text != null) {
      inst['Text'] = typeof this.text.toJSON === 'function' ? this.text.toJSON() : this.text;
    }
    if (this.annotationAuthor != null) {
      inst['AnnotationAuthor'] = typeof this.annotationAuthor.toJSON === 'function' ? this.annotationAuthor.toJSON() : this.annotationAuthor;
    }
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Annotation class.
   * The FHIR must be valid against the Annotation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Annotation} An instance of Annotation populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Annotation');
    const inst = new klass();
    if (fhir['authorString'] != null) {
      inst.annotationAuthor = FHIRHelper.createInstanceFromFHIR('shr.core.AnnotationAuthor', fhir['authorString'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['time'] != null) {
      inst.occurrenceTime = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTime', fhir['time'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.text = FHIRHelper.createInstanceFromFHIR('shr.core.Text', fhir['text'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueAnnotation'];
    }
    return inst;
  }

}
export default Annotation;
