/** Generated from SHR definition for shr.core.CodeSystem */
class CodeSystem {
    constructor(json) {
        if (json) {
            this.uri = json.value ? json.value : '';
            this._uri = this.uri;
        }
    }

    fromFHIR(system) {
        this._uri = system;
    }

  /**
   * Convenience getter for value (accesses this.uri)
   */
  get value() {
    return this.uri;
  }

  /**
   * Convenience setter for value (sets this.uri)
   */
  set value(val) {
    this.uri = val;
  }

  /**
   * Getter for uri
   */
  get uri() {
    return this._uri;
  }

  /**
   * Setter for uri
   */
  set uri(uriVal) {
    this._uri = uriVal;
  }

}

export default CodeSystem;
