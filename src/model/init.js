import {setObjectFactory} from './json-helper';
import ObjectFactory from './ObjectFactory';

/**
 * The init function initializes the ES helper functions with the necessary dependencies for creating
 * instances of classes using factories.  The helper functions originally imported their own dependencies,
 * but this caused circular import issues.  This init approach is essentially a form of dependency injection,
 * avoiding any circular import issues.  Users of the ES6 classes must import this file once before using
 * any of the classes.
 */
function init() {
  setObjectFactory(ObjectFactory);
}

init();
