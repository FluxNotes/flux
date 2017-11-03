import FluxProgression from '../../../../src/model/wrapper/FluxProgression';
import {expect} from 'chai';
import util from 'util';

let prog = new FluxProgression();
prog.evidence = ['pathology', 'imaging'];
prog.status = 'Responding';

describe('getStatus()', function() { 
    it('should return "Responding"', function() { 
        expect(prog.status)
            .to.be.a('string')
            .eql('Responding');
    });
});

describe('setStatus()', function() {
    it('should set status to "Stable"', function() {
        prog.status = 'Stable';
        expect(prog.status)
            .to.be.a('string')
            .eql('Stable');
    });
});

describe('getEvidence()', function() {
    it('should return ["Pathology", "Imaging]"', function() {
        const expectedEvidence = ['Pathology', 'Imaging'];
        expect(prog.evidence)
            .to.be.an('array')
            .eql(expectedEvidence);
    });
});

describe('setEvidence()', function() {
    it('should set evidence to ["Symptoms"]', function() {
        const expectedEvidence = ['Symptoms'];
        prog.evidence = ['Symptoms'];
        expect(prog.evidence)
            .to.be.an('array')
            .eql(expectedEvidence);
    });
});