import SummaryMetadata from './SummaryMetadata';
import DefaultCompassAppMetadata from './metadata/DefaultCompassAppMetadata';
import McodeMetadata from './metadata/McodeMetadata';
import FluxCancerCondition from '../model/fluxWrappers/onco/core/FluxCancerCondition';
import FunctionMatcher from './matchers/FunctionMatcher';
import AlwaysMatcher from './matchers/AlwaysMatcher';

export default class CompassAppSummaryMetadata extends SummaryMetadata {
    constructor(setForceRefresh) {
        super();
        this.setForceRefresh = setForceRefresh;

        this.hardCodedMetadata = [
            { "enabled": true, "type": FunctionMatcher, "matchFunction": (condition) => condition instanceof FluxCancerCondition, "metadata": McodeMetadata },
            { "enabled": true, "type": AlwaysMatcher, "metadata": DefaultCompassAppMetadata },
        ];
    }
}

