import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import lookup from '../../lib/receptor_lookup.jsx';
import HER2ReceptorStatus from './HER2ReceptorStatus';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding';
import FindingResult from '../shr/base/FindingResult';
import FluxTumorMarker from '../oncocore/FluxTumorMarker';

class FluxHER2ReceptorStatus extends FluxTumorMarker{
    constructor(json) {
        super(json)
        this._entry = this._tumorMarker = HER2ReceptorStatus.fromJSON(json);
        if (!this._tumorMarker.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/brca/HER2ReceptorStatus';
            this._tumorMarker.entryInfo = entry;
        }
    }

    get abbreviatedName() {
        return 'HER2';
    }
}

export default FluxHER2ReceptorStatus;