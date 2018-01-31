// import FluxHistologicGrade from '../../../../src/model/oncology/FluxHistologicGrade';
// import {expect} from 'chai';
// import util from 'util';

// const gradeJson = {
//     "entryType":    [   "http://standardhealthrecord.org/oncology/HistologicGrade",
//                     "http://standardhealthrecord.org/observation/Observation",
//                     "http://standardhealthrecord.org/base/Action" ],
//     "value": {"coding": [{"value": "369792005", "codeSystem": {"value":"http://snomed.info/sct"}, "displayText": "High grade or poorly differentiated"}]},
//     "status": "final",
//     "_issue": "stricly speaking, the observations in this list are elements and not entries so entryType shouldn't exist but how would you know which concrete type this represents otherwise? Problem is bigger for choices where some or all choices are just elements"
// };

// let grade = new FluxHistologicGrade(gradeJson);

// describe('getGrade()', function() { 
//     it('should return "High grade or poorly differentiated"', function() {
//         expect(grade.grade)
//             .to.be.a('string')
//             .eql('High grade or poorly differentiated');
//     });
// });
