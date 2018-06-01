// NOTE:  This is a simplified example, designed only for the purpose of demonstrating how to
// use the cql-execution, cql-exec-fhir, and cql-exec-vsac javascript modules.  This CQL
// is NOT clinically validated and should NOT be used in a clinical setting.

library BreastCancer version '1.0.0'
using FHIR version '1.0.2'
include FHIRHelpers version '1.0.2' called FHIRHelpers

// Value set and codes loosely borrowed from CMS 123v7
codesystem "SNOMEDCT": 'http://snomed.info/sct'
valueset "Breast Cancer": '2.16.840.1.113883.3.526.2.98'

context Patient

define InDemographic:
  AgeInYears() between 18 and 75

define HasBreastCancer:
  exists(
    [Condition: "Breast Cancer"] C
      where C.verificationStatus.value = 'confirmed'
  )

define MeetsInclusionCriteria:
  InDemographic
  and HasBreastCancer
