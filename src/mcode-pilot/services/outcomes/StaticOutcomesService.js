import { filterTreatmentData } from '../../utils/filterTreatmentData';
import IOutcomesService from './IOutcomesService';
import FilterOptions from '../../utils/FilterOptions';

export default class StaticOutcomesService  extends IOutcomesService {
    constructor(config) {
        super();
        this.timescale = config.timescale;
    }

    async processSimilarPatientOutcomes(similarPatientProps) {
        const filter = new FilterOptions(similarPatientProps);
        return filterTreatmentData(filter, this.timescale);
    }
}
