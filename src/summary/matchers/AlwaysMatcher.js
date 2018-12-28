import Matcher from './Matcher';

class AlwaysMatcher extends Matcher {
    match = (condition, roleType, role, specialty) => {
        return true;
    }
}

export default AlwaysMatcher;