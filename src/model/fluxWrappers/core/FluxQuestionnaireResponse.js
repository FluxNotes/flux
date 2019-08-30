import QuestionnaireResponse from "../../shr/core/QuestionnaireResponse";
import FluxQuestionnaireResponseItem from "./FluxQuestionnaireResponseItem";

class FluxQuestionnaireResponse {
    constructor(json) {
        this._questionnaireResponse = QuestionnaireResponse.fromJSON(json);
        this._questionnaireResponseItem = this._questionnaireResponse.questionnaireResponseItem.map(q => new FluxQuestionnaireResponseItem(q));
    }

    get entryInfo() {
        return this._questionnaireResponse.entryInfo;
    }

    get members() {
        return this._questionnaireResponseItem;
    }

    get statementDateTime() {
        return this._questionnaireResponse.statementDateTime.value;
    }
}

export default FluxQuestionnaireResponse;
