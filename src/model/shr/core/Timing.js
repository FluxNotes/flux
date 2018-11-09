import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Serializes an instance of the Timing class to a FHIR object.
   * The FHIR is expected to be valid against the Timing FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.recurrenceRange != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.recurrenceRange.toFHIR === 'function' ? this.recurrenceRange.toFHIR(true) : this.recurrenceRange);
    }
    if (this.occurrenceTime != null) {
      inst['event'] = inst ['event'] || [];
      inst['event'] = inst['event'].concat(this.occurrenceTime.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.eventDuration != null && this.eventDuration.durationRange != null && this.eventDuration.durationRange.lowerBound != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['duration'] = typeof this.eventDuration.durationRange.lowerBound.toFHIR === 'function' ? this.eventDuration.durationRange.lowerBound.toFHIR() : this.eventDuration.durationRange.lowerBound;
    }
    if (this.eventDuration != null && this.eventDuration.durationRange != null && this.eventDuration.durationRange.upperBound != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['durationMax'] = typeof this.eventDuration.durationRange.upperBound.toFHIR === 'function' ? this.eventDuration.durationRange.upperBound.toFHIR() : this.eventDuration.durationRange.upperBound;
    }
    if (this.recurrencePattern != null && this.recurrencePattern.countPerInterval != null && this.recurrencePattern.countPerInterval.minCount != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['frequency'] = typeof this.recurrencePattern.countPerInterval.minCount.toFHIR === 'function' ? this.recurrencePattern.countPerInterval.minCount.toFHIR() : this.recurrencePattern.countPerInterval.minCount;
    }
    if (this.recurrencePattern != null && this.recurrencePattern.countPerInterval != null && this.recurrencePattern.countPerInterval.maxCount != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['frequencyMax'] = typeof this.recurrencePattern.countPerInterval.maxCount.toFHIR === 'function' ? this.recurrencePattern.countPerInterval.maxCount.toFHIR() : this.recurrencePattern.countPerInterval.maxCount;
    }
    if (this.recurrencePattern != null && this.recurrencePattern.recurrenceInterval != null && this.recurrencePattern.recurrenceInterval.duration != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['period'] = typeof this.recurrencePattern.recurrenceInterval.duration.toFHIR === 'function' ? this.recurrencePattern.recurrenceInterval.duration.toFHIR() : this.recurrencePattern.recurrenceInterval.duration;
    }
    if (this.recurrencePattern != null && this.recurrencePattern.dayOfWeek != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['dayOfWeek'] = typeof this.recurrencePattern.dayOfWeek.toFHIR === 'function' ? this.recurrencePattern.dayOfWeek.toFHIR() : this.recurrencePattern.dayOfWeek;
    }
    if (this.recurrencePattern != null && this.recurrencePattern.timeOfDay != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['timeOfDay'] = typeof this.recurrencePattern.timeOfDay.toFHIR === 'function' ? this.recurrencePattern.timeOfDay.toFHIR() : this.recurrencePattern.timeOfDay;
    }
    if (this.recurrencePattern != null && this.recurrencePattern.dailyLifeEvent != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['when'] = typeof this.recurrencePattern.dailyLifeEvent.toFHIR === 'function' ? this.recurrencePattern.dailyLifeEvent.toFHIR() : this.recurrencePattern.dailyLifeEvent;
    }
    if (this.recurrencePattern != null && this.recurrencePattern.lifeEventOffset != null) {
      if(inst['repeat'] === undefined) {
        inst['repeat'] = {};
      }
      inst['repeat']['offset'] = typeof this.recurrencePattern.lifeEventOffset.toFHIR === 'function' ? this.recurrencePattern.lifeEventOffset.toFHIR() : this.recurrencePattern.lifeEventOffset;
    }
    if (this.timingCode != null) {
      inst['code'] = typeof this.timingCode.toFHIR === 'function' ? this.timingCode.toFHIR() : this.timingCode;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Timing class.
   * The FHIR must be valid against the Timing FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Timing} An instance of Timing populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Timing();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-RecurrenceRange-extension');
      if (match != null) {
        inst.recurrenceRange = createInstanceFromFHIR('shr.core.RecurrenceRange', match, true);
      }
    }
    if (fhir['event'] != null) {
      inst.occurrenceTime = inst.occurrenceTime || [];
      inst.occurrenceTime = inst.occurrenceTime.concat(fhir['event'].map(f => createInstanceFromFHIR('shr.core.OccurrenceTime', f)));
    }
    if (fhir['repeat'] != null && fhir['repeat']['duration'] != null) {
      if(inst.eventDuration == null) {
        inst.eventDuration = createInstanceFromFHIR('shr.core.EventDuration', {});
      }
      if(inst.eventDuration.durationRange == null) {
        inst.eventDuration.durationRange = createInstanceFromFHIR('shr.core.DurationRange', {});
      }
      inst.eventDuration.durationRange.lowerBound = createInstanceFromFHIR('shr.core.LowerBound', fhir['repeat']['duration']);
    }
    if (fhir['repeat'] != null && fhir['repeat']['durationMax'] != null) {
      if(inst.eventDuration == null) {
        inst.eventDuration = createInstanceFromFHIR('shr.core.EventDuration', {});
      }
      if(inst.eventDuration.durationRange == null) {
        inst.eventDuration.durationRange = createInstanceFromFHIR('shr.core.DurationRange', {});
      }
      inst.eventDuration.durationRange.upperBound = createInstanceFromFHIR('shr.core.UpperBound', fhir['repeat']['durationMax']);
    }
    if (fhir['repeat'] != null && fhir['repeat']['frequency'] != null) {
      if(inst.recurrencePattern == null) {
        inst.recurrencePattern = createInstanceFromFHIR('shr.core.RecurrencePattern', {});
      }
      if(inst.recurrencePattern.countPerInterval == null) {
        inst.recurrencePattern.countPerInterval = createInstanceFromFHIR('shr.core.CountPerInterval', {});
      }
      inst.recurrencePattern.countPerInterval.minCount = createInstanceFromFHIR('shr.core.MinCount', fhir['repeat']['frequency']);
    }
    if (fhir['repeat'] != null && fhir['repeat']['frequencyMax'] != null) {
      if(inst.recurrencePattern == null) {
        inst.recurrencePattern = createInstanceFromFHIR('shr.core.RecurrencePattern', {});
      }
      if(inst.recurrencePattern.countPerInterval == null) {
        inst.recurrencePattern.countPerInterval = createInstanceFromFHIR('shr.core.CountPerInterval', {});
      }
      inst.recurrencePattern.countPerInterval.maxCount = createInstanceFromFHIR('shr.core.MaxCount', fhir['repeat']['frequencyMax']);
    }
    if (fhir['repeat'] != null && fhir['repeat']['period'] != null) {
      if(inst.recurrencePattern == null) {
        inst.recurrencePattern = createInstanceFromFHIR('shr.core.RecurrencePattern', {});
      }
      if(inst.recurrencePattern.recurrenceInterval == null) {
        inst.recurrencePattern.recurrenceInterval = createInstanceFromFHIR('shr.core.RecurrenceInterval', {});
      }
      inst.recurrencePattern.recurrenceInterval.duration = createInstanceFromFHIR('shr.core.Duration', fhir['repeat']['period']);
    }
    if (fhir['repeat'] != null && fhir['repeat']['dayOfWeek'] != null) {
      if(inst.recurrencePattern == null) {
        inst.recurrencePattern = createInstanceFromFHIR('shr.core.RecurrencePattern', {});
      }
      inst.recurrencePattern.dayOfWeek = inst.recurrencePattern.dayOfWeek || [];
      inst.recurrencePattern.dayOfWeek = inst.recurrencePattern.dayOfWeek.concat(fhir['repeat']['dayOfWeek'].map(f => createInstanceFromFHIR('shr.core.DayOfWeek', f)));
    }
    if (fhir['repeat'] != null && fhir['repeat']['timeOfDay'] != null) {
      if(inst.recurrencePattern == null) {
        inst.recurrencePattern = createInstanceFromFHIR('shr.core.RecurrencePattern', {});
      }
      inst.recurrencePattern.timeOfDay = inst.recurrencePattern.timeOfDay || [];
      inst.recurrencePattern.timeOfDay = inst.recurrencePattern.timeOfDay.concat(fhir['repeat']['timeOfDay'].map(f => createInstanceFromFHIR('shr.core.TimeOfDay', f)));
    }
    if (fhir['repeat'] != null && fhir['repeat']['when'] != null) {
      if(inst.recurrencePattern == null) {
        inst.recurrencePattern = createInstanceFromFHIR('shr.core.RecurrencePattern', {});
      }
      inst.recurrencePattern.dailyLifeEvent = inst.recurrencePattern.dailyLifeEvent || [];
      inst.recurrencePattern.dailyLifeEvent = inst.recurrencePattern.dailyLifeEvent.concat(fhir['repeat']['when'].map(f => createInstanceFromFHIR('shr.core.DailyLifeEvent', f)));
    }
    if (fhir['repeat'] != null && fhir['repeat']['offset'] != null) {
      if(inst.recurrencePattern == null) {
        inst.recurrencePattern = createInstanceFromFHIR('shr.core.RecurrencePattern', {});
      }
      inst.recurrencePattern.lifeEventOffset = createInstanceFromFHIR('shr.core.LifeEventOffset', fhir['repeat']['offset']);
    }
    if (fhir['code'] != null) {
      inst.timingCode = createInstanceFromFHIR('shr.core.TimingCode', fhir['code']);
    }
    return inst;
  }

}
export default Timing;
