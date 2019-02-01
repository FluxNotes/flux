import FluxPatientV01 from './model/entity/FluxPatient';
import FluxPatient from '../../model/entity/FluxPatient';
import Entry from '../../model/shr/base/Entry';
import EntryType from '../../model/shr/base/EntryType';
import Metadata from '../../model/shr/base/Metadata';
import LastUpdated from '../../model/shr/base/LastUpdated';
import Reference from '../../model/Reference';
import FluxPersonV01 from './model/entity/FluxPerson';
import FluxPerson from '../../model/entity/FluxPerson';
import Address from '../../model/shr/core/Address';
import AdministrativeGender from '../../model/shr/entity/AdministrativeGender';
import ContactPoint from '../../model/shr/core/ContactPoint';
import CodeableConcept from '../../model/shr/core/CodeableConcept';
import Coding from '../../model/shr/core/Coding';
import DisplayText from '../../model/shr/core/DisplayText';
import DateOfBirth from '../../model/shr/entity/DateOfBirth';
import Ethnicity from '../../model/shr/entity/Ethnicity';
import PhotographicImage from '../../model/shr/core/PhotographicImage';
import ResourceLocation from '../../model/shr/core/ResourceLocation';
import HumanName from '../../model/shr/core/HumanName';
import LanguageUsed from '../../model/shr/entity/LanguageUsed';
import MaritalStatus from '../../model/shr/entity/MaritalStatus';
import Race from '../../model/shr/entity/Race';
import FluxPatientIdentifierV01 from './model/base/FluxPatientIdentifier';

// Maps mCODE v0.1 entries to Flux Object Model
const mapEntryInfo = (entryInfo, entry) => {
    const newEntry = new Entry();
    newEntry.entryId = entryInfo.entryId;
    newEntry.shrId = entryInfo.shrId;
    newEntry.entryType = new EntryType();
    newEntry.entryType.uri = entryInfo.entryType.uri;

    entry.entryInfo = newEntry;
    entry.metaData = new Metadata();
    entry.metaData.lastUpdated = new LastUpdated();
    entry.metaData.lastUpdated.instant = entryInfo.lastUpdated.instant;
};

const mapReference = (reference) => {
    const newReference = new Reference();

    newReference.entryId = reference.entryId;
    newReference.entryType = reference.entryType;
    newReference.shrId = reference.shrId;

    return newReference;
};

const mapPassThrough = (element, klass) => {
    return klass.fromJSON(element.toJSON());
};

const mapGender = (gender) => {
    const newGender = new AdministrativeGender();
    newGender.value = new CodeableConcept();
    const newCoding = new Coding();
    newCoding.code = gender.value;
    newGender.value.coding = [newCoding];
    newGender.value.displayText = new DisplayText();
    newGender.value.displayText.value = gender.value;
    console.log(newGender.toJSON());
    return newGender; 
}

exports.map = (entries) => {
    const result = [];
    entries.forEach(entry => {
        if (entry instanceof FluxPatientV01) {
            console.log('here');
            const newPatient = new FluxPatient();
            mapEntryInfo(entry.entryInfo, newPatient._patient);
            newPatient._patient.person = mapReference(entry._patient.person);
            // console.log(newPatient._patient.toJSON());
            result.push(newPatient._patient.toJSON());
        } else if (entry instanceof FluxPersonV01) {
            const newPerson = new FluxPerson();
            mapEntryInfo(entry.entryInfo, newPerson._person);
            newPerson._person.address = entry._person.address.map(a => mapPassThrough(a, Address));
            newPerson._person.administrativeGender = mapGender(entry._person.administrativeGender);
            newPerson._person.contactPoint = entry._person.contactPoint.map(c => mapPassThrough(c, ContactPoint));
            newPerson._person.dateOfBirth = new DateOfBirth();
            newPerson._person.dateOfBirth.value = entry._person.dateOfBirth;
            newPerson._person.ethnicity = mapPassThrough(entry._person.ethnicity, Ethnicity);
            const newPhotographicImage = new PhotographicImage();
            newPhotographicImage.resourceLocation = mapPassThrough(entry._person.headshot.media.resourceLocation, ResourceLocation);
            newPerson._person.photographicImage = [newPhotographicImage];
            newPerson._person.humanName = entry._person.humanName.map(h => mapPassThrough(h, HumanName));
            newPerson._person.languageUsed = entry._person.languageUsed.map(l => mapPassThrough(l, LanguageUsed));
            newPerson._person.maritalStatus = mapPassThrough(entry._person.maritalStatus, MaritalStatus);
            newPerson._person.race = mapPassThrough(entry._person.race, Race);
            console.log(newPerson);
            // console.log(newPerson._person.toJSON());
            result.push(newPerson._person.toJSON());
        } else if (entry instanceof FluxPatientIdentifierV01) {
            result.push(entry.toJSON());
        }
    });

    return result;
};