/*
  Interface spec for OutcomesService implementations.
  Initial version of the spec is dervived from the functionality currently in
  use by the TreatmentOptionsOutcomes cntianter and supporting views.
*/
export default class IOutcomesService {

  /*
    Get the treatment options supported by the underlying service.
    @return {[{key: String, name: String}]} an array of objects that contain a mapping
    key and display name.
    @example [{key: 'chemo', name: 'Chemotherapy'}]
  */
  getSupportedTreatments(){
    throw new Error("getSupportedTreatments not implemented by " + this.constructor.name);
  }


  /*
  Function to
  @param {Object} similarPatientProps  The filtering criteria used to define the cohort
         of patients used to calculate outcome data
  @param {[Object]} includedTreatments  Array of treatments used as the inital set of combined
         treatements to compare against

  @param {[Object]} comparedTreatments Array of treatments to compare against included treatments

  @return {Object}  returns the calcualted outcome data
    includedTreatmentData -- the outcomes for the intial incldued treatments
    comparedTreatmentData -- the outcomes for the compared incldued treatments
    totalPatients:  -- total number of patients in the 
    totalSimilarPatients: total number of patients that match the cohort filtering criteria
    similarPatientTreatments, -- treatments that matched the similar patients [{key: String, name: String}]


    treatment_data {
        id: uniqueId
        displayName --  display name for treatment data
        treatments -- [[]] Array of combined treatments for this item
        totalPatients -- number of patients that match the given treatments
        oneYrSurvival -- number of patients that survived past 1 year
        threeYrSurvival-- number of patients that survived past 3 years
        fiveYrSurvival -- number of patients that survived past 5 years
    }

  */
  processSimilarPatientOutcomes(similarPatientProps, includedTreatments, comparedTreatments){
    throw new Error("processSimilarPatientOutcomes not implemented by " + this.constructor.name);
  }

}
