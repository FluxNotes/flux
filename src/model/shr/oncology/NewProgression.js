import Progression from './Progression';
// import CodeableConcept from '../core/CodeableConcept';
// import Coding from '../core/Coding';
// import DisplayText from '../core/DisplayText';
import Evidence from '../observation/Evidence';
import lookup from '../../../lib/progression_lookup.jsx';

// Progression class to hide codeableconcepts
class NewProgression extends Progression {

    /**
     *  Getter for status
     *  This will return the displayText string from CodeableConcept Value
     */
    get value() {
        return this._codeableConcept.displayText.value;
    }

    /**
     *  Setter for status
     *  The setter method is expecting a status sting
     *  The method will lookup the corresponding coding/codesystem and set the value
     */
    set value(value) {
        this._codeableConcept = lookup.getValueCodeableConcept(value);
    }

    /**
     *  Getter for reasons
     *  This will return an array of displayText strings from Evidence array
     */
    get evidence() {
        return this._evidence.map((e) => {
            return e.value.displayText.value;
        });
    }

    /**
     *  Setter for reasons
     *  The method is expecting an array of reason strings
     *  The method will lookup the corresponding coding/codesystem and set the evidence array
     */
    set evidence(evidence) {
        this._evidence = evidence.map((e) => {
            let ev = new Evidence();
            ev.value = lookup.getEvidenceCodeableConcept(e);   
            return ev;
        });
    }
}

export default NewProgression;

// classname_lookup
// getPropertyCodeableConcept
// change stage_code to have displayText