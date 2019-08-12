import { getNamespaceAndName } from "../model/json-helper";

const mapEntryInfo = (entry, json) => {
    json.EntryId = entry.EntryId;
    json.ShrId = entry.ShrId;
    json.EntryType = entry.EntryType;

    if (entry.Metadata) {
        // TODO: What should we map AuthoredDateTime to?
        delete entry.Metadata.AuthoredDateTime;
        changeEntryType(entry.Metadata, 'http://standardhealthrecord.org/spec/shr/core/Metadata');
        changeEntryType(entry.Metadata.LastUpdated, 'http://standardhealthrecord.org/spec/shr/core/LastUpdated');
        json.Metadata = entry.Metadata;
    }
};

// In mCODE v0.5 the Coding array contains Code objects
// In mCODE v0.9 the Coding array contains CodeValue objects
const mapCoding = (coding) => {
    coding.forEach((c) => {
        c.CodeValue = {...c.Code};
        c.CodeValue.EntryType.Value = 'http://standardhealthrecord.org/spec/shr/core/CodeValue';
        delete c.Code;
    });
};

// Changes entryType of entry but keeps value the same
// If value is a CodeableConcept, will perform mapping for Code -> CodeValue
const changeEntryType = (entry, newEntryType) => {
    entry.EntryType.Value = newEntryType;

    // If Value is a CodeableConcept, change Code -> CodeValue
    if (entry.Value && entry.Value.EntryType && entry.Value.EntryType.Value === 'http://standardhealthrecord.org/spec/shr/core/CodeableConcept') {
        mapCoding(entry.Value.Coding);
    }
};

const mapAnatomicalLocation = (entry, anatomicalLocation) => {
    entry.BodyLocation = [...anatomicalLocation];

    entry.BodyLocation.forEach((b) => {
        changeEntryType(b, 'http://standardhealthrecord.org/spec/shr/core/BodyLocation');

        b.LocationCode = {
            EntryType: {
                Value: 'http://standardhealthrecord.org/spec/shr/core/LocationCode',
            },
            Value: {...b.Value.AnatomicalLocationOrLandmarkCode.Value},
        };
        mapCoding(b.LocationCode.Value.Coding);

        if (b.Laterality) {
            b.Laterality = {...b.Value.Laterality};
            mapCoding(b.Laterality.Value.Coding);
        }

        delete b.Value;
    });
};

const mapCondition = (resultJson , entryJson) => {
    changeEntryType(entryJson.Onset, 'http://standardhealthrecord.org/spec/shr/core/Onset');
    resultJson.Onset = entryJson.Onset;

    resultJson.Category = entryJson.Category;
    mapCoding(resultJson.Category.Value.Coding);

    resultJson.ClinicalStatus = entryJson.ClinicalStatus;
    changeEntryType(resultJson.ClinicalStatus, 'http://standardhealthrecord.org/spec/shr/core/ClinicalStatus');

    resultJson.Code = entryJson.FindingTopicCode;
    changeEntryType(resultJson.Code, 'http://standardhealthrecord.org/spec/shr/core/Code');

    mapAnatomicalLocation(resultJson, entryJson.AnatomicalLocation);
};

export function mapEntries(v05Json) {
    const v09Json = [];

    v05Json.forEach((entry) => {
        const { elementName } = getNamespaceAndName(entry);
        const resultJson = {};

        mapEntryInfo(entry, resultJson);
        switch (elementName) {
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
                        mapCoding(c.Language.Value.Coding);
                    });
                    delete personEntry.LanguageUsed;

                    // Properties with CodeableConcept values have to map Code -> CodeValue
                    personEntry.Address.forEach(a => mapCoding(a.Purpose.Value.Coding));
                    personEntry.ContactPoint.forEach((c) => {
                        mapCoding(c.Type.Value.Coding);
                        mapCoding(c.Purpose.Value.Coding);
                    });

                    resultJson.Person = personEntry;
                }

                v09Json.push(resultJson);
                break;
            }
            case 'Person': {
                // Person is now a property on Patient entry
                return;
            }
            // TODO
            case 'PatientIdentifier': {
                break;
            }
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
            case 'ConditionPresentAssertion': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/shr/core/Condition');
                mapCondition(resultJson, entry);

                v09Json.push(resultJson);
                break;
            }
            case 'ProcedureRequested': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/shr/core/ProcedureRequest');

                resultJson.ReasonReference = [...entry.Reason];
                resultJson.ReasonReference.forEach((r) => {
                    changeEntryType(r, 'http://standardhealthrecord.org/spec/shr/core/ReasonReference');
                    r.Value._EntryType = 'http://standardhealthrecord.org/spec/onco/core/CancerCondition';
                });

                resultJson.Status = {...entry.Status};
                mapCoding(resultJson.Status.Value.Coding);

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
            case 'TumorMarker': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/TumorMarkerTest');

                resultJson.Code = {...entry.FindingTopicCode};
                changeEntryType(resultJson.Code, 'http://standardhealthrecord.org/spec/shr/core/Code');

                resultJson.DataValue = {
                    Value: {...entry.FindingResult.Value},
                    EntryType: {
                        Value: 'http://standardhealthrecord.org/spec/onco/core/TumorMarkerTestDataValue',
                    },
                };
                mapCoding(resultJson.DataValue.Value.Coding);

                resultJson.Status = {...entry.FindingStatus};
                changeEntryType(resultJson.Status, 'http://standardhealthrecord.org/spec/shr/core/Status');

                resultJson.RelevantTime = {...entry.RelevantTime};
                changeEntryType(resultJson.RelevantTime, 'http://standardhealthrecord.org/spec/shr/core/RelevantTime');

                v09Json.push(resultJson);
                break;
            }
            default: {
                break;
            }
        }
        console.log(resultJson);
        // v09Json.push(resultJson);
    });

    return v09Json;
};
