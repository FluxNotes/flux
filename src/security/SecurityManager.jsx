import UserProfile from './UserProfile';

const defaultUser = {
    name: {
        given: ["X123"],
        family: ["Y987"],
        suffix: ["Dr."]
    },
    id: "1234567890",
    resourceType: "Doctor"
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