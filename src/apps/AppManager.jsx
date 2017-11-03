import FullApp from './FullApp';
import SlimApp from './SlimApp';
import LandingPage from './LandingPage';

class AppManager {
    constructor() {
        this.apps = [{
                path: '/',
                display: 'Flux Notes',
                app: LandingPage,
                isExact: true
            },
            {
                path: '/patina',
                shortcuts: ['Disease Status', 'Toxicity', 'Clinical Trial', 'Deceased'],
                display: 'Flux Notes Lite (for PATINA endpoints)',
                app: SlimApp,
                shortcutConfigurations: {
                    'Disease Status': { referenceDateEnabled: false },
                    'Toxicity': {   gradesToDisplay: [2,3,4,5],
                                    gradesPrompt: ' PATINA only calculates its endpoint based on adverse events of grades 2 through 5; therefore, only those are shown below. ' }
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
    
    getSupportedApps() {
        return this.apps;
    }
}

export default AppManager;