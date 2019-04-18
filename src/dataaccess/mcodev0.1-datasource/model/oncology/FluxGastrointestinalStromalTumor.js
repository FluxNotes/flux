import FluxSolidTumorCancer from './FluxSolidTumorCancer';
import CancerDisorder from '../mcode/CancerDisorder';
import Lang from 'lodash';

class FluxGastrointestinalStromalTumor extends FluxSolidTumorCancer {
    constructor(json, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = this._entry = CancerDisorder.fromJSON(json);
    }

    getMostRecentMitosis() {
        let results = this.getObservationsWithObservationCodeChronologicalOrder('7041004'); // code for mitosis observations
        if (!results || results.length === 0) return null;
        return results.pop();
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
