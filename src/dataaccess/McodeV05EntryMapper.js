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
        console.log(anatomicalLocation);
        b.LocationCode = {
            EntryType: {
                Value: 'http://standardhealthrecord.org/spec/shr/core/LocationCode',
            },
            Value: {...b.Value.AnatomicalLocationOrLandmarkCode.Value},
        };
        mapCoding(b.LocationCode.Value.Coding);

        b.Laterality = {...b.Value.Laterality};
        mapCoding(b.Laterality.Value.Coding);

        delete b.Value;
    });
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
            case 'CancerDisorderPresent': {
                changeEntryType(resultJson, 'http://standardhealthrecord.org/spec/onco/core/CancerCondition');
                changeEntryType(entry.Onset, 'http://standardhealthrecord.org/spec/shr/core/Onset');
                resultJson.Onset = entry.Onset;

                resultJson.SubjectOfRecord = {
                    EntryType: {
                        Value: 'http://standardhealthrecord.org/spec/shr/core/PatientSubjectOfRecord',
                    },
                    Patient: entry.Patient,
                };
                resultJson.SubjectOfRecord.Patient._EntryType = 'http://standardhealthrecord.org/spec/shr/core/Patient';

                resultJson.Category = entry.Category;
                mapCoding(resultJson.Category.Value.Coding);

                resultJson.ClinicalStatus = entry.ClinicalStatus;
                changeEntryType(resultJson.ClinicalStatus, 'http://standardhealthrecord.org/spec/shr/core/ClinicalStatus');

                resultJson.Code = entry.FindingTopicCode;
                changeEntryType(resultJson.Code, 'http://standardhealthrecord.org/spec/shr/core/Code');

                mapAnatomicalLocation(resultJson, entry.AnatomicalLocation);
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
