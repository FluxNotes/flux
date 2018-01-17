import { getNamespaceAndName } from '../../json-helper';
import VitalSign from './VitalSign';
import RespiratoryRate from './RespiratoryRate';
import HeartRate from './HeartRate';
import OxygenSaturation from './OxygenSaturation';
import BodyTemperature from './BodyTemperature';
import BodyHeight from './BodyHeight';
import BodyLength from './BodyLength';
import BodyWeight from './BodyWeight';
import HeadCircumference from './HeadCircumference';
import BodyMassIndex from './BodyMassIndex';
import BloodPressure from './BloodPressure';
import SystolicPressure from './SystolicPressure';
import DiastolicPressure from './DiastolicPressure';
import HeadTiltAngle from './HeadTiltAngle';

/**
 * Generated object factory for the shr.vital namespace.
 */
export default class ShrVitalObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.vital') {
      throw new Error(`Unsupported type in ShrVitalObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'VitalSign': return VitalSign.fromJSON(json);
    case 'RespiratoryRate': return RespiratoryRate.fromJSON(json);
    case 'HeartRate': return HeartRate.fromJSON(json);
    case 'OxygenSaturation': return OxygenSaturation.fromJSON(json);
    case 'BodyTemperature': return BodyTemperature.fromJSON(json);
    case 'BodyHeight': return BodyHeight.fromJSON(json);
    case 'BodyLength': return BodyLength.fromJSON(json);
    case 'BodyWeight': return BodyWeight.fromJSON(json);
    case 'HeadCircumference': return HeadCircumference.fromJSON(json);
    case 'BodyMassIndex': return BodyMassIndex.fromJSON(json);
    case 'BloodPressure': return BloodPressure.fromJSON(json);
    case 'SystolicPressure': return SystolicPressure.fromJSON(json);
    case 'DiastolicPressure': return DiastolicPressure.fromJSON(json);
    case 'HeadTiltAngle': return HeadTiltAngle.fromJSON(json);
    }
    throw new Error(`Unsupported type in ShrVitalObjectFactory: ${type}`);
  }
}
