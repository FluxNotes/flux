import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import ProgesteroneReceptorStatus from './ProgesteroneReceptorStatus';
import FluxTumorMarker from '../oncocore/FluxTumorMarker';

class FluxProgesteroneReceptorStatus extends FluxTumorMarker {
    constructor(json) {
        super(json)
        this._entry = this._tumorMarker = ProgesteroneReceptorStatus.fromJSON(json);
        if (!this._tumorMarker.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/brca/ProgesteroneReceptorStatus';
            this._tumorMarker.entryInfo = entry;
        }
    }

    get abbreviatedName() {
        return 'PR';
    }
}

export default FluxProgesteroneReceptorStatus;