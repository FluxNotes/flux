import UserProfile from './UserProfile';

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {

     getUserProfile(name) {
        return new UserProfile(name);
    }
}
export default SecurityManager;