// import FluxAdverseEvent from '../../../../src/model/adverse/FluxAdverseEvent';
// import {expect} from 'chai';
// import util from 'util';

// let adverseEvent = new FluxAdverseEvent();
// adverseEvent.adverseEvent = 'Anemia';
// adverseEvent.adverseEventGrade = 'grade 1';
// adverseEvent.causeCategory = 'treatment';

// describe('getAdverseEvent()', function() { 
//     it('should return "Anemia"', function() { 
//         expect(adverseEvent.adverseEvent)
//             .to.be.a('string')
//             .eql('Anemia');
//     });
// });

// describe('setAdverseEvent()', function() {
//     it('should set adverseEvent to "Bone marrow hypocellular"', function() {
//         adverseEvent.adverseEvent = 'Bone Marrow Hypocellular';
//         expect(adverseEvent.adverseEvent)
//             .to.be.a('string')
//             .eql('Bone marrow hypocellular');
//     });
// });

// describe('getAdverseEventGrade()', function() {
//     it('should return "Grade 1"', function() {
//         expect(adverseEvent.adverseEventGrade)
//             .to.be.an('string')
//             .eql('Grade 1');
//     });
// });

// describe('setAdverseEventGrade()', function() {
//     it('should set adverseEventGrade to "Grade 5"', function() {
//         adverseEvent.adverseEventGrade = 'grade 5';
//         expect(adverseEvent.adverseEventGrade)
//             .to.be.an('string')
//             .eql('Grade 5');
//     });
// });

// describe('getCauseCategory()', function() {
//     it('should return "Treatment"', function() {
//         expect(adverseEvent.causeCategory)
//             .to.be.an('string')
//             .eql('Treatment');
//     });
// });

// describe('setCauseCategory()', function() {
//     it('should set causeCategory to "Unknown"', function() {
//         adverseEvent.causeCategory = 'unknown';
//         expect(adverseEvent.causeCategory)
//             .to.be.an('string')
//             .eql('Unknown');
//     });
// });