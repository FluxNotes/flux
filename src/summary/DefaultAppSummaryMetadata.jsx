import SummaryMetadata from './SummaryMetadata';
import DefaultAppMetadata from './metadata/DefaultAppMetadata';
import AlwaysMatcher from './matchers/AlwaysMatcher';

export default class DefaultAppSummaryMetadata extends SummaryMetadata {
    constructor(setForceRefresh) {
        super();
        this.setForceRefresh = setForceRefresh;

        this.hardCodedMetadata = [
            { "enabled": true, "type": AlwaysMatcher, "metadata": DefaultAppMetadata },
        ];
    }
}

