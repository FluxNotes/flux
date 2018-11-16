import FluxSolidTumorCancer from './FluxSolidTumorCancer';
import ConditionPresentAssertion from '../shr/base/ConditionPresentAssertion';
import FluxHistologicGrade from './FluxHistologicGrade';
import FluxTumorDimensions from '../oncology/FluxTumorDimensions';
import Lang from 'lodash';

class FluxGastrointestinalStromalTumor extends FluxSolidTumorCancer {
    constructor(json, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = ConditionPresentAssertion.fromJSON(json);
    }

    getMostRecentMitosis() {
        let results = this.getObservationsWithObservationCodeChronologicalOrder('7041004'); // code for mitosis observations
        if (!results || results.length === 0) return null;
        return results.pop();
    }

    /**
     *  function to build HPI Narrative
     *  Starts with initial summary of patient information
     *  Then details chronological history of patient's procedures, medications, and most recent progression
     */
    buildHpiNarrative(patient) {
        let hpiText = this.buildInitialPatientDiagnosisPreamble(patient);
        
        // Staging
        const staging = this.getMostRecentStaging();
        if (staging) {
            if (staging.stage) {
                hpiText += ` Stage ${staging.stage}`;
            }
            if (!Lang.isUndefined(staging.t_Stage) && !Lang.isNull(staging.t_Stage)) {
                hpiText += ` ${staging.t_Stage}`;
            }
            if (!Lang.isUndefined(staging.n_Stage) && !Lang.isNull(staging.n_Stage)) {
                hpiText += ` ${staging.n_Stage}`;
            }
            if (!Lang.isUndefined(staging.m_Stage) && !Lang.isNull(staging.m_Stage) && staging.m_Stage !== 'M0') { // don't show m if it is 0
                hpiText += ` ${staging.m_Stage}`;
            }
            if (staging.mitoticRate) {
                hpiText += `. Mitotic rate ${staging.mitoticRate}`;
            }
            hpiText += '.';
        }

        // Tumor Size and HistologicGrade
        const tumorSize = this.getObservationsOfType(FluxTumorDimensions);
        const histologicGrade = this.getObservationsOfType(FluxHistologicGrade);
        if (tumorSize.length > 0) {
            hpiText += ` Primary tumor size ${tumorSize[tumorSize.length - 1].quantity.value} ${tumorSize[tumorSize.length - 1].quantity.unit}.`;
        }
        if (histologicGrade.length > 0) {
            hpiText += ` ${histologicGrade[0].grade}.`;
        }

        // genetics
        const geneticpanels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
        //const geneticspanelMostRecent = geneticpanels[geneticpanels.length - 1];
        if (geneticpanels && geneticpanels.length > 0) {
            const panel = geneticpanels.pop();
            hpiText += " " + panel.members.map((item) => {
                const v = item.value === 'Positive' ? '+' : '-';
                return item.abbreviatedName + v;
            }).join(",");
        }

        hpiText = this.buildEventNarrative(hpiText, patient, this.code);
        
        return hpiText;
    }

    getGeneticMutationValue(geneticMutationAbbreviatedName, patient) {
        const geneticpanels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
        const panel = geneticpanels.pop();
        const mutation = panel.members.find((item) => {
            return (item.abbreviatedName.startsWith(geneticMutationAbbreviatedName));
        });
        if (Lang.isEmpty(mutation)) return undefined;
        return mutation.value;
    }
}
export default FluxGastrointestinalStromalTumor;
