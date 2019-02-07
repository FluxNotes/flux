class IDataSource {
    getPatient(id, optionalCallback) {
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

    // On the origins of this term see: https://en.wikipedia.org/wiki/Gestalt_(Mac_OS)
    getGestalt() { 
        // 
        // Shape of the gestalt : { 
        //      create: { 
        //          isSupported: bool,
        //          sync: bool,
        //          async: bool
        //      }
        //      read: { 
        //          isSupported: bool,
        //          sync: bool,
        //          async: bool
        //      }
        //      update: { 
        //          isSupported: bool,
        //          sync: bool,
        //          async: bool
        //      }
        //      delete: { 
        //          isSupported: bool,
        //          sync: bool,
        //          async: bool
        //      }
        // } 
        //
        throw new Error("getGestalt not implemented by " + this.constructor.name);
    }
}

export default IDataSource;