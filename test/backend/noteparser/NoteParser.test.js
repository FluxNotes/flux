import NoteParser from '../../../src/noteparser/NoteParser';
import { stagingJSON, diseaseStatusJSON, diseaseStatus2JSON, toxicityJSON, deceasedJSON,
    clinicalTrialEnrollmentJSON, clinicalTrialEnrollmentMinimalJSON, clinicalTrialUnenrolledJSON, stopMedicationJSON, reduceMedicationJSON } from './NoteParserUtils';
import FluxCancerProgression from '../../../src/model/oncocore/FluxCancerProgression';
import FluxTNMClinicalStageGroup from '../../../src/model/oncocore/FluxTNMClinicalStageGroup';
import FluxToxicReaction from '../../../src/model/adverse/FluxToxicAdverseDrugReaction';
import FluxDeathInformation from '../../../src/model/entity/FluxDeathInformation';
import FluxResearchSubject from '../../../src/model/research/FluxResearchSubject';
import FluxMedicationChange from '../../../src/model/medication/FluxMedicationChange';
import moment from 'moment';
import {expect} from 'chai';
import util from 'util';
import EntryMapper from '../../../src/dataaccess/mcodev0.1-datasource/EntryMapper';

const today = new moment().format("D MMM YYYY");

const sampleTextEmpty = "";
const sampleTextPlain = "Nothing of substance here";
const sampleTextNonsense = "#nonsense is in the structured phrase";
const sampleTextStaging = "Debra Hernandez672 is presenting with carcinoma of the breast. #staging assessed as tumor size T2 and N0 + M0.";
const sampleTextDiseaseStatus = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam";
const sampleTextDiseaseStatus2 = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam #as of #10/5/2017 #reference date #6/7/2017";
const sampleTextToxicity = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #toxicity #nausea #grade 2 #treatment @active medication[[{\"text\":\"ibuprofen 600mg tablet\",\"entryId\":\"2\"}]]";
const sampleTextDeceased = "Debra Hernandez672 is #deceased on #10/01/2017";
const sampleTextClinicalTrialEnrollment = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n Patient consented to #enrollment #PATINA on #09/04/2017";
const sampleTextClinicalTrialEnrollmentMinimal = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #enrollment";
const sampleTextClinicalTrialUnenrolled = "Debra Hernandez672 is presenting with carcinoma of the breast. \n\n Patient #unenrolled from #PATINA on #10/06/2017";
const sampleTextClinicalTrialUnenrolledMinimal = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #unenrolled";
const sampleTextStopMedication = "#stop medication @active medication[[{\"text\":\"ibuprofen 600mg tablet\",\"entryId\":\"2\"}]]";
const sampleTextReduceMedication = "#reduce medication @active medication[[{\"text\":\"ibuprofen 600mg tablet\",\"entryId\":\"2\"}]] #to #2"

const expectedOutputEmpty = [[], []];
const expectedOutputPlain = [[], []];
const expectedOutputNonsense = [[], [ sampleTextNonsense] ];
const expectedOutputStaging = [[ new FluxTNMClinicalStageGroup(EntryMapper.mapEntries([stagingJSON])[0]) ], []];
const expectedOutputDiseaseStatus = [[ new FluxCancerProgression(EntryMapper.mapEntries([diseaseStatusJSON])[0]) ], []];
const expectedOutputDiseaseStatus2 = [[ new FluxCancerProgression(EntryMapper.mapEntries([diseaseStatus2JSON])[0]) ], []];
const expectedOutputToxicity = [[ new FluxToxicReaction(EntryMapper.mapEntries([toxicityJSON])[0]) ], []];
const expectedOutputDeceased = [[ new FluxDeathInformation(deceasedJSON) ], []];
const expectedOutputClinicalTrialEnrollment = [[ new FluxResearchSubject(EntryMapper.mapEntries([clinicalTrialEnrollmentJSON])[0]) ], []];
const expectedOutputClinicalTrialEnrollmentMinimal = [[ new FluxResearchSubject(EntryMapper.mapEntries([clinicalTrialEnrollmentMinimalJSON])[0]) ], []];
const expectedOutputClinicalTrialUnenrolled = [[ new FluxResearchSubject(EntryMapper.mapEntries([clinicalTrialUnenrolledJSON])[0]) ], []];
const expectedOutputStopMedication = [[ new FluxMedicationChange(EntryMapper.mapEntries([stopMedicationJSON])[0]) ], []];
const expectedOutputReduceMedication = [[ new FluxMedicationChange(EntryMapper.mapEntries([reduceMedicationJSON])[0]) ], []];

let noteParser;

beforeEach(function() {
    noteParser = new NoteParser();
});

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

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // Stage should match
        expect(record[0][0]._tnmStageGroup._findingResult)
            .to.eql(expectedOutputStaging[0][0]._tnmStageGroup._findingResult);

        // Should have 3 observations for t, n, and m stage
        expect(record[0][0]._tnmStageGroup._panelMembers._observation.length)
            .to.equal(3);
    });

    it('should return a patient record with disease status data when parsing a note with disease status phrases', function () {
        const record = noteParser.parse(sampleTextDiseaseStatus);

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // Disease status values should match
        expect(record[0][0]._cancerProgression._findingResult)
            .to.eql(expectedOutputDiseaseStatus[0][0]._cancerProgression._findingResult);

        // Disease status evidence should match
        expect(record[0][0]._cancerProgression._cancerProgressionEvidence)
            .to.eql(expectedOutputDiseaseStatus[0][0]._cancerProgression._cancerProgressionEvidence);

    });
    it('should return a patient record with disease status data when parsing a note with disease status phrases including dates', function () {
        const record = noteParser.parse(sampleTextDiseaseStatus2);

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // Disease status values should match
        expect(record[0][0]._cancerProgression._findingResult)
            .to.eql(expectedOutputDiseaseStatus2[0][0]._cancerProgression._findingResult);

        // Disease status evidence should match
        expect(record[0][0]._cancerProgression._cancerProgressionEvidence)
            .to.eql(expectedOutputDiseaseStatus2[0][0]._cancerProgression._cancerProgressionEvidence);

        // Disease status authored date time (as of date) should match
        expect(record[0][0]._cancerProgression._metadata._authoredDateTime)
            .to.eql(expectedOutputDiseaseStatus2[0][0]._cancerProgression._metadata._authoredDateTime);

        // Disease status relevant time (reference date) should match
        expect(record[0][0]._cancerProgression._relevantTime)
            .to.eql(expectedOutputDiseaseStatus2[0][0]._cancerProgression._relevantTime);
    });
    it('should return a patient record with toxicity data when parsing a note with toxicity phrases', function () {
        const record = noteParser.parse(sampleTextToxicity);

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // The actual toxicity value should match
        expect(record[0][0]._toxicAdverseDrugReaction._type)
            .to.eql(expectedOutputToxicity[0][0]._toxicAdverseDrugReaction._type);

        // The grade of the toxicities should match
        expect(record[0][0]._toxicAdverseDrugReaction._seriousness)
            .to.eql(expectedOutputToxicity[0][0]._toxicAdverseDrugReaction._seriousness);

        // Result should have an attribution
        expect(record[0][0]._toxicAdverseDrugReaction._causalAttribution).to.exist;
    });
    it('should return a patient record with deceased data when parsing a note with deceased phrases', function () {
        const record = noteParser.parse(sampleTextDeceased);

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // Deceased booleans should match
        expect(record[0][0]._deathInformation._isDeceased)
            .to.eql(expectedOutputDeceased[0][0]._deathInformation._isDeceased);

        // Date of death should match
        expect(record[0][0]._deathInformation._dateOfDeath)
            .to.eql(expectedOutputDeceased[0][0]._deathInformation._dateOfDeath);
    });
    it('should return a patient record with study enrollment data when parsing a note with clinical trial phrases', function () {
        const record = noteParser.parse(sampleTextClinicalTrialEnrollment);

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // Study should match
        expect(record[0][0]._researchSubject._study)
            .to.eql(expectedOutputClinicalTrialEnrollment[0][0]._researchSubject._study);

        // Status of entrollment should match
        expect(record[0][0]._researchSubject._status)
            .to.eql(expectedOutputClinicalTrialEnrollment[0][0]._researchSubject._status);

        // Participation period should match
        expect(record[0][0]._researchSubject._participationPeriod)
            .to.eql(expectedOutputClinicalTrialEnrollment[0][0]._researchSubject._participationPeriod);
    });
    it('should return a patient record with study enrollment data correctly defaulted when parsing a note with only #enrollment', function () {
        const record = noteParser.parse(sampleTextClinicalTrialEnrollmentMinimal);

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // There should not be a study
        expect(record[0][0]._researchSubject._study._title._string).to.be.null;

        // Status of entrollment should match
        expect(record[0][0]._researchSubject._status)
            .to.eql(expectedOutputClinicalTrialEnrollmentMinimal[0][0]._researchSubject._status);

        // Participation period should match
        expect(record[0][0]._researchSubject._participationPeriod)
            .to.eql(expectedOutputClinicalTrialEnrollmentMinimal[0][0]._researchSubject._participationPeriod);
    });
    it('should return a patient record with study unenrolled data when parsing a note with clinical trial phrases', function () {
        const record = noteParser.parse(sampleTextClinicalTrialUnenrolled);

        // Verify result instances
        expect(record).to.be.an('array');
        expect(record[0][0]).to.be.an('object');

        // Study should match
        expect(record[0][0]._researchSubject._study)
            .to.eql(expectedOutputClinicalTrialUnenrolled[0][0]._researchSubject._study);

        // Status of entrollment should match
        expect(record[0][0]._researchSubject._status)
            .to.eql(expectedOutputClinicalTrialUnenrolled[0][0]._researchSubject._status);

        // Participation period should match
        expect(record[0][0]._researchSubject._participationPeriod)
            .to.eql(expectedOutputClinicalTrialUnenrolled[0][0]._researchSubject._participationPeriod);
    });
    it('should return a patient record with study unenrolled data correctly defaulted when parsing a note with only #unenrolled', function () {
        const record = noteParser.parse(sampleTextClinicalTrialUnenrolledMinimal);

        expect(record)
            .to.be.an('array')
            .and.to.eql([[],[]]);
    });
    it('should return a patient record with medication change with type set to stop and a medication when parsing a note with #stop medication and a medication ', function () {
        const record = noteParser.parse(sampleTextStopMedication);
        // Because stop medication structured phrase is a bit different from the other shortcuts, this test checks for certian attributes intead of doing a deep equals

        expect(record)
            .to.be.an('array');
        expect(record[0][0]._medicationChange._entryInfo.entryType)
            .eql(expectedOutputStopMedication[0][0]._medicationChange._entryInfo.entryType);
        expect(record[0][0]._medicationChange._category)
            .eql(expectedOutputStopMedication[0][0]._medicationChange._category);
        expect(record[0][0]._medicationChange._medicationBeforeChange)
            .to.exist;
    });
    it('should return a patient record with medication change with type set to reduced and a medication when parsing a note with #reduce medication and a medication ', function () {
        const record = noteParser.parse(sampleTextReduceMedication);
        // Because reduce medication structured phrase is a bit different from the other shortcuts, this test checks for certian attributes intead of doing a deep equals

        expect(record)
            .to.be.an('array');
        expect(record[0][0]._medicationChange._entryInfo.entryType)
            .eql(expectedOutputReduceMedication[0][0]._medicationChange._entryInfo.entryType);
        expect(record[0][0]._medicationChange._category)
            .eql(expectedOutputReduceMedication[0][0]._medicationChange._category);
        expect(record[0][0]._medicationChange._medicationBeforeChange)
            .to.exist;
    });
});
