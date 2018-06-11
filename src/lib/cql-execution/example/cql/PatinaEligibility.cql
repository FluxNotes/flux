// NOTE: First version of CQL Logic to determine eligibility for PATINA clinical trial.

library BreastCancer version '1.0.0'
using FHIR version '1.0.2'
include FHIRHelpers version '1.0.2' called FHIRHelpers

// Value set and codes loosely borrowed from CMS 123v7
codesystem "SNOMEDCT": 'http://snomed.info/sct'
codesystem "LOINC": 'http://loinc.org'
valueset "Breast Cancer": '2.16.840.1.113883.3.526.2.98'

code "Metastasis state M4 code": '258299008' from "SNOMEDCT" display 'Metastasis state M4'
code "HER2 panel - Tissue by FISH": '74885-5' from "LOINC" display 'HER2 panel - Tissue by FISH'
code "Estrogen receptor [Interpretation] Tissue": '16112-5' from "LOINC" display 'Estrogen receptor [Interpretation] in Tissue'
code "Progesterone receptor [Interpretation] in Tissue": '16113-3' from "LOINC" display 'Progesterone receptor [Interpretation] in Tissue'
code "Positive (qualifier value)": '10828004' from "SNOMEDCT" display 'Positive (qualifier value)'
code "Negative (qualifier value)": '260385009' from "SNOMEDCT" display 'Negative (qualifier value)'
code "Are you currently pregnant [PhenX]": '66174-4' from "LOINC" display 'Are you currently pregnant'
code "ECOG performance status grade Observed": '42800-3' from "LOINC" display 'ECOG performance status grade Observed'
code "Neutrophils [#/volume] in Blood": '26499-4' from "LOINC" display 'Neutrophils [#/volume] in Blood'
code "Platelets [#/volume] in Blood": '26515-7' from "LOINC" display 'Platelets [#/volume] in Blood'
code "Hemoglobin A1c [Mass/volume] in Blood": '41995-2' from "LOINC" display 'Hemoglobin A1c [Mass/volume] in Blood'

concept "Metastasis state M4": { "Metastasis state M4 code" } display 'Metastasis state M4'
concept "HER2": { "HER2 panel - Tissue by FISH" } display 'HER2 panel - Tissue by FISH'
concept "Estrogen Receptor" : { "Estrogen receptor [Interpretation] Tissue" } display 'Estrogen Receptor [Interpretation]'
concept "Progesterone Receptor": { "Progesterone receptor [Interpretation] in Tissue" } display 'Progesterone receptor'
concept "Positive" : { "Positive (qualifier value)" } display 'Positive (qualifier value)'
concept "Negative": { "Negative (qualifier value)" } display 'Negative (qualifier value)'
concept "Pregnant": { "Are you currently pregnant [PhenX]" } display 'Are you currently pregnant'
concept "ECOG": { "ECOG performance status grade Observed" } display 'ECOG performance status grade'
concept "Neutrophils": { "Neutrophils [#/volume] in Blood" } display 'Neutrophils'
concept "Platelets": { "Platelets [#/volume] in Blood" }  display 'Platelets [#/volume] in Blood'
concept "Hemoglobin": { "Hemoglobin A1c [Mass/volume] in Blood" } display 'Hemoglobin A1c'


context Patient


// CRITERIA

// Age >= 18 years
// QUESTION: Where is AgeInYears() defined?
define InDemographic:
  AgeInYears() >= 18

// Has Metastatic Breast cancer
define HasMetastaticBreastCancer:
  exists(
    [Condition: "Breast Cancer"] C
      where C.verificationStatus.value = 'confirmed'
      and C.stage.summary.coding[0].code.value = '258299008'
  )

// HER2+
define IsHER2Positive:
  exists(
    [Observation: "HER2"] O
      where O.interpretation.coding[0].code.value = '10828004'
  )


// Hormone Receptor Positive (ER+ and/or PR+)
define IsERPositive:
  exists(
      [Observation: "Estrogen Receptor"] O
        where O.interpretation.coding[0].code.value = '10828004'
  )

define IsPRPositive:
  exists(
      [Observation: "Progesterone Receptor"] O
        where O.interpretation.coding[0].code.value = '10828004'
  )

define IsHormoneReceptorPositive:
  IsERPositive
  or IsPRPositive


// ECOG performance status 0-1
define ECOGInRange:
  exists(
    [Observation: "ECOG"] O
      where O.valueQuantity.value.value < 2
  )

// Not pregnant
define IsNotPregnant:
  exists(
    [Observation: "Pregnant"] O
      where O.interpretation.coding[0].code.value = '260385009'
  )


// Absolute neutrophil count ≥ 1,000/mm3
define NeutrophilsInRange:
  exists(
    [Observation: "Neutrophils"] O
      where O.valueQuantity.value.value > 1000
        and O.valueQuantity.unit.value  = 'mm3'
  )

// Platelets ≥ 100,000/mm3
define PlateletsInRange:
 exists(
   [Observation: "Platelets"] O
     where O.valueQuantity.value.value >= 100000
     and O.valueQuantity.unit.value = 'mm3'
 )

// Hemoglobin ≥ 10g/dL
define HemoglobinInRange:
  exists(
    [Observation: "Hemoglobin"] O
       where O.valueQuantity.value.value >= 10
         and O.valueQuantity.unit.value = 'g/dL'
  )


// FINAL: MeetsInclusionCriteria
define meetsInclusionCriteria:
  InDemographic
  and HasMetastaticBreastCancer
  and IsHormoneReceptorPositive
  and ECOGInRange
  and IsNotPregnant
  and NeutrophilsInRange
  and PlateletsInRange
  and HemoglobinInRange

define ERCheckMissing:
  not (exists( [Observation: "Estrogen Receptor"] O ) )

define PRCheckMissing:
  not (exists( [Observation: "Progesterone Receptor"] O ))

define HER2CheckMissing:
  not (exists(  [Observation: "HER2"] O ))

define HemoglobinCheckMissing:
  not (exists( [Observation: "Hemoglobin"] O ))

define PregnancyCheckMissing:
  not (exists( [Observation: "Pregnant"] O ))

define ECOGCheckMissing:
  not (exists( [Observation: "ECOG"] O))

define NeutrophilsCheckMissing:
  not (exists( [Observation: "Neutrophils"] O))

define PlateletsCheckMissing:
  not (exists ( [Observation: "Platelets"] O ))

// This function will distinguish whether the given patient
// is disqualified from the trial (they have data that meets exclusion criteria)
// or if their data is missing, meaning that clinicians can get information
// and determine further eligibility.

define checkNotDisqualified:
  (IsHER2Positive or HER2CheckMissing)
  and (IsHormoneReceptorPositive or ERCheckMissing or PRCheckMissing)
  and (HemoglobinInRange or HemoglobinCheckMissing)
  and (IsNotPregnant or PregnancyCheckMissing)
  and (ECOGInRange or ECOGCheckMissing)
  and (PlateletsInRange or PlateletsCheckMissing)

// Returns an array of missing data fields to determine
// if a patient is eligible for a given trial.
define findMissingData:
  Tuple {
    "Progesterone receptor and Estrogen receptor": PRCheckMissing and ERCheckMissing,
    "Hemoglobin": HemoglobinCheckMissing,
    "HER2": HER2CheckMissing,
    "Pregnant/Not Pregnant": PregnancyCheckMissing,
    "ECOG": ECOGCheckMissing,
    "Platelets": PlateletsCheckMissing
  }