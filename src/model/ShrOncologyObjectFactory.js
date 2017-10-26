class ShrOncologyObjectFactory {
    createInstance(elementName) {
        return new _elementsToClassNames[elementName]();
    }
    
    _elementsToClassNames = {   "BreastCancer": BreastCancer,
                                "TNMStage": TNMStage,
                                "T_Stage": T_Stage,
                                "N_Stage": N_Stage,
                                "M_Stage": M_Stage,
                                "Progression": Progression,
                                "ToxicReactionToTreatment":ToxicReactionToTreatment};
}