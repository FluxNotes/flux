// NOTE:  This is a simplified example, designed only for the purpose of demonstrating how to
// use the cql-execution, cql-exec-fhir, and cql-exec-vsac javascript modules.  This CQL
// is NOT clinically validated and should NOT be used in a clinical setting.

library DiabeticFootExam version '1.0.0'
using FHIR version '1.0.2'
include FHIRHelpers version '1.0.2' called FHIRHelpers

// Value set and codes loosely borrowed from CMS 123v7
codesystem "SNOMEDCT": 'http://snomed.info/sct'
valueset "Diabetes": '2.16.840.1.113883.3.464.1003.103.12.1001'
code "Diabetic foot examination (regime/therapy) code": '401191002' from "SNOMEDCT" display 'Diabetic foot examination (regime/therapy)'
code "Monofilament foot sensation test (procedure) code": '134388005' from "SNOMEDCT" display 'Monofilament foot sensation test (procedure)'
code "Pedal pulse taking (procedure) code": '91161007' from "SNOMEDCT" display 'Pedal pulse taking (procedure)'
concept "Diabetic foot examination (regime/therapy)": { "Diabetic foot examination (regime/therapy) code" } display 'Diabetic foot examination (regime/therapy)'
concept "Monofilament foot sensation test (procedure)": { "Monofilament foot sensation test (procedure) code" } display 'Monofilament foot sensation test (procedure)'
concept "Pedal pulse taking (procedure)": { "Pedal pulse taking (procedure) code" } display 'Pedal pulse taking (procedure)'

context Patient

define InDemographic:
  AgeInYears() between 18 and 75

define HasDiabetes:
  exists(
    [Condition: "Diabetes"] C
      where C.verificationStatus.value = 'confirmed'
  )

define MeetsInclusionCriteria:
  InDemographic
  and HasDiabetes

// NOTE: Skipping definition of exclusion criteria

define HasRecentVisualFootExam:
  exists(
    [Procedure: "Diabetic foot examination (regime/therapy)"] P
      where P.status.value = 'completed'
      and P.notPerformed.value is not true
      and P.performedDateTime.value within 1 year of Now()
  )

define HasRecentSensoryFootExam:
  exists(
    [Procedure: "Monofilament foot sensation test (procedure)"] P
      where P.status.value = 'completed'
      and P.notPerformed.value is not true
      and P.performedDateTime.value within 1 year of Now()
  )

define HasRecentPedalPulseFootExam:
  exists(
    [Procedure: "Pedal pulse taking (procedure)"] P
      where P.status.value = 'completed'
      and P.notPerformed.value is not true
      and P.performedDateTime.value within 1 year of Now()
  )

define NeedsFootExam:
  MeetsInclusionCriteria
  and (
    HasRecentVisualFootExam is not true
    or HasRecentSensoryFootExam is not true
    or HasRecentPedalPulseFootExam is not true
  )
