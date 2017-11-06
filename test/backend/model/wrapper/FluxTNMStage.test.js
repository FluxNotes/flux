import FluxTNMStage from '../../../../src/model/oncology/FluxTNMStage';
import SpecificType from '../../../../src/model/shr/core/SpecificType';
import {expect} from 'chai';
import util from 'util';

let stage = new FluxTNMStage();
stage.staging = "IIIC";
stage.t_Stage = "T4";
stage.n_Stage = "N1mi";
stage.m_Stage = "M1";

describe('getStaging()', function() { 
    it('should return "IIIC"', function() { 
        expect(stage.staging)
            .to.be.a('string')
            .eql('IIIC');
    });
});

describe('setStaging()', function() {
    it('should set staging to "IA"', function() {
        stage.staging = 'IA';
        expect(stage.staging)
            .to.be.a('string')
            .eql('IA');
    });
});

describe('getT_Stage()', function() {
    it('should return T4', function() {
        expect(stage.t_Stage)
            .to.be.an('string')
            .eql('T4');
    });
});

describe('setT_Stage()', function() {
    it('should set t_Stage to Tis', function() {
        stage.t_Stage = 'Tis';
        expect(stage.t_Stage)
            .to.be.an('string')
            .eql('Tis');
    });
});

describe('getN_Stage()', function() {
    it('should return N1mi', function() {
        expect(stage.n_Stage)
            .to.be.an('string')
            .eql('N1mi');
    });
});

describe('setN_Stage()', function() {
    it('should set n_Stage to N0', function() {
        stage.n_Stage = 'N0';
        expect(stage.n_Stage)
            .to.be.an('string')
            .eql('N0');
    });
});

describe('getM_Stage()', function() {
    it('should return M1', function() {
        expect(stage.m_Stage)
            .to.be.an('string')
            .eql('M1');
    });
});

describe('setM_Stage()', function() {
    it('should set m_Stagetage to M0', function() {
        stage.m_Stage = 'M0';
        expect(stage.m_Stage)
            .to.be.an('string')
            .eql('M0');
    });
});

describe('getSpecificType()', function() {
    it('should be set by the constructor', function() {
        const expectedSpecificType = new SpecificType({"value":{"coding": [{"value": "21908-9", "codeSystem": {value: "http://loinc.org"}, "displayText": "Stage"}]}});
        expect(stage.specificType)
            .eql(expectedSpecificType);
    });
})