// import FluxTest from '../../../../src/model/lab/FluxTest';
// import {expect} from 'chai';
// import util from 'util';

// const testJson = {
//     "entryType":    [   "http://standardhealthrecord.org/lab/Test",
//         "http://standardhealthrecord.org/observation/Observation",
//         "http://standardhealthrecord.org/base/Action" ],
//     "value": {"value": 6.30, "units": {"value": "%"}},
//     "specificType": {"value": {"coding": [{"value": "C0019046", "codeSystem": {"value":"http://ncimeta.nci.nih.gov"}, "displayText": "Hemoglobin"}]}},
//     "status": "final",
//     "_issue": "strictly speaking, the observations in this list are elements and not entries so entryType shouldn't exist but how would you know which concrete type this represents otherwise? Problem is bigger for choices where some or all choices are just elements"
// };

// let test = new FluxTest(testJson);

// describe('getQuantity()', function() { 
//     it('should return null when value is null', function() {
//         let test2 = new FluxTest();
//         expect(test2.quantity)
//             .to.be.null;
//     });

//     it('should return an object with number and unit', function() {
//         const expectedQuantity = {
//             number: 6.30,
//             unit: "%"
//         };
//         expect(test.quantity)
//             .to.be.a('object')
//             .eql(expectedQuantity);
//     });
// });
