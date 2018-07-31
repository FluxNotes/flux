import UserProfile from './UserProfile';

const defaultUser = {
    name: {
        given: ["123"],
        family: ["XYZ"],
    },
    id: "1234567890",
    resourceType: "Doctor"
}

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {    

     getUserProfile(user) {
        return new UserProfile(user);
    }

    getUser() {
        return new UserProfile(defaultUser);
    }
}
export default SecurityManager;