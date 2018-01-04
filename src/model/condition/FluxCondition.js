import Condition from '../shr/condition/Condition';
import Lang from 'lodash';

class FluxCondition extends Condition {
    get diagnosisDate() {
        if (Lang.isUndefined(this.whenClinicallyRecognized.value.value.value.timePeriodStart)) return this.whenClinicallyRecognized.value.value.value;
        return this.whenClinicallyRecognized.value.value.value.timePeriodStart.value;
    }
}

export default FluxCondition;