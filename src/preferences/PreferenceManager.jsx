import LocalStoragePreferenceStore from './LocalStoragePreferenceStore';

class PreferenceManager {
    constructor(user) {
        this._user = user;
        this._preferenceStore = this._getPreferenceStore();
    }

    _getPreferenceStore() {
        return new LocalStoragePreferenceStore();
    }

    /*
     * name = name of preference to store
     * value = value for the named preference item
    */
    setPreference(name, value) {
        this._preferenceStore.setPreference(name, value);
    }

    removePreference(name) {
        this._preferenceStore.removePreference(name);
    }

    getPreference(name) {
        return this._preferenceStore.getPreference(name);
    }
}

export default PreferenceManager;