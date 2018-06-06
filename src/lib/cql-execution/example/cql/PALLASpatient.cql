library BreastCancer version '1.0.0'

using FHIR version '1.0.2'
include FHIRHelpers version '1.0.2' called FHIRHelpers

codesystem "SNOMEDCT": 'http://snomed.info/sct'
codesystem "LOINC": 'http://loinc.org'


// SOURCE : https://vsac.nlm.nih.gov/valueset/expansions?pr=all
// value set to represent all breast cancer conditions.
valueset "Breast Cancer": '2.16.840.1.113883.3.526.2.98'
valueset "Trastuzumab": '2.16.840.1.113762.1.4.1116.57'

// CODES : used to represent conditions, lab results, or other data fields to be entered for the clinical trial

code "Estrogen receptor [Interpretation] Tissue": '16112-5' from "LOINC" display 'Estrogen receptor [Interpretation] in Tissue'
code "Positive (qualifier value)": '10828004' from "SNOMEDCT" display 'Positive (qualifier value)'
code "Progesterone receptor [Interpretation] in Tissue": '16113-3' from "LOINC" display 'Progesterone receptor [Interpretation] in Tissue'
code "Hemoglobin A1c [Mass/volume] in Blood": '41995-2' from "LOINC" display 'Hemoglobin A1c [Mass/volume] in Blood'
code "Platelets [#/volume] in Blood": '26515-7' from "LOINC" display 'Platelets [#/volume] in Blood'
code "HER2 panel - Tissue by FISH": '74885-5' from "LOINC" display 'HER2 panel - Tissue by FISH'
code "AJCC cancer staging manual [PhenX]": '67203-0' from "LOINC" display 'AJCC cancer staging manual [PhenX]'
code "Are you currently pregnant [PhenX]": '66174-4' from "LOINC" display 'Are you currently pregnant'
code "Negative (qualifier value)": '260385009' from "SNOMEDCT" display 'Negative (qualifier value)'
code "ECOG performance status grade Observed": '42800-3' from "LOINC" display 'ECOG performance status grade Observed'
code "Neutrophils [#/volume] in Blood": '26499-4' from "LOINC" display 'Neutrophils [#/volume] in Blood'

// CONCEPTS : Unsure why these are necessary, but without them the 
// data retrieval for "Observation" wouldnt work.

concept "Estrogen Receptor" : { "Estrogen receptor [Interpretation] Tissue" } display 'Estrogen Receptor [Interpretation]'
concept "Positive" : { "Positive (qualifier value)" } display 'Positive (qualifier value)'
concept "Progesterone Receptor": { "Progesterone receptor [Interpretation] in Tissue" } display 'Progesterone receptor'
concept "Hemoglobin": { "Hemoglobin A1c [Mass/volume] in Blood" } display 'Hemoglobin A1c'
concept "Platelets": { "Platelets [#/volume] in Blood" }  display 'Platelets [#/volume] in Blood'
concept "HER2": { "HER2 panel - Tissue by FISH" } display 'HER2 panel - Tissue by FISH'
concept "AJCC": { "AJCC cancer staging manual [PhenX]" } display 'AJCC cancer staging manual'
concept "Pregnant": { "Are you currently pregnant [PhenX]" } display 'Are you currently pregnant'
concept "Negative": { "Negative (qualifier value)" } display 'Negative (qualifier value)'
concept "ECOG": { "ECOG performance status grade Observed" } display 'ECOG performance status grade'
concept "Neutrophils": { "Neutrophils [#/volume] in Blood" } display 'Neutrophils'


context Patient

define InDemographic :
   AgeInYears() >= 18
   
define HasBreastCancer:
  exists(
    [Condition: "Breast Cancer"] C
      where C.verificationStatus.value = 'confirmed'
  )

define ERPositive:
  exists(
      [Observation: "Estrogen Receptor"] O
        where O.interpretation.coding[0].code.value = '10828004'
  ) 

define PRPositive:
  exists(
      [Observation: "Progesterone Receptor"] O
        where O.interpretation.coding[0].code.value = '10828004'
  )

define HER2Negative:
  exists(
    [Observation: "HER2"] O
      where O.interpretation.coding[0].code.value != '260385009'
  ) and
  (not exists ( [Medication: "Trastuzumab"] M ))

define HemoglobinInRange:
  exists(
    [Observation: "Hemoglobin"] O
       where O.valueQuantity.value.value >= 10 
         and O.valueQuantity.unit.value = 'g/dL'
  )

 define PlateletsInRange:
  exists(
    [Observation: "Platelets"] O
      where O.valueQuantity.value.value >= 100000
      and O.valueQuantity.unit.value = 'mm3'
  ) 

define AJCCInRange:
  exists(
    [Observation: "AJCC"] O
      where O.valueQuantity.value.value = 2 
         or O.valueQuantity.value.value = 3
  )

define NotPregnant:
  exists(
    [Observation: "Pregnant"] O
      where O.interpretation.coding[0].code.value = '260385009'
  )

define ECOGInRange:
  exists(
    [Observation: "ECOG"] O
      where O.valueQuantity.value.value < 2
  )

define NeutrophilsInRange:
  exists(
    [Observation: "Neutrophils"] O
      where O.valueQuantity.value.value > 1500
        and O.valueQuantity.unit.value  = 'mm3'
  )


define ER_check_missing:
  not (exists( [Observation: "Estrogen Receptor"] O ) )

define PR_check_missing:
  not (exists( [Observation: "Progesterone Receptor"] O ))

define HER2_check_missing:
  not (exists(  [Observation: "HER2"] O ))

define Hemoglobin_check_missing:
  not (exists( [Observation: "Hemoglobin"] O ))

define AJCC_check_missing:
  not (exists ( [Observation: "AJCC"] O ))

define Pregnancy_check_missing:
  not (exists( [Observation: "Pregnant"] O ))

define ECOG_check_missing:
  not (exists( [Observation: "ECOG"] O))

define Neutrophils_check_missing:
  not (exists( [Observation: "Neutrophils"] O))

define Platelets_check_missing:
  not (exists ( [Observation: "Platelets"] O ))

  
define MeetsInclusionCriteria:
  InDemographic 
  and ERPositive
  and PRPositive 
  and AJCCInRange
  and PlateletsInRange
  and HER2Negative
  and HemoglobinInRange
  and HasBreastCancer
  and ECOGInRange 
  and NeutrophilsInRange
  and NotPregnant

// This function will distinguish whether the given patient
// is disqualified from the trial (they have data that meets exclusion criteria)
// or if their data is missing, meaning that clinicians can get information
// and determine further eligibility.

define check_not_disqualified:
  (HER2Negative or HER2_check_missing)
  and (PRPositive or PR_check_missing)
  and (HemoglobinInRange or Hemoglobin_check_missing)
  and (ERPositive or ER_check_missing)
  and (NotPregnant or Pregnancy_check_missing)
  and (ECOGInRange or ECOG_check_missing)
  and (PlateletsInRange or Platelets_check_missing)
  and (AJCCInRange or AJCC_check_missing) 

// Returns an array of missing data fields to determine
// if a patient is eligible for a given trial.
define find_missing_data:
  Tuple {
    "Progesterone receptor": PR_check_missing, 
    "Estrogen receptor": ER_check_missing,
    "Hemoglobin": Hemoglobin_check_missing,
    "HER2": HER2_check_missing,
    "Pregnant/Not Pregnant": Pregnancy_check_missing,
    "ECOG": ECOG_check_missing,
    "Platelets": Platelets_check_missing,
    "AJCC": AJCC_check_missing
  }

  

