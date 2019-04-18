const fs = require('fs');
const path = require('path');

const dataModel = require('./transformedDataModel.json');

function recursiveFill(obj, patient) {
    // TODO: Patient generation functionality?  Ability to update already present fields?
    Object.keys(obj).forEach((e) => {
        const property = obj[e];
        if (property.type) {
            // top level property
            let patientProperty = patient[e]

            if (patientProperty === undefined || patientProperty === null) {
                // the section doesn't exist, create it
                patient[e] = modelParse(property);
            }
        } else {
            if (!patient[e]) {
                // patient lacks this key, init
                patient[e] = {};
            }
            // recurse down the json
            recursiveFill(property, patient[e]);
        }
    })

}

function modelParse(property) {
    if (property.type === "choice") {
        let sum = 0;
        let r = Math.random();
        let weight = property.weight;
        if (weight === "uniform") {
            weight = false;
        }
        for (let i = 0; i < property.values.length; i++) {
            sum += weight ? weight[i] : 1 / property.values.length
            if (r <= sum) {
                return property.values[i];
            }

        }
    } else if (property.type === "multi-choice") {
        weight = (property.weight === "uniform") ? new Array(property.values.length).fill(1 / property.values.length) : property.weight;
        let r;
        let returnSet = [];
        const defaultValue = property.values.filter((e) => { return e.startsWith("!") });
        for (let i = 0; i < property.values.length; i++) {
            r = Math.random();
            if (r <= weight[i]) {
                const returnValue = property.values[i];
                if (!returnValue.startsWith("!")) {
                    returnSet.push(returnValue);
                }

            }
        }
        if (returnSet.length === 0) {
            return defaultValue.map((e) => { return e.substring(1) });
        }
        return returnSet;
    } else if (property.type === "date") {
        // assume the weight is uniformly distributed
        const start = property.values[0];
        const end = property.values[1];
        const year = start + Math.floor(Math.random() * (end - start));
        const month = Math.ceil(Math.random() * 12);
        return year + "-" + month;
    } else if (property.type === "range") {
        // assume the weight is uniformly distributed
        const start = property.values[0];
        const end = property.values[1];
        const value = start + Math.floor(Math.random() * (end - start));
        return value;
    }
}

fs.readFile(path.resolve(__dirname, 'mock-data.json'), 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile(path.resolve(__dirname, 'mock-data.json.backup'), data, 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
        });
        const obj = JSON.parse(data);
        const transformedData = obj.transformedData;
        transformedData.forEach((patient) => {
            recursiveFill(dataModel, patient, null);
        })
        const json = JSON.stringify(obj, null, "\t");

        fs.writeFile(path.resolve(__dirname, 'mock-data.json'), json, 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
});
