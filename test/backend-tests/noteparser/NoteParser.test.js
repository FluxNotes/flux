import NoteParser from '../../../src/noteparser/NoteParser';
import {expect} from 'chai';

const noteParser = new NoteParser();

const sampleTextEmpty = "";
const sampleTextPlain = "Nothing of substance here"
const sampleTextNonsense = "#nonsense is in the structured phrase"
const sampleTextStaging = "Debra Hernandez672 is presenting with carcinoma of the breast. #staging assessed as tumor size #T2 and #N0 + #M0."

const expectedOutputEmpty = [];
const expectedOutputPlain = [];
const expectedOutputNonsense = [];
const expectedOutputStaging = [{ 
    entryType:
        [ 'http://standardhealthrecord.org/oncology/TNMStage',
           'http://standardhealthrecord.org/observation/Observation',
           'http://standardhealthrecord.org/base/Action' ],
    value:
     { coding:
        { value: '52774001',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'IIA' } },
    specificType:
     { coding:
        { value: '21908-9',
          codeSystem: 'http://loinc.org',
          displayText: 'Stage' } },
    status: 'unknown',
    occurrenceTime: '26 Sep 2017',
    tStage:
     { coding:
        { value: '369900003',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'T2' } },
    nStage:
     { coding:
        { value: '436311000124105',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'N0' } },
    mStage:
     { coding:
        { value: '433581000124101',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'M0' } } 
}];


describe('getAllTriggersRegularExpression', function () { 

    it('should return allTriggersRegExp of the parser used', function () { 
        const expectedTriggers = noteparser.allTriggersRegExp; 
        expect(noteparser.getAllTriggersRegularExpression())
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

    it('should return an empty record when it receives just nonsense structured phrases', function () {
        const record = noteParser.parse(sampleTextNonsense);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputNonsense);
    });

    it('should return an patient record with staging data when parsing a note with staging phrases', function () {
        const record = noteParser.parse(sampleTextStaging);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputStaging);
    });
}); 

