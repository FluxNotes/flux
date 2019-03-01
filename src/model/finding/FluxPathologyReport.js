import FluxObservation from '../base/FluxObservation';
import Lang from 'lodash';

class FluxPathologyReport extends FluxObservation {
    
     /*
     *  Getter for Members
     *  Return array of observations within the pathology report
     */
    get members() {
        if (Lang.isUndefined(this._observation.panelMembers)) return [];
        return this._observation.panelMembers.observation;
    } 

     /*
     *  Getter for value
     *  Return value (a media or link to pathology report)
     */
    get value() {
        return this._observation._findingResult.value;
    }

    get author() {
        return this._observation.metadata.informationRecorder || null;
    }

    toJSON() {
        const inst = super.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/PathologyReport' };
        return inst;
    }

}
export default FluxPathologyReport;