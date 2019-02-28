import filterTreatmentData from '../../utils/filterTreatmentData';
import IOutcomesService from './IOutcomesService'
export default class StaticOutcomesService  extends IOutcomesService {

   async getSupportedTreatments(){
      return [{key: 'surgery', name: 'surgery'},
              {key: 'chemotherapy', name: 'chemotherapy'},
              {key: 'radiation', name: 'radiation'},
              {key: 'hormonal', name: 'hormonal'}]
    }

   async processSimilarPatientOutcomes(similarPatientProps, includedTreatments, comparedTreatments) {
    return filterTreatmentData(similarPatientProps, includedTreatments, comparedTreatments);
  }
}
