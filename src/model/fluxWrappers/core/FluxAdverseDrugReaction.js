import Reference from '../../Reference';
import * as lookup from '../../../lib/toxicreaction_lookup.jsx';
import Type from '../../shr/core/Type';
import FluxEntry from '../base/FluxEntry';
import AdverseDrugReaction from '../../shr/core/AdverseDrugReaction';
import Seriousness from '../../shr/core/Seriousness';
import AdverseEventCondition from '../../shr/core/AdverseEventCondition';
import CausalAttribution from '../../shr/core/CausalAttribution';
import CauseCategory from '../../shr/core/CauseCategory';

class FluxAdverseDrugReaction extends FluxEntry {
    constructor(json, patientRecord) {
        super();
        this._entry = this._adverseDrugReaction = AdverseDrugReaction.fromJSON(json);
        if (!this._adverseDrugReaction.entryInfo) {
            this._adverseDrugReaction.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/shr/core/AdverseDrugReaction');
        }
        this._patientRecord = patientRecord;
    }

    get entryInfo() {
        return this._adverseDrugReaction.entryInfo;
    }

    get metadata() {
        return this._adverseDrugReaction.metadata;
    }

    set metadata(metadata) {
        this._adverseDrugReaction.metadata = metadata;
    }

    get adverseEventCondition() {
        if (!this._adverseDrugReaction.adverseEventCondition || this._adverseDrugReaction.adverseEventCondition.length === 0) return null;
        return this._adverseDrugReaction.adverseEventCondition[0];
    }

    set adverseEventCondition(val) {
        this._adverseDrugReaction.adverseEventCondition = [val];
    }

    setAdverseEventCondition(obj) {
        if (!obj) {
            this.adverseEventCondition = null;
        } else {
            const ref = new Reference(obj.entryInfo.shrId.id, obj.entryInfo.entryId.id, obj.entryInfo.entryType.value);
            const adverseEventCondition = new AdverseEventCondition();
            adverseEventCondition.condition = ref;
            this.adverseEventCondition = adverseEventCondition;
        }
    }

    get seriousness() {
        if (!this._adverseDrugReaction.seriousness) return null;
        return this._adverseDrugReaction.seriousness.value.coding[0].displayText.value;
    }

    set seriousness(grade) {
        const seriousness = new Seriousness();
        seriousness.value = lookup.getAdverseEventGradeCodeableConcept(grade);
        this._adverseDrugReaction.seriousness = seriousness;
    }

    get type() {
        return !this._adverseDrugReaction.type ? null : this._adverseDrugReaction.type.value.coding[0].displayText.value;
    }

    set type(adverseEvent) {
        const type = new Type();
        type.value = lookup.getAdverseEventCodeableConcept(adverseEvent);
        this._adverseDrugReaction.type = type;
    }

    get causeCategory() {
        return this._adverseDrugReaction.causalAttribution && this._adverseDrugReaction.causalAttribution.length > 0 && this._adverseDrugReaction.causalAttribution[0].causeCategory ? this._adverseDrugReaction.causalAttribution[0].causeCategory.value.coding[0].displayText.value : null;
    }

    set causeCategory(attribution) {
        if (!this._adverseDrugReaction.causalAttribution || this._adverseDrugReaction.causalAttribution.length === 0) {
            this._adverseDrugReaction.causalAttribution = [new CausalAttribution()];
        }
        const newCauseCategory = new CauseCategory();
        newCauseCategory.value = lookup.getAttributionCodeableConcept(attribution);
        this._adverseDrugReaction.causalAttribution[0].causeCategory = newCauseCategory;
    }

    get medicationAttribution() {
        return this._adverseDrugReaction.causalAttribution && this._adverseDrugReaction.causalAttribution.length > 0 && this._adverseDrugReaction.causalAttribution[0].possibleCause ? this._adverseDrugReaction.causalAttribution[0].possibleCause.value : null;
    }

    set medicationAttribution(medication) {
        if (medication) {
            const medicationReference = this._patientRecord.createEntryReferenceTo(medication);
            if (!this._adverseDrugReaction.causalAttribution || this._adverseDrugReaction.causalAttribution.length === 0) {
                this._adverseDrugReaction.causalAttribution = [new CausalAttribution()];
            }
            const newPossibleCause = new PossibleCause();
            newPossibleCause.value = medicationReference;
            this._adverseDrugReaction.causalAttribution[0].possibleCause = newPossibleCause;
        } else {
            if (this._adverseDrugReaction.causalAttribution && this._adverseDrugReaction.causalAttribution.length > 0 && this._adverseDrugReaction.causalAttribution[0].possibleCause) this._adverseDrugReaction.causalAttribution[0].possibleCause.value = null;
        }
    }

    toJSON() {
        return this._adverseDrugReaction.toJSON();
    }
}

export default FluxAdverseDrugReaction;
