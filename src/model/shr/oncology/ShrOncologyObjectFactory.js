import { getNamespaceAndName } from '../../json-helper';
import BreastCancer from './BreastCancer';
import TNMStage from './TNMStage';
import StagingSystem from './StagingSystem';
import StagingTiming from './StagingTiming';
import T_Stage from './T_Stage';
import N_Stage from './N_Stage';
import M_Stage from './M_Stage';
import HistologicGrade from './HistologicGrade';
import TubuleFormationScore from './TubuleFormationScore';
import NuclearPleomorphismScore from './NuclearPleomorphismScore';
import MitoticCountScore from './MitoticCountScore';
import BreastCancerBiomarkerPanel from './BreastCancerBiomarkerPanel';
import EstrogenReceptorStatus from './EstrogenReceptorStatus';
import ProgesteroneReceptorStatus from './ProgesteroneReceptorStatus';
import HER2ReceptorStatus from './HER2ReceptorStatus';
import HER2byImmunohistochemistry from './HER2byImmunohistochemistry';
import CompleteMembraneStainingPercent from './CompleteMembraneStainingPercent';
import HER2byInSituHybridization from './HER2byInSituHybridization';
import AverageHER2SignalsPerCell from './AverageHER2SignalsPerCell';
import AverageCEP17SignalsPerCell from './AverageCEP17SignalsPerCell';
import HER2toCEP17Ratio from './HER2toCEP17Ratio';
import Aneusomy from './Aneusomy';
import HeterogeneousSignals from './HeterogeneousSignals';
import PercentageAmplified from './PercentageAmplified';
import SpecificLaboratoryTest from './SpecificLaboratoryTest';
import CertifiedBy from './CertifiedBy';
import NuclearPositivity from './NuclearPositivity';
import PrimaryAntibody from './PrimaryAntibody';
import AverageStainingIntensity from './AverageStainingIntensity';
import StainingControl from './StainingControl';
import AllredProportionScore from './AllredProportionScore';
import AllredIntensityScore from './AllredIntensityScore';
import AllredTotalScore from './AllredTotalScore';
import OtherReceptorScoringSystem from './OtherReceptorScoringSystem';
import TumorDimensions from './TumorDimensions';
import TumorPrimaryDimensionSize from './TumorPrimaryDimensionSize';
import TumorSecondaryDimensionSize from './TumorSecondaryDimensionSize';
import SizeOfGrossTumorBed from './SizeOfGrossTumorBed';
import TumorMargins from './TumorMargins';
import TumorMarginDescription from './TumorMarginDescription';
import Cellularity from './Cellularity';
import PercentageInSituCarcinoma from './PercentageInSituCarcinoma';
import LymphaticInvolvement from './LymphaticInvolvement';
import LargestLymphNodeSize from './LargestLymphNodeSize';
import NumberOfLymphNodesInvolved from './NumberOfLymphNodesInvolved';
import DegreeOfLymphaticInvolvement from './DegreeOfLymphaticInvolvement';
import Ki_67LabelingIndex from './Ki_67LabelingIndex';
import S_PhaseFraction from './S_PhaseFraction';
import GeneticVariant from './GeneticVariant';
import Refseq from './Refseq';
import BreastCancerGeneticAnalysisPanel from './BreastCancerGeneticAnalysisPanel';
import BRCA1Variant from './BRCA1Variant';
import BRCA2Variant from './BRCA2Variant';

/**
 * Generated object factory for the shr.oncology namespace.
 */
export default class ShrOncologyObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.oncology') {
      throw new Error(`Unsupported type in ShrOncologyObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'BreastCancer': return BreastCancer.fromJSON(json);
    case 'TNMStage': return TNMStage.fromJSON(json);
    case 'StagingSystem': return StagingSystem.fromJSON(json);
    case 'StagingTiming': return StagingTiming.fromJSON(json);
    case 'T_Stage': return T_Stage.fromJSON(json);
    case 'N_Stage': return N_Stage.fromJSON(json);
    case 'M_Stage': return M_Stage.fromJSON(json);
    case 'HistologicGrade': return HistologicGrade.fromJSON(json);
    case 'TubuleFormationScore': return TubuleFormationScore.fromJSON(json);
    case 'NuclearPleomorphismScore': return NuclearPleomorphismScore.fromJSON(json);
    case 'MitoticCountScore': return MitoticCountScore.fromJSON(json);
    case 'BreastCancerBiomarkerPanel': return BreastCancerBiomarkerPanel.fromJSON(json);
    case 'EstrogenReceptorStatus': return EstrogenReceptorStatus.fromJSON(json);
    case 'ProgesteroneReceptorStatus': return ProgesteroneReceptorStatus.fromJSON(json);
    case 'HER2ReceptorStatus': return HER2ReceptorStatus.fromJSON(json);
    case 'HER2byImmunohistochemistry': return HER2byImmunohistochemistry.fromJSON(json);
    case 'CompleteMembraneStainingPercent': return CompleteMembraneStainingPercent.fromJSON(json);
    case 'HER2byInSituHybridization': return HER2byInSituHybridization.fromJSON(json);
    case 'AverageHER2SignalsPerCell': return AverageHER2SignalsPerCell.fromJSON(json);
    case 'AverageCEP17SignalsPerCell': return AverageCEP17SignalsPerCell.fromJSON(json);
    case 'HER2toCEP17Ratio': return HER2toCEP17Ratio.fromJSON(json);
    case 'Aneusomy': return Aneusomy.fromJSON(json);
    case 'HeterogeneousSignals': return HeterogeneousSignals.fromJSON(json);
    case 'PercentageAmplified': return PercentageAmplified.fromJSON(json);
    case 'SpecificLaboratoryTest': return SpecificLaboratoryTest.fromJSON(json);
    case 'CertifiedBy': return CertifiedBy.fromJSON(json);
    case 'NuclearPositivity': return NuclearPositivity.fromJSON(json);
    case 'PrimaryAntibody': return PrimaryAntibody.fromJSON(json);
    case 'AverageStainingIntensity': return AverageStainingIntensity.fromJSON(json);
    case 'StainingControl': return StainingControl.fromJSON(json);
    case 'AllredProportionScore': return AllredProportionScore.fromJSON(json);
    case 'AllredIntensityScore': return AllredIntensityScore.fromJSON(json);
    case 'AllredTotalScore': return AllredTotalScore.fromJSON(json);
    case 'OtherReceptorScoringSystem': return OtherReceptorScoringSystem.fromJSON(json);
    case 'TumorDimensions': return TumorDimensions.fromJSON(json);
    case 'TumorPrimaryDimensionSize': return TumorPrimaryDimensionSize.fromJSON(json);
    case 'TumorSecondaryDimensionSize': return TumorSecondaryDimensionSize.fromJSON(json);
    case 'SizeOfGrossTumorBed': return SizeOfGrossTumorBed.fromJSON(json);
    case 'TumorMargins': return TumorMargins.fromJSON(json);
    case 'TumorMarginDescription': return TumorMarginDescription.fromJSON(json);
    case 'Cellularity': return Cellularity.fromJSON(json);
    case 'PercentageInSituCarcinoma': return PercentageInSituCarcinoma.fromJSON(json);
    case 'LymphaticInvolvement': return LymphaticInvolvement.fromJSON(json);
    case 'LargestLymphNodeSize': return LargestLymphNodeSize.fromJSON(json);
    case 'NumberOfLymphNodesInvolved': return NumberOfLymphNodesInvolved.fromJSON(json);
    case 'DegreeOfLymphaticInvolvement': return DegreeOfLymphaticInvolvement.fromJSON(json);
    case 'Ki_67LabelingIndex': return Ki_67LabelingIndex.fromJSON(json);
    case 'S_PhaseFraction': return S_PhaseFraction.fromJSON(json);
    case 'GeneticVariant': return GeneticVariant.fromJSON(json);
    case 'Refseq': return Refseq.fromJSON(json);
    case 'BreastCancerGeneticAnalysisPanel': return BreastCancerGeneticAnalysisPanel.fromJSON(json);
    case 'BRCA1Variant': return BRCA1Variant.fromJSON(json);
    case 'BRCA2Variant': return BRCA2Variant.fromJSON(json);
    }
    throw new Error(`Unsupported type in ShrOncologyObjectFactory: ${type}`);
  }
}
