import Entry from '../shr/base/Entry';

class FluxPhotograph {
    constructor(json) {
        this._entryInfo = new Entry(json);
        if (json.when) this._when = json.when;
        if (json.filePath) this._filePath = json.filePath;
    }
    /**
     * Getter for entry information (shr.base.Entry)
     */
    get entryInfo() {
        return this._entryInfo;
    }

    /**
     * Setter for entry information (shr.base.Entry)
     */
    set entryInfo(entryVal) {
        this._entryInfo = entryVal;
    }
    
    get when() {
        return this._when;
    }

    set when(val) {
        this._when = val;
    }

    get filePath() {
        return this._filePath;
    }

    set filePath(val) {
        this._filePath = val;
    }
}

export default FluxPhotograph;