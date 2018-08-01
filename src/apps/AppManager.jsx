import FullApp from '../containers/FullApp';
import SlimApp from '../containers/SlimApp';
import LandingPage from '../components/LandingPage';

export default class AppManager {
    constructor() {
        this.apps = [{
                path: '/',
                display: 'Flux Notes™',
                app: LandingPage,
                isExact: true
            },
            {
                path: '/patina',
                shortcuts: ['Disease Status', 'Toxicity', 'Enrollment', 'Unenrolled', 'Deceased'],
                display: 'Flux Notes™ Lite (for PATINA endpoints)',
                app: SlimApp,
                isExact: true,
                shortcutConfigurations: {
                    'Disease Status': {
                        referenceDateEnabled: false
                    },
                    'Toxicity': {
                        gradesToDisplay: [3,4,5],
                        gradesPrompt: ' PATINA only calculates its endpoint based on adverse events of grades 2 through 5; therefore, only those are shown below. ',
                        topAdverseEvents: [
                            'Febrile neutropenia',
                            'Fatigue',
                            'Generalized muscle weakness',
                            'Anemia',
                            'Diarrhea',
                            'Nausea',
                            'Platelet count decreased',
                            'Anorexia',
                            'Constipation',
                            'Bullous dermatitis',
                            'Upper respiratory infection',
                            'Vomiting',
                            'Hot flashes',
                            'Arthralgia',
                            'Osteoporosis',
                            'Fever',
                            'Infusion related reaction',
                            'Headache',
                            'Cough',
                            'Dyspnea'
                        ]
                    }
                }
            },
            {
                path: '/merkelcell',
                shortcuts: ['Disease Status', 'Toxicity', 'Deceased'],
                display: 'Flux Notes™ Lite (for Merkel Cell endpoints)',
                app: SlimApp,
                isExact: true,
                shortcutConfigurations: {
                    'Disease Status': {
                        referenceDateEnabled: false
                    },
                    'Toxicity': {
                        gradesToDisplay: [2,3,4,5],
                        gradesPrompt: '  only calculates its endpoint based on adverse events of grades 2 through 5; therefore, only those are shown below. ',
                        topAdverseEvents: [
                            'Hyperthyroidism',
                            'Headache',
                            'Blurred Vision',
                            'Agitation',
                            'Libido decreased',
                            'Personality change',
                            'Diarrhea',
                            'Colitis',
                            'Abdominal Pain',
                            'Pruritus',
                            'Rash maculo-papular',
                            'Bullous dermatitis',
                            'Mucositis oral',
                            'Bruising',
                            'Generalized muscle weakness',
                            'Peripheral sensory neuropathy',
                            'Dyspnea'
                        ]
                    }
                }
            },
            {
                path: '/demo1',
                display: 'Flux Notes™',
                app: FullApp,
                isExact: true,
                dataSource: 'HardCodedReadOnlyDataSource',
                shortcuts: []
            },
            {
                path: '/demo2',
                display: 'Flux Notes™',
                app: FullApp,
                isExact: true,
                dataSource: 'HardCodedReadOnlyDataSource',
                patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7e',
                shortcuts: []
            },
            {
                path: '/demo3',
                display: 'Flux Notes™',
                app: FullApp,
                isExact: true,
                dataSource: 'HardCodedReadOnlyDataSource',
                patientId: 'urn:x-person:123456',
                shortcuts: []
            },
            {
                path: '/demo4',
                display: 'Flux Notes™',
                app: FullApp,
                isExact: true,
                dataSource: 'HardCodedSarcomaPatient',
                patientId: 'urn:x-person:123456',
                shortcuts: []
            },            
            {
                path: '/p2',
                display: 'Flux Notes™',
                app: FullApp,
                isExact: false,
                dataSource: 'RestApiDataSource',
                shortcuts: []
            },
            {
                path: '/p3',
                display: 'Flux Notes™',
                app: FullApp,
                isExact: false,
                dataSource: 'FHIRApiDataSource',
                shortcuts: []
            }
        ];
    }

    getSupportedApps() {
        return this.apps;
    }
}
