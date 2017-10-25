import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.oncology.GeneticVariant */
class GeneticVariant extends Observation {

  /**
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

  /**
   * Getter for shr.oncology.GeneIdentifier
   */
  get geneIdentifier() {
    return this._geneIdentifier;
  }

  /**
   * Setter for shr.oncology.GeneIdentifier
   */
  set geneIdentifier(geneIdentifierVal) {
    this._geneIdentifier = geneIdentifierVal;
  }

  /**
   * Getter for shr.oncology.Refseq
   */
  get refseq() {
    return this._refseq;
  }

  /**
   * Setter for shr.oncology.Refseq
   */
  set refseq(refseqVal) {
    this._refseq = refseqVal;
  }

}

export default GeneticVariant;
