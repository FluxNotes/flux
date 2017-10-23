const objectModel = require('../../src/patient/ShrObjectModel.js');
import {expect} from 'chai';

// a sample Progression, Toxicity, and Staging
const progressionWireFormat = {
	"AssessmentFocus" : "a string",
	"Category" : "a category",
	"Value" : { "coding" : [{"value" : "codableConcepValue", "displayText" : {"value" : "text"}}], "displayType" : "?" },
	"Evidence" : [ 	{ "coding" : { "value" : "C0031809", "codeSystem" : "http://ncimeta.nci.nih.gov", "displayText" : "physical examination"}} ],
	"ShrId" : { "value" : "788dcbc3-ed18-470c-89ef-35ff91854c7d" },
	"EntryId" : { "value" : "20" },
	"EntryType" : [ { "value" : "someUri" } ],
	"FocalSubject" : "q",
	"OriginalCreationDate" : { "value" : "2017-01-01" },
	"LastUpdateDate" : { "value" : "2017-01-02" },
	"Status" : {"value" : "a status coding" }
};
const toxicityWireFormat = {
	"AdverseEvent" : {"ShrId" : "788dcbc3-ed18-470c-89ef-35ff91854c7d", "EntryType" : "http://jstars-linux-1.mitre.org/json-schema/shr/adverse#/definitions/AdverseEvent", "EntryId" : "100" },
	"AdverseReactionAttribution" : "due to medication"
};
const stagingWireFormat = {
	"StagingSystem" : { "Value" : "a staging system"},
	"T-Stage" : {"Value" : {"Coding" : "codingSystem", "DisplayText" : "T0"}},
	"N-Stage" : {"Value" : {"Coding" : "codingSystem", "DisplayText" : "N1"}},
	"M-Stage" : {"Value" : {"Coding" : "codingSystem", "DisplayText" : "M0"}},
	"Reason" : "a reason for this observation"
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
		const classDefs = require("./reordered-object-definitions.js"); 	// The file where you stored the output of the block below with schema2js.Generator (this file contains class definitions)		
		const hier = new classDefs.makeHierarchy();
		var progression = hier.OncologyDefinitionsProgression(progressionWireFormat);
		//console.log(progression);
		//console.log("###############");
		var toxicity = hier.OncologyDefinitionsToxicReactionToTreatment(toxicityWireFormat);
		//console.log(toxicity);
		//console.log("###############");
		var staging = hier.OncologyDefinitionsTNMStage(stagingWireFormat);
		//console.log(staging);	
		
		// verify properties are set
		expect(progression.Category
			.to.be.a('string')
			.that.equals('a category'));
		// TODO: finish tests, verify they pass
	});
	
	
});
