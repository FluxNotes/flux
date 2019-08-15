import { getNamespaceAndName } from "../model/json-helper";

const isReference = (obj) => {
    return obj && typeof obj === 'object' & obj._ShrId && obj._EntryId && obj._EntryType;
};

const mapEntryInfo = (resultJson, entryJson) => {
    resultJson.EntryId = entryJson.EntryId;
    resultJson.ShrId = entryJson.ShrId;
    resultJson.EntryType = entryJson.EntryType;

    if (entryJson.Metadata) {
        // TODO: What should we map AuthoredDateTime to?
        // TODO: What should we map InformationRecorder to?
        delete entryJson.Metadata.AuthoredDateTime;
        delete entryJson.Metadata.InformationRecorder;
        changeEntryType(entryJson.Metadata, 'http://standardhealthrecord.org/spec/shr/core/Metadata');
        changeEntryType(entryJson.Metadata.LastUpdated, 'http://standardhealthrecord.org/spec/shr/core/LastUpdated');
        resultJson.Metadata = entryJson.Metadata;
    }
};

// In mCODE v0.5 the Coding array contains Code objects
// In mCODE v0.9 the Coding array contains CodeValue objects
const mapCodingArray = (codingArray) => {
    codingArray.forEach((c) => {
        mapCoding(c);
    });
};

const mapCoding = (c) => {
    c.CodeValue = {...c.Code};
    changeEntryType(c.CodeValue, 'http://standardhealthrecord.org/spec/shr/core/CodeValue');
    delete c.Code;
};

// Changes entryType of entry but keeps value the same
// If value is a CodeableConcept, will perform mapping for Code -> CodeValue
const changeEntryType = (entry, newEntryType) => {
    if (entry == null) return;
    entry.EntryType = { Value: newEntryType };

    // If Value is a CodeableConcept, change Code -> CodeValue
    if (entry.Value && entry.Value.EntryType && entry.Value.EntryType.Value === 'http://standardhealthrecord.org/spec/shr/core/CodeableConcept') {
        mapCodingArray(entry.Value.Coding);
    }
};

const mapAnatomicalLocation = (resultJson, anatomicalLocation) => {
    resultJson.BodyLocation = [...anatomicalLocation];

    resultJson.BodyLocation.forEach((b) => {
        changeEntryType(b, 'http://standardhealthrecord.org/spec/shr/core/BodyLocation');

        b.LocationCode = {
            EntryType: {
                Value: 'http://standardhealthrecord.org/spec/shr/core/LocationCode',
            },
            Value: {...b.Value.AnatomicalLocationOrLandmarkCode.Value},
        };
        mapCodingArray(b.LocationCode.Value.Coding);

        if (b.Laterality) {
            b.Laterality = {...b.Value.Laterality};
            mapCodingArray(b.Laterality.Value.Coding);
        }

        delete b.Value;
    });
};

const mapCondition = (resultJson , entryJson) => {
    changeEntryType(entryJson.Onset, 'http://standardhealthrecord.org/spec/shr/core/Onset');
    resultJson.Onset = entryJson.Onset;

    resultJson.Category = entryJson.Category;
    mapCodingArray(resultJson.Category.Value.Coding);

    resultJson.ClinicalStatus = entryJson.ClinicalStatus;
    changeEntryType(resultJson.ClinicalStatus, 'http://standardhealthrecord.org/spec/shr/core/ClinicalStatus');

    resultJson.Code = entryJson.FindingTopicCode;
    changeEntryType(resultJson.Code, 'http://standardhealthrecord.org/spec/shr/core/Code');

    mapAnatomicalLocation(resultJson, entryJson.AnatomicalLocation);
};

const mapRelevantTime = (resultJson, relevantTime) => {
    resultJson.RelevantTime = { ...relevantTime };
    changeEntryType(resultJson.RelevantTime, 'http://standardhealthrecord.org/spec/shr/core/RelevantTime');
};

const mapFindingStatus = (resultJson, findingStatus) => {
    resultJson.Status = { ...findingStatus };
    changeEntryType(resultJson.Status, 'http://standardhealthrecord.org/spec/shr/core/Status');
};

const mapFindingTopicCode = (resultJson, findingTopicCode) => {
    resultJson.Code = { ...findingTopicCode };
    changeEntryType(resultJson.Code, 'http://standardhealthrecord.org/spec/shr/core/Code');
};

const mapFindingResult = (resultJson, findingResult) => {
    resultJson.DataValue = { ...findingResult };
    changeEntryType(resultJson.DataValue, 'http://standardhealthrecord.org/spec/shr/core/DataValue');
};

// Maps SpecificFocusOfFinding Reference to PrimaryCancerCondition Reference
const mapSffToPcc = (resultJson, sff) => {
    resultJson.PrimaryCancerCondition = { ...sff.Value };
    changeEntryType(resultJson.PrimaryCancerCondition, 'http://standardhealthrecord.org/spec/onco/core/PrimaryCancerCondition');
};

export function mapEntries(v05Json) {
    const v09Json = [];

    v05Json.forEach((entry) => {
        const { elementName } = getNamespaceAndName(entry);
        const resultJson = {};

        const authoredDateTime = entry.Metadata ? { ...entry.Metadata.AuthoredDateTime } : null;
        mapEntryInfo(resultJson, entry);
        switch (elementName) {
            case 'CancerDisorderPresent': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/CancerCondition');
                mapCondition(resultJson, entry);
                resultJson.SubjectOfRecord = {
                    EntryType: {
                        Value: 'http://standardhealthrecord.org/spec/shr/core/PatientSubjectOfRecord',
                    },
                    Patient: entry.Patient,
                };
                resultJson.SubjectOfRecord.Patient._EntryType = 'http://standardhealthrecord.org/spec/shr/core/Patient';

                v09Json.push(resultJson);
                break;
            }
            case 'CancerHistologicGrade': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/CancerHistologicGrade');

                mapFindingResult(resultJson, entry.FindingResult);
                mapFindingStatus(resultJson, entry.FindingStatus);
                mapRelevantTime(resultJson, entry.RelevantTime);
                mapSffToPcc(resultJson, entry.SpecificFocusOfFinding);

                v09Json.push(resultJson);
                break;
            }
            case 'CancerProgression': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/CancerDiseaseStatus');
                mapFindingResult(resultJson, entry.FindingResult);
                mapFindingTopicCode(resultJson, entry.FindingTopicCode);

                resultJson.Status = { ...entry.FindingStatus };
                changeEntryType(resultJson.Status, 'http://standardhealthrecord.org/spec/shr/core/Status');

                // TODO: Might need to do a mapping of the actual reference here, but just mapping it to the new data element for now
                resultJson.RelatedCancerCondition = { ...entry.SpecificFocusOfFinding };
                changeEntryType(resultJson.RelatedCancerCondition, 'http://standardhealthrecord.org/spec/onco/core/RelatedCancerCondition');

                if (authoredDateTime) {
                    resultJson.StatementDateTime = { ...authoredDateTime };
                    changeEntryType(resultJson.StatementDateTime, 'http://standardhealthrecord.org/spec/shr/core/StatementDateTime');
                }

                v09Json.push(resultJson);
                break;
            }
            case 'ConditionPresentAssertion': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/shr/core/Condition');
                mapCondition(resultJson, entry);

                v09Json.push(resultJson);
                break;
            }
            case 'Observation': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/shr/core/Observation');

                mapRelevantTime(resultJson, entry.RelevantTime);
                mapFindingStatus(resultJson, entry.FindingStatus);
                mapFindingTopicCode(resultJson, entry.FindingTopicCode);

                mapFindingResult(resultJson, entry.FindingResult);
                mapCoding(resultJson.DataValue.Value.Units.Value);

                v09Json.push(resultJson);
                break;
            }
            case 'Patient': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/shr/core/Patient');

                // Person used to be an entry on the patient record and the Patient entry had a reference to it
                // In mCODE v0.9, Person is a property on the Patient entry
                const personEntry = v05Json.find(e => e.EntryId === entry.Person._EntryId);

                if (personEntry) {
                    // Since Person is not an entry, it no longer has these properties
                    delete personEntry.EntryId;
                    delete personEntry.ShrId;
                    delete personEntry.Metadata;

                    // entry types for some properties have changed from 0.5 -> 0.9
                    changeEntryType(personEntry, 'http://standardhealthrecord.org/spec/shr/core/Person');
                    changeEntryType(personEntry.AdministrativeGender, 'http://standardhealthrecord.org/spec/shr/core/AdministrativeGender');
                    changeEntryType(personEntry.DateOfBirth, 'http://standardhealthrecord.org/spec/shr/core/DateOfBirth');
                    changeEntryType(personEntry.Ethnicity, 'http://standardhealthrecord.org/spec/shr/core/Ethnicity');
                    changeEntryType(personEntry.Ethnicity.EthnicityCode, 'http://standardhealthrecord.org/spec/shr/core/EthnicityCode');
                    changeEntryType(personEntry.MaritalStatus, 'http://standardhealthrecord.org/spec/shr/core/MaritalStatus');
                    changeEntryType(personEntry.Race, 'http://standardhealthrecord.org/spec/shr/core/Race');
                    changeEntryType(personEntry.Race.RaceCode, 'http://standardhealthrecord.org/spec/shr/core/RaceCode');
                    personEntry.Communication = [...personEntry.LanguageUsed];
                    personEntry.Communication.forEach((c) => {
                        changeEntryType(c, 'http://standardhealthrecord.org/spec/shr/core/Communication');
                        mapCodingArray(c.Language.Value.Coding);
                    });
                    delete personEntry.LanguageUsed;

                    // Properties with CodeableConcept values have to map Code -> CodeValue
                    personEntry.Address.forEach(a => mapCodingArray(a.Purpose.Value.Coding));
                    personEntry.ContactPoint.forEach((c) => {
                        mapCodingArray(c.Type.Value.Coding);
                        mapCodingArray(c.Purpose.Value.Coding);
                    });

                    resultJson.Person = personEntry;
                }

                v09Json.push(resultJson);
                break;
            }
            // TODO
            case 'PatientIdentifier': {
                break;
            }
            case 'Person': {
                // Person is now a property on Patient entry
                return;
            }
            case 'ProcedureRequested': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/shr/core/ProcedureRequest');

                if (entry.Reason) {
                    resultJson.ReasonReference = [];
                    // resultJson.ReasonCode = [];
                    entry.Reason.forEach((r) => {
                        if (isReference(r.Value))  {
                            changeEntryType(r, 'http://standardhealthrecord.org/spec/shr/core/ReasonReference');
                            changeEntryType(r.Value, 'http://standardhealthrecord.org/spec/onco/core/CancerCondition');
                            resultJson.ReasonReference.push(r);
                        } else {
                            // TODO: handle ReasonCode. I think there is only one example of a non-reference, "proactive" in Ella's mammography
                        }
                    });
                }


                resultJson.Status = {...entry.Status};
                mapCodingArray(resultJson.Status.Value.Coding);

                resultJson.Type = {...entry.ProcedureCode};
                changeEntryType(resultJson.Type, 'http://standardhealthrecord.org/spec/shr/core/Type');

                resultJson.ExpectedPerformanceTime = entry.ExpectedPerformanceTime;
                changeEntryType(resultJson.ExpectedPerformanceTime, 'http://standardhealthrecord.org/spec/shr/core/ExpectedPerformanceTime');

                // TODO: Map ExpectedPerformer... Should Practictioner be an entry on PatientRecord?
                // resultJson.ExpectedPerformer = entry.ExpectedPerformer;
                // changeEntryType(resultJson.ExpectedPerformer, 'http://standardhealthrecord.org/spec/shr/core/ExpectedPerformer');

                v09Json.push(resultJson);
                break;
            }
            case 'QuestionAnswer': {
                if (entry.PanelMembers) {
                    changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/shr/core/QuestionnaireResponse');

                    // Questions and Answers used to be entries on the patient record
                    // Now their instances are contained in the `QuestionnaireResponseItem` property of `QuestionnaireResponse`
                    resultJson.QuestionnaireResponseItem = entry.PanelMembers.Observation.map((o) => {
                        const questionAnswerEntry = v05Json.find(e => e.EntryId === o._EntryId);

                        return {
                            EntryType: {
                                Value: 'http://standardhealthrecord.org/spec/shr/core/QuestionnaireResponseItem',
                            },
                            Question: {
                                EntryType: {
                                    Value: 'http://standardhealthrecord.org/spec/shr/core/Question',
                                },
                                Value: questionAnswerEntry.QuestionText.Value,
                            },
                            Answer: [
                                {
                                    EntryType: {
                                        Value: 'http://standardhealthrecord.org/spec/shr/core/Answer',
                                    },
                                    AnswerValue: {
                                        EntryType: {
                                            Value: 'http://standardhealthrecord.org/spec/shr/core/AnswerValue',
                                        },
                                        Value: questionAnswerEntry.FindingResult.Value,
                                    },
                                }
                            ],
                        };
                    });

                    if (entry.RelevantTime) {
                        resultJson.StatementDateTime = { ...entry.RelevantTime };
                        changeEntryType(resultJson.StatementDateTime, 'http://standardhealthrecord.org/spec/shr/core/StatementDateTime');
                    }

                    v09Json.push(resultJson);
                }
                break;
            }
            case 'TNMClinicalPrimaryTumorClassification': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalPrimaryTumorCategory');
                mapFindingResult(resultJson, entry.FindingResult);

                v09Json.push(resultJson);
                break;
            }
            case 'TNMClinicalRegionalNodesClassification': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalRegionalNodesCategory');
                mapFindingResult(resultJson, entry.FindingResult);

                v09Json.push(resultJson);
                break;
            }
            case 'TNMClinicalDistantMetastasesClassification': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalDistantMetastasesCategory');
                mapFindingResult(resultJson, entry.FindingResult);

                v09Json.push(resultJson);
                break;
            }
            case 'TNMClinicalStageGroup': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalStageGroup');

                mapRelevantTime(resultJson, entry.RelevantTime);
                mapFindingStatus(resultJson, entry.FindingStatus);
                mapFindingTopicCode(resultJson, entry.FindingTopicCode);

                // Mapping PanelMembers
                // Need to change namespace for t, n, and m references
                // Removing all other observations
                resultJson.PanelMembers = { ...entry.PanelMembers };
                changeEntryType(resultJson.PanelMembers, 'http://standardhealthrecord.org/spec/shr/core/PanelMembers');
                resultJson.PanelMembers.Observation.forEach((p, i, arr) => {
                    if (p._EntryType.Value === 'http://standardhealthrecord.org/spec/mcode/TNMClinicalPrimaryTumorClassification') {
                        p._EntryType.Value = 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalPrimaryTumorCategory';
                    } else if (p._EntryType.Value === 'http://standardhealthrecord.org/spec/mcode/TNMClinicalRegionalNodesClassification') {
                        p._EntryType.Value = 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalRegionalNodesCategory';
                    } else if (p._EntryType.Value === 'http://standardhealthrecord.org/spec/mcode/TNMClinicalDistantMetastasesClassification') {
                        p._EntryType.Value = 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalDistantMetastasesCategory';
                    } else {
                        arr.splice(i, 1);
                    }
                });

                resultJson.Method = { ...entry.FindingMethod };
                changeEntryType(resultJson.Method, 'http://standardhealthrecord.org/spec/shr/core/Method');

                mapFindingResult(resultJson, entry.FindingResult);
                mapSffToPcc(resultJson, entry.SpecificFocusOfFinding);

                v09Json.push(resultJson);
                break;
            }
            case 'TumorMarker': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/TumorMarkerTest');

                resultJson.DataValue = {
                    Value: {...entry.FindingResult.Value},
                    EntryType: {
                        Value: 'http://standardhealthrecord.org/spec/onco/core/TumorMarkerTestDataValue',
                    },
                };
                mapCodingArray(resultJson.DataValue.Value.Coding);

                mapRelevantTime(resultJson, entry.RelevantTime);
                mapFindingStatus(resultJson, entry.FindingStatus);
                mapFindingTopicCode(resultJson, entry.FindingTopicCode);

                v09Json.push(resultJson);
                break;
            }
            default: {
                break;
            }
        }
    });

    return v09Json;
};
