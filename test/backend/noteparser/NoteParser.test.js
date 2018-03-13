import NoteParser from '../../../src/noteparser/NoteParser';
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
const sampleTextStaging = "Debra Hernandez672 is presenting with carcinoma of the breast. #staging assessed as tumor size #T2 and #N0 + #M0.";
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
const expectedOutputStaging = [[
    new FluxTNMStage(
      {
            "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/oncology/TNMStage" },
            "Value": {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "", "shr.core.CodeSystem": {"Value": ""}, "shr.core.DisplayText": {"Value": "IIA"}}]},
            "shr.finding.ObservationComponent": [
                {
                    "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/oncology/T_Stage" },
                    "Value": {
                        "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},
                        "shr.core.Coding":[{ "Value": "369900003", "shr.core.CodeSystem": {"Value": "urn:oid:2.16.840.1.113883.6.96"}, "shr.core.DisplayText": {"Value": "T2"}}]}
                },
                {
                    "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/oncology/N_Stage" },
                    "Value": {
                        "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},
                        "shr.core.Coding":[{ "Value": "436311000124105", "shr.core.CodeSystem": {"Value": "urn:oid:2.16.840.1.113883.6.96"}, "shr.core.DisplayText": {"Value": "N0"}}]}
                },
                {
                    "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/oncology/M_Stage" },
                    "Value": {
                        "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},
                        "shr.core.Coding":[{ "Value": "433581000124101", "shr.core.CodeSystem": {"Value": "urn:oid:2.16.840.1.113883.6.96"}, "shr.core.DisplayText": {"Value": "M0"}}]}
                }
            ],
        }
    )
], []];
const expectedOutputDiseaseStatus = [[
    new FluxDiseaseProgression({
        "shr.base.EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/condition/DiseaseProgression"
        },
        "Value" : {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "C0205360", "shr.core.CodeSystem": {"Value": "http://ncimeta.nci.nih.gov"}, "shr.core.DisplayText": {"Value":"Stable"}}], "shr.core.DisplayText": {"Value":"Stable"}},
        "shr.finding.Evidence": [   
            {"Value": {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "C0011923", "shr.core.CodeSystem": {"Value": "http://ncimeta.nci.nih.gov"}, "shr.core.DisplayText": {"Value":"Imaging"}}], "shr.core.DisplayText": {"Value":"Imaging"}}},
            {"Value": {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "C0031809", "shr.core.CodeSystem": {"Value": "http://ncimeta.nci.nih.gov"}, "shr.core.DisplayText": {"Value":"Physical exam"}}], "shr.core.DisplayText": {"Value":"Physical exam"}}}
        ],
        "shr.core.CreationTime": {"Value": today},
        "shr.base.LastUpdated": {"Value": today}
    })
], []];
const expectedOutputDiseaseStatus2 = [[
    new FluxDiseaseProgression({
        "shr.base.EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/condition/DiseaseProgression"
        },
        "Value" : {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "C0205360", "shr.core.CodeSystem": {"Value": "http://ncimeta.nci.nih.gov"}, "shr.core.DisplayText": {"Value":"Stable"}}], "shr.core.DisplayText": {"Value":"Stable"}},
        "shr.finding.Evidence": [   
            {"Value": {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "C0011923", "shr.core.CodeSystem": {"Value": "http://ncimeta.nci.nih.gov"}, "shr.core.DisplayText": {"Value":"Imaging"}}], "shr.core.DisplayText": {"Value":"Imaging"}}},
            {"Value": {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "C0031809", "shr.core.CodeSystem": {"Value": "http://ncimeta.nci.nih.gov"}, "shr.core.DisplayText": {"Value":"Physical exam"}}], "shr.core.DisplayText": {"Value":"Physical exam"}}}
        ],
        "shr.finding.ClinicallyRelevantTime": {"Value": "7 Jun 2017"},
        "shr.core.CreationTime": {"Value": "5 Oct 2017"},
        "shr.base.LastUpdated": {"Value": today}
    })
], []];
const expectedOutputToxicity = [[
    new FluxToxicReaction(
        {
            "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/adverse/ToxicReaction"},
            "Value": {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "10028813", "shr.core.CodeSystem": {"Value": "https://www.meddra.org/"}, "shr.core.DisplayText": {"Value": "Nausea"}}], "shr.core.DisplayText": {"Value":"Nausea"}},
            "shr.adverse.AdverseEventGrade": {
                "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/adverse/AdverseEventGrade"},
                "Value":{"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "C1513374", "shr.core.CodeSystem": {"Value": "http://ncimeta.nci.nih.gov"}, "shr.core.DisplayText": {"Value": "Grade 2"}}], "shr.core.DisplayText": {"Value":"Grade 2"}},
            },
            "shr.adverse.CauseCategory": {
                "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/adverse/CauseCategory"},
                "Value": {"shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"},"shr.core.Coding":[{ "Value": "#Treatment", "shr.core.CodeSystem": {"Value": "https://www.meddra.org/"}, "shr.core.DisplayText": {"Value": "Treatment"}}], "shr.core.DisplayText": {"Value":"Treatment"}},
            }
        }
    )
], []];
const expectedOutputDeceased = [[
    new FluxDeceased({
        "shr.base.EntryType": {"Value": "http://standardhealthrecord.org/spec/shr/entity/Deceased"},
        "Value": true,
        "shr.entity.DateOfDeath": {
            "Value": {
                "shr.base.EntryType": { "Value": "http://standardhealthrecord.org/spec/shr/core/GeneralizedDateTime"},
                "Value": "1 Oct 2017"
            }
        }
    })
], []];
const expectedOutputClinicalTrialEnrollment = [[
    new FluxResearchSubject({
        "shr.base.EntryType": {"Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"},
        "shr.research.Study": {
            "shr.core.Title": {"Value": "PATINA"}
        },
        "shr.action.ParticipationPeriod": {
            "shr.core.TimePeriod": {
                "shr.core.TimePeriodStart": {
                    "Value": "4 Sep 2017"
                }
            }
        }
    })
], []];
const expectedOutputClinicalTrialEnrollmentMinimal = [[
    new FluxResearchSubject({
        "shr.base.EntryType": {"Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"},
        "shr.research.Study": {
            "shr.core.Title": null
        },
        "shr.action.ParticipationPeriod": {
            "shr.core.TimePeriod": {
                "shr.core.TimePeriodStart": {
                    "Value": null
                }
            }
        }
    })
], []];
const expectedOutputClinicalTrialUnenrolled = [[
    new FluxResearchSubject({
        "shr.base.EntryType": {"Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"},
        "shr.research.Study": {
            "shr.core.Title": {"Value": "PATINA"}
        },
        "shr.action.ParticipationPeriod": {
            "shr.core.TimePeriod": {
                "shr.core.TimePeriodEnd": {
                    "Value": "6 Oct 2017"
                }
            }
        }
    })
], []];
const expectedOutputClinicalTrialUnenrolledMinimal = [[
    new FluxResearchSubject({
        "shr.base.EntryType": {"Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"},
        "shr.research.Study": {
            "shr.core.Title": null
        },
        "shr.action.ParticipationPeriod": {
            "shr.core.TimePeriod": {
                "shr.core.TimePeriodEnd": {
                    "Value": null
                }
            }
        }
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
        console.log(util.inspect(record, false, null));
        console.log(util.inspect(expectedOutputClinicalTrialEnrollment, false, null));
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

