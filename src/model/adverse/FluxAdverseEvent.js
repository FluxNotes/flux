import AdverseEvent from '../shr/adverse/AdverseEvent';
import AdverseEventGrade from '../shr/adverse/AdverseEventGrade';
import CauseCategory from '../shr/adverse/CauseCategory';
import CodeableConcept from '../shr/core/CodeableConcept';
import lookup from '../../lib/toxicreactiontotreatment_lookup.jsx';


class FluxAdverseEvent extends AdverseEvent{
    constructor(json) {
        super(json);

        if(!json) {
            this._codeableConcept = new CodeableConcept();
            this._adverseEventGrade = new AdverseEventGrade();
            this._adverseEventGrade.value = new CodeableConcept();
            this._causeCategory = new CauseCategory();
            this._causeCategory.value = new CodeableConcept();
        }
    }

    get adverseEvent() {
        return this._codeableConcept.coding[0].displayText.value;
    }

    set adverseEvent(adverseEvent) {
        console.log(adverseEvent);
        console.log(this._codeableConcept);
        this._codeableConcept = lookup.getAdverseEventCodeableConcept(adverseEvent);
    }

    get adverseEventGrade() {
        return this._adverseEventGrade.value.coding[0].displayText.value;
    }

    set adverseEventGrade(grade) {
        let adverseEventGrade = new AdverseEventGrade();
        adverseEventGrade.value = lookup.getAdverseEventGradeCodeableConcept(grade);
        this._adverseEventGrade = adverseEventGrade;
    }

    get causeCategory() {
        return this._causeCategory.value.coding[0].displayText.value;
    }

    set causeCategory(causeCategory) {
        let c = new CauseCategory();
        c.value = lookup.getAttributionCodeableConcept(causeCategory);
        this._causeCategory = c; 
    }
}

export default FluxAdverseEvent;