import _ from 'lodash';
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

    getAllActiveValuesByMcodeElement(asList=false) {
        const returnValue = {};
        this.getAllActiveFilters().forEach((filter) => {
            const filterInfo = {};
            if (filter.hasOwnProperty("maxValue")) {
                filterInfo.maxValue = filter.maxValue;
            }
            if (filter.hasOwnProperty("minValue")) {
                filterInfo.minValue = filter.minValue;
            }

            filterInfo.value = filter.value;
            filterInfo.reference = filter.reference;

            if (!_.isEmpty(returnValue[filter.mcodeElement])) {
                if (Array.isArray(returnValue[filter.mcodeElement])) {
                    returnValue[filter.mcodeElement] = [...returnValue[filter.mcodeElement], filterInfo];
                } else {
                    returnValue[filter.mcodeElement] = [returnValue[filter.mcodeElement], filterInfo];
                }

            } else {
                returnValue[filter.mcodeElement] = filterInfo;
            }
        });
        if (!Array.isArray(returnValue) && asList) {
            return [returnValue];
        } else {
            return returnValue;
        }
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