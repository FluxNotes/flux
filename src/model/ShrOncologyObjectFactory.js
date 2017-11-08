import BreastCancer from './shr/oncology/BreastCancer';
import BreastCancerReceptorStatus from './shr/oncology/BreastCancerReceptorStatus';
import EstrogenReceptorStatus from './shr/oncology/EstrogenReceptorStatus';
import FluxHistologicGrade from './oncology/FluxHistologicGrade';
import FluxTNMStage from './oncology/FluxTNMStage';
import T_Stage from './shr/oncology/T_Stage';
import N_Stage from './shr/oncology/N_Stage';
import M_Stage from './shr/oncology/M_Stage';
import FluxProgression from './oncology/FluxProgression';
import ProgesteroneReceptorStatus from './shr/oncology/ProgesteroneReceptorStatus';
import FluxToxicReactionToTreatment from './oncology/FluxToxicReactionToTreatment';
import FluxTumorSize from './oncology/FluxTumorSize';
import Lang from 'lodash';

export default class ShrOncologyObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "BreastCancer": BreastCancer,
                                "BreastCancerReceptorStatus": BreastCancerReceptorStatus,
                                "EstrogenReceptorStatus": EstrogenReceptorStatus,
                                "HistologicGrade": FluxHistologicGrade,
                                "TNMStage": FluxTNMStage,
                                "T_Stage": T_Stage,
                                "N_Stage": N_Stage,
                                "M_Stage": M_Stage,
                                "Progression": FluxProgression,
                                "ProgesteroneReceptorStatus": ProgesteroneReceptorStatus,
                                "ToxicReactionToTreatment": FluxToxicReactionToTreatment,
                                "TumorSize" : FluxTumorSize
                              };

        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
    
}