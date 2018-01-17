import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Address.
 */
class Address {

  /**
   * Get the Purpose.
   * @returns {Purpose} The shr.entity.Purpose
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose.
   * @param {Purpose} purpose - The shr.entity.Purpose
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the DisplayText.
   * @returns {DisplayText} The shr.core.DisplayText
   */
  get displayText() {
    return this._displayText;
  }

  /**
   * Set the DisplayText.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   */
  set displayText(displayText) {
    this._displayText = displayText;
  }

  /**
   * Get the AddressLine array.
   * @returns {Array<AddressLine>} The shr.core.AddressLine array
   */
  get addressLine() {
    return this._addressLine;
  }

  /**
   * Set the AddressLine array.
   * @param {Array<AddressLine>} addressLine - The shr.core.AddressLine array
   */
  set addressLine(addressLine) {
    this._addressLine = addressLine;
  }

  /**
   * Get the City.
   * @returns {City} The shr.core.City
   */
  get city() {
    return this._city;
  }

  /**
   * Set the City.
   * @param {City} city - The shr.core.City
   */
  set city(city) {
    this._city = city;
  }

  /**
   * Get the District.
   * @returns {District} The shr.core.District
   */
  get district() {
    return this._district;
  }

  /**
   * Set the District.
   * @param {District} district - The shr.core.District
   */
  set district(district) {
    this._district = district;
  }

  /**
   * Get the State.
   * @returns {State} The shr.core.State
   */
  get state() {
    return this._state;
  }

  /**
   * Set the State.
   * @param {State} state - The shr.core.State
   */
  set state(state) {
    this._state = state;
  }

  /**
   * Get the PostalCode.
   * @returns {PostalCode} The shr.core.PostalCode
   */
  get postalCode() {
    return this._postalCode;
  }

  /**
   * Set the PostalCode.
   * @param {PostalCode} postalCode - The shr.core.PostalCode
   */
  set postalCode(postalCode) {
    this._postalCode = postalCode;
  }

  /**
   * Get the Country.
   * @returns {Country} The shr.core.Country
   */
  get country() {
    return this._country;
  }

  /**
   * Set the Country.
   * @param {Country} country - The shr.core.Country
   */
  set country(country) {
    this._country = country;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Deserializes JSON data to an instance of the Address class.
   * The JSON must be valid against the Address JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Address} An instance of Address populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Address();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Address;
