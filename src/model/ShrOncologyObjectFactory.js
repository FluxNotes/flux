import BreastCancer from './shr/oncology/BreastCancer';
import TNMStage from './shr/oncology/TNMStage';
import T_Stage from './shr/oncology/T_Stage';
import N_Stage from './shr/oncology/N_Stage';
import M_Stage from './shr/oncology/M_Stage';
import Progression from './shr/oncology/Progression';
import ToxicReactionToTreatment from './shr/oncology/ToxicReactionToTreatment';

_elementsToClassNames = {   "BreastCancer": BreastCancer,
                            "TNMStage": TNMStage,
                            "T_Stage": T_Stage,
                            "N_Stage": N_Stage,
                            "M_Stage": M_Stage,
                            "Progression": Progression,
                            "ToxicReactionToTreatment":ToxicReactionToTreatment};


export default class ShrOncologyObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
    
}