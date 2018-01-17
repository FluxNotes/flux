// import AdverseEvent from '../shr/adverse/AdverseEvent';
// import AdverseEventGrade from '../shr/adverse/AdverseEventGrade';
// import CauseCategory from '../shr/adverse/CauseCategory';
// import CodeableConcept from '../shr/core/CodeableConcept';
// import lookup from '../../lib/toxicreactiontotreatment_lookup.jsx';


// class FluxAdverseEvent extends AdverseEvent{
//     constructor(json) {
//         super(json);

//         if(!json) {
//             this._codeableConcept = new CodeableConcept();
//             this._adverseEventGrade = new AdverseEventGrade();
//             this._adverseEventGrade.value = new CodeableConcept();
//             this._causeCategory = new CauseCategory();
//             this._causeCategory.value = new CodeableConcept();
//         }
//     }

//     /*
//      *  Getter for adverseEvent
//      *  This will return the displayText string from CodeableConcept value
//      */
//     get adverseEvent() {
//         return this._codeableConcept.coding[0].displayText.value;
//     }

//     /*
//      *  Setter for adverseEvent
//      *  This function is expecting an adverseEvent string
//      *  This function will lookup the corresponding coding/codesystem and set the _codeableConcept property
//      */
//     set adverseEvent(adverseEvent) {
//         this._codeableConcept = lookup.getAdverseEventCodeableConcept(adverseEvent);
//     }

//     /*
//      *  Getter for adverseEventGrade
//      *  This will return the displayText string from adverseEventGrade value
//      */
//     get adverseEventGrade() {
//         return this._adverseEventGrade.value.coding[0].displayText.value;
//     }

//     /*
//      *  Setter for adverseEventGrade
//      *  This function is expecting an adverseEventGrade string
//      *  This function will lookup the corresponding coding/codesystem and set the _adverseEventGrade property
//      */
//     set adverseEventGrade(grade) {
//         let adverseEventGrade = new AdverseEventGrade();
//         adverseEventGrade.value = lookup.getAdverseEventGradeCodeableConcept(grade);
//         this._adverseEventGrade = adverseEventGrade;
//     }

//     /*
//      *  Getter for causeCategory
//      *  This will return the displayText string from causeCategory value
//      */
//     get causeCategory() {
//         return this._causeCategory.value.coding[0].displayText.value;
//     }

//     /*
//      *  Setter for causeCategory
//      *  This function is expecting an causeCategory string
//      *  This function will lookup the corresponding coding/codesystem and set the _causeCategory property
//      */
//     set causeCategory(causeCategory) {
//         let c = new CauseCategory();
//         c.value = lookup.getAttributionCodeableConcept(causeCategory);
//         this._causeCategory = c; 
//     }
// }

// export default FluxAdverseEvent;