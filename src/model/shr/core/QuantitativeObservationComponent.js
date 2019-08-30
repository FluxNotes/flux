// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import ObservationComponent from './ObservationComponent';

/**
 * Generated class for shr.core.QuantitativeObservationComponent.
 * @extends ObservationComponent
 */
class QuantitativeObservationComponent extends ObservationComponent {

  /**
   * Get the DataValue.
   * @returns {DataValue} The shr.core.DataValue
   */
  get dataValue() {
    return this._dataValue;
  }

  /**
   * Set the DataValue.
   * @param {DataValue} dataValue - The shr.core.DataValue
   */
  set dataValue(dataValue) {
    this._dataValue = dataValue;
  }

  /**
   * Set the DataValue and return 'this' for chaining.
   * @param {DataValue} dataValue - The shr.core.DataValue
   * @returns {QuantitativeObservationComponent} this.
   */
  withDataValue(dataValue) {
    this.dataValue = dataValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the QuantitativeObservationComponent class.
   * The JSON must be valid against the QuantitativeObservationComponent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {QuantitativeObservationComponent} An instance of QuantitativeObservationComponent populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'QuantitativeObservationComponent');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the QuantitativeObservationComponent class to a JSON object.
   * The JSON is expected to be valid against the QuantitativeObservationComponent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/QuantitativeObservationComponent' } };
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
   * Deserializes FHIR JSON data to an instance of the QuantitativeObservationComponent class.
   * The FHIR must be valid against the QuantitativeObservationComponent FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {QuantitativeObservationComponent} An instance of QuantitativeObservationComponent populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'QuantitativeObservationComponent');
    const inst = new klass();
    return inst;
  }

}
export default QuantitativeObservationComponent;
