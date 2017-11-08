import BreastCancer from './shr/oncology/BreastCancer';
import BreastCancerReceptorStatus from './shr/oncology/BreastCancerReceptorStatus';
import EstrogenReceptorStatus from './shr/oncology/EstrogenReceptorStatus';
import HistologicGrade from './shr/oncology/HistologicGrade';
import FluxTNMStage from './oncology/FluxTNMStage';
import T_Stage from './shr/oncology/T_Stage';
import N_Stage from './shr/oncology/N_Stage';
import M_Stage from './shr/oncology/M_Stage';
import FluxProgression from './oncology/FluxProgression';
import ProgesteroneReceptorStatus from './shr/oncology/ProgesteroneReceptorStatus';
import FluxToxicReactionToTreatment from './oncology/FluxToxicReactionToTreatment';
import TumorSize from './shr/oncology/TumorSize';
import Lang from 'lodash';

export default class ShrOncologyObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "BreastCancer": BreastCancer,
                                "BreastCancerReceptorStatus": BreastCancerReceptorStatus,
                                "EstrogenReceptorStatus": EstrogenReceptorStatus,
                                "HistologicGrade": HistologicGrade,
                                "TNMStage": FluxTNMStage,
                                "T_Stage": T_Stage,
                                "N_Stage": N_Stage,
                                "M_Stage": M_Stage,
                                "Progression": FluxProgression,
                                "ProgesteroneReceptorStatus": ProgesteroneReceptorStatus,
                                "ToxicReactionToTreatment": FluxToxicReactionToTreatment,
                                "TumorSize" : TumorSize
                              };

        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
    
}