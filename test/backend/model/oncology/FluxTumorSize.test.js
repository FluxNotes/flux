import FluxTumorSize from '../../../../src/model/oncology/FluxTumorSize';
import {expect} from 'chai';
import util from 'util';

const tumorJson = {
    "entryType":    [   "http://standardhealthrecord.org/oncology/TumorSize",
                    "http://standardhealthrecord.org/observation/Observation",
                    "http://standardhealthrecord.org/base/Action" ],
    "value": {"value": 30.0, "units": {"value": "mm"}},
    "specificType": {"value": {"coding": [{"value": "C0475440", "codeSystem": {"value":"http://ncimeta.nci.nih.gov"}, "displayText": "Tumor Size"}]}},
    "status": "final",
    "_issue": "strictly speaking, the observations in this list are elements and not entries so entryType shouldn't exist but how would you know which concrete type this represents otherwise? Problem is bigger for choices where some or all choices are just elements"
};

let tumorSize = new FluxTumorSize(tumorJson);

describe('getQuantity()', function() { 
    it('should return an object with value and unit', function() {
        const expectedQuantity = {
            value: 30.0,
            unit: "mm"
        };
        expect(tumorSize.quantity)
            .to.be.a('object')
            .eql(expectedQuantity);
    });
});
