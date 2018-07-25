import UserProfile from './UserProfile';

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {

     getUserProfile(userName) {
        return new UserProfile(userName);
    }
}
export default SecurityManager;