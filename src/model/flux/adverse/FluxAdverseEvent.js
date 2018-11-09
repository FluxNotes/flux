import AdverseEvent from '../../shr/adverse/AdverseEvent';
import AdverseEventGrade from '../../shr/adverse/AdverseEventGrade';
import CauseCategory from '../../shr/adverse/CauseCategory';
import FluxEntry from '../base/FluxEntry';
import lookup from '../../../lib/toxicreaction_lookup.jsx';

class FluxAdverseEvent extends FluxEntry {
    constructor(json, patientRecord) {
        super(json);
        this._entry = this._adverseEvent = AdverseEvent.fromJSON(json);
        this._patientRecord = patientRecord;
    }

    get entryInfo() {
        return this._adverseEvent.entryInfo;
    }

    /*
     *  Getter for adverseEvent
     *  This will return the displayText string from CodeableConcept value
     */
    get adverseEvent() {
        if (!this._adverseEvent.value) return null;
        return this._adverseEvent.value.coding[0].displayText.value;
    }

    /*
     *  Setter for adverseEvent
     *  This function is expecting an adverseEvent string
     *  This function will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set adverseEvent(adverseEvent) {
        this._adverseEvent.value = lookup.getAdverseEventCodeableConcept(adverseEvent);
    }

    /*
     *  Getter for adverseEventGrade
     *  This will return the displayText string from adverseEventGrade value
     */
    get adverseEventGrade() {
        if (!this._adverseEvent.adverseEventGrade) return null;
        return this._adverseEvent.adverseEventGrade.value.coding[0].displayText.value;
    }

    /*
     *  Setter for adverseEventGrade
     *  This function is expecting an adverseEventGrade string
     *  This function will lookup the corresponding coding/codesystem and set the _adverseEventGrade property
     */
    set adverseEventGrade(grade) {
        let adverseEventGrade = new AdverseEventGrade();
        adverseEventGrade.value = lookup.getAdverseEventGradeCodeableConcept(grade);
        this._adverseEvent.adverseEventGrade = adverseEventGrade;
    }

    /*
     *  Getter for causeCategory
     *  This will return the displayText string from causeCategory value
     */
    get causeCategory() {
        if (!this._adverseEvent.causeCategory) return null;
        return this._adverseEvent.causeCategory.value.coding[0].displayText.value;
    }

    /*
     *  Setter for causeCategory
     *  This function is expecting an causeCategory string
     *  This function will lookup the corresponding coding/codesystem and set the _causeCategory property
     */
    set causeCategory(causeCategory) {
        let c = new CauseCategory();
        c.value = lookup.getAttributionCodeableConcept(causeCategory);
        this._adverseEvent.causeCategory = c; 
    }

    /**
     * Getter for adverseEventAttribution.
     * Returns the reference to the attribution.
     */
    get adverseEventAttribution() {
        return this._adverseEvent.adverseEventAttribution;
    }

    /**
     * Setter for adverseEventAttribution
     */
    set adverseEventAttribution(attribution) {
        if (attribution) {
            let attributionReference = this._patientRecord.createEntryReferenceTo(attribution);
            this._adverseEvent.adverseEventAttribution = attributionReference;
        } else {
            this._adverseEvent.adverseEventAttribution = null;
        }
    }

    toJSON() {
        return this._adverseEvent.toJSON();
    }
}

export default FluxAdverseEvent;