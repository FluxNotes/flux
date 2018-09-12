import { getNamespaceAndName } from '../../json-helper';
import BloodPressureEntry from './BloodPressureEntry';
import EvaluationComponent from './EvaluationComponent';
import SystolicPressure from './SystolicPressure';
import DiastolicPressure from './DiastolicPressure';
import Observation from './Observation';
import Foo from './Foo';
import FooA from './FooA';
import FooB from './FooB';
import Bar from './Bar';
import Baz from './Baz';
import BarAEntry from './BarAEntry';

/**
 * Generated object factory for the shr.slicing namespace.
 */
export default class ShrSlicingObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.slicing') {
      throw new Error(`Unsupported type in ShrSlicingObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'BloodPressureEntry': return BloodPressureEntry.fromJSON(json);
      case 'EvaluationComponent': return EvaluationComponent.fromJSON(json);
      case 'SystolicPressure': return SystolicPressure.fromJSON(json);
      case 'DiastolicPressure': return DiastolicPressure.fromJSON(json);
      case 'Observation': return Observation.fromJSON(json);
      case 'Foo': return Foo.fromJSON(json);
      case 'FooA': return FooA.fromJSON(json);
      case 'FooB': return FooB.fromJSON(json);
      case 'Bar': return Bar.fromJSON(json);
      case 'Baz': return Baz.fromJSON(json);
      case 'BarAEntry': return BarAEntry.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrSlicingObjectFactory: ${type}`);
    }
  }
}
