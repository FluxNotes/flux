import {Code, ValueSet} from 'cql-execution';

export default class CodeService {
    constructor(dbFile) {
        this.valueSets = {};

        this.loadValueSetsFromJson(dbFile);
    }

    loadValueSetsFromJson(json) {
        for (let oid in json) {
            let myOid = json[oid];
            for (let version in myOid) {
                let myCodes = myOid[version].codes.map(elem => new Code(elem.code, elem.system, elem.version));
                if (typeof this.valueSets[oid] === 'undefined') {
                    this.valueSets[oid] = {};
                }
                this.valueSets[oid][version] = new ValueSet(oid, version, myCodes);
            }
        }
    }

    findValueSetsByOid(oid) {
        const result = [];
        const vs = this.valueSets[oid];
        for (let version in vs) {
            result.push(vs[version]);
        }
        return result;
    }

    findValueSet(oid, version) {
        if (version != null) {
            const vsObj = this.valueSets[oid];
            if (typeof vsObj !== 'undefined') {
                return vsObj[version];
            } else {
                return;
            }
        }
        else {
            const results = this.findValueSetsByOid(oid);
            if (results.length === 0) {
                return;
            }
            else {
                return results.reduce(function (a, b) {
                    if (a.version > b.version) {
                        return a;
                    }
                    else {
                        return b;
                    }
                });
            }
        }
    }
}