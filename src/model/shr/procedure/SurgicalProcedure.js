import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.SurgicalProcedure.
 * @extends ProcedureAction
 */
class SurgicalProcedure extends ProcedureAction {

  /**
   * Get the DirectSite array.
   * @returns {Array<DirectSite>} The shr.procedure.DirectSite array
   */
  get directSite() {
    return this._directSite;
  }

  /**
   * Set the DirectSite array.
   * @param {Array<DirectSite>} directSite - The shr.procedure.DirectSite array
   */
  set directSite(directSite) {
    this._directSite = directSite;
  }

  /**
   * Get the DirectSiteCode array.
   * @returns {Array<DirectSiteCode>} The shr.procedure.DirectSiteCode array
   */
  get directSiteCode() {
    return this._directSiteCode;
  }

  /**
   * Set the DirectSiteCode array.
   * @param {Array<DirectSiteCode>} directSiteCode - The shr.procedure.DirectSiteCode array
   */
  set directSiteCode(directSiteCode) {
    this._directSiteCode = directSiteCode;
  }

  /**
   * Get the IndirectSite array.
   * @returns {Array<IndirectSite>} The shr.procedure.IndirectSite array
   */
  get indirectSite() {
    return this._indirectSite;
  }

  /**
   * Set the IndirectSite array.
   * @param {Array<IndirectSite>} indirectSite - The shr.procedure.IndirectSite array
   */
  set indirectSite(indirectSite) {
    this._indirectSite = indirectSite;
  }

  /**
   * Get the IndirectSiteCode array.
   * @returns {Array<IndirectSiteCode>} The shr.procedure.IndirectSiteCode array
   */
  get indirectSiteCode() {
    return this._indirectSiteCode;
  }

  /**
   * Set the IndirectSiteCode array.
   * @param {Array<IndirectSiteCode>} indirectSiteCode - The shr.procedure.IndirectSiteCode array
   */
  set indirectSiteCode(indirectSiteCode) {
    this._indirectSiteCode = indirectSiteCode;
  }

  /**
   * Get the SurgicalApproach array.
   * @returns {Array<SurgicalApproach>} The shr.procedure.SurgicalApproach array
   */
  get surgicalApproach() {
    return this._surgicalApproach;
  }

  /**
   * Set the SurgicalApproach array.
   * @param {Array<SurgicalApproach>} surgicalApproach - The shr.procedure.SurgicalApproach array
   */
  set surgicalApproach(surgicalApproach) {
    this._surgicalApproach = surgicalApproach;
  }

  /**
   * Get the Access array.
   * @returns {Array<Access>} The shr.procedure.Access array
   */
  get access() {
    return this._access;
  }

  /**
   * Set the Access array.
   * @param {Array<Access>} access - The shr.procedure.Access array
   */
  set access(access) {
    this._access = access;
  }

  /**
   * Get the UsingDevice array.
   * @returns {Array<UsingDevice>} The shr.procedure.UsingDevice array
   */
  get usingDevice() {
    return this._usingDevice;
  }

  /**
   * Set the UsingDevice array.
   * @param {Array<UsingDevice>} usingDevice - The shr.procedure.UsingDevice array
   */
  set usingDevice(usingDevice) {
    this._usingDevice = usingDevice;
  }

  /**
   * Get the UsingDeviceCode array.
   * @returns {Array<UsingDeviceCode>} The shr.procedure.UsingDeviceCode array
   */
  get usingDeviceCode() {
    return this._usingDeviceCode;
  }

  /**
   * Set the UsingDeviceCode array.
   * @param {Array<UsingDeviceCode>} usingDeviceCode - The shr.procedure.UsingDeviceCode array
   */
  set usingDeviceCode(usingDeviceCode) {
    this._usingDeviceCode = usingDeviceCode;
  }

  /**
   * Get the UsingAccessDevice array.
   * @returns {Array<UsingAccessDevice>} The shr.procedure.UsingAccessDevice array
   */
  get usingAccessDevice() {
    return this._usingAccessDevice;
  }

  /**
   * Set the UsingAccessDevice array.
   * @param {Array<UsingAccessDevice>} usingAccessDevice - The shr.procedure.UsingAccessDevice array
   */
  set usingAccessDevice(usingAccessDevice) {
    this._usingAccessDevice = usingAccessDevice;
  }

  /**
   * Get the UsingAccessDeviceCode array.
   * @returns {Array<UsingAccessDeviceCode>} The shr.procedure.UsingAccessDeviceCode array
   */
  get usingAccessDeviceCode() {
    return this._usingAccessDeviceCode;
  }

  /**
   * Set the UsingAccessDeviceCode array.
   * @param {Array<UsingAccessDeviceCode>} usingAccessDeviceCode - The shr.procedure.UsingAccessDeviceCode array
   */
  set usingAccessDeviceCode(usingAccessDeviceCode) {
    this._usingAccessDeviceCode = usingAccessDeviceCode;
  }

  /**
   * Get the IndirectDevice array.
   * @returns {Array<IndirectDevice>} The shr.procedure.IndirectDevice array
   */
  get indirectDevice() {
    return this._indirectDevice;
  }

  /**
   * Set the IndirectDevice array.
   * @param {Array<IndirectDevice>} indirectDevice - The shr.procedure.IndirectDevice array
   */
  set indirectDevice(indirectDevice) {
    this._indirectDevice = indirectDevice;
  }

  /**
   * Get the IndirectDeviceCode array.
   * @returns {Array<IndirectDeviceCode>} The shr.procedure.IndirectDeviceCode array
   */
  get indirectDeviceCode() {
    return this._indirectDeviceCode;
  }

  /**
   * Set the IndirectDeviceCode array.
   * @param {Array<IndirectDeviceCode>} indirectDeviceCode - The shr.procedure.IndirectDeviceCode array
   */
  set indirectDeviceCode(indirectDeviceCode) {
    this._indirectDeviceCode = indirectDeviceCode;
  }

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedure class.
   * The JSON must be valid against the SurgicalProcedure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedure} An instance of SurgicalProcedure populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SurgicalProcedure;
