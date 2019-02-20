import ToxicAdverseDrugReaction from '../shr/adverse/ToxicAdverseDrugReaction';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import Reference from '../Reference';
import AdverseEventCondition from '../shr/adverse/AdverseEventCondition';
import Seriousness from '../shr/adverse/Seriousness';
import lookup from '../../lib/toxicreaction_lookup.jsx';
import Type from '../shr/core/Type';
import CausalAttribution from '../shr/adverse/CausalAttribution';
import CauseCategory from '../shr/adverse/CauseCategory';
import FluxEntry from '../base/FluxEntry';

class FluxToxicAdverseDrugReaction extends FluxEntry {
    constructor(json, patientRecord) {
        super();
        this._entry = this._toxicAdverseDrugReaction = ToxicAdverseDrugReaction.fromJSON(json);
        if (!this._toxicAdverseDrugReaction.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/adverse/ToxicAdverseDrugReaction';
            this._toxicAdverseDrugReaction.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._toxicAdverseDrugReaction.entryInfo;
    }

    get metadata() {
        return this._toxicAdverseDrugReaction.metadata;
    }

    set metadata(metadata) {
        this._toxicAdverseDrugReaction.metadata = metadata;
    }

    get adverseEventCondition() {
        if (!this._toxicAdverseDrugReaction.adverseEventCondition || this._toxicAdverseDrugReaction.adverseEventCondition.length === 0) return null;
        return this._toxicAdverseDrugReaction.adverseEventCondition[0];
    }

    set adverseEventCondition(val) {
        this._toxicAdverseDrugReaction.adverseEventCondition = [val];
    }

    setAdverseEventCondition(obj) {
        if (!obj) {
            this.adverseEventCondition = null;
        } else {
            let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
            let adverseEventCondition = new AdverseEventCondition();
            adverseEventCondition.conditionPresentAssertion = ref;
            this.adverseEventCondition = adverseEventCondition;
        }
    }

    get seriousness() {
        if (!this._toxicAdverseDrugReaction.seriousness) return null;
        return this._toxicAdverseDrugReaction.seriousness.value.coding[0].displayText.value;
    }

    set seriousness(grade) {
        const seriousness = new Seriousness();
        seriousness.value = lookup.getAdverseEventGradeCodeableConcept(grade);
        this._toxicAdverseDrugReaction.seriousness = seriousness;
    }

    get type() {
        return !this._toxicAdverseDrugReaction.type ? null : this._toxicAdverseDrugReaction.type.value.coding[0].displayText.value;
    }

    set type(adverseEvent) {
        const type = new Type();
        type.value = lookup.getAdverseEventCodeableConcept(adverseEvent);
        this._toxicAdverseDrugReaction.type = type;
    }

    get causalAttribution() {
        return !this._toxicAdverseDrugReaction.causalAttribution ? null : this._toxicAdverseDrugReaction.causalAttribution[0].causeCategory.value.coding[0].displayText.value;
    }

    set causalAttribution(attribution) {
        const causalAttribution = new CausalAttribution();
        causalAttribution.causeCategory = new CauseCategory();
        causalAttribution.causeCategory.value = lookup.getAttributionCodeableConcept(attribution);
        this._toxicAdverseDrugReaction.causalAttribution = [causalAttribution];
    }

    toJSON() {
        return this._toxicAdverseDrugReaction.toJSON();
    }
}

export default FluxToxicAdverseDrugReaction;
