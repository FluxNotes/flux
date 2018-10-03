import IPreferenceStore from './IPreferenceStore';

class LocalStoragePreferenceStore extends IPreferenceStore {
    setPreference(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    getPreference(name) {
        return JSON.parse(localStorage.getItem(name));
    }

    removePreference(name) {
        localStorage.removeItem(name);
    }
}

export default LocalStoragePreferenceStore;