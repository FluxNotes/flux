import FluxToxicReactionToTreatment from '../../../../src/model/oncology/FluxToxicReactionToTreatment';
import {expect} from 'chai';
import util from 'util';

let toxicReaction = new FluxToxicReactionToTreatment();
toxicReaction.adverseEvent = 'Anemia';
toxicReaction.adverseEventGrade = 'grade 1';
toxicReaction.causeCategory = 'treatment';

describe('getAdverseEvent()', function() { 
    it('should return "Anemia"', function() { 
        expect(toxicReaction.adverseEvent)
            .to.be.a('string')
            .eql('Anemia');
    });
});

describe('setAdverseEvent()', function() {
    it('should set adverseEvent to "Bone marrow hypocellular"', function() {
        toxicReaction.adverseEvent = 'Bone Marrow Hypocellular';
        expect(toxicReaction.adverseEvent)
            .to.be.a('string')
            .eql('Bone marrow hypocellular');
    });
});

describe('getAdverseEventGrade()', function() {
    it('should return "Grade 1"', function() {
        expect(toxicReaction.adverseEventGrade)
            .to.be.an('string')
            .eql('Grade 1');
    });
});

describe('setAdverseEventGrade()', function() {
    it('should set adverseEventGrade to "Grade 5"', function() {
        toxicReaction.adverseEventGrade = 'grade 5';
        expect(toxicReaction.adverseEventGrade)
            .to.be.an('string')
            .eql('Grade 5');
    });
});

describe('getCauseCategory()', function() {
    it('should return "Treatment"', function() {
        expect(toxicReaction.causeCategory)
            .to.be.an('string')
            .eql('Treatment');
    });
});

describe('setCauseCategory()', function() {
    it('should set causeCategory to "Unknown"', function() {
        toxicReaction.causeCategory = 'unknown';
        expect(toxicReaction.causeCategory)
            .to.be.an('string')
            .eql('Unknown');
    });
});