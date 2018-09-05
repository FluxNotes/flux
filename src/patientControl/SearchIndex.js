class SearchIndex {
    constructor() {
        this._searchableData = [];
    }

    get searchableData() {
        return this._searchableData;
    }

    addSearchableData(data) {
        this._searchableData.push(data);
    }
}

export default SearchIndex;