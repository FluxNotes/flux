//import Lang from 'lodash'
import ProgressionCreator from './ProgressionCreator';
import StagingCreator from './StagingCreator';
import ToxicityCreator from './ToxicityCreator';
import ConditionInserter from './ConditionInserter';
import NameInserter from './NameInserter';
import AgeInserter from './AgeInserter';
import GenderInserter from './GenderInserter';
import PatientInserter from './PatientInserter';
import DateOfBirthInserter from './DateOfBirthInserter';
import StageInserter from './StageInserter';
import StagingTCreator from './StagingTCreator';
import StagingNCreator from './StagingNCreator';
import StagingMCreator from './StagingMCreator';
import ProgressionStatusCreator from './ProgressionStatusCreator';
import ProgressionReasonsCreator from './ProgressionReasonsCreator';
import DateCreator from './DateCreator';
import ToxicityAdverseEventCreator from './ToxicityAdverseEventCreator';
import ToxicityGradeCreator from './ToxicityGradeCreator';
import ToxicityAttributionCreator from './ToxicityAttributionCreator';

function addTriggerForKey(trigger) {
    this.shortcutMap[trigger.name.toLowerCase()] = this.shortcuts[this.currentShortcut];
}

class ShortcutManager {
    shortcuts = {
        '#progression': ProgressionCreator,
        '#progression-status': ProgressionStatusCreator,
        '#progression-reasons': ProgressionReasonsCreator,
        '#staging': StagingCreator,
        '#toxicity': ToxicityCreator,
        '#toxicity-adverse-event': ToxicityAdverseEventCreator,
        '#toxicity-grade': ToxicityGradeCreator,
        '#toxicity-attribution': ToxicityAttributionCreator,
        '#date': DateCreator,
        '@condition': ConditionInserter,
        '@name': NameInserter,
        '@age': AgeInserter,
        '@gender': GenderInserter,
        '@patient': PatientInserter,
        '@dateofbirth': DateOfBirthInserter,
        '@stage': StageInserter,
        '#staging-t': StagingTCreator,
        '#staging-n': StagingNCreator,
        '#staging-m': StagingMCreator
    };

    shortcutClasses = [];
    shortcutMap = {};
    
    getAllShortcutClasses() {
        return this.shortcutClasses;
    }
    
    constructor(shortcutList) {
        this.shortcutsToSupportList = shortcutList;
        for (var key in this.shortcuts) {
            this.shortcutClasses.push(this.shortcuts[key]);
            const triggers = this.shortcuts[key].getTriggers();
            this.currentShortcut = key;
            triggers.forEach(addTriggerForKey, this);
        }        
    }
    
    getSupportedShortcuts() {
        return this.shortcutsToSupportList;
    }
    
    createShortcut(trigger, onUpdate, object) {
/*        if (!Lang.includes(this.shortcutsToSupportList, shortcutType.toLowerCase())) {
            throw new Error("Invalid shortcut type: " + shortcutType);
        }*/
        let className = this.shortcutMap[trigger.toLowerCase()];
        return new className(onUpdate, object);
    }
}

export default ShortcutManager;