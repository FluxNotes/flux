import { getNamespaceAndName } from '../../json-helper';
import Any from './Any';
import Content from './Content';
import Entry from './Entry';
import ShrId from './ShrId';
import EntryId from './EntryId';
import PersonOfRecord from './PersonOfRecord';
import EntryType from './EntryType';
import LastUpdated from './LastUpdated';
import Language from './Language';
import Attribution from './Attribution';
import SecurityLabel from './SecurityLabel';
import Tag from './Tag';
import Narrative from './Narrative';
import NarrativeQualifier from './NarrativeQualifier';
import RelatedEncounter from './RelatedEncounter';
import Informant from './Informant';
import Author from './Author';
import Subject from './Subject';

/**
 * Generated object factory for the shr.base namespace.
 */
export default class ShrBaseObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.base') {
      throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Any': return Any.fromJSON(json);
    case 'Content': return Content.fromJSON(json);
    case 'Entry': return Entry.fromJSON(json);
    case 'ShrId': return ShrId.fromJSON(json);
    case 'EntryId': return EntryId.fromJSON(json);
    case 'PersonOfRecord': return PersonOfRecord.fromJSON(json);
    case 'EntryType': return EntryType.fromJSON(json);
    case 'LastUpdated': return LastUpdated.fromJSON(json);
    case 'Language': return Language.fromJSON(json);
    case 'Attribution': return Attribution.fromJSON(json);
    case 'SecurityLabel': return SecurityLabel.fromJSON(json);
    case 'Tag': return Tag.fromJSON(json);
    case 'Narrative': return Narrative.fromJSON(json);
    case 'NarrativeQualifier': return NarrativeQualifier.fromJSON(json);
    case 'RelatedEncounter': return RelatedEncounter.fromJSON(json);
    case 'Informant': return Informant.fromJSON(json);
    case 'Author': return Author.fromJSON(json);
    case 'Subject': return Subject.fromJSON(json);
    }
    throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
  }
}
