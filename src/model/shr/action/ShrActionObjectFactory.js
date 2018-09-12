import { getNamespaceAndName } from '../../json-helper';
import Action from './Action';
import ActionContext from './ActionContext';
import Status from './Status';
import PerformedContext from './PerformedContext';
import Participant from './Participant';
import ParticipationType from './ParticipationType';
import ParticipationPeriod from './ParticipationPeriod';
import Method from './Method';
import RelatedRequest from './RelatedRequest';
import RelatedPlan from './RelatedPlan';
import Outcome from './Outcome';
import NotPerformedContext from './NotPerformedContext';
import RequestedContext from './RequestedContext';
import RequestIntent from './RequestIntent';
import ExpectedPerformanceTime from './ExpectedPerformanceTime';
import ExpectedPerformerType from './ExpectedPerformerType';
import ExpectedPerformer from './ExpectedPerformer';
import ExpectedMethod from './ExpectedMethod';
import PerformerInstructions from './PerformerInstructions';
import PatientInstructions from './PatientInstructions';
import CommunicationMethod from './CommunicationMethod';
import RequestedAgainstContext from './RequestedAgainstContext';

/**
 * Generated object factory for the shr.action namespace.
 */
export default class ShrActionObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.action') {
      throw new Error(`Unsupported type in ShrActionObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'Action': return Action.fromJSON(json);
      case 'ActionContext': return ActionContext.fromJSON(json);
      case 'Status': return Status.fromJSON(json);
      case 'PerformedContext': return PerformedContext.fromJSON(json);
      case 'Participant': return Participant.fromJSON(json);
      case 'ParticipationType': return ParticipationType.fromJSON(json);
      case 'ParticipationPeriod': return ParticipationPeriod.fromJSON(json);
      case 'Method': return Method.fromJSON(json);
      case 'RelatedRequest': return RelatedRequest.fromJSON(json);
      case 'RelatedPlan': return RelatedPlan.fromJSON(json);
      case 'Outcome': return Outcome.fromJSON(json);
      case 'NotPerformedContext': return NotPerformedContext.fromJSON(json);
      case 'RequestedContext': return RequestedContext.fromJSON(json);
      case 'RequestIntent': return RequestIntent.fromJSON(json);
      case 'ExpectedPerformanceTime': return ExpectedPerformanceTime.fromJSON(json);
      case 'ExpectedPerformerType': return ExpectedPerformerType.fromJSON(json);
      case 'ExpectedPerformer': return ExpectedPerformer.fromJSON(json);
      case 'ExpectedMethod': return ExpectedMethod.fromJSON(json);
      case 'PerformerInstructions': return PerformerInstructions.fromJSON(json);
      case 'PatientInstructions': return PatientInstructions.fromJSON(json);
      case 'CommunicationMethod': return CommunicationMethod.fromJSON(json);
      case 'RequestedAgainstContext': return RequestedAgainstContext.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrActionObjectFactory: ${type}`);
    }
  }
}
