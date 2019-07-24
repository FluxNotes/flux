// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../json-helper';

import ClassRegistry from '../ClassRegistry';

import QuantitativeObservationComponent from '../shr/core/QuantitativeObservationComponent';

/**
 * Generated class for brca.AverageCEP17SignalsPerCell.
 * @extends QuantitativeObservationComponent
 */
class AverageCEP17SignalsPerCell extends QuantitativeObservationComponent {

  /**
   * Get the Code.
   * @returns {Code} The shr.core.Code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the Code.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the Code and return 'this' for chaining.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   * @returns {AverageCEP17SignalsPerCell} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Get the ReferenceRange.
   * @returns {ReferenceRange} The shr.core.ReferenceRange
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange.
   * @param {ReferenceRange} referenceRange - The shr.core.ReferenceRange
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Set the ReferenceRange and return 'this' for chaining.
   * @param {ReferenceRange} referenceRange - The shr.core.ReferenceRange
   * @returns {AverageCEP17SignalsPerCell} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AverageCEP17SignalsPerCell class.
   * The JSON must be valid against the AverageCEP17SignalsPerCell JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AverageCEP17SignalsPerCell} An instance of AverageCEP17SignalsPerCell populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('brca', 'AverageCEP17SignalsPerCell');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AverageCEP17SignalsPerCell class to a JSON object.
   * The JSON is expected to be valid against the AverageCEP17SignalsPerCell JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/brca/AverageCEP17SignalsPerCell' } };
    if (this.code != null) {
      inst['Code'] = typeof this.code.toJSON === 'function' ? this.code.toJSON() : this.code;
    }
    if (this.dataValue != null) {
      inst['DataValue'] = typeof this.dataValue.toJSON === 'function' ? this.dataValue.toJSON() : this.dataValue;
    }
    if (this.dataAbsentReason != null) {
      inst['DataAbsentReason'] = typeof this.dataAbsentReason.toJSON === 'function' ? this.dataAbsentReason.toJSON() : this.dataAbsentReason;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AverageCEP17SignalsPerCell class.
   * The FHIR must be valid against the AverageCEP17SignalsPerCell FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AverageCEP17SignalsPerCell} An instance of AverageCEP17SignalsPerCell populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('brca', 'AverageCEP17SignalsPerCell');
    const inst = new klass();
    return inst;
  }

}
export default AverageCEP17SignalsPerCell;
