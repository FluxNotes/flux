import Study from '../shr/base/Study';
import Title from '../shr/core/Title';
import Identifier from '../shr/core/Identifier';

class FluxStudy extends Study {
    constructor(json) {
        super(json);
        if (json) {
            if (json.enrollmentDate) this._enrollmentDate = json.enrollmentDate;
            if (json.endDate) this._endDate = json.endDate;
        } else {
            this._title = new Title();
        }
    }

    /**
     *  Getter for title
     *  This will return the displayText value from the Title object
     */
    get title() {
        return this._title.value;
    }

    /**
     *  Setter for title
     *  The setter method is expecting a title sting
     *  The method will create a Title object and set the value to the title string
     */
    set title(title) {
        let t = new Title();
        t.value = title;
        this._title = t;
    }

    /**
     *  Getter for identifier
     *  This will return the displayText value from the Identifier object
     */
    get identifier() {
        return this._identifier.value;
    }

    /**
     *  Setter for identifier
     *  The setter method is expecting a identifier sting
     *  The method will create an Identifier object and set the value to the identifier string
     */
    set identifier(identifier) {
        let i = new Identifier();
        i.value = identifier;
        this._identifier = i;
    }

    get enrollmentDate() {
        return this._enrollmentDate;
    }
  
    set enrollmentDate(val) {
        this._enrollmentDate = val;
    }
  
    get endDate() {
        return this._endDate;
    }
  
    set endDate(val) {
        this._endDate = val;
    }
}

export default FluxStudy;