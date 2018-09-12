import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.fhir.PatientEntry.
 */
class PatientEntry {

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
   * @returns {PatientEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases date).
   * @returns {date} The date
   */
  get value() {
    return this._date;
  }

  /**
   * Set the value (aliases date).
   * This field/value is required.
   * @param {date} value - The date
   */
  set value(value) {
    this._date = value;
  }

  /**
   * Set the value (aliases date) and return 'this' for chaining.
   * This field/value is required.
   * @param {date} value - The date
   * @returns {PatientEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the date.
   * @returns {date} The date
   */
  get date() {
    return this._date;
  }

  /**
   * Set the date.
   * This field/value is required.
   * @param {date} date - The date
   */
  set date(date) {
    this._date = date;
  }

  /**
   * Set the date and return 'this' for chaining.
   * This field/value is required.
   * @param {date} date - The date
   * @returns {PatientEntry} this.
   */
  withDate(date) {
    this.date = date; return this;
  }

  /**
   * Get the BooleanValue.
   * @returns {BooleanValue} The shr.simple.BooleanValue
   */
  get booleanValue() {
    return this._booleanValue;
  }

  /**
   * Set the BooleanValue.
   * This field/value is required.
   * @param {BooleanValue} booleanValue - The shr.simple.BooleanValue
   */
  set booleanValue(booleanValue) {
    this._booleanValue = booleanValue;
  }

  /**
   * Set the BooleanValue and return 'this' for chaining.
   * This field/value is required.
   * @param {BooleanValue} booleanValue - The shr.simple.BooleanValue
   * @returns {PatientEntry} this.
   */
  withBooleanValue(booleanValue) {
    this.booleanValue = booleanValue; return this;
  }

  /**
   * Get the StringValue.
   * @returns {StringValue} The shr.simple.StringValue
   */
  get stringValue() {
    return this._stringValue;
  }

  /**
   * Set the StringValue.
   * This field/value is required.
   * @param {StringValue} stringValue - The shr.simple.StringValue
   */
  set stringValue(stringValue) {
    this._stringValue = stringValue;
  }

  /**
   * Set the StringValue and return 'this' for chaining.
   * This field/value is required.
   * @param {StringValue} stringValue - The shr.simple.StringValue
   * @returns {PatientEntry} this.
   */
  withStringValue(stringValue) {
    this.stringValue = stringValue; return this;
  }

  /**
   * Get the Deceased.
   * @returns {Deceased} The shr.fhir.Deceased
   */
  get deceased() {
    return this._deceased;
  }

  /**
   * Set the Deceased.
   * This field/value is required.
   * @param {Deceased} deceased - The shr.fhir.Deceased
   */
  set deceased(deceased) {
    this._deceased = deceased;
  }

  /**
   * Set the Deceased and return 'this' for chaining.
   * This field/value is required.
   * @param {Deceased} deceased - The shr.fhir.Deceased
   * @returns {PatientEntry} this.
   */
  withDeceased(deceased) {
    this.deceased = deceased; return this;
  }

  /**
   * Get the PhotoNote array.
   * @returns {Array<PhotoNote>} The shr.fhir.PhotoNote array
   */
  get photoNote() {
    return this._photoNote;
  }

  /**
   * Set the PhotoNote array.
   * @param {Array<PhotoNote>} photoNote - The shr.fhir.PhotoNote array
   */
  set photoNote(photoNote) {
    this._photoNote = photoNote;
  }

  /**
   * Set the PhotoNote array and return 'this' for chaining.
   * @param {Array<PhotoNote>} photoNote - The shr.fhir.PhotoNote array
   * @returns {PatientEntry} this.
   */
  withPhotoNote(photoNote) {
    this.photoNote = photoNote; return this;
  }

  /**
   * Get the IntegerValueElement.
   * @returns {IntegerValueElement} The shr.simple.IntegerValueElement
   */
  get integerValueElement() {
    return this._integerValueElement;
  }

  /**
   * Set the IntegerValueElement.
   * This field/value is required.
   * @param {IntegerValueElement} integerValueElement - The shr.simple.IntegerValueElement
   */
  set integerValueElement(integerValueElement) {
    this._integerValueElement = integerValueElement;
  }

  /**
   * Set the IntegerValueElement and return 'this' for chaining.
   * This field/value is required.
   * @param {IntegerValueElement} integerValueElement - The shr.simple.IntegerValueElement
   * @returns {PatientEntry} this.
   */
  withIntegerValueElement(integerValueElement) {
    this.integerValueElement = integerValueElement; return this;
  }

  /**
   * Get the DecimalValueElement.
   * @returns {DecimalValueElement} The shr.simple.DecimalValueElement
   */
  get decimalValueElement() {
    return this._decimalValueElement;
  }

  /**
   * Set the DecimalValueElement.
   * This field/value is required.
   * @param {DecimalValueElement} decimalValueElement - The shr.simple.DecimalValueElement
   */
  set decimalValueElement(decimalValueElement) {
    this._decimalValueElement = decimalValueElement;
  }

  /**
   * Set the DecimalValueElement and return 'this' for chaining.
   * This field/value is required.
   * @param {DecimalValueElement} decimalValueElement - The shr.simple.DecimalValueElement
   * @returns {PatientEntry} this.
   */
  withDecimalValueElement(decimalValueElement) {
    this.decimalValueElement = decimalValueElement; return this;
  }

  /**
   * Get the ComplexExtension.
   * @returns {ComplexExtension} The shr.fhir.ComplexExtension
   */
  get complexExtension() {
    return this._complexExtension;
  }

  /**
   * Set the ComplexExtension.
   * This field/value is required.
   * @param {ComplexExtension} complexExtension - The shr.fhir.ComplexExtension
   */
  set complexExtension(complexExtension) {
    this._complexExtension = complexExtension;
  }

  /**
   * Set the ComplexExtension and return 'this' for chaining.
   * This field/value is required.
   * @param {ComplexExtension} complexExtension - The shr.fhir.ComplexExtension
   * @returns {PatientEntry} this.
   */
  withComplexExtension(complexExtension) {
    this.complexExtension = complexExtension; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PatientEntry class.
   * The JSON must be valid against the PatientEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PatientEntry} An instance of PatientEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PatientEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PatientEntry class to a JSON object.
   * The JSON is expected to be valid against the PatientEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/fhir/PatientEntry' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.booleanValue != null) {
      inst['BooleanValue'] = typeof this.booleanValue.toJSON === 'function' ? this.booleanValue.toJSON() : this.booleanValue;
    }
    if (this.stringValue != null) {
      inst['StringValue'] = typeof this.stringValue.toJSON === 'function' ? this.stringValue.toJSON() : this.stringValue;
    }
    if (this.deceased != null) {
      inst['Deceased'] = typeof this.deceased.toJSON === 'function' ? this.deceased.toJSON() : this.deceased;
    }
    if (this.photoNote != null) {
      inst['PhotoNote'] = this.photoNote.map(f => f.toJSON());
    }
    if (this.integerValueElement != null) {
      inst['IntegerValueElement'] = typeof this.integerValueElement.toJSON === 'function' ? this.integerValueElement.toJSON() : this.integerValueElement;
    }
    if (this.decimalValueElement != null) {
      inst['DecimalValueElement'] = typeof this.decimalValueElement.toJSON === 'function' ? this.decimalValueElement.toJSON() : this.decimalValueElement;
    }
    if (this.complexExtension != null) {
      inst['ComplexExtension'] = typeof this.complexExtension.toJSON === 'function' ? this.complexExtension.toJSON() : this.complexExtension;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PatientEntry class to a FHIR object.
   * The FHIR is expected to be valid against the PatientEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Patient';
    if (this.integerValueElement != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.integerValueElement.toFHIR(true));
    }
    if (this.decimalValueElement != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.decimalValueElement.toFHIR(true));
    }
    if (this.complexExtension != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.complexExtension.toFHIR(true));
    }
    if (this.booleanValue != null) {
      inst['active'] = typeof this.booleanValue.toFHIR === 'function' ? this.booleanValue.toFHIR() : this.booleanValue;
    }
    if (this.stringValue != null) {
      if (inst['name'] === undefined) {
        inst['name'] = {};
      }
      inst['name']['text'] = typeof this.stringValue.toFHIR === 'function' ? this.stringValue.toFHIR() : this.stringValue;
    }
    if (this.value != null) {
      inst['birthDate'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
    }
    if (this.deceased != null) {
      inst['deceasedBoolean'] = typeof this.deceased.toFHIR === 'function' ? this.deceased.toFHIR() : this.deceased;
    }
    if (this.photoNote != null) {
      inst['photo'] = inst['photo'] || [];
      inst['photo'].concat(this.photoNote.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default PatientEntry;
