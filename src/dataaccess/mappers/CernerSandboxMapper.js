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



let mapper = {
    filter: () => true,
    default: (resource, context) => mappers['syntheaToV05'].execute(resource, context),
    mappers: [
      {
        filter: "Condition.code.coding.where($this.code in %primaryCancerConditionCodes.first())",
        exec: (resource, context) =>
            utils.applyProfile(resource, 'http://hl7.org/fhir/us/fhirURL/StructureDefinition/oncocore-CancerDisorderPresent')
    },
    {filter: "Observation.code.text = 'AJCCV7 Breast Distant Metastasis (M) Pat'",
        exec: (resource, context) => {
            resource.code = {coding: [{code: '21901-4'  , system: 'http://loinc.org'}]};
            resource.valueCodeableConcept.coding = [{code:resource.valueCodeableConcept.text }]
            
           // utils.applyProfile(resource, 'http://hl7.org/fhir/us/fhirURL/StructureDefinition/');
            return resource;
        }
    },
    {filter: "Observation.code.text  = 'AJCCV7 Breast Distant Metastasis (M) Cli'",
        exec: (resource, context) => {
            resource.code = {coding: [{code: '21907-1'  , system: 'http://loinc.org'}]};
            resource.valueCodeableConcept.coding = [{code:resource.valueCodeableConcept.text }]
            utils.applyProfile(resource, 'http://hl7.org/fhir/us/fhirURL/StructureDefinition/oncocore-TNMClinicalDistantMetastasesClassification');
            return resource;
        }
    },
    {filter: "Observation.code.text  = 'AJCCV7 Breast Regional Lymph Nodes (N) P'",
        exec: (resource, context) => {
            resource.code = {coding: [{code: '21900-6'  , system: 'http://loinc.org'}]};
            resource.valueCodeableConcept.coding = [{code:resource.valueCodeableConcept.text }]
            //utils.applyProfile(resource, 'http://hl7.org/fhir/us/fhirURL/StructureDefinition/');
            return resource;
        }
    },
    {filter: "Observation.code.text  = 'AJCCV7 Breast Regional Lymph Nodes (N) C'",
        exec: (resource, context) => {
            resource.code = {coding: [{code: '21906-3'  , system: 'http://loinc.org'}]};
            resource.valueCodeableConcept.coding = [{code:resource.valueCodeableConcept.text }]
            utils.applyProfile(resource, 'http://hl7.org/fhir/us/fhirURL/StructureDefinition/oncocore-TNMClinicalRegionalNodesClassification');
            return resource;
        }
    }],
};
export default buildMappers(mapper, {
    primaryCancerConditionCodes
});
