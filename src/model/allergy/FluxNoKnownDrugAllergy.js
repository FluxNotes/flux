import AllergyIntolerance from '../shr/allergy/AllergyIntolerance';
import Entry from '../shr/base/Entry';

/** Generated from SHR definition for shr.allergy.NoKnownDrugAllergy */
class FluxNoKnownDrugAllergy extends AllergyIntolerance {
    constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
        } else {
            this._entryInfo = Entry.createEntry("http://standardhealthrecord.org/allergy/NoKnownDrugAllergy",
                                                "http://standardhealthrecord.org/allergy/AllergyIntolerance");
        }
    }

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.allergy.AllergenIrritant
   */
  get allergenIrritant() {
    return this._allergenIrritant;
  }

  /**
   * Setter for shr.allergy.AllergenIrritant
   */
  set allergenIrritant(allergenIrritantVal) {
    this._allergenIrritant = allergenIrritantVal;
  }

  /**
   * Getter for shr.allergy.SubstanceCategory
   */
  get substanceCategory() {
    return this._substanceCategory;
  }

  /**
   * Setter for shr.allergy.SubstanceCategory
   */
  set substanceCategory(substanceCategoryVal) {
    this._substanceCategory = substanceCategoryVal;
  }

  /**
   * Getter for shr.base.AssertionNegationModifier
   */
  get assertionNegationModifier() {
    return this._assertionNegationModifier;
  }

  /**
   * Setter for shr.base.AssertionNegationModifier
   */
  set assertionNegationModifier(assertionNegationModifierVal) {
    this._assertionNegationModifier = assertionNegationModifierVal;
  }

  /**
   * Getter for shr.allergy.AllergyVerificationStatus
   */
  get allergyVerificationStatus() {
    return this._allergyVerificationStatus;
  }

  /**
   * Setter for shr.allergy.AllergyVerificationStatus
   */
  set allergyVerificationStatus(allergyVerificationStatusVal) {
    this._allergyVerificationStatus = allergyVerificationStatusVal;
  }

  /**
   * Getter for shr.allergy.AdverseReactionType
   */
  get adverseReactionType() {
    return this._adverseReactionType;
  }

  /**
   * Setter for shr.allergy.AdverseReactionType
   */
  set adverseReactionType(adverseReactionTypeVal) {
    this._adverseReactionType = adverseReactionTypeVal;
  }

  /**
   * Getter for shr.condition.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Setter for shr.condition.Criticality
   */
  set criticality(criticalityVal) {
    this._criticality = criticalityVal;
  }

  /**
   * Getter for shr.observation.Manifestation
   */
  get manifestation() {
    return this._manifestation;
  }

  /**
   * Setter for shr.observation.Manifestation
   */
  set manifestation(manifestationVal) {
    this._manifestation = manifestationVal;
  }

  /**
   * Getter for shr.condition.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Setter for shr.condition.Onset
   */
  set onset(onsetVal) {
    this._onset = onsetVal;
  }

  /**
   * Getter for shr.allergy.MostRecentOccurrence
   */
  get mostRecentOccurrence() {
    return this._mostRecentOccurrence;
  }

  /**
   * Setter for shr.allergy.MostRecentOccurrence
   */
  set mostRecentOccurrence(mostRecentOccurrenceVal) {
    this._mostRecentOccurrence = mostRecentOccurrenceVal;
  }

  /**
   * Getter for shr.adverse.AdverseReaction
   */
  get adverseReaction() {
    return this._adverseReaction;
  }

  /**
   * Setter for shr.adverse.AdverseReaction
   */
  set adverseReaction(adverseReactionVal) {
    this._adverseReaction = adverseReactionVal;
  }

}

export default FluxNoKnownDrugAllergy;
