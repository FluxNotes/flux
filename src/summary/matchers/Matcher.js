class Matcher {
    constructor(metadata) {
        this._metadata = metadata;
    }

    match = (condition, roleType, role, specialty) => {
        return false;
    }
}

export default Matcher;