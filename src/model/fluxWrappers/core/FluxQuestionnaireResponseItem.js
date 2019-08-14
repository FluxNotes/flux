class FluxQuestionnaireResponseItem {
    constructor(questionnaireResponseItem) {
        this._questionnaireResponseItem = questionnaireResponseItem;
    }

    get questionText() {
        return this._questionnaireResponseItem.question.value;
    }

    get value() {
        // TODO: We are assuming Answer array only has one element
        return this._questionnaireResponseItem.answer[0].answerValue.value;
    }
}

export default FluxQuestionnaireResponseItem;
