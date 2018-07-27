import UserProfile from './UserProfile';

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {

     getUserProfile(user) {
        return new UserProfile(user);
    }
}
export default SecurityManager;