import UserProfile from './UserProfile';

const defaultUser = {
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
                    { display: 'medical oncologist'}
                ]
            },
            specialty: [
                {
                    coding: [
                        { display: 'oncology'}
                    ]
                }
            ]
        }
    ],
    serviceProvider: "MCI",
}

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {    

    getUserProfile(user) {
        return new UserProfile(user);
    }

    getDefaultUser() {
        return new UserProfile(defaultUser);
    }
}
export default SecurityManager;