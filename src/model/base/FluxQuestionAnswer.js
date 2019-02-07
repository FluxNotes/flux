import QuestionAnswer from '../shr/base/QuestionAnswer';
import Lang from 'lodash';

class FluxQuestionAnswer {
    constructor(json) {
        this._questionAnswer = QuestionAnswer.fromJSON(json);
    }

    get entryInfo() {
        return this._questionAnswer.entryInfo;
    }

    /*
     *  Getter for QuestionText
     */
    get questionText() {
        return this._questionAnswer.questionText.string;
    }

    /*
     *  Getter for Members
     *  Return array of references
     */
    get members() {
        if (Lang.isUndefined(this._questionAnswer.panelMembers)) return [];
        return this._questionAnswer.panelMembers.observation;
    }

    /*
     *  Getter for value
     *  Return value(currently just true/false for answer to questions)
     */
    get value() {
        return this._questionAnswer.findingResult.value;
    }

    /*
     *  Getter for author
     *  Return author
     */
    get author() {
        if (this._questionAnswer.entryInfo.recordedBy) {
            return this._questionAnswer.entryInfo.recordedBy.value;
        } 
        return null;
    }

    get relevantTime() {
        if (this._questionAnswer.relevantTime) {
            return this._questionAnswer.relevantTime.value;
        } 
        return null;
    }

    isROS() {
        return this._questionAnswer.findingTopicCode && this._questionAnswer.findingTopicCode.codeableConcept && this._questionAnswer.findingTopicCode.codeableConcept.coding[0].code === 'C95618';
    }

    toJSON() {
        return this._questionAnswer.toJSON();
    }
}

export default FluxQuestionAnswer;