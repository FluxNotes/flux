// This class stores user profile information
class UserProfile {
   constructor(user) {
       this._name = this.setUserName(user.name);
       this._roleType = user.resourceType;
       this._id = user.id;
       this._role = this.setRole(user.practionerRole);
       this._speciality = this.setSpecialty(user.practionerRole);
   }

   setUserName(name) {
        return (`${name.given[0]} ${name.family[0]}`)
    }

    // Some users do not have the practionerRole object, meaning they do not have a role or speciality specified
    
    setRole(practionerRole) {
        if (practionerRole) {
            return practionerRole[0].role.coding[0].display;
        }
    }

    setSpecialty(practionerRole) {
        if (practionerRole) {
            return practionerRole[0].specialization.coding[0].display;
        }
    }

    getSuperRole() {
        return "Clinician";
    }

   getUserName() {
       return this._name;
   }

   getRoleType() {
       return this._role;
   }

   getSpeciality() {
       return this._specialty;
   }

   getId() {
        return this._id;
    }

    getRole() {
        return this._role;
    }
}
export default UserProfile;