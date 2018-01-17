import { getNamespaceAndName } from '../../json-helper';
import Device from './Device';
import DeviceUdi from './DeviceUdi';
import VendorModelNumber from './VendorModelNumber';
import DeviceAction from './DeviceAction';
import Implanted from './Implanted';
import DeviceUsed from './DeviceUsed';
import DeviceNotUsed from './DeviceNotUsed';

/**
 * Generated object factory for the shr.device namespace.
 */
export default class ShrDeviceObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.device') {
      throw new Error(`Unsupported type in ShrDeviceObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Device': return Device.fromJSON(json);
    case 'DeviceUdi': return DeviceUdi.fromJSON(json);
    case 'VendorModelNumber': return VendorModelNumber.fromJSON(json);
    case 'DeviceAction': return DeviceAction.fromJSON(json);
    case 'Implanted': return Implanted.fromJSON(json);
    case 'DeviceUsed': return DeviceUsed.fromJSON(json);
    case 'DeviceNotUsed': return DeviceNotUsed.fromJSON(json);
    }
    throw new Error(`Unsupported type in ShrDeviceObjectFactory: ${type}`);
  }
}
