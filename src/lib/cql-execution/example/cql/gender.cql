library gender version '1'

using FHIR version '1.0.2'

include FHIRHelpers version '1.0.2' called FHIRHelpers

context Patient

define "Is Female":
    Patient.gender.value = 'female'
