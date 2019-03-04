import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import lookup from '../../lib/receptor_lookup.jsx';
import EstrogenReceptorStatus from './EstrogenReceptorStatus';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding';
import FindingResult from '../shr/base/FindingResult';
import FluxTumorMarker from '../oncocore/FluxTumorMarker';

// FluxEstrogenReceptorStatus class to hide codeableconcepts
class FluxEstrogenReceptorStatus extends FluxTumorMarker {
    constructor(json) {
        super(json)
        this._entry = this._tumorMarker = EstrogenReceptorStatus.fromJSON(json);
        if (!this._tumorMarker.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/brca/EstrogenReceptorStatus';
            this._tumorMarker.entryInfo = entry;
        }
    }

    get abbreviatedName() {
        return 'ER';
    }
}

export default FluxEstrogenReceptorStatus;
