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
import FindingStatusV01 from './model/shr/base/FindingStatus';
import FindingStatus from '../../model/shr/base/FindingStatus';
import RelevantTime from '../../model/shr/base/RelevantTime';
import SpecificFocusOfFinding from '../../model/shr/base/SpecificFocusOfFinding';
import FindingTopicCode from '../../model/shr/base/FindingTopicCode';
import QuantityV01 from './model/shr/core/Quantity';
import Quantity from '../../model/shr/core/Quantity';
import FluxHistologicGradeV01 from './model/oncology/FluxHistologicGrade';
import FluxCancerProgressionV01 from './model/mcode/FluxCancerProgression';
import CancerProgression from '../../model/oncocore/CancerProgression';
import FluxQuestionAnswerV01 from './model/finding/FluxQuestionAnswer';
import QuestionAnswer from '../../model/shr/base/QuestionAnswer';
import PanelMembers from '../../model/shr/base/PanelMembers';
import QuestionText from '../../model/shr/base/QuestionText';
import CancerHistologicGrade from '../../model/oncocore/CancerHistologicGrade';
import FluxConditionPresentAssertionV01 from './model/base/FluxConditionPresentAssertion';
import FluxToxicReactionV01 from './model/adverse/FluxToxicReaction';
import CauseCategory from '../../model/shr/adverse/CauseCategory';
import ToxicAdverseDrugReaction from '../../model/shr/adverse/ToxicAdverseDrugReaction';
import Seriousness from '../../model/shr/adverse/Seriousness';
import Type from '../../model/shr/core/Type';
import CausalAttribution from '../../model/shr/adverse/CausalAttribution';
import AdverseEventCondition from '../../model/shr/adverse/AdverseEventCondition';
import SystolicPressureV01 from './model/shr/vital/SystolicPressure';
import SystolicPressure from '../../model/shr/vital/SystolicPressure';
import DiastolicPressureV01 from './model/shr/vital/DiastolicPressure';
import DiastolicPressure from '../../model/shr/vital/DiastolicPressure';
import FluxTNMStageV01 from './model/oncology/FluxTNMStage';
import TNMClinicalStageGroup from '../../model/oncocore/TNMClinicalStageGroup';
import FindingMethod from '../../model/shr/base/FindingMethod';
import FluxMitoticRateV01 from './model/oncology/FluxMitoticRate';
import FluxMitoticRate from '../../model/oncology/FluxMitoticRate';
import TNMClinicalPrimaryTumorClassificationV01 from './model/mcode/TNMClinicalPrimaryTumorClassification';
import TNMClinicalRegionalNodesClassificationV01 from './model/mcode/TNMClinicalRegionalNodesClassification';
import TNMClinicalDistantMetastasesClassificationV01 from './model/mcode/TNMClinicalDistantMetastasesClassification';
import TNMClinicalPrimaryTumorClassification from '../../model/oncocore/TNMClinicalPrimaryTumorClassification';
import TNMClinicalRegionalNodesClassification from '../../model/oncocore/TNMClinicalRegionalNodesClassification';
import TNMClinicalDistantMetastasesClassification from '../../model/oncocore/TNMClinicalDistantMetastasesClassification';
import FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanelV01 from './model/oncology/FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel';
import FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel from '../../model/oncology/FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel';
import FluxKITVariantV01 from './model/oncology/FluxKITVariant';
import FluxKITVariant from '../../model/oncology/FluxKITVariant';
import FluxPDGFRAVariantV01 from './model/oncology/FluxPDGFRAVariant';
import FluxPDGFRAVariant from '../../model/oncology/FluxPDGFRAVariant';
import FluxImagingProcedurePerformedV01 from './model/procedure/FluxImagingProcedurePerformed';
import ImagingProcedurePerformed from '../../model/shr/procedure/ImagingProcedurePerformed';
import OccurrenceTimeOrPeriod from '../../model/shr/core/OccurrenceTimeOrPeriod';
import FluxTumorDimensionsV01 from './model/oncology/FluxTumorDimensions';
import TumorDimensions from '../../model/tumor/TumorDimensions';
import FluxTumorMarginsV01 from './model/oncology/FluxTumorMargins';
import TumorMargins from '../../model/tumor/TumorMargins';
import FluxBloodPressureV01 from './model/vital/FluxBloodPressure';
import FluxBloodPressure from '../../model/vital/FluxBloodPressure';
import FluxBodyTemperatureV01 from './model/vital/FluxBodyTemperature';
import FluxBodyTemperature from '../../model/vital/FluxBodyTemperature';
import FluxBodyWeightV01 from './model/vital/FluxBodyWeight';
import FluxBodyWeight from '../../model/vital/FluxBodyWeight';
import FluxHeartRateV01 from './model/vital/FluxHeartRate';
import FluxHeartRate from '../../model/vital/FluxHeartRate';
import AuthoredDateTime from '../../model/shr/base/AuthoredDateTime';
import Timing from '../../model/shr/core/Timing';
import RecurrencePattern from '../../model/shr/core/RecurrencePattern';
import RecurrenceInterval from '../../model/shr/core/RecurrenceInterval';
import Duration from '../../model/shr/core/Duration';
import FluxAllergyIntoleranceV01 from './model/allergy/FluxAllergyIntolerance';
import AllergyIntolerance from '../../model/shr/allergy/AllergyIntolerance';
import SubstanceCategory from '../../model/shr/allergy/SubstanceCategory';
import AllergyIntoleranceReaction from '../../model/shr/allergy/AllergyIntoleranceReaction';
import Severity from '../../model/shr/base/Severity';
import Manifestation from '../../model/shr/allergy/Manifestation';
import FluxBreastCancerV01 from './model/oncology/FluxBreastCancer';
import BreastCancerDisorderPresent from '../../model/brca/BreastCancerDisorderPresent';
import AnatomicalLocationStructured from '../../model/shr/core/AnatomicalLocationStructured';
import AnatomicalLocationOrLandmarkCode from '../../model/shr/core/AnatomicalLocationOrLandmarkCode';
import Laterality from '../../model/shr/core/Laterality';
import FluxMedicationChangeV01 from './model/medication/FluxMedicationChange';
import MedicationChange from '../../model/shr/medication/MedicationChange';
import MedicationBeforeChange from '../../model/shr/medication/MedicationBeforeChange';
import MedicationAfterChange from '../../model/shr/medication/MedicationAfterChange';
import FluxBreastCancerGeneticAnalysisPanelV01 from './model/oncology/FluxBreastCancerGeneticAnalysisPanel';
import BreastCancerGeneticAnalysisPanel from '../../model/shr/oncology/BreastCancerGeneticAnalysisPanel';
import FluxBRCA1VariantV01 from './model/oncology/FluxBRCA1Variant';
import FluxBRCA1Variant from '../../model/oncology/FluxBRCA1Variant';
import FluxBRCA2VariantV01 from './model/oncology/FluxBRCA2Variant';
import FluxBRCA2Variant from '../../model/oncology/FluxBRCA2Variant';
import FluxEstrogenReceptorStatusV01 from './model/oncology/FluxEstrogenReceptorStatus';
import EstrogenReceptorStatus from '../../model/brca/EstrogenReceptorStatus';
import FluxProgesteroneReceptorStatusV01 from './model/oncology/FluxProgesteroneReceptorStatus';
import ProgesteroneReceptorStatus from '../../model/brca/ProgesteroneReceptorStatus';
import FluxHER2ReceptorStatusV01 from './model/oncology/FluxHER2ReceptorStatus';
import HER2ReceptorStatus from '../../model/brca/HER2ReceptorStatus';
import NumberOfRefillsAllowed from '../../model/shr/medication/NumberOfRefillsAllowed';
import FluxPathologyReportV01 from './model/finding/FluxPathologyReport';
import FluxPathologyReport from '../../model/finding/FluxPathologyReport';

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
    entry.metadata.authoredDateTime = new AuthoredDateTime();
    entry.metadata.authoredDateTime.value = entryInfo.creationTime.dateTime;
    if (entryInfo.recordedBy) entry.metadata.informationRecorder = entryInfo.recordedBy.value;
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
    newAnatomicalLocation.value = new AnatomicalLocationStructured();
    newAnatomicalLocation.value.anatomicalLocationOrLandmarkCode = mapPassThrough(anatomicalLocation.anatomicalLocationOrLandmarkCode, AnatomicalLocationOrLandmarkCode);
    if (anatomicalLocation.laterality) newAnatomicalLocation.value.laterality = mapPassThrough(anatomicalLocation.laterality, Laterality);

    return newAnatomicalLocation;
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

const mapDuration = (duration) => {
    const newDuration = new Duration();

    newDuration.number = new Number();
    newDuration.number.value = duration.decimalValue.value;
    newDuration.units = mapUnits(duration.units);

    return newDuration;
}

const mapTimingOfDoses = (timingOfDoses) => {
    const newTimingOfDoses = new TimingOfDoses();

    newTimingOfDoses.timing = new Timing();
    if (timingOfDoses.timing.recurrencePattern) {
        newTimingOfDoses.timing.recurrencePattern = new RecurrencePattern();
        newTimingOfDoses.timing.recurrencePattern.recurrenceInterval = new RecurrenceInterval();
        newTimingOfDoses.timing.recurrencePattern.recurrenceInterval.value = mapDuration(timingOfDoses.timing.recurrencePattern.recurrenceInterval.value);
    } else {
        newTimingOfDoses.timing = mapPassThrough(timingOfDoses.timing, Timing);
    }

    return newTimingOfDoses;
}

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
    newDosage.timingOfDoses = mapTimingOfDoses(dosage.timingOfDoses);

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

const mapFindingResult = (value) => {
    const newFindingResult = new FindingResult();

    if (value instanceof QuantityV01) {
        newFindingResult.value = mapQuantity(value);
    } else if (value instanceof CodeableConceptV01) {
        newFindingResult.value = mapPassThrough(value, CodeableConcept);
    } else {
        newFindingResult.value = value;
    }

    return newFindingResult;
};

const mapFindingStatus = (findingStatus) => {
    if (findingStatus instanceof FindingStatusV01) return mapPassThrough(findingStatus, FindingStatus);
    const newFindingStatus = new FindingStatus();
    newFindingStatus.value = mapPassThrough(findingStatus, CodeableConcept);
    return newFindingStatus;
};

const mapSubstanceCategory = (substanceCategory) => {
    const newSubstanceCategory = new SubstanceCategory();

    newSubstanceCategory.value = new CodeableConcept();
    const newCoding = new Coding();
    newCoding.code = substanceCategory.value;
    newSubstanceCategory.value.coding = [newCoding];
    newSubstanceCategory.value.displayText = new DisplayText();
    newSubstanceCategory.value.displayText.value = substanceCategory.value;

    return newSubstanceCategory;
};

const mapAdverseReaction = (adverseReaction) => {
    const newAllergyIntoleranceReaction = new AllergyIntoleranceReaction();

    newAllergyIntoleranceReaction.beginDateTime = new BeginDateTime();
    newAllergyIntoleranceReaction.beginDateTime.value = adverseReaction.occurrenceTime.value;
    newAllergyIntoleranceReaction.severity = mapPassThrough(adverseReaction.severity, Severity);
    newAllergyIntoleranceReaction.manifestation = [mapPassThrough(adverseReaction.manifestation, Manifestation)];

    return newAllergyIntoleranceReaction;
};

const mapCancerDisorder = (entry, klass) => {
    const newCondition = new klass();

    mapEntryInfo(entry.entryInfo, newCondition);
    newCondition.patient = mapReference(entry._condition.patient);
    newCondition.anatomicalLocation = entry._condition.anatomicalLocation.map(a => mapAnatomicalLocation(a));
    newCondition.category = mapPassThrough(entry._condition.category, Category);
    newCondition.clinicalStatus = mapPassThrough(entry._condition.clinicalStatus, ClinicalStatus);
    newCondition.findingResult = new FindingResult();
    newCondition.findingResult.value = mapPassThrough(entry._condition.value, CodeableConcept);
    newCondition.onset = mapPassThrough(entry._condition.onset, Onset);

    return newCondition;
};

const mapEntryInfoToReference = (entryInfo) => {
    const newReference = new Reference();

    newReference.entryId = entryInfo.entryId;
    newReference.shrId = entryInfo.shrId;
    newReference.entryType = entryInfo.entryType.uri;

    return newReference;
};

const mapMedicationBeforeChange = (medicationBeforeChange) => {
    const newMedicationBeforeChange = new MedicationBeforeChange();

    newMedicationBeforeChange.value = mapEntryInfoToReference(medicationBeforeChange.value.entryInfo);

    return newMedicationBeforeChange;
};

const mapMedicationAfterChange = (medicationAfterChange) => {
    const newMedicationAfterChange = new MedicationAfterChange();

    newMedicationAfterChange.value = mapEntryInfoToReference(medicationAfterChange.value.entryInfo);

    return newMedicationAfterChange;
}

const mapObservation = (entry, newObservation) => {
    if (entry._observation.category) newObservation.category = mapPassThrough(entry._observation.category, Category);
    if (entry._observation.findingStatus) newObservation.findingStatus = mapFindingStatus(entry._observation.findingStatus);
    if (entry._observation.relevantTime) newObservation.relevantTime = mapRelevantTime(entry._observation.relevantTime);
    if (entry._observation.specificFocusOfFinding) newObservation.specificFocusOfFinding = mapPassThrough(entry._observation.specificFocusOfFinding, SpecificFocusOfFinding);
    if (entry._observation.findingTopicCode) newObservation.findingTopicCode = mapPassThrough(entry._observation.findingTopicCode, FindingTopicCode);
    if (entry._observation.value) newObservation.findingResult = mapFindingResult(entry._observation.value);
    if (entry._observation.panelMembers) newObservation.panelMembers = mapPassThrough(entry._observation.panelMembers, PanelMembers);

    return newObservation;
}

exports.mapEntries = (entries) => {
    const result = [];
    entries.forEach(entry => {
        if (entry instanceof FluxPatientV01) {
            const newPatient = new FluxPatient();
            mapEntryInfo(entry.entryInfo, newPatient._patient);
            newPatient._patient.person = mapReference(entry._patient.person);
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
            if (entry._person.maritalStatus) newPerson._person.maritalStatus = mapPassThrough(entry._person.maritalStatus, MaritalStatus);
            newPerson._person.race = mapPassThrough(entry._person.race, Race);
            result.push(newPerson._person.toJSON());
        } else if (entry instanceof FluxPatientIdentifierV01 || entry instanceof FluxClinicalNoteV01) {
            result.push(entry.toJSON());
        } else if (entry instanceof FluxGastrointestinalStromalTumorV01) {
            const newCondition = mapCancerDisorder(entry, CancerDisorderPresent);

            const entryJSON = newCondition.toJSON();
            entryJSON.EntryType.Value = 'http://standardhealthrecord.org/spec/shr/oncology/GastrointestinalStromalTumor';
            result.push(entryJSON);
        } else if (entry instanceof FluxBreastCancerV01) {
            const newCondition = mapCancerDisorder(entry, BreastCancerDisorderPresent);

            const entryJSON = newCondition.toJSON();
            result.push(entryJSON);
        } else if (entry instanceof FluxConditionPresentAssertionV01) {
            const newCondition = new ConditionPresentAssertion();

            mapEntryInfo(entry.entryInfo, newCondition);
            newCondition.anatomicalLocation = entry._condition.anatomicalLocation.map(a => mapAnatomicalLocation(a));
            newCondition.category = mapPassThrough(entry._condition.category, Category);
            newCondition.clinicalStatus = mapPassThrough(entry._condition.clinicalStatus, ClinicalStatus);
            newCondition.findingResult = new FindingResult();
            newCondition.findingResult.value = mapPassThrough(entry._condition.value, CodeableConcept);
            newCondition.onset = mapPassThrough(entry._condition.onset, Onset);

            result.push(newCondition.toJSON());
        } else if (entry instanceof FluxProcedureRequestedV01) {
            const newProcedure = new ProcedureRequested();

            mapEntryInfo(entry.entryInfo, newProcedure);
            newProcedure.expectedPerformanceTime = mapExpectedPerformanceTime(entry._procedureRequested.expectedPerformanceTime);
            if (entry._procedureRequested.annotation) newProcedure.annotation = entry._procedureRequested.annotation.map(a => mapPassThrough(a, Annotation));
            if (entry._procedureRequested.reason) newProcedure.reason = entry._procedureRequested.reason.map(r => mapPassThrough(r, Reason));
            newProcedure.status = mapPassThrough(entry._procedureRequested.status, Status);
            newProcedure.procedureCode = new ProcedureCode();
            newProcedure.procedureCode.value = mapPassThrough(entry._procedureRequested.topicCode.value, CodeableConcept);

            result.push(newProcedure.toJSON());
        } else if (entry instanceof FluxNoKnownAllergyV01) {
            const newNoKnownAllergy = new NoKnownAllergy();

            mapEntryInfo(entry.entryInfo, newNoKnownAllergy);
            newNoKnownAllergy.value = mapPassThrough(entry._noKnownAllergy.value, CodeableConcept);

            result.push(newNoKnownAllergy.toJSON());
        } else if (entry instanceof FluxAllergyIntoleranceV01) {
            const newAllergyIntolerance = new AllergyIntolerance();

            mapEntryInfo(entry.entryInfo, newAllergyIntolerance);
            newAllergyIntolerance.findingResult = mapFindingResult(entry._allergyIntolerance.value);
            newAllergyIntolerance.substanceCategory = mapSubstanceCategory(entry._allergyIntolerance.substanceCategory[0]);
            newAllergyIntolerance.allergyIntoleranceReaction = entry._allergyIntolerance.adverseReaction.map(a => mapAdverseReaction(a));

            result.push(newAllergyIntolerance.toJSON());
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
            const newHistologicGrade = new CancerHistologicGrade();

            mapEntryInfo(entry.entryInfo, newHistologicGrade);
            newHistologicGrade.findingStatus = mapFindingStatus(entry._histologicGrade.findingStatus);
            newHistologicGrade.relevantTime = mapRelevantTime(entry._histologicGrade.relevantTime);
            newHistologicGrade.specificFocusOfFinding = mapPassThrough(entry._histologicGrade.specificFocusOfFinding, SpecificFocusOfFinding);
            newHistologicGrade.findingResult = mapFindingResult(entry._histologicGrade.value);

            result.push(newHistologicGrade.toJSON());
        } else if (entry instanceof FluxTNMStageV01) {
            const newTNMStage = new TNMClinicalStageGroup();

            mapEntryInfo(entry._observation.entryInfo, newTNMStage);
            newTNMStage.findingMethod = mapPassThrough(entry._observation.findingMethod, FindingMethod);
            newTNMStage.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newTNMStage.findingTopicCode = mapPassThrough(entry._observation.findingTopicCode, FindingTopicCode);
            newTNMStage.panelMembers = mapPassThrough(entry._observation.panelMembers, PanelMembers);
            newTNMStage.specificFocusOfFinding = mapPassThrough(entry._observation.specificFocusOfFinding, SpecificFocusOfFinding);
            newTNMStage.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            newTNMStage.findingResult = mapFindingResult(entry._observation.value);

            result.push(newTNMStage.toJSON());
        } else if (entry instanceof FluxMitoticRateV01) {
            const newMitoticRate = new FluxMitoticRate();

            mapEntryInfo(entry._observation.entryInfo, newMitoticRate._observation);
            newMitoticRate._observation.findingResult = mapFindingResult(entry._observation.value);

            result.push(newMitoticRate.toJSON());
        } else if (entry instanceof FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanelV01) {
            const newGISTPanel = new FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel();

            mapEntryInfo(entry._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.entryInfo, newGISTPanel._gastrointestinalStromalTumorCancerGeneticAnalysisPanel);
            newGISTPanel._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.relevantTime = mapRelevantTime(entry._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.relevantTime);
            newGISTPanel._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.panelMembers = mapPassThrough(entry._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.panelMembers, PanelMembers);

            result.push(newGISTPanel.toJSON());
        } else if (entry instanceof FluxKITVariantV01) {
            const newKIT = new FluxKITVariant();

            mapEntryInfo(entry._kitVariant.entryInfo, newKIT._kitVariant);
            newKIT._kitVariant.specificFocusOfFinding = mapPassThrough(entry._kitVariant.specificFocusOfFinding, SpecificFocusOfFinding);
            newKIT._kitVariant.findingResult = mapFindingResult(entry._kitVariant.value);

            result.push(newKIT.toJSON());
        } else if (entry instanceof FluxPDGFRAVariantV01) {
            const newPDGFRA = new FluxPDGFRAVariant();

            mapEntryInfo(entry._pdgfraVariant.entryInfo, newPDGFRA._pdgfraVariant);
            newPDGFRA._pdgfraVariant.specificFocusOfFinding = mapPassThrough(entry._pdgfraVariant.specificFocusOfFinding, SpecificFocusOfFinding);
            newPDGFRA._pdgfraVariant.findingResult = mapFindingResult(entry._pdgfraVariant.value);

            result.push(newPDGFRA.toJSON());
        } else if (entry instanceof FluxTumorDimensionsV01) {
            const newTumorDimensions = new TumorDimensions();

            mapEntryInfo(entry._tumorDimensions.entryInfo, newTumorDimensions);
            newTumorDimensions.findingStatus = mapFindingStatus(entry._tumorDimensions.findingStatus);
            newTumorDimensions.findingTopicCode = mapPassThrough(entry._tumorDimensions.findingTopicCode, FindingTopicCode);
            newTumorDimensions.relevantTime = mapRelevantTime(entry._tumorDimensions.relevantTime);
            newTumorDimensions.specificFocusOfFinding = mapPassThrough(entry._tumorDimensions.specificFocusOfFinding, SpecificFocusOfFinding);
            newTumorDimensions.findingResult = mapFindingResult(entry._tumorDimensions.value);

            result.push(newTumorDimensions.toJSON());
        } else if (entry instanceof FluxTumorMarginsV01) {
            const newTumorMargins = new TumorMargins();

            mapEntryInfo(entry._tumorMargins.entryInfo, newTumorMargins);
            newTumorMargins.findingStatus = mapFindingStatus(entry._tumorMargins.findingStatus);
            newTumorMargins.findingTopicCode = mapPassThrough(entry._tumorMargins.findingTopicCode, FindingTopicCode);
            newTumorMargins.relevantTime = mapRelevantTime(entry._tumorMargins.relevantTime);
            newTumorMargins.specificFocusOfFinding = mapPassThrough(entry._tumorMargins.specificFocusOfFinding, SpecificFocusOfFinding);
            newTumorMargins.findingResult = mapFindingResult(entry._tumorMargins.value);

            result.push(newTumorMargins.toJSON());
        } else if (entry instanceof FluxBloodPressureV01) {
            const newBloodPressure = new FluxBloodPressure();

            mapEntryInfo(entry._observation.entryInfo, newBloodPressure._observation);
            newBloodPressure._observation.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newBloodPressure._observation.findingTopicCode = mapPassThrough(entry._observation.findingTopicCode, FindingTopicCode);
            newBloodPressure._observation.panelMembers = mapPassThrough(entry._observation.panelMembers, PanelMembers);
            newBloodPressure._observation.relevantTime = mapRelevantTime(entry._observation.relevantTime);

            result.push(newBloodPressure.toJSON());
        } else if (entry instanceof FluxBodyTemperatureV01) {
            const newBodyTemperature = new FluxBodyTemperature();

            mapEntryInfo(entry._observation.entryInfo, newBodyTemperature._observation);
            newBodyTemperature._observation.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newBodyTemperature._observation.findingTopicCode = mapPassThrough(entry._observation.findingTopicCode, FindingTopicCode);
            newBodyTemperature._observation.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            newBodyTemperature._observation.findingResult = mapFindingResult(entry._observation.value);

            result.push(newBodyTemperature.toJSON());
        } else if (entry instanceof FluxBodyWeightV01) {
            const newBodyWeight = new FluxBodyWeight();

            mapEntryInfo(entry._observation.entryInfo, newBodyWeight._observation);
            newBodyWeight._observation.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newBodyWeight._observation.findingTopicCode = mapPassThrough(entry._observation.findingTopicCode, FindingTopicCode);
            newBodyWeight._observation.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            newBodyWeight._observation.findingResult = mapFindingResult(entry._observation.value);

            result.push(newBodyWeight.toJSON());
        } else if (entry instanceof FluxHeartRateV01) {
            const newHeartRate = new FluxHeartRate();

            mapEntryInfo(entry._observation.entryInfo, newHeartRate._observation);
            newHeartRate._observation.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newHeartRate._observation.findingTopicCode = mapPassThrough(entry._observation.findingTopicCode, FindingTopicCode);
            newHeartRate._observation.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            newHeartRate._observation.findingResult = mapFindingResult(entry._observation.value);

            result.push(newHeartRate.toJSON());
        } else if (entry instanceof FluxBRCA1VariantV01) {
            const newVariant = new FluxBRCA1Variant();

            mapEntryInfo(entry._brca1Variant.entryInfo, newVariant._brca1Variant);
            newVariant._brca1Variant.findingResult = mapFindingResult(entry._brca1Variant.value);
            newVariant._brca1Variant.specificFocusOfFinding = mapPassThrough(entry._brca1Variant.specificFocusOfFinding, SpecificFocusOfFinding);

            result.push(newVariant.toJSON());
        } else if (entry instanceof FluxBRCA2VariantV01) {
            const newVariant = new FluxBRCA2Variant();

            mapEntryInfo(entry._brca2Variant.entryInfo, newVariant._brca2Variant);
            newVariant._brca2Variant.findingResult = mapFindingResult(entry._brca2Variant.value);
            newVariant._brca2Variant.specificFocusOfFinding = mapPassThrough(entry._brca2Variant.specificFocusOfFinding, SpecificFocusOfFinding);

            result.push(newVariant.toJSON());
        } else if (entry instanceof FluxEstrogenReceptorStatusV01) {
            const newReceptorStatus = new EstrogenReceptorStatus();

            mapEntryInfo(entry._observation.entryInfo, newReceptorStatus);
            newReceptorStatus.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newReceptorStatus.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            newReceptorStatus.findingResult = mapFindingResult(entry._observation.value);
            newReceptorStatus.specificFocusOfFinding = mapPassThrough(entry._observation.specificFocusOfFinding, SpecificFocusOfFinding);

            result.push(newReceptorStatus.toJSON());
        } else if (entry instanceof FluxProgesteroneReceptorStatusV01) {
            const newReceptorStatus = new ProgesteroneReceptorStatus();

            mapEntryInfo(entry._observation.entryInfo, newReceptorStatus);
            newReceptorStatus.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newReceptorStatus.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            newReceptorStatus.findingResult = mapFindingResult(entry._observation.value);
            newReceptorStatus.specificFocusOfFinding = mapPassThrough(entry._observation.specificFocusOfFinding, SpecificFocusOfFinding);

            result.push(newReceptorStatus.toJSON());
        } else if (entry instanceof FluxHER2ReceptorStatusV01) {
            const newReceptorStatus = new HER2ReceptorStatus();

            mapEntryInfo(entry._observation.entryInfo, newReceptorStatus);
            newReceptorStatus.findingStatus = mapFindingStatus(entry._observation.findingStatus);
            newReceptorStatus.relevantTime = mapRelevantTime(entry._observation.relevantTime);
            newReceptorStatus.findingResult = mapFindingResult(entry._observation.value);
            newReceptorStatus.specificFocusOfFinding = mapPassThrough(entry._observation.specificFocusOfFinding, SpecificFocusOfFinding);

            result.push(newReceptorStatus.toJSON());
        } else if (entry instanceof FluxPathologyReportV01) {
            const newPathologyReport = new FluxPathologyReport();

            mapEntryInfo(entry.entryInfo, newPathologyReport._observation);
            mapObservation(entry, newPathologyReport._observation);

            result.push(newPathologyReport.toJSON());
        }
        else if (entry instanceof FluxObservationV01) {
            const newObservation = new Observation();

            mapEntryInfo(entry.entryInfo, newObservation);
            mapObservation(entry, newObservation);

            result.push(newObservation.toJSON());
        } else if (entry instanceof FluxMedicationChangeV01) {
            const newMedicationChange = new MedicationChange();

            mapEntryInfo(entry._medicationChange.entryInfo, newMedicationChange);
            newMedicationChange.reason = entry._medicationChange.reason.map(r => mapPassThrough(r, Reason));
            newMedicationChange.category = new Category();
            newMedicationChange.category.value = mapPassThrough(entry._medicationChange.topicCode.value, CodeableConcept);
            newMedicationChange.status = mapPassThrough(entry._medicationChange.status, Status);
            newMedicationChange.medicationBeforeChange = [mapMedicationBeforeChange(entry._medicationChange.medicationBeforeChange)];
            newMedicationChange.medicationAfterChange = [mapMedicationAfterChange(entry._medicationChange.medicationAfterChange)];

            result.push(newMedicationChange.toJSON());
        } else if (entry instanceof FluxMedicationRequestedV01) {
            const newMedicationRequested = new MedicationRequested();

            mapEntryInfo(entry.entryInfo, newMedicationRequested);
            newMedicationRequested.dosage = mapDosage(entry._medicationRequested.dosage);
            newMedicationRequested.medication = mapPassThrough(entry._medicationRequested.medication, Medication);
            newMedicationRequested.status = mapPassThrough(entry._medicationRequested.status, Status);
            newMedicationRequested.reason = entry._medicationRequested.reason.map(r => mapPassThrough(r, Reason));
            newMedicationRequested.expectedPerformanceTime = mapExpectedPerformanceTime(entry._medicationRequested.expectedPerformanceTime);
            if (entry._medicationRequested.numberOfRefillsAllowed) newMedicationRequested.numberOfRefillsAllowed = mapPassThrough(entry._medicationRequested.numberOfRefillsAllowed, NumberOfRefillsAllowed);

            result.push(newMedicationRequested.toJSON());
        } else if (entry instanceof FluxCancerProgressionV01) {
            const newProgression = new CancerProgression();

            mapEntryInfo(entry.entryInfo, newProgression);
            newProgression.findingResult = mapFindingResult(entry._cancerProgression.value);
            newProgression.specificFocusOfFinding = mapPassThrough(entry._cancerProgression.specificFocusOfFinding, SpecificFocusOfFinding);
            newProgression.findingTopicCode = mapPassThrough(entry._cancerProgression.findingTopicCode, FindingTopicCode);
            newProgression.relevantTime = mapRelevantTime(entry._cancerProgression.relevantTime); 

            result.push(newProgression.toJSON());
        } else if (entry instanceof FluxQuestionAnswerV01) {
            const newQuestionAnswer = new QuestionAnswer();

            mapEntryInfo(entry.entryInfo, newQuestionAnswer);
            if (entry._questionAnswer.relevantTime) newQuestionAnswer.relevantTime = mapRelevantTime(entry._questionAnswer.relevantTime);
            if (entry.observationCodeDisplayText === 'Review of systems') {
                newQuestionAnswer.findingTopicCode = mapPassThrough(entry._questionAnswer.findingTopicCode, FindingTopicCode);
                newQuestionAnswer.panelMembers = mapPassThrough(entry._questionAnswer.panelMembers, PanelMembers);
            } else {
                newQuestionAnswer.questionText = new QuestionText();
                newQuestionAnswer.questionText.value = entry.observationCodeDisplayText;
                newQuestionAnswer.findingResult = mapFindingResult(entry._questionAnswer.value);
            }
            result.push(newQuestionAnswer.toJSON());
        } else if (entry instanceof FluxToxicReactionV01) {
            const newToxicReaction = new ToxicAdverseDrugReaction();

            mapEntryInfo(entry._adverseEvent.entryInfo, newToxicReaction);
            newToxicReaction.seriousness = new Seriousness();
            newToxicReaction.seriousness.value = mapPassThrough(entry._adverseEvent.adverseEventGrade.value, CodeableConcept);
            newToxicReaction.type = new Type();
            newToxicReaction.type.value = mapPassThrough(entry._adverseEvent.codeableConcept, CodeableConcept);
            newToxicReaction.causalAttribution = [new CausalAttribution()];
            newToxicReaction.causalAttribution[0].causeCategory = mapPassThrough(entry._adverseEvent.causeCategory, CauseCategory);
            newToxicReaction.adverseEventCondition = [new AdverseEventCondition()];
            newToxicReaction.adverseEventCondition[0].conditionPresentAssertion = mapReference(entry._adverseEvent.specificFocusOfFinding.value);

            result.push(newToxicReaction.toJSON());
        } else if (entry instanceof SystolicPressureV01) {
            const newSystolicPressure = new SystolicPressure();

            mapEntryInfo(entry.entryInfo, newSystolicPressure);
            newSystolicPressure.findingTopicCode = mapPassThrough(entry.findingTopicCode, FindingTopicCode);
            newSystolicPressure.quantity = mapQuantity(entry.quantity);

            result.push(newSystolicPressure.toJSON());
        } else if (entry instanceof DiastolicPressureV01) {
            const newDiastolicPressure = new DiastolicPressure();

            mapEntryInfo(entry.entryInfo, newDiastolicPressure);
            newDiastolicPressure.findingTopicCode = mapPassThrough(entry.findingTopicCode, FindingTopicCode);
            newDiastolicPressure.quantity = mapQuantity(entry.quantity);

            result.push(newDiastolicPressure.toJSON());
        } else if (entry instanceof TNMClinicalPrimaryTumorClassificationV01) {
            const newT = new TNMClinicalPrimaryTumorClassification();

            mapEntryInfo(entry.entryInfo, newT);
            newT.findingResult = mapFindingResult(entry.value);

            result.push(newT.toJSON());
        } else if (entry instanceof TNMClinicalRegionalNodesClassificationV01) {
            const newN = new TNMClinicalRegionalNodesClassification();

            mapEntryInfo(entry.entryInfo, newN);
            newN.findingResult = mapFindingResult(entry.value);

            result.push(newN.toJSON());
        } else if (entry instanceof TNMClinicalDistantMetastasesClassificationV01) {
            const newM = new TNMClinicalDistantMetastasesClassification();

            mapEntryInfo(entry.entryInfo, newM);
            newM.findingResult = mapFindingResult(entry.value);

            result.push(newM.toJSON());
        } else if (entry instanceof FluxImagingProcedurePerformedV01) {
            const newImaging = new ImagingProcedurePerformed();

            mapEntryInfo(entry._imagingProcedurePerformed.entryInfo, newImaging);
            if (entry._imagingProcedurePerformed.annotation) newImaging.annotation = entry._imagingProcedurePerformed.annotation.map(a => mapPassThrough(a, Annotation));
            newImaging.reason = entry._imagingProcedurePerformed.reason.map(r => mapPassThrough(r, Reason));
            newImaging.status = mapPassThrough(entry._imagingProcedurePerformed.status, Status);
            newImaging.procedureCode = new ProcedureCode();
            newImaging.procedureCode.value = mapPassThrough(entry._imagingProcedurePerformed.topicCode.value, CodeableConcept);
            newImaging.occurrenceTimeOrPeriod = mapPassThrough(entry._imagingProcedurePerformed.occurrenceTimeOrPeriod, OccurrenceTimeOrPeriod);

            result.push(newImaging.toJSON());
        } else if (entry instanceof FluxBreastCancerGeneticAnalysisPanelV01) {
            const newBreastCancerGeneticAnalysisPanel = new BreastCancerGeneticAnalysisPanel();

            mapEntryInfo(entry._breastCancerGeneticAnalysisPanel.entryInfo, newBreastCancerGeneticAnalysisPanel);
            newBreastCancerGeneticAnalysisPanel.panelMembers = mapPassThrough(entry._breastCancerGeneticAnalysisPanel.panelMembers, PanelMembers);
            newBreastCancerGeneticAnalysisPanel.relevantTime = mapRelevantTime(entry._breastCancerGeneticAnalysisPanel.relevantTime);

            result.push(newBreastCancerGeneticAnalysisPanel.toJSON());
        }
    });

    return result;
};
