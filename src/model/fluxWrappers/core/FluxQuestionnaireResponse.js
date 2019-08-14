import QuestionnaireResponse from "../../shr/core/QuestionnaireResponse";

class FluxQuestionnaireResponse {
    constructor(json) {
        this._questionnaireResponse = QuestionnaireResponse.fromJSON(json);
    }

    get entryInfo() {
        return this._questionnaireResponse.entryInfo;
    }
}

export default FluxQuestionnaireResponse;
