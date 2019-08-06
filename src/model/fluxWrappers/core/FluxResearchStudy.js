import FluxEntry from '../base/FluxEntry';
import ResearchStudy from '../../shr/core/ResearchStudy';
import Title from '../../shr/core/Title';
import Identifier from '../../shr/core/Identifier';
import CommentOrDescription from '../../shr/core/CommentOrDescription';
import EffectiveTimePeriod from '../../shr/core/EffectiveTimePeriod';
import BeginDateTime from '../../shr/core/BeginDateTime';
import EndDateTime from '../../shr/core/EndDateTime';
import Lang from 'lodash';

class FluxResearchStudy extends FluxEntry {
    constructor(json) {
        super(json);
        this._entry = this._researchStudy = ResearchStudy.fromJSON(json);
        if (!this._researchStudy.entryInfo) {
            this._researchStudy.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/shr/core/ResearchStudy');
        }
    }

    get entryInfo() {
        return this._researchStudy.entryInfo;
    }

    /**
     *  Getter for title
     *  This will return the displayText value from the Title object
     */
    get title() {
        if (this._researchStudy.title) {
            return this._researchStudy.title.value;
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
            this._researchStudy.title = null;
            return;
        }
        let titleObj = new Title();
        titleObj.value = title;
        this._researchStudy.title = titleObj;
    }

    get commentOrDescription() {
        if (this._researchStudy.commentOrDescription) {
            return this._researchStudy.commentOrDescription.value;
        } else {
            return '';
        }
    }

    set commentOrDescription(commentOrDescription) {
        if (Lang.isNull(commentOrDescription)) return;
        let commentOrDescriptionObj = new CommentOrDescription();
        commentOrDescriptionObj.value = commentOrDescription;
        this._researchStudy.commentOrDescription = commentOrDescriptionObj;
    }

    get identifier() {
        return this._researchStudy.identifier.value;
    }

    set identifier(identifier) {
        let i = new Identifier();
        i.value = identifier;
        this._researchStudy.identifier = i;
    }

    get enrollmentDate() {
        if (!this._researchStudy.effectiveTimePeriod || !this._researchStudy.effectiveTimePeriod.timePeriodStart) return null;
        return this._researchStudy.effectiveTimePeriod.timePeriodStart.value;
    }

    set enrollmentDate(val) {
        if (Lang.isNull(val) && this._researchStudy.effectiveTimePeriod) {
            this._researchStudy.effectiveTimePeriod.beginDateTime = null;
            return;
        }

        if (!this._researchStudy.effectiveTimePeriod) {
            this._researchStudy.effectiveTimePeriod = new EffectiveTimePeriod();
        }

        const beginDateTime = new BeginDateTime();
        beginDateTime.value = val;
        this._researchStudy.effectiveTimePeriod.beginDateTime = beginDateTime;
    }

    get endDate() {
        if (!this._researchStudy.effectiveTimePeriod || !this._researchStudy.effectiveTimePeriod.endDateTime) return null;
        return this._researchStudy.effectiveTimePeriod.endDateTime.value;
    }

    set endDate(val) {
        if (Lang.isNull(val) && this._researchStudy.effectiveTimePeriod) {
            this._researchStudy.effectiveTimePeriod.timePeriodEnd = null;
            return;
        }

        if (!this._researchStudy.effectiveTimePeriod) {
            this._researchStudy.effectiveTimePeriod = new EffectiveTimePeriod();
        }

        const endDateTime = new EndDateTime();
        endDateTime.value = val;
        this._researchStudy.effectiveTimePeriod.endDateTime = endDateTime;
    }

    toJSON() {
        return this._researchStudy.toJSON();
    }
}

export default FluxResearchStudy;
