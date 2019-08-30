
import CancerDisorderPresentActiveTreatmentSummary from './CancerDisorderPresentActiveTreatmentSummary';
import FluxCancerCondition from '../../model/fluxWrappers/onco/core/FluxCancerCondition';
/*
 *  ActiveTreatmentSummaryFactory class returns instances of Flux model classes
 *  Default case will return SHR model classes if no Flux wrapper class is found
 */
export default class ActiveTreatmentSummaryObjectFactory {
    static createInstance(patient, currentConditionEntry) {
        // Can't do an instance of with a switch
        if (currentConditionEntry instanceof FluxCancerCondition) return new CancerDisorderPresentActiveTreatmentSummary();
        else return null;
    }
}