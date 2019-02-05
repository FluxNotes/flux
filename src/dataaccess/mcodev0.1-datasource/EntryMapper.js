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
import CodeableConceptV01 from './model/shr/core/CodeableConcept';
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
import FluxClinicalNoteV01 from './model/core/FluxClinicalNote';
import FluxGastrointestinalStromalTumorV01 from './model/oncology/FluxGastrointestinalStromalTumor';
import ConditionPresentAssertion from '../../model/shr/base/ConditionPresentAssertion';
import Category from '../../model/shr/core/Category';
import AnatomicalLocation from '../../model/shr/core/AnatomicalLocation';
import ClinicalStatus from '../../model/shr/base/ClinicalStatus';
import Onset from '../../model/shr/base/Onset';
import CancerDisorderPresent from '../../model/oncocore/CancerDisorderPresent';
import AnatomicalLocationPrecoordinated from '../../model/shr/core/AnatomicalLocationPrecoordinated';
import FluxMedicationRequestedV01 from './model/medication/FluxMedicationRequested';
import MedicationRequested from '../../model/shr/medication/MedicationRequested';
import Dosage from '../../model/shr/medication/Dosage';
import DoseAmount from '../../model/shr/medication/DoseAmount';
import SimpleQuantity from '../../model/shr/core/SimpleQuantity';
import Number from '../../model/shr/core/Number';
import Units from '../../model/shr/core/Units';
import AsNeededIndicator from '../../model/shr/medication/AsNeededIndicator';
import DosageInstructionsText from '../../model/shr/medication/DosageInstructionsText';
import RouteIntoBody from '../../model/shr/core/RouteIntoBody';
import TimingOfDoses from '../../model/shr/medication/TimingOfDoses';
import Medication from '../../model/shr/entity/Medication';
import Status from '../../model/shr/core/Status';
import Reason from '../../model/shr/base/Reason';
import ExpectedPerformanceTime from '../../model/shr/base/ExpectedPerformanceTime';
import TimePeriodV01 from './model/shr/core/TimePeriod';
import TimePeriod from '../../model/shr/core/TimePeriod';
import BeginDateTime from '../../model/shr/core/BeginDateTime';
import EndDateTime from '../../model/shr/core/EndDateTime';
import FluxProcedureRequestedV01 from './model/procedure/FluxProcedureRequested';
import ProcedureRequested from '../../model/shr/procedure/ProcedureRequested';
import Annotation from '../../model/shr/core/Annotation';
import ProcedureCode from '../../model/shr/procedure/ProcedureCode';
import FluxNoKnownAllergyV01 from './model/allergy/FluxNoKnownAllergy';
import FluxConsultRequestedV01 from './model/encounter/FluxConsultRequested';
import NoKnownAllergy from '../../model/shr/allergy/NoKnownAllergy';
import FindingResult from '../../model/shr/base/FindingResult';
import FluxObservationV01 from './model/base/FluxObservation';
import Observation from '../../model/shr/base/Observation';
import FindingStatus from '../../model/shr/base/FindingStatus';
import RelevantTime from '../../model/shr/base/RelevantTime';
import SpecificFocusOfFinding from '../../model/shr/base/SpecificFocusOfFinding';
import FindingTopicCode from '../../model/shr/base/FindingTopicCode';
import QuantityV01 from './model/shr/core/Quantity';
import Quantity from '../../model/shr/core/Quantity';
import FluxHistologicGradeV01 from './model/oncology/FluxHistologicGrade';
import FluxCancerProgressionV01 from './model/mcode/FluxCancerProgression';
import CancerProgression from '../../model/oncocore/CancerProgression';

// Maps mCODE v0.1 entries to Flux Object Model
const mapEntryInfo = (entryInfo, entry) => {
    const newEntry = new Entry();
    newEntry.entryId = entryInfo.entryId;
    newEntry.shrId = entryInfo.shrId;
    newEntry.entryType = new EntryType();
    newEntry.entryType.uri = entryInfo.entryType.uri;

    entry.entryInfo = newEntry;
    entry.metadata = new Metadata();
    entry.metadata.lastUpdated = new LastUpdated();
    entry.metadata.lastUpdated.instant = entryInfo.lastUpdated.instant;
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

    return newGender; 
}

const mapAnatomicalLocation = (anatomicalLocation) => {
    const newAnatomicalLocation = new AnatomicalLocation();
    newAnatomicalLocation.value = new AnatomicalLocationPrecoordinated();
    newAnatomicalLocation.value.value = CodeableConcept.fromJSON(anatomicalLocation.anatomicalLocationOrLandmarkCode.value.toJSON());

    return newAnatomicalLocation;
};

const mapDosage = (dosage) => {
    const newDosage = new Dosage();
    newDosage.doseAmount = new DoseAmount();
    newDosage.doseAmount.value = new SimpleQuantity();

    newDosage.doseAmount.value.number = new Number();
    newDosage.doseAmount.value.number.value = dosage.doseAmount.value.decimalValue.value;
    newDosage.doseAmount.value.units = new Units();
    newDosage.doseAmount.value.units.value = dosage.doseAmount.value.units.value;

    newDosage.asNeededIndicator = mapPassThrough(dosage.asNeededIndicator, AsNeededIndicator);
    if (dosage.dosageInstructionsText) newDosage.dosageInstructionsText = mapPassThrough(dosage.dosageInstructionsText, DosageInstructionsText);
    newDosage.routeIntoBody = mapPassThrough(dosage.routeIntoBody, RouteIntoBody);
    newDosage.timingOfDoses = mapPassThrough(dosage.timingOfDoses, TimingOfDoses);

    return newDosage;
};

const mapTimePeriod = (timePeriod) => {
    const newTimePeriod = new TimePeriod();

    if (timePeriod.timePeriodStart) {
        newTimePeriod.beginDateTime = new BeginDateTime();
        newTimePeriod.beginDateTime.value = timePeriod.timePeriodStart.value;
    }
    if (timePeriod.timePeriodEnd) {
        newTimePeriod.endDateTime = new EndDateTime();
        newTimePeriod.endDateTime.value = timePeriod.timePeriodEnd.value;
    }

    return newTimePeriod;
}

const mapExpectedPerformanceTime = (expectedPerformanceTime) => {
    const newExpectedPerformanceTime = new ExpectedPerformanceTime();

    if (expectedPerformanceTime.value instanceof TimePeriodV01) {
        newExpectedPerformanceTime.value = mapTimePeriod(expectedPerformanceTime.value);
    } else {
        newExpectedPerformanceTime.value = expectedPerformanceTime.value;
    }

    return newExpectedPerformanceTime;
};

const mapRelevantTime = (relevantTime) => {
    const newRelevantTime = new RelevantTime();

    if (relevantTime.value instanceof TimePeriodV01) {
        newRelevantTime.value = mapTimePeriod(relevantTime.value);
    } else {
        newRelevantTime.value = relevantTime.value;
    }

    return newRelevantTime;
};

const mapUnits = (units) => {
    const newUnits = new Units();

    newUnits.value = new Coding();
    newUnits.value.code = units.value.code;

    return newUnits;
}

const mapQuantity = (quantity) => {
    const newQuantity = new Quantity();

    newQuantity.number = new Number();
    newQuantity.number.value = quantity.decimalValue.value;
    newQuantity.units = mapUnits(quantity.units);

    return newQuantity;
};

const mapFindingResult = (value) => {
    const newFindingResult = new FindingResult();

    if (value instanceof QuantityV01) {
        newFindingResult.value = mapQuantity(value);
    } else if (value instanceof CodeableConceptV01) {
        newFindingResult.value = mapPassThrough(value, CodeableConcept);
    }

    return newFindingResult;
};

exports.mapEntries = (entries) => {
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
        } else if (entry instanceof FluxPatientIdentifierV01 || entry instanceof FluxClinicalNoteV01) {
            result.push(entry.toJSON());
        } else if (entry instanceof FluxGastrointestinalStromalTumorV01) {
            const newCondition = new CancerDisorderPresent();
            mapEntryInfo(entry.entryInfo, newCondition);
            newCondition.patient = mapReference(entry._condition.patient);
            newCondition.anatomicalLocation = entry._condition.anatomicalLocation.map(a => mapAnatomicalLocation(a));
            newCondition.category = mapPassThrough(entry._condition.category, Category);
            newCondition.clinicalStatus = mapPassThrough(entry._condition.clinicalStatus, ClinicalStatus);
            // console.log(CodeableConcept.fromJSON(entry._condition.value.toJSON()));
            newCondition.findingResult = new FindingResult();
            newCondition.findingResult.value = mapPassThrough(entry._condition.value, CodeableConcept);
            // newCondition.codeableConcept = mapPassThrough(entry._condition.value, CodeableConcept);
            newCondition.onset = mapPassThrough(entry._condition.onset, Onset);
            const entryJSON = newCondition.toJSON();
            entryJSON.EntryType.Value = 'http://standardhealthrecord.org/spec/shr/oncology/GastrointestinalStromalTumor';
            console.log(newCondition);
            result.push(entryJSON);
        } else if (entry instanceof FluxProcedureRequestedV01) {
            const newProcedure = new ProcedureRequested();

            mapEntryInfo(entry.entryInfo, newProcedure);
            newProcedure.expectedPerformanceTime = mapExpectedPerformanceTime(entry._procedureRequested.expectedPerformanceTime);
            if (entry._procedureRequested.annotation) newProcedure.annotation = entry._procedureRequested.annotation.map(a => mapPassThrough(a, Annotation));
            newProcedure.reason = entry._procedureRequested.reason.map(r => mapPassThrough(r, Reason));
            newProcedure.status = mapPassThrough(entry._procedureRequested.status, Status);
            newProcedure.procedureCode = new ProcedureCode();
            newProcedure.procedureCode.value = mapPassThrough(entry._procedureRequested.topicCode.value, CodeableConcept);

            result.push(newProcedure.toJSON());
        } else if (entry instanceof FluxNoKnownAllergyV01) {
            const newNoKnownAllergy = new NoKnownAllergy();

            mapEntryInfo(entry.entryInfo, newNoKnownAllergy);
            newNoKnownAllergy.value = mapPassThrough(entry._noKnownAllergy.value, CodeableConcept);

            result.push(newNoKnownAllergy.toJSON());
        } else if (entry instanceof FluxConsultRequestedV01) {
            const entryJSON = entry.toJSON();
            entryJSON.Encounter.TimePeriod.EntryType.Value = 'http://standardhealthrecord.org/spec/shr/core/TimePeriod';
            entryJSON.Encounter.TimePeriod.BeginDateTime = {
                EntryType: {
                    Value : 'http://standardhealthrecord.org/spec/shr/core/BeginDateTime'
                },
                Value: entryJSON.Encounter.TimePeriod.TimePeriodStart.Value
            };
            delete entryJSON.LastUpdated;
            delete entryJSON.CreationTime;
            delete entryJSON.Encounter.TimePeriod.TimePeriodStart;
            result.push(entryJSON);
        } else if (entry instanceof FluxHistologicGradeV01) {

        } else if (entry instanceof FluxObservationV01) {
            const newObservation = new Observation();

            mapEntryInfo(entry.entryInfo, newObservation);
            if (entry._observation.category) newObservation.category = mapPassThrough(entry._observation.category, Category);
            if (entry._observation.findingStatus) {
                newObservation.findingStatus = new FindingStatus();
                newObservation.findingStatus.value = mapPassThrough(entry._observation.findingStatus, CodeableConcept);
            }
            newObservation.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            if (entry._observation.specificFocusOfFinding) newObservation.specificFocusOfFinding = mapPassThrough(entry._observation.specificFocusOfFinding, SpecificFocusOfFinding);
            if (entry._observation.findingTopicCode) newObservation.findingTopicCode = mapPassThrough(entry._observation.findingTopicCode, FindingTopicCode);
            if (entry._observation.value) newObservation.findingResult = mapFindingResult(entry._observation.value);
            // newObservation.findingResult = new FindingResult();
            // newObservation.findingResult.value = mapQuantity(entry._observation.value);
            result.push(newObservation.toJSON());
        } else if (entry instanceof FluxMedicationRequestedV01) {
            const newMedicationRequested = new MedicationRequested();

            mapEntryInfo(entry.entryInfo, newMedicationRequested);
            newMedicationRequested.dosage = mapDosage(entry._medicationRequested.dosage);
            newMedicationRequested.medication = mapPassThrough(entry._medicationRequested.medication, Medication);
            newMedicationRequested.status = mapPassThrough(entry._medicationRequested.status, Status);
            newMedicationRequested.reason = entry._medicationRequested.reason.map(r => mapPassThrough(r, Reason));
            newMedicationRequested.expectedPerformanceTime = mapExpectedPerformanceTime(entry._medicationRequested.expectedPerformanceTime);

            result.push(newMedicationRequested.toJSON());
        } else if (entry instanceof FluxCancerProgressionV01) {
            const newProgression = new CancerProgression();

            mapEntryInfo(entry.entryInfo, newProgression);
            newProgression.findingResult = mapFindingResult(entry._cancerProgression.value);
            newProgression.specificFocusOfFinding = mapPassThrough(entry._cancerProgression.specificFocusOfFinding, SpecificFocusOfFinding);
            newProgression.findingTopicCode = mapPassThrough(entry._cancerProgression.findingTopicCode, FindingTopicCode);
            newProgression.relevantTime = mapRelevantTime(entry._cancerProgression.relevantTime); 

            result.push(newProgression.toJSON());
        }
    });

    return result;
};