import Injury from '../shr/condition/Injury';
import Lang from 'lodash';

class FluxInjury extends Injury {
    get diagnosisDate() {
        if (Lang.isUndefined(this.whenClinicallyRecognized.value.value.value.timePeriodStart)) return this.whenClinicallyRecognized.value.value.value;
        return this.whenClinicallyRecognized.value.value.value.timePeriodStart.value;
    }
}

export default FluxInjury;