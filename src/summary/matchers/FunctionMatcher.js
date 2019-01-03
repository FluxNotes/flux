import Matcher from './Matcher';

class FunctionMatcher extends Matcher {
    match = (condition, roleType, role, specialty) => {
        return this._metadata.matchFunction(condition, roleType, role, specialty);
    }
}

export default FunctionMatcher;