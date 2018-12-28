import SummaryMetadata from './SummaryMetadata';
import DefaultCoreCancerPilotMetadata from './metadata/DefaultCoreCancerPilotMetadata';
//import SarcomaCoreCancerPilotMetadata from './metadata/SarcomaCoreCancerPilotMetadata';
import McodeMetadata from './metadata/McodeMetadata';
import FluxCancerDisorder from '../model/mcode/FluxCancerDisorder';
import FunctionMatcher from './matchers/FunctionMatcher';
//import StringMatcher from './matchers/StringMatcher';
import AlwaysMatcher from './matchers/AlwaysMatcher';

export default class CoreCancerPilotSummaryMetadata extends SummaryMetadata {
    constructor(setForceRefresh) {
        super();
        this.setForceRefresh = setForceRefresh;

        this.hardCodedMetadata = [
//            { "enabled": true, "type": StringMatcher, "matchString": "http://snomed.info/sct/420120006", "metadata": SarcomaCoreCancerPilotMetadata },
            { "enabled": true, "type": FunctionMatcher, "matchFunction": (condition) => condition instanceof FluxCancerDisorder, "metadata": McodeMetadata },
            { "enabled": true, "type": AlwaysMatcher, "metadata": DefaultCoreCancerPilotMetadata },
        ];
    }
}

