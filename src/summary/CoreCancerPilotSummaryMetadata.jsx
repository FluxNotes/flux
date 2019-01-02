import SummaryMetadata from './SummaryMetadata';
import DefaultCoreCancerPilotMetadata from './metadata/DefaultCoreCancerPilotMetadata';
import McodeMetadata from './metadata/McodeMetadata';
import FluxCancerDisorder from '../model/mcode/FluxCancerDisorder';
import FunctionMatcher from './matchers/FunctionMatcher';
import AlwaysMatcher from './matchers/AlwaysMatcher';

export default class CoreCancerPilotSummaryMetadata extends SummaryMetadata {
    constructor(setForceRefresh) {
        super();
        this.setForceRefresh = setForceRefresh;

        this.hardCodedMetadata = [
            { "enabled": true, "type": FunctionMatcher, "matchFunction": (condition) => condition instanceof FluxCancerDisorder, "metadata": McodeMetadata },
            { "enabled": true, "type": AlwaysMatcher, "metadata": DefaultCoreCancerPilotMetadata },
        ];
    }
}

