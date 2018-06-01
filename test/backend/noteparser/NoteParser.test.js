import NoteParser from '../../../src/noteparser/NoteParser';
import { stagingJSON, diseaseStatusJSON, diseaseStatus2JSON, toxicityJSON, deceasedJSON,
    clinicalTrialEnrollmentJSON, clinicalTrialEnrollmentMinimalJSON, clinicalTrialUnenrolledJSON,
    clinicalTrialUnenrolledMinimalJSON } from './NoteParserUtils';
import FluxDiseaseProgression from '../../../src/model/condition/FluxDiseaseProgression';
import FluxTNMStage from '../../../src/model/oncology/FluxTNMStage';
import FluxToxicReaction from '../../../src/model/adverse/FluxToxicReaction';
import FluxDeceased from '../../../src/model/entity/FluxDeceased';
import FluxResearchSubject from '../../../src/model/research/FluxResearchSubject';
import moment from 'moment';
import {expect} from 'chai';
import util from 'util';

const noteParser = new NoteParser();

const today = new moment().format("D MMM YYYY");

const sampleTextEmpty = "";
const sampleTextPlain = "Nothing of substance here";
const sampleTextNonsense = "#nonsense is in the structured phrase";
const sampleTextStaging = "Debra Hernandez672 is presenting with carcinoma of the breast. #staging assessed as tumor size T2 and N0 + M0.";
const sampleTextDiseaseStatus = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam";
const sampleTextDiseaseStatus2 = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam #as of #10/5/2017 #reference date #6/7/2017";
const sampleTextToxicity = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #toxicity #nausea #grade 2 #treatment";
const sampleTextDeceased = "Debra Hernandez672 is #deceased on #10/01/2017";
const sampleTextClinicalTrialEnrollment = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n Patient consented to #enrollment #PATINA on #09/04/2017";
const sampleTextClinicalTrialEnrollmentMinimal = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #enrollment";
const sampleTextClinicalTrialUnenrolled = "Debra Hernandez672 is presenting with carcinoma of the breast. \n\n Patient #unenrolled from #PATINA on #10/06/2017";
const sampleTextClinicalTrialUnenrolledMinimal = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #unenrolled";

const expectedOutputEmpty = [[], []];
const expectedOutputPlain = [[], []];
const expectedOutputNonsense = [[], [ sampleTextNonsense] ];
const expectedOutputStaging = [[ new FluxTNMStage(stagingJSON) ], []];
const expectedOutputDiseaseStatus = [[ new FluxDiseaseProgression(diseaseStatusJSON) ], []];
const expectedOutputDiseaseStatus2 = [[ new FluxDiseaseProgression(diseaseStatus2JSON) ], []];
const expectedOutputToxicity = [[ new FluxToxicReaction(toxicityJSON) ], []];
const expectedOutputDeceased = [[ new FluxDeceased(deceasedJSON) ], []];
const expectedOutputClinicalTrialEnrollment = [[ new FluxResearchSubject(clinicalTrialEnrollmentJSON) ], []];
const expectedOutputClinicalTrialEnrollmentMinimal = [[ new FluxResearchSubject(clinicalTrialEnrollmentMinimalJSON) ], []];
const expectedOutputClinicalTrialUnenrolled = [[ new FluxResearchSubject(clinicalTrialUnenrolledJSON) ], []];
const expectedOutputClinicalTrialUnenrolledMinimal = [[ new FluxResearchSubject(clinicalTrialUnenrolledMinimalJSON) ], []];

describe('getAllTriggersRegularExpression', function () { 

    it('should return allStringTriggersRegExp of the parser used', function () { 
        const expectedTriggers = noteParser.allStringTriggersRegExp; 
        expect(noteParser.getAllTriggersRegularExpression())
            .to.eql(expectedTriggers);
    });
});


describe('parse', function() { 

    it('should return an empty record when it receives empty text', function () {
        const record = noteParser.parse(sampleTextEmpty);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputEmpty);
    });

    it('should return an empty record when it receives just plain text', function () {
        const record = noteParser.parse(sampleTextPlain);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputPlain);
    });

    it('should return an empty record when it receives just nonsense structured phrases in text', function () {
        const record = noteParser.parse(sampleTextNonsense);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputNonsense);
    });

    it('should return a patient record with staging data when parsing a note with staging phrases', function () {
        const record = noteParser.parse(sampleTextStaging);
        // This test is different from the others because Observation sets the _value property which we cannot set in TNMStage using getters and setters.
        // Instead this test will compare all the properties in each object expect _value property.
        expect(record)
            .to.be.an('array');
        expect(record[0][1])
            .eql(expectedOutputStaging[0][1]);
        expect(record[0][0].stage)
            .eql(expectedOutputStaging[0][0].stage);
        expect(record[0][0].entryInfo)
            .eql(expectedOutputStaging[0][0].entryInfo);
        expect(record[0][0].t_Stage)
            .eql(expectedOutputStaging[0][0].t_Stage);
        expect(record[0][0].n_Stage)
            .eql(expectedOutputStaging[0][0].n_Stage);
        expect(record[0][0].m_Stage)
            .eql(expectedOutputStaging[0][0].m_Stage);
    });

    it('should return a patient record with disease status data when parsing a note with disease status phrases', function () {
        const record = noteParser.parse(sampleTextDiseaseStatus);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputDiseaseStatus);
    });
    it('should return a patient record with disease status data when parsing a note with disease status phrases including dates', function () {
        const record = noteParser.parse(sampleTextDiseaseStatus2);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputDiseaseStatus2);
    });
    it('should return a patient record with toxicity data when parsing a note with toxicity phrases', function () {
        const record = noteParser.parse(sampleTextToxicity);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputToxicity);
    });
    it('should return a patient record with deceased data when parsing a note with deceased phrases', function () {
        const record = noteParser.parse(sampleTextDeceased);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputDeceased);
    });
    it('should return a patient record with study enrollment data when parsing a note with clinical trial phrases', function () {
        const record = noteParser.parse(sampleTextClinicalTrialEnrollment);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrialEnrollment);
    });
    it('should return a patient record with study enrollment data correctly defaulted when parsing a note with only #enrollment', function () {
        const record = noteParser.parse(sampleTextClinicalTrialEnrollmentMinimal);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrialEnrollmentMinimal);
    });
    it('should return a patient record with study unenrolled data when parsing a note with clinical trial phrases', function () {
        const record = noteParser.parse(sampleTextClinicalTrialUnenrolled);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrialUnenrolled);
    });
    it('should return a patient record with study unenrolled data correctly defaulted when parsing a note with only #unenrolled', function () {
        const record = noteParser.parse(sampleTextClinicalTrialUnenrolledMinimal);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrialUnenrolledMinimal);
    });
});

