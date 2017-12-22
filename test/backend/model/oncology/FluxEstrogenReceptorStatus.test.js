import FluxEstrogenReceptorStatus from '../../../../src/model/oncology/FluxEstrogenReceptorStatus';
import {expect} from 'chai';
import util from 'util';

let erstatus = new FluxEstrogenReceptorStatus();
erstatus.status = 'Positive';

describe('getStatus()', function() { 
    it('should return "Positive"', function() { 
        expect(erstatus.status)
            .to.be.a('string')
            .eql('Positive');
    });
});

describe('setStatus()', function() {
    it('should set status to "Negative"', function() {
        erstatus.status = 'Negative';
        expect(erstatus.status)
            .to.be.a('string')
            .eql('Negative');
    });
});