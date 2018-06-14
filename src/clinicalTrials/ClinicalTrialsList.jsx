import CQLExecutionEngine from '../lib/cql-execution/CQLExecutionEngine.js';
import PALLAScql from '../lib/cql-execution/example/cql/PALLASEligibility.json';
import PATINAcql from '../lib/cql-execution/example/cql/PatinaEligibility.json';
import PALLAS_eligiblePatient from '../lib/cql-execution/example/patients/PALLASPatient.json';
import PATINA_eligiblePatient from '../lib/cql-execution/example/patients/PATINAPatient.json';


class ClinicalTrialsList {
    constructor() {
        this.clinicalTrials = [
            {
                id: 'patina',
                name: 'PATINA',
                description: 'A Randomized, Open Label, Phase III Trial to Evaluate the Efficacy and Safety of Palbociclib + Anti-HER2 Therapy + Endocrine Therapy vs. Anti-HER2 Therapy + Endocrine Therapy after Induction Treatment for Hormone Receptor Positive (HR+)/HER2-Positive Metastatic Breast Cancer',
                studyStartDate: '21 Jun 2017',
                cliniclTrialsGovIdentifier: 'NCT02947685',
                inclusionCriteriaCQL: PATINAcql,
                exclusionCriteriaCQL: null,
                informationalURL: 'https://clinicaltrials.gov/ct2/show/NCT02947685',
                additionalCriteria: []
            },
            {
                id: 'pallas',
                name: 'PALLAS',
                description: 'PALbociclib CoLlaborative Adjuvant Study: A randomized phase III trial of Palbociclib with standard adjuvant endocrine therapy versus standard adjuvant endocrine therapy alone for hormone receptor positive (HR+) / human epidermal growth factor receptor 2 (HER2)-negative early breast cancer',
                studyStartDate: '1 Aug 2015',
                cliniclTrialsGovIdentifier: 'NCT02513394',
                inclusionCriteriaCQL: PALLAScql,
                exclusionCriteriaCQL: null,
                informationalURL: 'https://clinicaltrials.gov/ct2/show/NCT02513394',
                additionalCriteria: ['Signed informed consent prior to study specific procedures',
                    'Patients with multicentric and/or multifocal and/or bilateral early invasive breast cancer are eligible if all histopathologically examined tumors meet pathologic criteria for ER+ and/or PR+ and HER2-.',
                    'Patients must have undergone adequate (definitive) breast surgery for the current malignancy.',
                    'FFPE tumor tissue block must be confirmed to be received at the central sample repository prior to randomization.',
                    'Patients must be able and willing to swallow and retain oral medication.',
                    'Serum or urine pregnancy test must be negative in premenopausal women within 14 days of randomization, or in women with amenorrhea of less than 12 months at time of randomization.',
                    'Patients who received neo/adjuvant therapy must be after last dose of chemotherapy and/or biologic therapy and must have sufficient resolution of side effects.',
                    'Patients who received breast/axilla/post-mastectomy chest wall radiotherapy must be after last dose of radiotherapy and must have sufficient resolution of side effects.',
                    'Patients must have sufficient resolution of any surgical side effects (no active wound healing complications).',
                    'Patients must either be initiating or have already started adjuvant hormonal treatment.',
                    'Patients who already received neo/adjuvant endocrine therapy are eligible as long as they are enrolled within 12 months of initial histological diagnosis and after completing no more than 6 months of adjuvant endocrine therapy.',
                    'Total serum bilirubin ≤ ULN; or total bilirubin ≤ 3.0 × ULN with direct bilirubin within normal range in patients with documented Gilbert\'s Syndrome.',
                    'Aspartate amino transferase (AST or SGOT) and alanine amino transferase (ALT or SGPT) ≤ 1.5 × institutional ULN.',
                    'Serum creatinine below the upper limit of the institutional normal range (ULN) or creatinine clearance ≥ 60 mL/min/1.73 m2 for patients with serum creatinine levels above institutional ULN.'
                ]
            }
        ];
    }

    getAllTrials() {
        return this.clinicalTrials;
    }

    static getDescription(dataElement) {
        switch (dataElement) {
            case "clinicalTrialEnrollment":
                return "Clinical trial enrollment includes the title of a clinical trial and an enrollment date.";
            case "clinicalTrialUnenrolled":
                return "Unenrolling from a clinical trial includes the title of a clinical trial and an end date."
            case "trialEnrollment":
                return "Clinical trial the patient is enrolled in.";
            case "trialUnenrolled":
                return "Clinical trial the patient unenrolled from.";
            case "enrollmentDate":
                return "Date the patient was enrolled in the chosen clinical trial.";
            case "endDate":
                return "Date the patient left the clinical trial.";
            default:
                return null;
        }
    }

    getListOfEligibleClinicalTrials() {
        const patientID = '3cb09ecb-e927-4946-82b3-89957e193215';
        let eligibleTrials = [];

        this.clinicalTrials.forEach((trial) => {
            if (trial.inclusionCriteriaCQL != null) {
                const result = CQLExecutionEngine.getCQLResults(trial.inclusionCriteriaCQL, [PALLAS_eligiblePatient, PATINA_eligiblePatient]);
                if (( result.patientResults[patientID].meetsInclusionCriteria ) || (result.patientResults[patientID].checkNotDisqualified)) {
                    eligibleTrials.push({ info: trial,
                                          numTotalCriteria: Object.keys(result.patientResults[patientID].findMissingData).length + trial.additionalCriteria.length, 
                                          numSatisfiedCriteria: Object.keys(result.patientResults[patientID].findMissingData).length });
                }
            }
        });
        return eligibleTrials;
    }


    getMissingCriteriaListTrialEligibility(trialName) {
        const patient_id = '3cb09ecb-e927-4946-82b3-89957e193215';
        const trial = this.getClinicalTrialByName(trialName.toLowerCase());
        const result = CQLExecutionEngine.getCQLResults(trial.inclusionCriteriaCQL, [PALLAS_eligiblePatient, PATINA_eligiblePatient]);
        const missingCriteria = result.patientResults[patient_id].findMissingData;

        let missingFields = [];
        for (let property in missingCriteria) {
            if (missingCriteria[property] === true) {
                missingFields.push(property);
            }
        }
        return missingFields;
    }

    getClinicalTrialByName(name) {
        let clinicalTrials = this.clinicalTrials.filter((trial) => {
            return trial.name.toUpperCase() === name.toUpperCase();
        });
        
        if (clinicalTrials.length === 0) {
            return null;
        }

        return clinicalTrials[0];
    }
}

export default ClinicalTrialsList;