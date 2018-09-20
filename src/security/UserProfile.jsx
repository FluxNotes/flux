//import Practitioner from "../model/shr/entity/Practitioner";

// This class stores user profile information
class UserProfile {
    constructor(user) {
        this._name = this.setUserName(user.name);
        this._roleType = user.resourceType;
        this._id = user.id;
        this._role = this.setRole(user.practitionerRole);
        this._specialty = this.setSpecialty(user.practitionerRole);
        this._serviceProvider = user.serviceProvider;
    }

    setUserName(name) {
        return (name.suffix) ? (`${name.suffix[0]} ${name.given[0]} ${name.family[0]}`) : (`${name.given[0]} ${name.family[0]}`);
    }

    // Some users do not have the practitionerRole object, meaning they do not have a role or specialty specified

/* 
roleType    ==> resourceType: Practitioner

role        ==> PractitionerRole.code (FHIR STU3)
Code	Display	Definition
doctor	Doctor	A qualified/registered medical practitioner
nurse	Nurse	A practitoner with nursing experience that may be qualified/registered
pharmacist	Pharmacist	A qualified/registered/licensed pharmacist
researcher	Researcher	A practitioner that may perform research
teacher	Teacher/educator	Someone who is able to provide educational services
ict	ICT professional	Someone who is qualified in Information and Communication Technologies

specialty   ==> specialty:
394592004 	Clinical oncology
408446006 	Gynecological oncology
394593009 	Medical oncology
418002000 	Pediatric oncology
419815003 	Radiation oncology
419321007 	Surgical oncology
419043006 	Urological oncology

superrole:
patient
clinician

*/

    setRole(practitionerRole) {
        if (practitionerRole) {
            return practitionerRole[0].role.coding[0].display;
        }
    }

    setSpecialty(practitionerRole) {
        if (practitionerRole) {
            return practitionerRole[0].specialty[0].coding[0].display;
        }
    }

    getSuperRole() {
        return "Clinician";
    }

    getUserName() {
        return this._name;
    }

    getRoleType() {
        return this._roleType;
    }

    getSpecialty() {
        return this._specialty;
    }

    getId() {
        return this._id;
    }

    getRole() {
        return this._role;
    }

    get serviceProvider() {
        return this._serviceProvider;
    }

    set serviceProvider(serviceProvider) {
        this._serviceProvider = serviceProvider;
    }
}
export default UserProfile;