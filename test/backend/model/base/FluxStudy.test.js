import FluxStudy from '../../../../src/model/base/FluxStudy';
import {expect} from 'chai';
import util from 'util';

let study = new FluxStudy();
study.title = 'PATINA';
study.identifier = '123';

describe('getTitle()', function() { 
    it('should return "PATINA"', function() { 
        expect(study.title)
            .to.be.a('string')
            .eql('PATINA');
    });
});

describe('setTitle()', function() {
    it('should set title to "ICARE"', function() {
        study.title = 'ICARE';
        expect(study.title)
            .to.be.a('string')
            .eql('ICARE');
    });
});

describe('getIdentifier()', function() { 
    it('should return "123"', function() { 
        expect(study.identifier)
            .to.be.a('string')
            .eql('123');
    });
});

describe('setIdentifier()', function() {
    it('should set title to "235"', function() {
        study.identifier = '235';
        expect(study.identifier)
            .to.be.a('string')
            .eql('235');
    });
});