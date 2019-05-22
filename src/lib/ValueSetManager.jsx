import * as stagingLookup from "../lib/tnmstage_lookup";
import * as toxicityLookup from "../lib/toxicreaction_lookup";
import * as progressionLookup from "../lib/progression_lookup";
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';
import { getReceptorValueOptions } from '../lib/receptor_lookup';

export default class ValueSetManager {
    static getValueList = (category, valueSetName, ...args) => {
        if (category === "staging") {
            if (valueSetName === "T") {
                return stagingLookup.getTsForEdition(...args);
            } else if (valueSetName === "N") {
                return stagingLookup.getNsForEdition(...args);
            } else if (valueSetName === "M") {
                return stagingLookup.getMsForEdition(...args);
            }
        } else if (category === "progression") {
            if (valueSetName === "status") {
                return progressionLookup.getStatusOptions();
            } else if (valueSetName === "reason") {
                return progressionLookup.getReasonOptions();
            }
        } else if (category === "toxicity") {
            if (valueSetName === "grade") {
                return toxicityLookup.getGradeOptions();
            } else if (valueSetName === "adverseEvent") {
                return toxicityLookup.getAdverseEventOptions();
            } else if (valueSetName === "attribution") {
                return toxicityLookup.getAttributionOptions();
            }
        } else if (category === "clinicalTrial") {
            const clinicalTrialList = new ClinicalTrialsList();
            if (valueSetName === "clinicalTrials") {
                return clinicalTrialList.getAllTrials();
            }
        } else if (category === 'receptor') {
            if (valueSetName === 'status') return getReceptorValueOptions();
        }

        console.error("Invalid value set request: category: " + category + " valueSet = " + valueSetName);
    }
}
