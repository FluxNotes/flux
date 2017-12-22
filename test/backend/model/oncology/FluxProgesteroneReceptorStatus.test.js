import FluxProgesteroneReceptorStatus from '../../../../src/model/oncology/FluxProgesteroneReceptorStatus';
import {expect} from 'chai';
import util from 'util';

let prstatus = new FluxProgesteroneReceptorStatus();
prstatus.status = 'Positive';

describe('getStatus()', function() { 
    it('should return "Positive"', function() { 
        expect(prstatus.status)
            .to.be.a('string')
            .eql('Positive');
    });
});

describe('setStatus()', function() {
    it('should set status to "Negative"', function() {
        prstatus.status = 'Negative';
        expect(prstatus.status)
            .to.be.a('string')
            .eql('Negative');
    });
});