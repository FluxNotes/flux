import FullApp from './FullApp';
import SlimApp from './SlimApp';

class ViewManager {
    constructor() {
        this.views = [{
                path: '/patina',
                shortcuts: ['Disease Status', 'Toxicity', 'Clinical Trial', 'Deceased', 'Staging'],
                display: 'Flux Notes Lite (for PATINA endpoints)',
                app: SlimApp,
                shortcutConfigurations: {
                    'Disease Status': { referenceDateEnabled: true }
                },
                isExact: true
            }, {
                path: '/patient',
                display: 'Flux Notes',
                app: FullApp,
                dataSource: 'HardCodedReadOnlyDataSource',
                isExact: true
            }
        ];
    }
    
    getSupportedViews() {
        return this.views;
    }
}

export default ViewManager;