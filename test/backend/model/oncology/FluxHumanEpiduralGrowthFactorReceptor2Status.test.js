import FluxHumanEpiduralGrowthFactorReceptor2Status from '../../../../src/model/oncology/FluxHumanEpiduralGrowthFactorReceptor2Status';
import {expect} from 'chai';
import util from 'util';

let her2status = new FluxHumanEpiduralGrowthFactorReceptor2Status();
her2status.status = 'Positive';

describe('getStatus()', function() { 
    it('should return "Positive"', function() { 
        expect(her2status.status)
            .to.be.a('string')
            .eql('Positive');
    });
});

describe('setStatus()', function() {
    it('should set status to "Negative"', function() {
        her2status.status = 'Negative';
        expect(her2status.status)
            .to.be.a('string')
            .eql('Negative');
    });
});