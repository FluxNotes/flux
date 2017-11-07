import FluxProcedure from '../../../../src/model/procedure/FluxProcedure';
import {expect} from 'chai';
import util from 'util';

const procedureJson1 = {
    "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d",
    "entryId": "15",
    "entryType":    [   "http://standardhealthrecord.org/procedure/Procedure",
                    "http://standardhealthrecord.org/base/Intervention",
                    "http://standardhealthrecord.org/base/Action" ],
    "focalSubject": {"entryType": "http://standardhealthrecord.org/demographics/PersonOfRecord", "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d", "entryId": "1"},
    "specificType": {"value":{ "coding": [{ "value": "C0024671", "codeSystem": {"value":"http://ncimeta.nci.nih.gov"}, "displayText": "Mammography"}]}},
    "status": "completed",
    "occurrenceTime": "13 JAN 2012",
    "reason": [{"entryType": "http://standardhealthrecord.org/condition/Condition", "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d", "entryId": "8"}],
    "originalCreationDate": "13 JAN 2012",
    "lastUpdateDate": "13 JAN 2012"
};

const procedureJson2 = {
    "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d",
    "entryId": "16",
    "entryType":    [   "http://standardhealthrecord.org/procedure/Procedure",
                    "http://standardhealthrecord.org/base/Intervention",
                    "http://standardhealthrecord.org/base/Action" ],
    "focalSubject": {"entryType": "http://standardhealthrecord.org/demographics/PersonOfRecord", "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d", "entryId": "1"},
    "specificType": { "value":{"coding": [{ "value": "C0454059", "codeSystem": {"value":"http://ncimeta.nci.nih.gov"}, "displayText": "Radiation therapy procedure or service"}]}},
    "status": "completed",
    "occurrenceTime": { "timePeriodStart": "12 JUL 2012",
                        "timePeriodEnd": "16 AUG 2012"},
    "reason": [ {"entryType": "http://standardhealthrecord.org/condition/Condition", "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d", "entryId": "8"} ],
    "originalCreationDate": "02 JUL 2012",
    "lastUpdateDate": "02 JUL 2012"
};

let proc1 = new FluxProcedure(procedureJson1);
let proc2 = new FluxProcedure(procedureJson2);

describe('getOccurrenceTime()', function() { 
    it('should return a string', function() {
        expect(proc1.occurrenceTime)
            .to.be.a('string')
            .eql('13 JAN 2012');
    });
    it('should return an object with timePeriodStart and timePeriodEnd', function() {
        const expectedOccurrenceTime = {
            timePeriodStart: "12 JUL 2012",
            timePeriodEnd: "16 AUG 2012"
        };
        expect(proc2.occurrenceTime)
            .to.be.a('object')
            .eql(expectedOccurrenceTime);
    });
});
