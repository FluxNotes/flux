import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.AccessionIdentifier.
 */
class AccessionIdentifier {

  /**
   * Get the value (aliases identifier).
   * @returns {Identifier} The shr.core.Identifier
   */
  get value() {
    return this._identifier;
  }

  /**
   * Set the value (aliases identifier).
   * @param {Identifier} value - The shr.core.Identifier
   */
  set value(value) {
    this._identifier = value;
  }

  /**
   * Get the Identifier.
   * @returns {Identifier} The shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Deserializes JSON data to an instance of the AccessionIdentifier class.
   * The JSON must be valid against the AccessionIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AccessionIdentifier} An instance of AccessionIdentifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AccessionIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AccessionIdentifier;
