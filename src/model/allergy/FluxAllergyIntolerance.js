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
     *  Getter for allergy
     *  Returns displayText string for allergy
     */
    get allergyIntolerance() {
        return this._allergyIntolerance.value.coding[0].displayText;
    }

    /*
     *  Getter for severity of allergy
     *  Returns the string of the most severe adverse reaction
     *  Possible return values are Mild, Moderate, Severe
     */
    get severity() {
        const adverseReactions = this.getAdverseReactionsBySeverityAndTime();
        if (adverseReactions.length === 0) return "N/A";
        return adverseReactions[0].severity.value.coding[0].displayText.value;
    }

    /*
     *  Returns list of adverse reactions on allergy sorted by severity and time
     */
    getAdverseReactionsBySeverityAndTime() {
        if (!this._allergyIntolerance.adverseReaction) return [];
        return this._allergyIntolerance.adverseReaction.sort(this._adverseReactionsSorter);
    }

    // Sort adverse reactions by severity and time
    _adverseReactionsSorter(a, b) {
        let a_severity, b_severity;
        switch (a.severity.value.coding[0].code) {
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

        switch (b.severity.value.coding[0].code) {
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

        const a_time = new moment(a.occurrenceTime.dateTime, "D MMM YYYY");
        const b_time = new moment(b.occurrenceTime.dateTime, "D MMM YYYY");

        if (a_time > b_time) return -1;
        else if (a_time < b_time) return 1;
        return 0;
    }

    }

    export default FluxAllergyIntolerance;