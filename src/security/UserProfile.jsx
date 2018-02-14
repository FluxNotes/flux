// This class stores user profile information
class UserProfile {
   constructor(name) {
         this._name = name;
   }

   getUserName() {
       return this._name;
   }

   getSuperRole() {
       return "Clinician";
   }
}
export default UserProfile;