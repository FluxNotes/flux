import MetadataSection from "./MetadataSection";
import ClinicalTrialsList from '../../clinicalTrials/ClinicalTrialsList.jsx';
import Lang from 'lodash'

export default class ClinicalTrialsSection extends MetadataSection {
    constructor(setForceRefresh) {
        super(setForceRefresh);
        this.trialDisplayMissingCriteria = "";
        this.missingEligibleTrialData = null;
    }

    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Clinical Trials",
            shortName: "Trials",
            clinicalEvents: ["pre-encounter"],
            type: "Columns",
            notFiltered: true,
            data: [
                {
                    name: "Enrolled",
                    headings: ["Name", "When Enrolled", "When Left", "Description"],
                    itemsFunction: this.getItemListForEnrolledClinicalTrials
                },
                {
                    name: "Potential to enroll",
                    headings: ["Name", "Criteria Fit", "Opened", "Description"],
                    itemsFunction: this.getItemListForClinicalTrialEligibility,
                    actions: [
                        {
                            handler: this.handleViewMissingCriteria,
                            text: "Missing Criteria",
                            icon: "clipboard",
                            whenToDisplay: {
                                valueExists: true,
                                existingValueSigned: "either",
                                editableNoteOpen: "either", 
                                displayForColumns: [0, 1]
                            }
                        }
                    ]
                },
                {   nameFunction: this.getMissingCriteriaSubsectionName, 
                    itemsFunction: this.getItemListToDisplayMissingCriteria,
                    displayFunction: this.getMissingCriteriaDisplay
                }
            ]   
        };
    }

    getMissingCriteriaSubsectionName = () => {
        return (this.trialDisplayMissingCriteria !== "") ? (`Missing ${this.trialDisplayMissingCriteria} Criteria`) : "Missing Criteria";
    }

    getItemListToDisplayMissingCriteria = () => {
       let trialsList = new ClinicalTrialsList();
        if (this.trialDisplayMissingCriteria !== "") {
            this.missingEligibleTrialData = trialsList.getMissingCriteriaListTrialEligibility(this.trialDisplayMissingCriteria);
            return this.missingEligibleTrialData.map((data) => {
                return [{value : data}]
            });
       }
       return [];
    }

    getMissingCriteriaDisplay = () => {
        return this.trialDisplayMissingCriteria !== "";
    }

    getItemListForEnrolledClinicalTrials = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];

        const clinicalTrials = patient.getEnrolledClinicalTrials();
        if (clinicalTrials.length === 0) {
            return [];
        } else {
            return clinicalTrials.filter((c) => {
                return (c.title) && (c.status !== 'Candidate');
            }).map((c, i) => {
                return [
                    {
                        value: c.title, 
                        isUnsigned: patient.isUnsigned(c), 
                        source: c.sourceClinicalNoteReference
                    },
                    {
                        value: (c.status === 'Candidate') ? 'N/A' : c.enrollmentDate,
                        isUnsigned: patient.isUnsigned(c), 
                        source: c.sourceClinicalNoteReference
                    },
                    {
                        value: (c.status === 'Candidate' || c.status === 'Enrolled' || c.status === 'Active') ? 'N/A' : c.endDate, 
                        isUnsigned: patient.isUnsigned(c), 
                        source: c.sourceClinicalNoteReference
                    },
                    {
                        value: c.details
                    }
                ]; 
            });
        }
    }

    getItemListForClinicalTrialEligibility = (patient, currentConditionEntry) => {
        let clinicalTrialsAndCriteriaList = patient.getEligibleClinicalTrials(currentConditionEntry, this.getItemListForEnrolledClinicalTrials(patient, currentConditionEntry));
        let eligibleTrials = [];
        clinicalTrialsAndCriteriaList.forEach((trial) => {
            eligibleTrials.push([   { value: trial.info.name }, 
                                    { value: (trial.numSatisfiedCriteria + " of " + trial.numTotalCriteria) }, 
                                    { value: trial.info.studyStartDate }, 
                                    { value: trial.info.description }
            ]);
        });
        this.eligibleTrials = eligibleTrials;
        this.refreshClinicalTrials = false;
        return this.eligibleTrials;
    }

    handleViewMissingCriteria = (item, rowId) => {
        // rowId is the name of the current section or item - in this case the name of the clinical trial displayed)
        this.trialDisplayMissingCriteria = rowId;
        this.setForceRefresh(true);
    }
}