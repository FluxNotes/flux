import FullApp from './FullApp';
import SlimApp from './SlimApp';

class ViewManager {
    constructor() {
        this.views = [{
                path: '/patina',
                shortcuts: ['Disease Status', 'Toxicity'],
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
                isExact: true
            }
        ];
    }
    
    getSupportedViews() {
        return this.views;
    }
}

export default ViewManager;