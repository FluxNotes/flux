//import Lang from 'lodash'
/*import ProgressionCreator from './ProgressionCreator';
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
import ProgressionAsOfDateCreator from './ProgressionAsOfDateCreator';
import ProgressionReferenceDateCreator from './ProgressionReferenceDateCreator';
import DateCreator from './DateCreator';
import ToxicityAdverseEventCreator from './ToxicityAdverseEventCreator';
import ToxicityGradeCreator from './ToxicityGradeCreator';
import ToxicityAttributionCreator from './ToxicityAttributionCreator';
import DeceasedCreator from './DeceasedCreator';
import ClinicalTrialCreator from './ClinicalTrialCreator';
import ClinicalTrialTitleCreator from './ClinicalTrialTitleCreator';
import ClinicalTrialEnrollmentDateCreator from './ClinicalTrialEnrollmentDateCreator';
import ClinicalTrialEndDateCreator from './ClinicalTrialEndDateCreator';*/
import CreatorBase from './CreatorBase';
import shortcutMetadata from './Shortcuts.json';
import Lang from 'lodash';

function addTriggerForKey(trigger) {
    this.shortcutMap[trigger.name.toLowerCase()] = this.shortcuts[this.currentShortcut];
}

class ShortcutManager {
/*    shortcuts = {
        '#disease status': ProgressionCreator,
        '#progression-status': ProgressionStatusCreator,
        '#progression-reasons': ProgressionReasonsCreator,
        '#progression-as-of': ProgressionAsOfDateCreator,
        '#progression-reference': ProgressionReferenceDateCreator,
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
        '#staging-m': StagingMCreator,
        '#clinical trial': ClinicalTrialCreator,
        '#title': ClinicalTrialTitleCreator,
        '#enrolled on': ClinicalTrialEnrollmentDateCreator,
        '#ended on': ClinicalTrialEndDateCreator,
        '#deceased': DeceasedCreator
    };*/

    shortcutClasses = [];
    shortcutMap = {};
    
/*    getAllShortcutClasses() {
        return this.shortcutClasses;
    }*/
    getAllStringTriggers() {
        
    }
    
    constructor(shortcutList) {
        this.shortcutsToSupportList = shortcutList;
        this.loadShortcutMetadata(shortcutList, shortcutMetadata);
        /*
        for (var key in this.shortcuts) {
            this.shortcutClasses.push(this.shortcuts[key]);
            const triggers = this.shortcuts[key].getStringTriggers();
            this.currentShortcut = key;
            triggers.forEach(addTriggerForKey, this);
        }*/
    }
    
    getSupportedShortcuts() {
        return this.shortcutsToSupportList;
    }
    
    createShortcut(shortcutC, trigger, onUpdate, object) {
/*        if (!Lang.includes(this.shortcutsToSupportList, shortcutType.toLowerCase())) {
            throw new Error("Invalid shortcut type: " + shortcutType);
        }*/
        console.log(trigger.toLowerCase());
        console.log(this.shortcutMap);
        let className;
        if (!Lang.isNull(shortcutC)) {
            className = shortcutC;
            return new className(onUpdate, object);
        } else {
            const metadata = this.shortcutMap[trigger.toLowerCase()];
            className = metadata["type"];
            console.log(className);
            return new CreatorBase(onUpdate, metadata);
            //return new className(onUpdate, metadata);
        }
    }
    
    loadShortcutMetadata(shortcutList, shortcutMetadata) {
        //console.log(shortcutMetadata);
        this.childShortcuts = {};
        this.shortcuts = {};
        shortcutMetadata.forEach((item) => {
            console.log(item["name"] + " ==> " + item["id"])
            this.shortcuts[item["name"]] = item;

            // add as child to its known parent
            if (item["knownParentContexts"]) {
                const parent = item["knownParentContexts"];
                let list = this.childShortcuts[parent];
                if (Lang.isUndefined(list)) {
                    list = [];
                    this.childShortcuts[parent] = list;
                }
                if (!list.includes(item.name)) {
                    list.push(item.name);
                }
            }
            
            // add known children to it
            if (item["valueObjectAttributes"]) {
                let list = this.childShortcuts[item.name];
                if (Lang.isUndefined(list)) {
                    list = [];
                    this.childShortcuts[item.name] = list;
                }
                let voas = item["valueObjectAttributes"];
                voas.forEach((voa) => {
                    if (!list.includes(voa["childShortcut"])) {
                        list.push(voa["childShortcut"]);
                    }
                });
            }
            
            // build up trigger to shortcut mapping
            const triggers = item["stringTriggers"];
            if (Lang.isArray(triggers)) {
                this.currentShortcut = item["name"];
                triggers.forEach(addTriggerForKey, this);
                //this.shortcutClasses.push(item["id"]);
            } else {
                console.log("don't support function-based trigger lists yet");
            }
        });
        console.log(this.childShortcuts);
    }
    
    getValidChildShortcutsInContext(context) {
        const currentContextName = context.getName();
        console.log(currentContextName);
        return this.childShortcuts[currentContextName];
        //return context.getValidChildShortcuts();
    }
}

export default ShortcutManager;