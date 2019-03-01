import AllergyIntolerance from '../shr/allergy/AllergyIntolerance';
import moment from 'moment';

class FluxAllergyIntolerance {
    constructor(json) {
        this._allergyIntolerance = AllergyIntolerance.fromJSON(json);
    }

    get entryInfo() {
        return this._allergyIntolerance.entryInfo;
    }

    /*
     *  Getter for allergy name
     *  Returns displayText string for allergy
     */
    get name() {
        return this._allergyIntolerance.findingResult.value.coding[0].displayText.value;
    }

    /*
     *  Getter for category
     *  Returns first category in substanceCategory array
     *  Returns null if no substanceCategory or array is empty
     */
    get category() {
        if (!this._allergyIntolerance.substanceCategory || this._allergyIntolerance.substanceCategory.length === 0) return null;
        return this._allergyIntolerance.substanceCategory[0].code;
    }

    /*
     *  Getter for severity of allergy
     *  Returns the string of the most severe adverse reaction
     *  Possible return values are Mild, Moderate, Severe
     */
    get severity() {
        const adverseReactions = this.getAdverseReactionsBySeverityAndTime();
        if (adverseReactions.length === 0 || !adverseReactions[0].severity) return "";
        return adverseReactions[0].severity.value.coding[0].displayText.value;
    }

    /*
     *  Getter for manifestation of allergy
     *  Returns the manifestation displayText of the most severe adverse reaction
     */
    get manifestation() {
        const adverseReactions = this.getAdverseReactionsBySeverityAndTime();
        if (adverseReactions.length === 0 || !adverseReactions[0].manifestation) return "";
        return adverseReactions[0].manifestation[0].value.coding[0].displayText.value;
    }

    /*
     *  Returns list of adverse reactions on allergy sorted by severity and time
     */
    getAdverseReactionsBySeverityAndTime() {
        if (!this._allergyIntolerance.allergyIntoleranceReaction) return [];
        return this._allergyIntolerance.allergyIntoleranceReaction.sort(this._adverseReactionsSorter);
    }

    // Sort adverse reactions by severity and time
    _adverseReactionsSorter(a, b) {
        let a_severity, b_severity;
        switch (a.severity.value.coding[0].code.value) {
            case "severe": {
                a_severity = 1;
                break;
            }
            case "moderate": {
                a_severity = 0;
                break;
            }
            default: {
                a_severity = -1;
            }
        }

        switch (b.severity.value.coding[0].code.value) {
            case "severe": {
                b_severity = 1;
                break;
            }
            case "moderate": {
                b_severity = 0;
                break;
            }
            default: {
                b_severity = -1;
            }
        }

        if (a_severity > b_severity) return -1;
        else if (a_severity < b_severity) return 1;

        const a_time = new moment(a.beginDateTime.dateTime, "D MMM YYYY");
        const b_time = new moment(b.beginDateTime.dateTime, "D MMM YYYY");

        if (a_time > b_time) return -1;
        else if (a_time < b_time) return 1;
        return 0;
    }

    toJSON() {
        return this._allergyIntolerance.toJSON();
    }
}

export default FluxAllergyIntolerance;