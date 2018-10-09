import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import HemoglobinSubsection from './HemoglobinSubsection';
import MedicationsSection from './MedicationsSection';
import NeutrophilCountSubsection from './NeutrophilCountSubsection';
import ProceduresSection from './ProceduresSection';
import SarcomaSummarySection from './SarcomaSummarySection';
import TimelineSection from './TimelineSection';
import TreatmentOptionsSection from './TreatmentOptionsSection';
import VisitReasonPostEncounterSection from './VisitReasonPostEncounterSection';
import VisitReasonPreEncounterSection from './VisitReasonPreEncounterSection';
import WhiteBloodCellCountSubsection from './WhiteBloodCellCountSubsection';
import FluxTumorDimensions from '../../model/oncology/FluxTumorDimensions';
import FluxTumorMargins from '../../model/oncology/FluxTumorMargins';

export default class SarcomaMetadata extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, condition, roleType, role, specialty, 
                VisitReasonPreEncounterSection, 
                VisitReasonPostEncounterSection,
                SarcomaSummarySection,
                ProceduresSection,
                ActiveConditionsSection,
                DiseaseStatusSection,
                {
                    name: "Labs",
                    shortName: "Labs",
                    clinicalEvents: ["pre-encounter"],
                    type: "ValueOverTime",
                    data: [
                        WhiteBloodCellCountSubsection,
                        NeutrophilCountSubsection,
                        HemoglobinSubsection
                    ]
                },
                MedicationsSection,
                {
                    name: "Pathology",
                    shortName: "Pathology",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Primary tumor color is ${.Color}, weight is ${.Weight}, and size is ${.Size}."
                        },
                        {
                            defaultTemplate: "Tumor margins are ${.Tumor Margins}. Histological grade is ${.Histological Grade}."
                        }

                    ],
                    data: [
                        {
                            name: "",
                            items: [

                                // TODO: When return value for items that are currently null, need to also return patient.isUnsigned(currentConditionEntry)
                                {
                                    name: "Color",
                                    value: null
                                },
                                {
                                    name: "Weight",
                                    value: null
                                },
                                {
                                    name: "Size",
                                    value: (patient, currentConditionEntry) => {
                                        const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorDimensions);
                                        if (list.length === 0) return null;
                                        const size = list.pop(); // last is most recent
                                        return [size.quantity.value + " " + size.quantity.unit, patient.isUnsigned(size), this.determineSource(patient, size)];
                                    }
                                },
                                {
                                    name: "Tumor Margins",
                                    value: (patient, currentConditionEntry) => {
                                        const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorMargins);
                                        if (list.length === 0) return null;
                                        const margins = list.pop(); // last is most recent
                                        return [margins.value, patient.isUnsigned(margins), this.determineSource(patient, margins)];
                                    }
                                },
                                {
                                    name: "Histological Grade",
                                    value: (patient, currentConditionEntry) => {
                                        let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                        return [ histologicalGrade.grade, patient.isUnsigned(histologicalGrade), this.determineSource(patient, histologicalGrade) ];
                                    }
                                },               
                            ]
                        }
                    ]
                },
                {
                    name: "Genetics",
                    shortName: "Genetics",
                    type: "NameValuePairs",
                    /*eslint no-template-curly-in-string: "off"*/
                    narrative: [
                        {
                            defaultTemplate: "Genetic Testing is ${.Genetic Testing}."
                        }
                    ],
                    data: [
                        {
                            name: "",
                            items: [
                                {
                                    name: "Genetic Testing",
                                    value: (patient, currentConditionEntry) => {
                                        const panels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
                                        if (!panels || panels.length === 0) return null;
                                        const panel = panels.pop();
                                        return [panel.members.map((item) => {
                                            const v = item.value === 'Positive' ? '+' : '-';
                                            return item.abbreviatedName + v;
                                        }).join(","), patient.isUnsigned(panel), this.determineSource(patient, panel)];
                                    }
                                }
                            ]
                        }
                    ]
                },
                AllergiesSection,
                TimelineSection,
                TreatmentOptionsSection
            )                
        };
    }
}