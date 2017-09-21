import FullApp from './FullApp';
import SlimApp from './SlimApp';

class ViewManager {
    constructor() {
        this.views = [{
                path: '/patina',
                shortcuts: ['Disease Status', 'Toxicity'],
                display: 'Flux Notes Lite (for PATINA endpoints)',
                app: SlimApp,
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