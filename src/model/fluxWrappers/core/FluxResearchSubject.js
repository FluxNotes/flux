import ResearchSubject from '../shr/research/ResearchSubject';
import FluxEntry from '../base/FluxEntry';
import Status from '../shr/core/Status';
import ResearchStudy from '../../shr/core/ResearchStudy';
import TimePeriod from '../shr/core/TimePeriod';
import Title from '../shr/core/Title';
import CommentOrDescription from '../shr/core/CommentOrDescription';
import Identifier from '../shr/core/Identifier';
import ParticipationPeriod from '../shr/base/ParticipationPeriod';
import BeginDateTime from '../shr/core/BeginDateTime';
import EndDateTime from '../shr/core/EndDateTime';
import Lang from 'lodash';
import * as lookup from '../../lib/clinicaltrial_lookup.jsx';

class FluxResearchSubject extends FluxEntry {
    constructor(json) {
        super();
        this._entry = this._researchSubject = ResearchSubject.fromJSON(json);
        if (!this._researchSubject.entryInfo) {
            this._researchSubject.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/shr/core/ResearchSubject');
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
        if (this._researchSubject.researchStudy && this._researchSubject.researchStudy.title) {
            return this._researchSubject.researchStudy.title.value;
        } else {
            return "";
        }
    }

    _createResearchStudyIfNeeded() {
        if (!this._researchSubject.researchStudy) {
            this._researchSubject.researchStudy = new ResearchStudy();
            this._researchSubject.researchStudy.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/shr/core/ResearchStudy');
        }
    }

    /**
     *  Setter for title
     *  The setter method is expecting a title sting
     *  The method will create a Title object and set the value to the title string
     */
    set title(title) {
        this._createResearchStudyIfNeeded();
/*        if (Lang.isNull(title)) {
            this._researchSubject.study.title = null;
            return;
        }*/
        if (!this._researchSubject.researchStudy.title) {
            this._researchSubject.researchStudy.title = new Title();
        }
        this._researchSubject.researchStudy.title.value = title;
    }
    /**
     *  Getter for detail
     *  This will return the displayText value from the CommentOrDescription object
     */
    get details() {
        if (this._researchSubject.researchStudy && this._researchSubject.researchStudy.commentOrDescription) {
            return this._researchSubject.researchStudy.commentOrDescription.value;
        } else {
            return "";
        }
    }

    /**
     *  Setter for details
     *  The setter method is expecting a details sting
     *  The method will create a Details object and set the value to the detail string
     */
    set details(description) {
        if (Lang.isNull(description)) return;
        this._createResearchStudyIfNeeded();
        let commentOrDescriptionObj = new CommentOrDescription();
        commentOrDescriptionObj.value = description;
        this._researchSubject.researchStudy.commentOrDescription = commentOrDescriptionObj;
    }

    /**
     *  Getter for identifier
     *  This will return the displayText value from the Identifier object
     */
    get identifier() {
        return this._researchSubject.researchStudy.identifier.value || "";
    }

    /**
     *  Setter for identifier
     *  The setter method is expecting a identifier sting
     *  The method will create an Identifier object and set the value to the identifier string
     */
    set identifier(identifier) {
        this._createResearchStudyIfNeeded();
        let i = new Identifier();
        i.value = identifier;
        this._researchSubject.researchStudy.identifier = i;
    }

    get enrollmentDate() {
        if (!this._researchSubject.participationPeriod || !this._researchSubject.participationPeriod.timePeriod || !this._researchSubject.participationPeriod.timePeriod.beginDateTime) return null;
        return this._researchSubject.participationPeriod.timePeriod.beginDateTime.value;
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
        if (!this._researchSubject.participationPeriod.timePeriod.beginDateTime) {
            this._researchSubject.participationPeriod.timePeriod.beginDateTime = new BeginDateTime();
        }
        this._researchSubject.participationPeriod.timePeriod.beginDateTime.value = val;
    }

    get endDate() {
        if (!this._researchSubject.participationPeriod || !this._researchSubject.participationPeriod.timePeriod || !this._researchSubject.participationPeriod.timePeriod.endDateTime) return null;
        return this._researchSubject.participationPeriod.timePeriod.endDateTime.value;
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
        if (!this._researchSubject.participationPeriod.timePeriod.endDateTime) {
            this._researchSubject.participationPeriod.timePeriod.endDateTime = new EndDateTime();
        }
        this._researchSubject.participationPeriod.timePeriod.endDateTime.value = val;
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
