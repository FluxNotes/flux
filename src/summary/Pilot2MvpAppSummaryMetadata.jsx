import SummaryMetadata from './SummaryMetadata';
import DefaultMetadata from './metadata/DefaultMetadata';
import Pilot2MvpMetadata from './metadata/Pilot2MvpMetadata';
import FluxCancerCondition from '../model/fluxWrappers/onco/core/FluxCancerCondition';
import FunctionMatcher from './matchers/FunctionMatcher';
import AlwaysMatcher from './matchers/AlwaysMatcher';

export default class Pilot2MvpAppSummaryMetadata extends SummaryMetadata {
    constructor(setForceRefresh) {
        super();
        this.setForceRefresh = setForceRefresh;

        this.hardCodedMetadata = [
            { "enabled": true, "type": FunctionMatcher, "matchFunction": (condition) => condition instanceof FluxCancerCondition, "metadata": Pilot2MvpMetadata },
            { "enabled": true, "type": AlwaysMatcher, "metadata": DefaultMetadata },
        ];
    }
}

