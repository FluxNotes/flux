import Lang from 'lodash';

class SearchIndex {
    constructor() {
        this._searchableData = [];
    }

    get searchableData() {
        return Lang.uniqWith(this._searchableData, Lang.isEqual);
    }

    addSearchableData(data) {
        this._searchableData.push(data);
    }

    removeDataBySection(section) {
        Lang.remove(this._searchableData, data => data.section === section);
    }
}

export default SearchIndex;