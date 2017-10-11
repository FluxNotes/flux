import FullApp from './FullApp';
import SlimApp from './SlimApp';

class ViewManager {
    constructor() {
        this.views = [{
                path: '/patina',
                shortcuts: ['Disease Status', 'Toxicity', 'Clinical Trial'],
                display: 'Flux Notes Lite (for PATINA endpoints)',
                app: SlimApp,
                shortcutConfigurations: {
                    'Disease Status': { referenceDateEnabled: false }
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