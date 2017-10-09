class IDataSource {
    getPatient(id) {
        throw new Error("getPatient not implemented by " + this.constructor.name);
    }
    getListOfPatients() {
        throw new Error("getListOfPatients not implemented by " + this.constructor.name);
    }
    
    newPatient() {
        throw new Error("newPatient not implemented by " + this.constructor.name);
    }
    
    savePatient(patient) {
        throw new Error("savePatient not implemented by " + this.constructor.name);
    }
}

export default IDataSource;