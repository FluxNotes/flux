import Study from '../shr/research/Study';
import Title from '../shr/core/Title';
import Details from '../shr/core/Details';
import Identifier from '../shr/core/Identifier';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import EffectiveTimePeriod from '../shr/core/EffectiveTimePeriod';
import TimePeriodStart from '../shr/core/TimePeriodStart';
import TimePeriodEnd from '../shr/core/TimePeriodEnd';
import Lang from 'lodash';

class FluxStudy {
    constructor(json) {
        this._study = Study.fromJSON(json);
        if (!this._study.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/research/Study';
            this._study.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._study.entryInfo;
    }

    /**
     *  Getter for title
     *  This will return the displayText value from the Title object
     */
    get title() {
        if (this._study.title) {
            return this._study.title.value;
        } else {
            return "";
        }
    }

    /**
     *  Setter for title
     *  The setter method is expecting a title sting
     *  The method will create a Title object and set the value to the title string
     */
    set title(title) {
        if (Lang.isNull(title)) {
            this._study.title = null;
            return;
        }
        let titleObj = new Title();
        titleObj.value = title; 
        this._study.title = titleObj;
    }
    /**
     *  Getter for detail
     *  This will return the displayText value from the Details object
     */    
    get details() {
        if (this._study.details) {
            return this._study.details.value;
        } else {
            return "";
        }
    }

    /**
     *  Setter for details
     *  The setter method is expecting a details sting
     *  The method will create a Details object and set the value to the detail string
     */
    set details(details) {
        if (Lang.isNull(details)) return;
        let detailsObj = new Details();
        detailsObj.value = details; 
        this._study.details = detailsObj;
    }    

    /**
     *  Getter for identifier
     *  This will return the displayText value from the Identifier object
     */
    get identifier() {
        return this._study.identifier.value;
    }

    /**
     *  Setter for identifier
     *  The setter method is expecting a identifier sting
     *  The method will create an Identifier object and set the value to the identifier string
     */
    set identifier(identifier) {
        let i = new Identifier();
        i.value = identifier;
        this._study.identifier = i;
    }

    get enrollmentDate() {
        if (!this._study.effectiveTimePeriod || !this._study.effectiveTimePeriod.timePeriodStart) return null;
        return this._study.effectiveTimePeriod.timePeriodStart.value;
    }
  
    set enrollmentDate(val) {
        if (Lang.isNull(val) && this._study.effectiveTimePeriod) {
            this._study.effectiveTimePeriod.timePeriodStart = null;
            return;
        }
        if (!this._study.effectiveTimePeriod) {
            this._study.effectiveTimePeriod = new EffectiveTimePeriod();
        }
        let timePeriodStart = new TimePeriodStart();
        timePeriodStart.value = val;
        this._study.effectiveTimePeriod.timePeriodStart = timePeriodStart;
    }
  
    get endDate() {
        if (!this._study.effectiveTimePeriod || !this._study.effectiveTimePeriod.timePeriodEnd) return null;
        return this._study.effectiveTimePeriod.timePeriodEnd.value;
    }
  
    set endDate(val) {
        if (Lang.isNull(val)) return;
        if (!this._study.effectiveTimePeriod) {
            this._study.effectiveTimePeriod = new EffectiveTimePeriod();
        }
        let timePeriodEnd = new TimePeriodEnd();
        timePeriodEnd.value = val;
        this._study.effectiveTimePeriod.timePeriodEnd = timePeriodEnd;
    }
}

export default FluxStudy;