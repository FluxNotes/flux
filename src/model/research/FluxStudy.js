import Study from '../shr/research/Study';
import Title from '../shr/core/Title';
import Identifier from '../shr/core/Identifier';

class FluxStudy {
    constructor(json) {
        this._study = Study.fromJSON(json);
    }

    /**
     *  Getter for title
     *  This will return the displayText value from the Title object
     */
    get title() {
        if (this._study.title) {
            return this._study.title.value;
        } else {
            return null;
        }
    }

    /**
     *  Setter for title
     *  The setter method is expecting a title sting
     *  The method will create a Title object and set the value to the title string
     */
    set title(title) {
        let titleObj = new Title();
        titleObj.value = title; 
        this._study.title = titleObj;
    }

    /**
     *  Getter for identifier
     *  This will return the displayText value from the Identifier object
     */
    get identifier() {
        return this._study.identifier.value;
    }

    /**
     *  Setter for identifier
     *  The setter method is expecting a identifier sting
     *  The method will create an Identifier object and set the value to the identifier string
     */
    set identifier(identifier) {
        let i = new Identifier();
        i.value = identifier;
        this._study.identifier = i;
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