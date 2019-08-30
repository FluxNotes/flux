import {
    buildMappers,
    mappers,
    utils
} from 'fhir-mapper';

const primaryCancerConditionCodes = [
    '254837009', // Malignant neoplasm of breast (disorder) (B)
    '93761005', // Primary malignant neoplasm of colon (C)
    '109838007', // Overlapping malignant neoplasm of colon (C)
    '363406005', // Malignant tumor of colon (C)
    '94260004', // Secondary malignant neoplasm of colon (C) -- note this is a "secondary" code but is intended to be a primary cancer
    '254637007', // Non-small cell lung cancer (disorder) (L)
    '254632001', // Small cell carcinoma of lung (disorder) (L)
    '424132000', // Non-small cell carcinoma of lung, TNM stage 1 (disorder) (L)
    '425048006', // Non-small cell carcinoma of lung, TNM stage 2 (disorder) (L)
    '422968005', // Non-small cell carcinoma of lung, TNM stage 3 (disorder) (L)
    '423121009', // Non-small cell carcinoma of lung, TNM stage 4 (disorder) (L)
    '67811000119102', // Primary small cell malignant neoplasm of lung, TNM stage 1 (disorder) (L)
    '67821000119109', // Primary small cell malignant neoplasm of lung, TNM stage 2 (disorder) (L)
    '67831000119107', // Primary small cell malignant neoplasm of lung, TNM stage 3 (disorder) (L)
    '67841000119103', // Primary small cell malignant neoplasm of lung, TNM stage 4 (disorder) (L)
    // note that none of the 3 prostate cancer codes are in the recommended VS
    '126906006', // Neoplasm of prostate (P)
    '92691004', // Carcinoma in situ of prostate (disorder) (P)
    '314994000', // Metastasis from malignant tumor of prostate (disorder) (P) -- also a "secondary" code but intended to be a primary cancer
];

const allRelevantProfiles = [
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AllergyIntolerance',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Condition',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DiagnosticReport',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Encounter',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MedicationAdministration',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MedicationRequest',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Observation',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Organization',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Patient',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Practitioner',
    'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Procedure',
    'http://hl7.org/fhir/us/shr/StructureDefinition/shr-core-BloodPressure',
    'http://hl7.org/fhir/us/shr/StructureDefinition/shr-core-BodyHeight',
    'http://hl7.org/fhir/us/shr/StructureDefinition/shr-core-BodyWeight',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-CancerDiseaseStatus',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-CancerRelatedRadiationProcedure',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-CancerRelatedSurgicalProcedure',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-PrimaryCancerCondition',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-SecondaryCancerCondition',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalDistantMetastasesCategory',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalPrimaryTumorCategory',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalRegionalNodesCategory',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalStageGroup',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMPathologicDistantMetastasesCategory',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMPathologicPrimaryTumorCategory',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMPathologicRegionalNodesCategory',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMPathologicStageGroup',
    'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TumorMarkerTest'
];

const mapper = {
    filter: () => true,
    ignore: (resource) => {
        // ignore resources that already have mCODE profiles. we will assume they are profiled correctly
        if (!resource || !resource.meta || !resource.meta.profile) {
            return false; // i.e., do not ignore this since it has no profiles
        }
        // check if any of the profiles are mcode. returns null (falsy) if none found or the profile itself (truthy)
        return resource.meta.profile.find(p => allRelevantProfiles.includes(p));
    },
    default: (resource, context) => mappers['syntheaToV09'].execute(resource, context),
    mappers: [
        {
            filter: "Condition.code.coding.where($this.code in %primaryCancerConditionCodes.first())",
            exec: (resource, context) =>
                utils.applyProfile(resource, 'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-PrimaryCancerCondition')
        },
        {filter: "Observation.code.text = 'AJCCV7 Breast Distant Metastasis (M) Pat'",
            exec: (resource, context) => {
                resource.code = {coding: [{code: '21901-4'  , system: 'http://loinc.org'}]};
                resource.valueCodeableConcept.coding = [{code: resource.valueCodeableConcept.text }];

                // utils.applyProfile(resource, 'http://hl7.org/fhir/us/fhirURL/StructureDefinition/');
                return resource;
            }
        },
        {filter: "Observation.code.text  = 'AJCCV7 Breast Distant Metastasis (M) Cli'",
            exec: (resource, context) => {
                resource.code = {coding: [{code: '21907-1'  , system: 'http://loinc.org'}]};
                resource.valueCodeableConcept.coding = [{code: resource.valueCodeableConcept.text }];
                utils.applyProfile(resource, 'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalDistantMetastasesCategory');
                return resource;
            }
        },
        {filter: "Observation.code.text  = 'AJCCV7 Breast Regional Lymph Nodes (N) P'",
            exec: (resource, context) => {
                resource.code = {coding: [{code: '21900-6'  , system: 'http://loinc.org'}]};
                resource.valueCodeableConcept.coding = [{code: resource.valueCodeableConcept.text }];
                //utils.applyProfile(resource, 'http://hl7.org/fhir/us/fhirURL/StructureDefinition/');
                return resource;
            }
        },
        {filter: "Observation.code.text  = 'AJCCV7 Breast Regional Lymph Nodes (N) C'",
            exec: (resource, context) => {
                resource.code = {coding: [{code: '21906-3'  , system: 'http://loinc.org'}]};
                resource.valueCodeableConcept.coding = [{code: resource.valueCodeableConcept.text }];
                utils.applyProfile(resource, 'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalRegionalNodesCategory');
                return resource;
            }
        }],
};
export default buildMappers(mapper, {
    primaryCancerConditionCodes
});
