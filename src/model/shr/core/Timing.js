import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.Timing.
 */
class Timing {

  /**
   * Get the OccurrenceTime array.
   * @returns {Array<OccurrenceTime>} The shr.core.OccurrenceTime array
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime array.
   * @param {Array<OccurrenceTime>} occurrenceTime - The shr.core.OccurrenceTime array
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Set the OccurrenceTime array and return 'this' for chaining.
   * @param {Array<OccurrenceTime>} occurrenceTime - The shr.core.OccurrenceTime array
   * @returns {Timing} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
  }

  /**
   * Get the TimingCode.
   * @returns {TimingCode} The shr.core.TimingCode
   */
  get timingCode() {
    return this._timingCode;
  }

  /**
   * Set the TimingCode.
   * @param {TimingCode} timingCode - The shr.core.TimingCode
   */
  set timingCode(timingCode) {
    this._timingCode = timingCode;
  }

  /**
   * Set the TimingCode and return 'this' for chaining.
   * @param {TimingCode} timingCode - The shr.core.TimingCode
   * @returns {Timing} this.
   */
  withTimingCode(timingCode) {
    this.timingCode = timingCode; return this;
  }

  /**
   * Get the EventDuration.
   * @returns {EventDuration} The shr.core.EventDuration
   */
  get eventDuration() {
    return this._eventDuration;
  }

  /**
   * Set the EventDuration.
   * @param {EventDuration} eventDuration - The shr.core.EventDuration
   */
  set eventDuration(eventDuration) {
    this._eventDuration = eventDuration;
  }

  /**
   * Set the EventDuration and return 'this' for chaining.
   * @param {EventDuration} eventDuration - The shr.core.EventDuration
   * @returns {Timing} this.
   */
  withEventDuration(eventDuration) {
    this.eventDuration = eventDuration; return this;
  }

  /**
   * Get the RecurrencePattern.
   * @returns {RecurrencePattern} The shr.core.RecurrencePattern
   */
  get recurrencePattern() {
    return this._recurrencePattern;
  }

  /**
   * Set the RecurrencePattern.
   * @param {RecurrencePattern} recurrencePattern - The shr.core.RecurrencePattern
   */
  set recurrencePattern(recurrencePattern) {
    this._recurrencePattern = recurrencePattern;
  }

  /**
   * Set the RecurrencePattern and return 'this' for chaining.
   * @param {RecurrencePattern} recurrencePattern - The shr.core.RecurrencePattern
   * @returns {Timing} this.
   */
  withRecurrencePattern(recurrencePattern) {
    this.recurrencePattern = recurrencePattern; return this;
  }

  /**
   * Get the RecurrenceRange.
   * @returns {RecurrenceRange} The shr.core.RecurrenceRange
   */
  get recurrenceRange() {
    return this._recurrenceRange;
  }

  /**
   * Set the RecurrenceRange.
   * @param {RecurrenceRange} recurrenceRange - The shr.core.RecurrenceRange
   */
  set recurrenceRange(recurrenceRange) {
    this._recurrenceRange = recurrenceRange;
  }

  /**
   * Set the RecurrenceRange and return 'this' for chaining.
   * @param {RecurrenceRange} recurrenceRange - The shr.core.RecurrenceRange
   * @returns {Timing} this.
   */
  withRecurrenceRange(recurrenceRange) {
    this.recurrenceRange = recurrenceRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Timing class.
   * The JSON must be valid against the Timing JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Timing} An instance of Timing populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Timing();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Timing class to a JSON object.
   * The JSON is expected to be valid against the Timing JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Timing' } };
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = this.occurrenceTime.map(f => f.toJSON());
    }
    if (this.timingCode != null) {
      inst['TimingCode'] = typeof this.timingCode.toJSON === 'function' ? this.timingCode.toJSON() : this.timingCode;
    }
    if (this.eventDuration != null) {
      inst['EventDuration'] = typeof this.eventDuration.toJSON === 'function' ? this.eventDuration.toJSON() : this.eventDuration;
    }
    if (this.recurrencePattern != null) {
      inst['RecurrencePattern'] = typeof this.recurrencePattern.toJSON === 'function' ? this.recurrencePattern.toJSON() : this.recurrencePattern;
    }
    if (this.recurrenceRange != null) {
      inst['RecurrenceRange'] = typeof this.recurrenceRange.toJSON === 'function' ? this.recurrenceRange.toJSON() : this.recurrenceRange;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Timing class.
   * The FHIR must be valid against the Timing FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Timing} An instance of Timing populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Timing();
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-RecurrenceRange-extension') {
        inst.recurrenceRange = FHIRHelper.createInstanceFromFHIR('shr.core.RecurrenceRange', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_event of fhir['event'] || []) {
      inst.occurrenceTime = inst.occurrenceTime || [];
      const inst_occurrenceTime = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTime', fhir_event, shrId, allEntries, mappedResources, referencesOut, false);
      inst.occurrenceTime.push(inst_occurrenceTime);
    }
    if (fhir['repeat'] != null) {
      if (fhir['repeat']['duration'] != null) {
        inst.eventDuration = inst.eventDuration || FHIRHelper.createInstanceFromFHIR('shr.core.EventDuration', {}, shrId);
        inst.eventDuration.value = inst.eventDuration.value || FHIRHelper.createInstanceFromFHIR('shr.core.DurationRange', {}, shrId);
        inst.eventDuration.value.lowerBound = inst.eventDuration.value.lowerBound || FHIRHelper.createInstanceFromFHIR('shr.core.LowerBound', {}, shrId);
        inst.eventDuration.value.lowerBound.value = inst.eventDuration.value.lowerBound.value || FHIRHelper.createInstanceFromFHIR('shr.core.SimpleQuantity', {}, shrId);
        inst.eventDuration.value.lowerBound.value.number = FHIRHelper.createInstanceFromFHIR('shr.core.Number', fhir['repeat']['duration'], shrId, allEntries, mappedResources, referencesOut, false);
        if (fhir['repeat']['durationMax'] != null) {
          inst.eventDuration.value.upperBound = inst.eventDuration.value.upperBound || FHIRHelper.createInstanceFromFHIR('shr.core.UpperBound', {}, shrId);
          inst.eventDuration.value.upperBound.value = inst.eventDuration.value.upperBound.value || FHIRHelper.createInstanceFromFHIR('shr.core.SimpleQuantity', {}, shrId);
        }
        if (fhir['repeat']['durationUnit'] != null) {
          inst.eventDuration.value.lowerBound.value.units = inst.eventDuration.value.lowerBound.value.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, shrId);
          inst.eventDuration.value.lowerBound.value.units.value = inst.eventDuration.value.lowerBound.value.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, shrId);
          inst.eventDuration.value.lowerBound.value.units.value.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['repeat']['durationUnit'], shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir['repeat']['frequency'] != null) {
        inst.recurrencePattern = inst.recurrencePattern || FHIRHelper.createInstanceFromFHIR('shr.core.RecurrencePattern', {}, shrId);
        inst.recurrencePattern.countPerInterval = inst.recurrencePattern.countPerInterval || FHIRHelper.createInstanceFromFHIR('shr.core.CountPerInterval', {}, shrId);
        inst.recurrencePattern.countPerInterval.minCount = FHIRHelper.createInstanceFromFHIR('shr.core.MinCount', fhir['repeat']['frequency'], shrId, allEntries, mappedResources, referencesOut, false);
        if (fhir['repeat']['frequencyMax'] != null) {
          inst.recurrencePattern.countPerInterval.maxCount = FHIRHelper.createInstanceFromFHIR('shr.core.MaxCount', fhir['repeat']['frequencyMax'], shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir['repeat']['period'] != null) {
        inst.recurrencePattern = inst.recurrencePattern || FHIRHelper.createInstanceFromFHIR('shr.core.RecurrencePattern', {}, shrId);
        inst.recurrencePattern.recurrenceInterval = inst.recurrencePattern.recurrenceInterval || FHIRHelper.createInstanceFromFHIR('shr.core.RecurrenceInterval', {}, shrId);
        inst.recurrencePattern.recurrenceInterval.value = inst.recurrencePattern.recurrenceInterval.value || FHIRHelper.createInstanceFromFHIR('shr.core.Duration', {}, shrId);
        inst.recurrencePattern.recurrenceInterval.value.number = FHIRHelper.createInstanceFromFHIR('shr.core.Number', fhir['repeat']['period'], shrId, allEntries, mappedResources, referencesOut, false);
        if (fhir['repeat']['periodUnit'] != null) {
          inst.recurrencePattern.recurrenceInterval.value.units = inst.recurrencePattern.recurrenceInterval.value.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, shrId);
          inst.recurrencePattern.recurrenceInterval.value.units.value = inst.recurrencePattern.recurrenceInterval.value.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, shrId);
          inst.recurrencePattern.recurrenceInterval.value.units.value.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['repeat']['periodUnit'], shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      for (const fhir_repeat_dayOfWeek of fhir['repeat']['dayOfWeek'] || []) {
        inst.recurrencePattern = inst.recurrencePattern || FHIRHelper.createInstanceFromFHIR('shr.core.RecurrencePattern', {}, shrId);
        inst.recurrencePattern.dayOfWeek = inst.recurrencePattern.dayOfWeek || [];
        const inst_recurrencePattern_dayOfWeek = FHIRHelper.createInstanceFromFHIR('shr.core.DayOfWeek', fhir_repeat_dayOfWeek, shrId, allEntries, mappedResources, referencesOut, false);
        inst.recurrencePattern.dayOfWeek.push(inst_recurrencePattern_dayOfWeek);
      }
      for (const fhir_repeat_timeOfDay of fhir['repeat']['timeOfDay'] || []) {
        inst.recurrencePattern = inst.recurrencePattern || FHIRHelper.createInstanceFromFHIR('shr.core.RecurrencePattern', {}, shrId);
        inst.recurrencePattern.timeOfDay = inst.recurrencePattern.timeOfDay || [];
        const inst_recurrencePattern_timeOfDay = FHIRHelper.createInstanceFromFHIR('shr.core.TimeOfDay', fhir_repeat_timeOfDay, shrId, allEntries, mappedResources, referencesOut, false);
        inst.recurrencePattern.timeOfDay.push(inst_recurrencePattern_timeOfDay);
      }
      for (const fhir_repeat_when of fhir['repeat']['when'] || []) {
        inst.recurrencePattern = inst.recurrencePattern || FHIRHelper.createInstanceFromFHIR('shr.core.RecurrencePattern', {}, shrId);
        inst.recurrencePattern.dailyLifeEvent = inst.recurrencePattern.dailyLifeEvent || [];
        const inst_recurrencePattern_dailyLifeEvent = FHIRHelper.createInstanceFromFHIR('shr.core.DailyLifeEvent', fhir_repeat_when, shrId, allEntries, mappedResources, referencesOut, false);
        inst.recurrencePattern.dailyLifeEvent.push(inst_recurrencePattern_dailyLifeEvent);
      }
      if (fhir['repeat']['offset'] != null) {
        inst.recurrencePattern = inst.recurrencePattern || FHIRHelper.createInstanceFromFHIR('shr.core.RecurrencePattern', {}, shrId);
        inst.recurrencePattern.lifeEventOffset = FHIRHelper.createInstanceFromFHIR('shr.core.LifeEventOffset', fhir['repeat']['offset'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['code'] != null) {
      inst.timingCode = FHIRHelper.createInstanceFromFHIR('shr.core.TimingCode', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default Timing;
