import QuestionAnswer from '../shr/finding/QuestionAnswer';
import Lang from 'lodash';

class FluxQuestionAnswer {
    constructor(json) {
        this._questionAnswer = QuestionAnswer.fromJSON(json);
    }

    get entryInfo() {
        return this._questionAnswer.entryInfo;
    }

    /*
     *  Getter for ObservationCode coding
     *  ObservationCode is a CodeableConcept and this function will return the coding value
     */
    get observationCodeCoding() {
        return this._questionAnswer.observationCode.coding[0].value;
    }

    /*
     *  Getter for ObservationCode DisplayText
     *  ObservationCode is a CodeableConcept and this function will return the displayText value
     */
    get observationCodeDisplayText() {
        return this._questionAnswer.observationCode.coding[0].displayText.value;
    }

    /*
     *  Getter for Members
     *  Return array of references
     */
    get members() {
        if (Lang.isUndefined(this._questionAnswer.members)) return [];
        return this._questionAnswer.members.value;
    }
}

export default FluxQuestionAnswer;