import ResearchSubject from '../shr/research/ResearchSubject';
import FluxEntry from '../base/FluxEntry';
import Status from '../shr/action/Status';
import Study from '../shr/research/Study';
import TimePeriod from '../shr/core/TimePeriod';
import Title from '../shr/core/Title';
import Details from '../shr/core/Details';
import Identifier from '../shr/core/Identifier';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import ParticipationPeriod from '../shr/action/ParticipationPeriod';
import TimePeriodStart from '../shr/core/TimePeriodStart';
import TimePeriodEnd from '../shr/core/TimePeriodEnd';
import Lang from 'lodash';
import lookup from '../../lib/clinicaltrial_lookup.jsx';

class FluxResearchSubject extends FluxEntry {
    constructor(json) {
        super();
        this._entry = this._researchSubject = ResearchSubject.fromJSON(json);
        if (!this._researchSubject.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/research/ResearchSubject';
            this._researchSubject.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._researchSubject.entryInfo;
    }

    /**
     *  Getter for title
     *  This will return the displayText value from the Title object
     */
    get title() {
        if (this._researchSubject.study && this._researchSubject.study.title) {
            return this._researchSubject.study.title.value;
        } else {
            return "";
        }
    }

    _createStudyIfNeeded() {
        if (!this._researchSubject.study) {
            this._researchSubject.study = new Study();
            this._researchSubject.study.entryInfo = new Entry();
            this._researchSubject.study.entryInfo.entryType = new EntryType();
            this._researchSubject.study.entryInfo.entryType.uri = 'http://standardhealthrecord.org/spec/shr/research/Study';
        }
    }

    /**
     *  Setter for title
     *  The setter method is expecting a title sting
     *  The method will create a Title object and set the value to the title string
     */
    set title(title) {
        this._createStudyIfNeeded();
/*        if (Lang.isNull(title)) {
            this._researchSubject.study.title = null;
            return;
        }*/
        if (!this._researchSubject.study.title) {
            this._researchSubject.study.title = new Title();
        }
        this._researchSubject.study.title.value = title; 
    }
    /**
     *  Getter for detail
     *  This will return the displayText value from the Details object
     */    
    get details() {
        if (this._researchSubject.study && this._researchSubject.study.details) {
            return this._researchSubject.study.details.value;
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
        this._createStudyIfNeeded();
        let detailsObj = new Details();
        detailsObj.value = details; 
        this._researchSubject.study.details = detailsObj;
    }    

    /**
     *  Getter for identifier
     *  This will return the displayText value from the Identifier object
     */
    get identifier() {
        return this._researchSubject.study.identifier.value || "";
    }

    /**
     *  Setter for identifier
     *  The setter method is expecting a identifier sting
     *  The method will create an Identifier object and set the value to the identifier string
     */
    set identifier(identifier) {
        this._createStudyIfNeeded();
        let i = new Identifier();
        i.value = identifier;
        this._researchSubject.study.identifier = i;
    }

    get enrollmentDate() {
        if (!this._researchSubject.participationPeriod || !this._researchSubject.participationPeriod.timePeriod || !this._researchSubject.participationPeriod.timePeriod.timePeriodStart) return null;
        return this._researchSubject.participationPeriod.timePeriod.timePeriodStart.value;
    }
  
    set enrollmentDate(val) {
/*        if (Lang.isNull(val)) {
            if (this._researchSubject.participationPeriod && this._researchSubject.participationPeriod.timePeriod) {
                this._researchSubject.participationPeriod.timePeriod.timePeriodStart = null;
            }
            return;
        }*/
        if (!this._researchSubject.participationPeriod) {
            this._researchSubject.participationPeriod = new ParticipationPeriod();
        }
        if (!this._researchSubject.participationPeriod.timePeriod) {
            this._researchSubject.participationPeriod.timePeriod = new TimePeriod();
        }
        if (!this._researchSubject.participationPeriod.timePeriod.timePeriodStart) {
            this._researchSubject.participationPeriod.timePeriod.timePeriodStart = new TimePeriodStart();
        }
        this._researchSubject.participationPeriod.timePeriod.timePeriodStart.value = val;
    }
  
    get endDate() {
        if (!this._researchSubject.participationPeriod || !this._researchSubject.participationPeriod.timePeriod || !this._researchSubject.participationPeriod.timePeriod.timePeriodEnd) return null;
        return this._researchSubject.participationPeriod.timePeriod.timePeriodEnd.value;
    }
  
    set endDate(val) {
/*        if (Lang.isNull(val)) {
            if (this._researchSubject.participationPeriod && this._researchSubject.participationPeriod.timePeriod) {
                this._researchSubject.participationPeriod.timePeriod.timePeriodEnd = null;
            }
            return;
        }*/
        if (!this._researchSubject.participationPeriod) {
            this._researchSubject.participationPeriod = new ParticipationPeriod();
        }
        if (!this._researchSubject.participationPeriod.timePeriod) {
            this._researchSubject.participationPeriod.timePeriod = new TimePeriod();
        }
        if (!this._researchSubject.participationPeriod.timePeriod.timePeriodEnd) {
            this._researchSubject.participationPeriod.timePeriod.timePeriodEnd = new TimePeriodEnd();
        }
        this._researchSubject.participationPeriod.timePeriod.timePeriodEnd.value = val;
    }

    get status() {
        if (!this._researchSubject.status || !this._researchSubject.status.value) return null;
        return this._researchSubject.status.value.coding[0].displayText.value;
    }

    set status(val) {
        if (!this._researchSubject.status) {
            this._researchSubject.status = new Status();
        }
        this._researchSubject.status.value = lookup.getStatusCodeableConcept(val);
    }

    toJSON() {
        return this._researchSubject.toJSON();
    }
}

export default FluxResearchSubject;