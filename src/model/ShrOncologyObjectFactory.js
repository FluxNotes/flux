import BreastCancer from './shr/oncology/BreastCancer';
import BreastCancerReceptorStatus from './shr/oncology/BreastCancerReceptorStatus';
import EstrogenReceptorStatus from './shr/oncology/EstrogenReceptorStatus';
import HistologicGrade from './shr/oncology/HistologicGrade';
import TNMStage from './shr/oncology/TNMStage';
import T_Stage from './shr/oncology/T_Stage';
import N_Stage from './shr/oncology/N_Stage';
import M_Stage from './shr/oncology/M_Stage';
import Progression from './shr/oncology/Progression';
import ProgesteroneReceptorStatus from './shr/oncology/ProgesteroneReceptorStatus';
import ToxicReactionToTreatment from './shr/oncology/ToxicReactionToTreatment';
import TumorSize from './shr/oncology/TumorSize';

const _elementsToClassNames = { "BreastCancer": BreastCancer,
                                "BreastCancerReceptorStatus": BreastCancerReceptorStatus,
                                "EstrogenReceptorStatus": EstrogenReceptorStatus,
                                "HistologicGrade": HistologicGrade,
                                "TNMStage": TNMStage,
                                "T_Stage": T_Stage,
                                "N_Stage": N_Stage,
                                "M_Stage": M_Stage,
                                "Progression": Progression,
                                "ProgesteroneReceptorStatus": ProgesteroneReceptorStatus,
                                "ToxicReactionToTreatment":ToxicReactionToTreatment,
                                "TumorSize" : TumorSize
                              };


export default class ShrOncologyObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
    
}