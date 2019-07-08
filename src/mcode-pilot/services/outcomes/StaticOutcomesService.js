import { filterTreatmentData } from '../../utils/filterTreatmentData';
import IOutcomesService from './IOutcomesService';

export default class StaticOutcomesService  extends IOutcomesService {
    constructor(config) {
        super();
        this.timescale = config.timescale;
    }
    async getSupportedTreatments() {
        return [
            { key: 'surgery', name: 'surgery' },
            { key: 'chemotherapy', name: 'chemotherapy' },
            { key: 'radiation', name: 'radiation' },
            { key: 'hormonal', name: 'hormonal' }
        ];
    }

    async processSimilarPatientOutcomes(similarPatientProps) {
        return filterTreatmentData(similarPatientProps, this.timescale);
    }
}
