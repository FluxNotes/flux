import FluxObservation from './FluxObservation';

import Lang from 'lodash';

class FluxPathologyReport extends FluxObservation {
    constructor(json) {
       super(json);
    }
    
     /*
     *  Getter for Members
     *  Return array of observations within the pathology report
     */
    get members() {
        if (Lang.isUndefined(this._observation.members)) return [];
        return this._observation.members.value;
    } 

     /*
     *  Getter for value
     *  Return value (an attachment or link to pathology report)
     */
    get value() {
        return this._observation.value;
    }

    get author() {
        return this._observation.author.value;
    }

    toJSON() {
        return this._observation.toJSON();
    }

}
export default FluxPathologyReport;