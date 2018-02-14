import UserProfile from './UserProfile';

// Security Manager will handle all security related functionality of the app (authentication, authorization, etc)
class SecurityManager {

     getUserProfile() {
        return new UserProfile("Dr. X123 Y987");
    }
}
export default SecurityManager;