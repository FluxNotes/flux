import SummaryMetadata from './SummaryMetadata';
import DefaultCompassAppMetadata from './metadata/DefaultCompassAppMetadata';
import McodeMetadata from './metadata/McodeMetadata';
import FluxCancerDisorderPresent from '../model/oncocore/FluxCancerDisorderPresent';
import FunctionMatcher from './matchers/FunctionMatcher';
import AlwaysMatcher from './matchers/AlwaysMatcher';

export default class CompassAppSummaryMetadata extends SummaryMetadata {
    constructor(setForceRefresh) {
        super();
        this.setForceRefresh = setForceRefresh;

        this.hardCodedMetadata = [
            { "enabled": true, "type": FunctionMatcher, "matchFunction": (condition) => condition instanceof FluxCancerDisorderPresent, "metadata": McodeMetadata },
            { "enabled": true, "type": AlwaysMatcher, "metadata": DefaultCompassAppMetadata },
        ];
    }
}

