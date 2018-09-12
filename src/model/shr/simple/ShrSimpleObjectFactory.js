import { getNamespaceAndName } from '../../json-helper';
import StringValue from './StringValue';
import NestedStringValue from './NestedStringValue';
import StringValueEntry from './StringValueEntry';
import ElementValueEntry from './ElementValueEntry';
import CodeValueEntry from './CodeValueEntry';
import CodeableConceptValueEntry from './CodeableConceptValueEntry';
import CodingValueEntry from './CodingValueEntry';
import RecursiveEntry from './RecursiveEntry';
import SingleRecursiveEntry from './SingleRecursiveEntry';
import ReferenceEntry from './ReferenceEntry';
import IntegerValueElement from './IntegerValueElement';
import DecimalValueElement from './DecimalValueElement';
import OptionalIntegerValueEntry from './OptionalIntegerValueEntry';
import OptionalChoiceValueEntry from './OptionalChoiceValueEntry';
import OptionalFieldEntry from './OptionalFieldEntry';
import OptionalElementValueEntry from './OptionalElementValueEntry';
import BasedOnIntegerValueElementEntry from './BasedOnIntegerValueElementEntry';
import StringValueChild from './StringValueChild';
import OverrideBasedOnIntegerValueElementEntry from './OverrideBasedOnIntegerValueElementEntry';
import ChoiceValueEntry from './ChoiceValueEntry';
import ChoiceValueListEntry from './ChoiceValueListEntry';
import InheritBasedOnIntegerValueElementEntry from './InheritBasedOnIntegerValueElementEntry';
import BooleanValue from './BooleanValue';
import NestedBooleanValue from './NestedBooleanValue';
import DoubleNestedBooleanValue from './DoubleNestedBooleanValue';

/**
 * Generated object factory for the shr.simple namespace.
 */
export default class ShrSimpleObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.simple') {
      throw new Error(`Unsupported type in ShrSimpleObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'StringValue': return StringValue.fromJSON(json);
      case 'NestedStringValue': return NestedStringValue.fromJSON(json);
      case 'StringValueEntry': return StringValueEntry.fromJSON(json);
      case 'ElementValueEntry': return ElementValueEntry.fromJSON(json);
      case 'CodeValueEntry': return CodeValueEntry.fromJSON(json);
      case 'CodeableConceptValueEntry': return CodeableConceptValueEntry.fromJSON(json);
      case 'CodingValueEntry': return CodingValueEntry.fromJSON(json);
      case 'RecursiveEntry': return RecursiveEntry.fromJSON(json);
      case 'SingleRecursiveEntry': return SingleRecursiveEntry.fromJSON(json);
      case 'ReferenceEntry': return ReferenceEntry.fromJSON(json);
      case 'IntegerValueElement': return IntegerValueElement.fromJSON(json);
      case 'DecimalValueElement': return DecimalValueElement.fromJSON(json);
      case 'OptionalIntegerValueEntry': return OptionalIntegerValueEntry.fromJSON(json);
      case 'OptionalChoiceValueEntry': return OptionalChoiceValueEntry.fromJSON(json);
      case 'OptionalFieldEntry': return OptionalFieldEntry.fromJSON(json);
      case 'OptionalElementValueEntry': return OptionalElementValueEntry.fromJSON(json);
      case 'BasedOnIntegerValueElementEntry': return BasedOnIntegerValueElementEntry.fromJSON(json);
      case 'StringValueChild': return StringValueChild.fromJSON(json);
      case 'OverrideBasedOnIntegerValueElementEntry': return OverrideBasedOnIntegerValueElementEntry.fromJSON(json);
      case 'ChoiceValueEntry': return ChoiceValueEntry.fromJSON(json);
      case 'ChoiceValueListEntry': return ChoiceValueListEntry.fromJSON(json);
      case 'InheritBasedOnIntegerValueElementEntry': return InheritBasedOnIntegerValueElementEntry.fromJSON(json);
      case 'BooleanValue': return BooleanValue.fromJSON(json);
      case 'NestedBooleanValue': return NestedBooleanValue.fromJSON(json);
      case 'DoubleNestedBooleanValue': return DoubleNestedBooleanValue.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrSimpleObjectFactory: ${type}`);
    }
  }
}
