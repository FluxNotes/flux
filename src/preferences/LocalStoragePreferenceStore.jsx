import IPreferenceStore from './IPreferenceStore';

class LocalStoragePreferenceStore extends IPreferenceStore {
    setPreference(name, value) {
        try {
            localStorage.setItem(name, JSON.stringify(value));
        } catch (e) {
        }
    }

    getPreference(name) {
        try {
            return JSON.parse(localStorage.getItem(name));
        } catch (e) {
            return null;
        }
    }

    removePreference(name) {
        try {
            localStorage.removeItem(name);
        } catch (e) {
        }
    }
}

export default LocalStoragePreferenceStore;