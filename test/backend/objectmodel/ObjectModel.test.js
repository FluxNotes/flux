const objectModel = require('../../src/patient/ShrObjectModel.js');
import {expect} from 'chai';

// a sample Progression
const progressionWireFormat = {
	"AssessmentFocus" : { "ShrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d", "EntryType" : "http://jstars-linux-1.mitre.org/json-schema/shr/assessment#/definitions/AssessmentFocus", "EntryId" : "99",
	"Category" : "a category",
	"Value" : "a value",
	"Evidence" : [ 	{ "coding" : { "value" : "C0031809", "codeSystem" : "http://ncimeta.nci.nih.gov", "displayText" : "physical examination"}} ],
	"ShrId" : "788dcbc3-ed18-470c-89ef-35ff91854c7d",
	"EntryId" : { "value" : "20" },
	"EntryType" : [ { "value" : "http://jstars-linux-1.mitre.org/json-schema/shr/oncology#/definitions/Progression" } ],
	"FocalSubject" : "a subject",
	"OriginalCreationDate" : { "value" : "2017-01-01" },
	"LastUpdateDate" : { "value" : "2017-01-02" }
};

/* example
describe('getEntriesOfType', function() { 

    it('should return empty list for nonsense types', function () { 
        const invalidType1 = "nonsense";
        const invalidType2 = "http://standardhealthrecord.org/fakeNamespace/fakeDataElement";
        expect(hardCodedPatientObj.getEntriesOfType(invalidType1))
            .to.be.an('array')
            .that.is.empty;
        expect(hardCodedPatientObj.getEntriesOfType(invalidType2))
            .to.be.an('array')
            .that.is.empty;
    });

    it('should return non-empty list for type found in patient', function () { 
        // First check that hardCodedPatient isn't empty
        expect(hardCodedPatient)
            .to.be.an('array')
            .that.is.not.empty;

        const validType = getValidTypeFrom(hardCodedPatient);
        expect(hardCodedPatientObj.getEntriesOfType(validType))
            .to.be.an('array')
            .that.is.not.empty;
    });
});*/ 

describe('createProgressionObject', function() {
	it('should return a Progression with inherited properties set', function() {
		// invoke object model constructor
		
		
		// verify properties are set
		
	});
	
	
});
