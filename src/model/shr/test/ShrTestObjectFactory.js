import { getNamespaceAndName } from '../../json-helper';
import SimpleBase from './SimpleBase';
import SimpleBasedOn from './SimpleBasedOn';
import Simple from './Simple';
import Coded from './Coded';
import Simple2 from './Simple2';
import BasedOnTBD from './BasedOnTBD';
import BooleanConstraintOnValue from './BooleanConstraintOnValue';
import SimpleBoolean from './SimpleBoolean';
import BooleanConstraintOnValueChild from './BooleanConstraintOnValueChild';
import BooleanConstraintOnFieldChild from './BooleanConstraintOnFieldChild';
import CardConstraintOnValueChild from './CardConstraintOnValueChild';
import CardConstraintOnFieldChild from './CardConstraintOnFieldChild';
import ChoiceOfDatishThings from './ChoiceOfDatishThings';
import ThingWithChoiceField from './ThingWithChoiceField';
import PrimitiveTypeConstraintOnField from './PrimitiveTypeConstraintOnField';
import NonPrimitiveTypeConstraintOnField from './NonPrimitiveTypeConstraintOnField';
import StringishDateTime from './StringishDateTime';
import BaseElement from './BaseElement';
import CodedElement from './CodedElement';
import ChildElement from './ChildElement';
import CodedFromPathValueSet from './CodedFromPathValueSet';
import CodedFromValueSet from './CodedFromValueSet';
import MultiString from './MultiString';
import SimpleDate from './SimpleDate';
import SimpleReference from './SimpleReference';
import SpecialParent from './SpecialParent';
import SpecialChild from './SpecialChild';
import TypeConstraintOnValue from './TypeConstraintOnValue';
import ComplexBase from './ComplexBase';
import Complex from './Complex';
import TypeConstraintOnValueChild from './TypeConstraintOnValueChild';
import GroupBase from './GroupBase';
import TypeConstraintOnField from './TypeConstraintOnField';
import TypeConstraintOnFieldChild from './TypeConstraintOnFieldChild';
import Group2 from './Group2';
import HasSimpleValue from './HasSimpleValue';
import TypeConstraintOnFieldValue from './TypeConstraintOnFieldValue';
import VSConstraintOnField from './VSConstraintOnField';
import VSConstraintOnFieldChild from './VSConstraintOnFieldChild';
import CodedThing from './CodedThing';
import RequiredVSConstraintOnField from './RequiredVSConstraintOnField';
import ExtensibleVSConstraintOnField from './ExtensibleVSConstraintOnField';
import PreferredVSConstraintOnField from './PreferredVSConstraintOnField';
import ExampleVSConstraintOnField from './ExampleVSConstraintOnField';
import VSConstraintOnValue from './VSConstraintOnValue';
import VSConstraintOnValueChild from './VSConstraintOnValueChild';
import RequiredVSConstraintOnValue from './RequiredVSConstraintOnValue';
import ExtensibleVSConstraintOnValue from './ExtensibleVSConstraintOnValue';
import PreferredVSConstraintOnValue from './PreferredVSConstraintOnValue';
import ExampleVSConstraintOnValue from './ExampleVSConstraintOnValue';
import OptionalValue from './OptionalValue';
import ZeroedOutValue from './ZeroedOutValue';
import ZeroedOutValueBackwardsCompatibility from './ZeroedOutValueBackwardsCompatibility';
import Choice from './Choice';
import CodeConstraintOnValue from './CodeConstraintOnValue';
import CodeConstraintOnValueChild from './CodeConstraintOnValueChild';
import CodeConstraintOnField from './CodeConstraintOnField';
import CodeConstraintOnFieldChild from './CodeConstraintOnFieldChild';
import SystemlessCodeConstraintOnValue from './SystemlessCodeConstraintOnValue';
import CodeableConceptFromValueSet from './CodeableConceptFromValueSet';
import CodingFromValueSet from './CodingFromValueSet';
import SimpleGroup from './SimpleGroup';
import IncludesCodeConstraintOnValue from './IncludesCodeConstraintOnValue';
import MultiCodedFromValueSet from './MultiCodedFromValueSet';
import IncludesCodeConstraintOnValueChild from './IncludesCodeConstraintOnValueChild';
import IncludesCodeConstraintOnField from './IncludesCodeConstraintOnField';
import IncludesCodeConstraintOnFieldChild from './IncludesCodeConstraintOnFieldChild';
import UnitConstraintOnValue from './UnitConstraintOnValue';
import UnitConstraintOnValueChild from './UnitConstraintOnValueChild';
import UnitConstraintOnField from './UnitConstraintOnField';
import UnitConstraintOnFieldChild from './UnitConstraintOnFieldChild';
import Volume from './Volume';

/**
 * Generated object factory for the shr.test namespace.
 */
export default class ShrTestObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.test') {
      throw new Error(`Unsupported type in ShrTestObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'SimpleBase': return SimpleBase.fromJSON(json);
      case 'SimpleBasedOn': return SimpleBasedOn.fromJSON(json);
      case 'Simple': return Simple.fromJSON(json);
      case 'Coded': return Coded.fromJSON(json);
      case 'Simple2': return Simple2.fromJSON(json);
      case 'BasedOnTBD': return BasedOnTBD.fromJSON(json);
      case 'BooleanConstraintOnValue': return BooleanConstraintOnValue.fromJSON(json);
      case 'SimpleBoolean': return SimpleBoolean.fromJSON(json);
      case 'BooleanConstraintOnValueChild': return BooleanConstraintOnValueChild.fromJSON(json);
      case 'BooleanConstraintOnFieldChild': return BooleanConstraintOnFieldChild.fromJSON(json);
      case 'CardConstraintOnValueChild': return CardConstraintOnValueChild.fromJSON(json);
      case 'CardConstraintOnFieldChild': return CardConstraintOnFieldChild.fromJSON(json);
      case 'ChoiceOfDatishThings': return ChoiceOfDatishThings.fromJSON(json);
      case 'ThingWithChoiceField': return ThingWithChoiceField.fromJSON(json);
      case 'PrimitiveTypeConstraintOnField': return PrimitiveTypeConstraintOnField.fromJSON(json);
      case 'NonPrimitiveTypeConstraintOnField': return NonPrimitiveTypeConstraintOnField.fromJSON(json);
      case 'StringishDateTime': return StringishDateTime.fromJSON(json);
      case 'BaseElement': return BaseElement.fromJSON(json);
      case 'CodedElement': return CodedElement.fromJSON(json);
      case 'ChildElement': return ChildElement.fromJSON(json);
      case 'CodedFromPathValueSet': return CodedFromPathValueSet.fromJSON(json);
      case 'CodedFromValueSet': return CodedFromValueSet.fromJSON(json);
      case 'MultiString': return MultiString.fromJSON(json);
      case 'SimpleDate': return SimpleDate.fromJSON(json);
      case 'SimpleReference': return SimpleReference.fromJSON(json);
      case 'SpecialParent': return SpecialParent.fromJSON(json);
      case 'SpecialChild': return SpecialChild.fromJSON(json);
      case 'TypeConstraintOnValue': return TypeConstraintOnValue.fromJSON(json);
      case 'ComplexBase': return ComplexBase.fromJSON(json);
      case 'Complex': return Complex.fromJSON(json);
      case 'TypeConstraintOnValueChild': return TypeConstraintOnValueChild.fromJSON(json);
      case 'GroupBase': return GroupBase.fromJSON(json);
      case 'TypeConstraintOnField': return TypeConstraintOnField.fromJSON(json);
      case 'TypeConstraintOnFieldChild': return TypeConstraintOnFieldChild.fromJSON(json);
      case 'Group2': return Group2.fromJSON(json);
      case 'HasSimpleValue': return HasSimpleValue.fromJSON(json);
      case 'TypeConstraintOnFieldValue': return TypeConstraintOnFieldValue.fromJSON(json);
      case 'VSConstraintOnField': return VSConstraintOnField.fromJSON(json);
      case 'VSConstraintOnFieldChild': return VSConstraintOnFieldChild.fromJSON(json);
      case 'CodedThing': return CodedThing.fromJSON(json);
      case 'RequiredVSConstraintOnField': return RequiredVSConstraintOnField.fromJSON(json);
      case 'ExtensibleVSConstraintOnField': return ExtensibleVSConstraintOnField.fromJSON(json);
      case 'PreferredVSConstraintOnField': return PreferredVSConstraintOnField.fromJSON(json);
      case 'ExampleVSConstraintOnField': return ExampleVSConstraintOnField.fromJSON(json);
      case 'VSConstraintOnValue': return VSConstraintOnValue.fromJSON(json);
      case 'VSConstraintOnValueChild': return VSConstraintOnValueChild.fromJSON(json);
      case 'RequiredVSConstraintOnValue': return RequiredVSConstraintOnValue.fromJSON(json);
      case 'ExtensibleVSConstraintOnValue': return ExtensibleVSConstraintOnValue.fromJSON(json);
      case 'PreferredVSConstraintOnValue': return PreferredVSConstraintOnValue.fromJSON(json);
      case 'ExampleVSConstraintOnValue': return ExampleVSConstraintOnValue.fromJSON(json);
      case 'OptionalValue': return OptionalValue.fromJSON(json);
      case 'ZeroedOutValue': return ZeroedOutValue.fromJSON(json);
      case 'ZeroedOutValueBackwardsCompatibility': return ZeroedOutValueBackwardsCompatibility.fromJSON(json);
      case 'Choice': return Choice.fromJSON(json);
      case 'CodeConstraintOnValue': return CodeConstraintOnValue.fromJSON(json);
      case 'CodeConstraintOnValueChild': return CodeConstraintOnValueChild.fromJSON(json);
      case 'CodeConstraintOnField': return CodeConstraintOnField.fromJSON(json);
      case 'CodeConstraintOnFieldChild': return CodeConstraintOnFieldChild.fromJSON(json);
      case 'SystemlessCodeConstraintOnValue': return SystemlessCodeConstraintOnValue.fromJSON(json);
      case 'CodeableConceptFromValueSet': return CodeableConceptFromValueSet.fromJSON(json);
      case 'CodingFromValueSet': return CodingFromValueSet.fromJSON(json);
      case 'SimpleGroup': return SimpleGroup.fromJSON(json);
      case 'IncludesCodeConstraintOnValue': return IncludesCodeConstraintOnValue.fromJSON(json);
      case 'MultiCodedFromValueSet': return MultiCodedFromValueSet.fromJSON(json);
      case 'IncludesCodeConstraintOnValueChild': return IncludesCodeConstraintOnValueChild.fromJSON(json);
      case 'IncludesCodeConstraintOnField': return IncludesCodeConstraintOnField.fromJSON(json);
      case 'IncludesCodeConstraintOnFieldChild': return IncludesCodeConstraintOnFieldChild.fromJSON(json);
      case 'UnitConstraintOnValue': return UnitConstraintOnValue.fromJSON(json);
      case 'UnitConstraintOnValueChild': return UnitConstraintOnValueChild.fromJSON(json);
      case 'UnitConstraintOnField': return UnitConstraintOnField.fromJSON(json);
      case 'UnitConstraintOnFieldChild': return UnitConstraintOnFieldChild.fromJSON(json);
      case 'Volume': return Volume.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrTestObjectFactory: ${type}`);
    }
  }
}
