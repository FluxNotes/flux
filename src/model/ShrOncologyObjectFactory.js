import BreastCancerReceptorStatus from './shr/oncology/BreastCancerReceptorStatus';
import FluxBreastCancer from './oncology/FluxBreastCancer';
import FluxHistologicGrade from './oncology/FluxHistologicGrade';
import FluxProgression from './oncology/FluxProgression';
import FluxEstrogenReceptorStatus from './oncology/FluxEstrogenReceptorStatus';
import FluxHumanEpiduralGrowthFactorReceptor2Status from './oncology/FluxHumanEpiduralGrowthFactorReceptor2Status';
import FluxProgesteroneReceptorStatus from './oncology/FluxProgesteroneReceptorStatus';
import FluxTNMStage from './oncology/FluxTNMStage';
import FluxToxicReactionToTreatment from './oncology/FluxToxicReactionToTreatment';
import FluxTumorSize from './oncology/FluxTumorSize';
import T_Stage from './shr/oncology/T_Stage';
import N_Stage from './shr/oncology/N_Stage';
import M_Stage from './shr/oncology/M_Stage';
import Lang from 'lodash';

export default class ShrOncologyObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "BreastCancer": FluxBreastCancer,
                                "BreastCancerReceptorStatus": BreastCancerReceptorStatus,
                                "EstrogenReceptorStatus": FluxEstrogenReceptorStatus,
                                "HistologicGrade": FluxHistologicGrade,
                                "HumanEpiduralGrowthFactorReceptor2Status": FluxHumanEpiduralGrowthFactorReceptor2Status,
                                "TNMStage": FluxTNMStage,
                                "T_Stage": T_Stage,
                                "N_Stage": N_Stage,
                                "M_Stage": M_Stage,
                                "Progression": FluxProgression,
                                "ProgesteroneReceptorStatus": FluxProgesteroneReceptorStatus,
                                "ToxicReactionToTreatment": FluxToxicReactionToTreatment,
                                "TumorSize" : FluxTumorSize
                              };

        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
    
}