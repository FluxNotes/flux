import { getNamespaceAndName } from '../../json-helper';
import SupportSurface from './SupportSurface';
import SupportSurfaceCategory from './SupportSurfaceCategory';
import SupportSurfaceBodyPosition from './SupportSurfaceBodyPosition';
import SupportSurfaceComponent from './SupportSurfaceComponent';
import SupportSurfaceUsed from './SupportSurfaceUsed';
import ImmersionDepth from './ImmersionDepth';
import Wound from './Wound';
import WoundAbsent from './WoundAbsent';
import WoundAssessmentPanel from './WoundAssessmentPanel';
import VisibleInternalStructure from './VisibleInternalStructure';
import WoundSize from './WoundSize';
import WoundTunneling from './WoundTunneling';
import WoundUndermining from './WoundUndermining';
import WoundBedAndEdge from './WoundBedAndEdge';
import WoundEdgeAppearance from './WoundEdgeAppearance';
import WoundExudate from './WoundExudate';

/**
 * Generated object factory for the shr.skin namespace.
 */
export default class ShrSkinObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.skin') {
      throw new Error(`Unsupported type in ShrSkinObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'SupportSurface': return SupportSurface.fromJSON(json);
      case 'SupportSurfaceCategory': return SupportSurfaceCategory.fromJSON(json);
      case 'SupportSurfaceBodyPosition': return SupportSurfaceBodyPosition.fromJSON(json);
      case 'SupportSurfaceComponent': return SupportSurfaceComponent.fromJSON(json);
      case 'SupportSurfaceUsed': return SupportSurfaceUsed.fromJSON(json);
      case 'ImmersionDepth': return ImmersionDepth.fromJSON(json);
      case 'Wound': return Wound.fromJSON(json);
      case 'WoundAbsent': return WoundAbsent.fromJSON(json);
      case 'WoundAssessmentPanel': return WoundAssessmentPanel.fromJSON(json);
      case 'VisibleInternalStructure': return VisibleInternalStructure.fromJSON(json);
      case 'WoundSize': return WoundSize.fromJSON(json);
      case 'WoundTunneling': return WoundTunneling.fromJSON(json);
      case 'WoundUndermining': return WoundUndermining.fromJSON(json);
      case 'WoundBedAndEdge': return WoundBedAndEdge.fromJSON(json);
      case 'WoundEdgeAppearance': return WoundEdgeAppearance.fromJSON(json);
      case 'WoundExudate': return WoundExudate.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrSkinObjectFactory: ${type}`);
    }
  }
}
