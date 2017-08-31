import FullApp from './FullApp';
import SlimApp from './SlimApp';

class ViewManager {
    constructor() {
        this.views = [{
                path: '/',
                display: 'Flux Notes Lite',
                app: SlimApp,
                isExact: true
            }, {
                path: '/patient',
                display: 'Flux Notes Patient View',
                app: FullApp,
                isExact: false
            }
        ];
    }
    
    getSupportedViews() {
        return this.views;
    }
}

export default ViewManager;