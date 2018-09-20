import UserProfile from './UserProfile';
import Lang from 'lodash';

const demoUsers = [
    {
        name: {
            given: ["Mona341"],
            family: ["Brown483"],
            suffix: ["Dr."]
        },
        id: "1234567890",
        resourceType: "Doctor",
        practitionerRole: [
            {   
                role: {
                    coding: [
                        { code: 'doctor', display: 'Doctor'}
                    ]
                },
                specialty: [
                    {
                        coding: [
                            { code: '394593009', display: 'Medical oncology'}
                        ]
                    }
                ]
            }
        ],
        serviceProvider: "MCI",
    },
    {
        name: {
            given: ["L"],
            family: ["Fredricks113"]
        },
        id: "1234567891",
        resourceType: "Doctor",
        practitionerRole: [
            {   
                role: {
                    coding: [
                        { code: 'nurse', display: 'Nurse'}
                    ]
                },
                specialty: [
                    {
                        coding: [
                            { code: '394593009', display: 'Medical oncology'}
                        ]
                    }
                ]
            }
        ],
        serviceProvider: "MCI",
    }
];

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {    

    getUserProfile(user) {
        return new UserProfile(user);
    }

    getDemoUser(id) {
        if (Lang.isUndefined(id)) {
            id = demoUsers[0].id;
        }
        return new UserProfile(demoUsers.find(u => {
            return u.id === id;
        }));
    }
}
export default SecurityManager;