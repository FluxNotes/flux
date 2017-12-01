import NoteParser from '../../../src/noteparser/NoteParser';
import FluxProgression from '../../../src/model/oncology/FluxProgression';
import FluxTNMStage from '../../../src/model/oncology/FluxTNMStage';
import FluxToxicReactionToTreatment from '../../../src/model/oncology/FluxToxicReactionToTreatment';
import FluxDeceased from '../../../src/model/actor/FluxDeceased';
import FluxStudy from '../../../src/model/base/FluxStudy';
import moment from 'moment';
import {expect} from 'chai';
//import util from 'util';

const noteParser = new NoteParser();

const today = new moment().format("D MMM YYYY");

const sampleTextEmpty = "";
const sampleTextPlain = "Nothing of substance here";
const sampleTextNonsense = "#nonsense is in the structured phrase";
const sampleTextStaging = "Debra Hernandez672 is presenting with carcinoma of the breast. #staging assessed as tumor size #T2 and #N0 + #M0.";
const sampleTextDiseaseStatus = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam";
const sampleTextDiseaseStatus2 = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam #as of #10/5/2017 #reference date #6/7/2017";
const sampleTextToxicity = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #toxicity #nausea #grade 2 #treatment";
const sampleTextDeceased = "Debra Hernandez672 is #deceased on #10/01/2017";
const sampleTextClinicalTrial = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #clinical trial #PATINA #enrolled on #09/04/2017 and #ended on #10/06/2017";
const sampleTextClinicalTrialMinimal = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #clinical trial";

const expectedOutputEmpty = [[], []];
const expectedOutputPlain = [[], []];
const expectedOutputNonsense = [[], [ sampleTextNonsense] ];
const expectedOutputStaging = [[
    new FluxTNMStage({ 
        entryType: [ 
            'http://standardhealthrecord.org/oncology/TNMStage',
            'http://standardhealthrecord.org/observation/Observation',
            'http://standardhealthrecord.org/base/Action' 
        ],
        value: { 
            coding: [{
                value: '',
                codeSystem: { value: ''},
                displayText: 'IIA'
            }],
            displayText: 'IIA'
        },
        specificType: {
            value: { 
                coding: [{ 
                    value: '21908-9',
                    codeSystem: { value: 'http://loinc.org'},
                    displayText: 'Stage' 
                }] 
            }
        },
//        status: 'unknown',
//        occurrenceTime: today,
        originalCreationDate: today,
        lastUpdateDate: today,
        tStage: { 
            coding: [{ 
                  value: '369900003',
                  codeSystem: { value: 'urn:oid:2.16.840.1.113883.6.96'},
                  displayText: 'T2' 
            }] 
        },
        nStage: { 
            coding: [{ 
                value: '436311000124105',
                codeSystem: { value: 'urn:oid:2.16.840.1.113883.6.96'},
                displayText: 'N0' 
            }] 
        },
        mStage: { 
            coding: [{ 
                value: '433581000124101',
                codeSystem: { value: 'urn:oid:2.16.840.1.113883.6.96'},
                displayText: 'M0' 
            }] 
        } 
    })
], []];
const expectedOutputDiseaseStatus = [[
    new FluxProgression({
        entryType: [ 
            'http://standardhealthrecord.org/oncology/Progression',
            'http://standardhealthrecord.org/assessment/Assessment',
            'http://standardhealthrecord.org/base/Action' 
        ],
        value: { 
            coding: [{ 
                value: 'C0205360',
                codeSystem: { value: 'http://ncimeta.nci.nih.gov'},
                displayText: 'Stable' 
            }]
        },
        clinicallyRelevantTime: null,
        evidence: [ 
            { 
                coding: [{ 
                    value: 'C0011923',
                    codeSystem: { value: 'http://ncimeta.nci.nih.gov'},
                    displayText: 'Imaging' 
                }] 
            },
            { 
                coding: [{ 
                    value: 'C0031809',
                    codeSystem: { value: 'http://ncimeta.nci.nih.gov'},
                    displayText: 'Physical exam' 
                }] 
            } 
        ],
        assessmentType: { 
            coding: { 
                value: '#disease status' 
            } 
        },
        originalCreationDate: today,
        asOfDate: today,
        lastUpdateDate: today 
    })
], []];
const expectedOutputDiseaseStatus2 = [[
    new FluxProgression({
        entryType: [ 
            'http://standardhealthrecord.org/oncology/Progression',
            'http://standardhealthrecord.org/assessment/Assessment',
            'http://standardhealthrecord.org/base/Action'  
        ],
        value: { 
            coding: [{ 
                value: 'C0205360',
                codeSystem: { value: 'http://ncimeta.nci.nih.gov'},
                displayText: 'Stable' 
            }] 
        },
        clinicallyRelevantTime: '7 Jun 2017',
        evidence: [ 
            { 
                coding: [{ 
                    value: 'C0011923',
                    codeSystem: { value: 'http://ncimeta.nci.nih.gov'},
                    displayText: 'Imaging' 
                }] 
            },
            { 
                coding: [{ 
                    value: 'C0031809',
                    codeSystem: { value: 'http://ncimeta.nci.nih.gov'},
                    displayText: 'Physical exam' 
                }] 
            } 
        ],
        assessmentType: { 
            coding: { 
                value: '#disease status' 
            } 
        },
        originalCreationDate: today,
        asOfDate: '5 Oct 2017',
        lastUpdateDate: today 
    })
], []];
const expectedOutputToxicity = [[
    new FluxToxicReactionToTreatment({ 
        entryType: [
            'http://standardhealthrecord.org/oncology/ToxicReactionToTreatment',
            'http://standardhealthrecord.org/adverse/AdverseReaction'
        ],
        adverseEvent: {
            entryType: [ 
                'http://standardhealthrecord.org/adverse/AdverseEvent' 
            ],
            value: { 
                coding: [{ 
                    value: '10028813',
                    codeSystem: { value:'https://www.meddra.org/'},
                    displayText: 'Nausea' 
                }]
            },
            adverseEventGrade: {
                value: { 
                    coding: [{ 
                        value: 'C1513374',
                        codeSystem: { value:'http://ncimeta.nci.nih.gov'},
                        displayText: 'Grade 2' 
                    }]
                } 
            },
            causeCategory: {
                value: { 
                    coding: [{ 
                        value: '#Treatment',
                        codeSystem: { value:'https://www.meddra.org/'},
                        displayText: 'Treatment' 
                    }] 
                }
            },
            originalCreationDate: today,
            lastUpdateDate: today 
        },
        originalCreationDate: today,
        lastUpdateDate: today 
    })
], []];
const expectedOutputDeceased = [[
    new FluxDeceased({
        entryType: [ 'http://standardhealthrecord.org/shr/actor/Deceased' ],
        value: true,
        dateOfDeath: '1 Oct 2017'
    })
], []];
const expectedOutputClinicalTrial = [[
    new FluxStudy({
        entryType: [ 'http://standardhealthrecord.org/base/Study' ],
        title: {value: 'PATINA' },
        identifier: '',
        enrollmentDate: '4 Sep 2017',
        endDate: '6 Oct 2017',
        originalCreationDate: today,
        lastUpdateDate: today 
    })
], []];
const expectedOutputClinicalTrialMinimal = [[
    new FluxStudy({
        entryType: [ 'http://standardhealthrecord.org/base/Study' ],
        identifier: '',
        enrollmentDate: null,
        endDate: null,
        originalCreationDate: today,
        lastUpdateDate: today 
    })
], []];


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
        expect(record[0][0].occurrenceTime)
            .eql(expectedOutputStaging[0][0].occurrenceTime);
        expect(record[0][0].specificType)
            .eql(expectedOutputStaging[0][0].specificType);
        expect(record[0][0].status)
            .eql(expectedOutputStaging[0][0].status);
        expect(record[0][0].t_stage)
            .eql(expectedOutputStaging[0][0].t_stage);
        expect(record[0][0].n_stage)
            .eql(expectedOutputStaging[0][0].n_stage);
        expect(record[0][0].m_stage)
            .eql(expectedOutputStaging[0][0].m_stage);
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
    it('should return a patient record with study enrollment data when parsing a note with clinical trial phases', function () {
        const record = noteParser.parse(sampleTextClinicalTrial);
        //console.log(util.inspect(expectedOutputClinicalTrial[0][0]));
        //console.log(util.inspect(record[0][0]));
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrial);
    });
    it('should return a patient record with study enrollment data correctly defaulted when parsing a note with only #clinical trial', function () {
        const record = noteParser.parse(sampleTextClinicalTrialMinimal);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrialMinimal);
    });
});

