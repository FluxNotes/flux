export default class FilterOptions {
    constructor(props) {
        this.filters = props;
        this.filterList = this.getFiltersAsList();
    }

    getAllActiveFilters() {
        return this.filterList.filter((filter) => {
            return filter.selected;
        });
    }

    getFiltersAsList() {
        let returnArray = [];
        Object.keys(this.filters).forEach((key) => {
            this.recursiveFilterSearch(this.filters[key], returnArray);
        });

        return returnArray;
    }

    getAllActiveValuesByMcodeElement() {
        const returnValue = {};
        this.getAllActiveFilters().forEach((filter) => {
            returnValue[filter.mcodeElement] = {};
            if (filter.hasOwnProperty("maxValue")) {
                returnValue[filter.mcodeElement].maxValue = filter.maxValue;
            }
            if (filter.hasOwnProperty("minValue")) {

                returnValue[filter.mcodeElement].minValue = filter.minValue;

            }

            returnValue[filter.mcodeElement].value = filter.value;
            returnValue[filter.mcodeElement].reference = filter.reference;

        });

        return returnValue;
    }

    getFilters() {
        return this.filters;
    }

    getFilterByMcodeType(type) {
        return this.filterList.filter((filter) => {
            return filter.mcodeElement === type;
        });
    }

    getFiltersByMcodeClass(type) {
        return this.filterList.filter((filter) => {
            return type.split('.').reduce((total, current, i) => {
                return total && filter.mcodeElement.split('.')[i] === current;
            },true);
        });

    }

    recursiveFilterSearch(parentFilter, returnArray) {
        Object.keys(parentFilter.options).forEach((filterKey) => {
            const filter = parentFilter.options[filterKey];
            if (filter.options) {
                returnArray = this.recursiveFilterSearch(filter, returnArray);
            } else {
                returnArray.push(filter);
            }
        });

        return returnArray;
    }

}