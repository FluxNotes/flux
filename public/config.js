CONFIG = {
    basename: '/',
    apps: [{
        path: '/',
        display: 'Flux Notes™',
        app: "LandingPage",
        isExact: true
    },
    {
        path: '/launchcompass',
        display: 'Compass',
        app: "LaunchPage",
        isExact: true,
        launchContext: {
            client: {
                client_id: '6c12dff4-24e7-4475-a742-b08972c4ea27',
                scope: 'patient/*.read user/*.* openid profile',
                // note: the redirect_uri below may need to change in different environments.
                // a relative URL (ex. /smart or ../smart) won't work in IE
                redirect_uri: 'http://localhost:3000/smartcompass'
            },
            // uncomment the 'server' field below
            // to override the iss parameter from the SMART launch process
            // (aka, the server listed here can be used as a 'shim')
            // server: "http://localhost:3001/1_0_2"
        }
    },
    {
        path: '/smartcompass',
        display: 'Compass™',
        app: "SmartCompassApp",
        isExact: true,
        dataSourceProps: {
            resourceTypes: ['Patient', 'Condition', 'Encounter', 'MedicationOrder', 'Observation', 'Organization', 'Practitioner', 'Procedure']
        },
        logoObject: {
            path: './compass-logo.png',
            altText: 'Compass logo',
            width: '45px',
            height: '45px'
        },
        dataSource: 'GenericSmartOnFhirDstu2DataSource',
        shortcuts: [],
        dataSourceProps: {
            mapper: 'syntheaToV09'
        }
    },
    {
        path: '/launch',
        display: 'Flux',
        app: "LaunchPage",
        isExact: true,
        launchContext: {
            client: {
                client_id: '6c12dff4-24e7-4475-a742-b08972c4ea27',
                scope: 'patient/*.read user/*.* openid profile',
                // note: the redirect_uri below may need to change in different environments.
                // a relative URL (ex. /smart or ../smart) won't work in IE
                redirect_uri: 'http://localhost:3000/smart'
            },
            // uncomment the 'server' field below
            // to override the iss parameter from the SMART launch process
            // (aka, the server listed here can be used as a 'shim')
            // server: "http://localhost:3001/1_0_2"
        }
    },
    {
        path: '/smart',
        display: 'Flux Notes™',
        app: "SmartFullApp",
        isExact: true,
        dataSource: 'McodeV09SmartOnFhirDataSource',
        shortcuts: []
    },
    {
        path: '/launchsynthea',
        display: 'Flux',
        app: "LaunchPage",
        isExact: true,
        launchContext: {
            client: {
                client_id: '6c12dff4-24e7-4475-a742-b08972c4ea27',
                scope: 'patient/*.read user/*.* openid profile',
                // note: the redirect_uri below may need to change in different environments.
                // a relative URL (ex. /smart or ../smart) won't work in IE
                redirect_uri: 'http://localhost:3000/synthea'
            },
            // uncomment the 'server' field below
            // to override the iss parameter from the SMART launch process
            // (aka, the server listed here can be used as a 'shim')
            // server: "http://localhost:3001/1_0_2"
        }
    },
    {
        path: '/synthea',
        display: 'Flux Notes™',
        app: "SmartFullApp",
        isExact: true,
        dataSource: 'GenericSmartOnFhirDstu2DataSource',
        shortcuts: [],
        dataSourceProps: {
            mapper: 'syntheaToV09'
        }
    },
    {
        path: '/patina',
        shortcuts: ['Disease Status', 'Toxicity', 'Enrollment', 'Unenrolled', 'Deceased'],
        display: 'Flux Notes™ Lite (for PATINA endpoints)',
        app: "SlimApp",
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
        app: "SlimApp",
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
        path: '/ccp',
        display: 'Compass™',
        app: "CompassApp",
        isExact: true,
        dataSource: 'HardCodedMcodeV05DataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7g',
        logoObject: {
            path: './compass-logo.png',
            altText: 'Compass logo',
            width: '45px',
            height: '45px'
        }
    },
    {
        path: '/ccp2',
        display: 'Compass™',
        app: "CompassApp",
        isExact: true,
        dataSource: 'HardCodedMcodeV05DataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7f',
        logoObject: {
            path: './compass-logo.png',
            altText: 'Compass logo',
            width: '45px',
            height: '45px'
        }
    },
    {
        path: '/demo1',
        display: 'Flux Notes™',
        app: "FullApp",
        isExact: true,
        dataSource: 'HardCodedMcodeV05DataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7d',
        shortcuts: []
    },
    {
        path: '/demo2',
        display: 'Flux Notes™',
        app: "FullApp",
        isExact: true,
        dataSource: 'HardCodedMcodeV05DataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7e',
        shortcuts: []
    },
    {
        path: '/demo3',
        display: 'Flux Notes™',
        app: "FullApp",
        isExact: true,
        dataSource: 'HardCodedMcodeV05DataSource',
        patientId: 'urn:x-person:123456',
        shortcuts: []
    },
    {
        path: '/pilot1',
        display: 'Flux Notes™',
        app: "FullApp",
        isExact: true,
        dataSource: 'HardCodedMcodeV05DataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7f',
        clinicianId: '1234567890',
        shortcuts: []
    },
    {
        path: '/pilot1np',
        display: 'Flux Notes™',
        app: "FullApp",
        isExact: true,
        dataSource: 'HardCodedMcodeV05DataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7f',
        clinicianId: '1234567891',
        shortcuts: []
    },
    {
        path: '/poc',
        display: 'Flux Notes™',
        app: "PointOfCareApp",
        isExact: true,
        dataSource: 'HardcodedTabletMcodeV01DataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7f',
        clinicianId: '1234567890',
        shortcuts: []
    },
    {
        path: '/p2',
        display: 'Flux Notes™',
        app: "FullApp",
        isExact: false,
        dataSource: 'RestApiDataSource',
        patientId: '788dcbc3-ed18-470c-89ef-35ff91854c7d',
        shortcuts: []
    },
    {
        path: '/p3',
        display: 'Flux Notes™',
        app: "FullApp",
        isExact: false,
        dataSource: 'FHIRApiDataSource',
        shortcuts: []
    }
    ],

    services: {
        outcomes: {
            "name": 'StaticOutcomesService',
            "timescale": ["1","3","5"],
            "filters": [
                "shr.core.DateOfBirth",
                "shr.core.DateOfDiagnosis",
                "shr.core.Race",
                "shr.core.BirthSex",
                "onco.core.TumorMarkerTest",
                "onco.core.TNMClinicalPrimaryTumorCategory",
                "onco.core.TNMClinicalRegionalNodesCategory",
                "onco.core.TNMClinicalDistantMetastasesCategory",
            ]}
    }
}
