import NewProgression from '../../../../../src/model/shr/oncology/NewProgression';
import {expect} from 'chai';
import util from 'util';

let prog = new NewProgression();
prog.evidence = ['pathology', 'imaging'];
prog.value = 'Responding';

describe('getStatus()', function() { 
    it('should return "Responding"', function() { 
        expect(prog.value)
            .to.be.a('string')
            .eql('Responding');
    });
});

describe('setStatus()', function() {
    it('should set status to "Stable"', function() {
        prog.value = 'Stable';
        expect(prog.value)
            .to.be.a('string')
            .eql('Stable');
    });
});

describe('getReasons()', function() {
    it('should return ["Pathology", "Imaging]"', function() {
        expect(prog.evidence)
            .to.be.an('array')
            .eql(['Pathology', 'Imaging']);
    });
});

describe('setReasons()', function() {
    it('should set reaons to ["Symptoms"]', function() {
        prog.evidence = ['Symptoms'];
        expect(prog.evidence)
            .to.be.an('array')
            .eql(['Symptoms']);
    });
});