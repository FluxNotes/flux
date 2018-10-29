import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import HemoglobinSubsection from './HemoglobinSubsection';
import MedicationsSection from './MedicationsSection';
import NeutrophilCountSubsection from './NeutrophilCountSubsection';
import PlateletSubsection from './PlateletSubsection';
import ProceduresSection from './ProceduresSection';
import ImagingSection from "./ImagingSection";
import SarcomaSummarySection from './SarcomaSummarySection';
import TimelineSection from './TimelineSection';
import VisitReasonPostEncounterSection from './VisitReasonPostEncounterSection';
import VisitReasonPreEncounterSection from './VisitReasonPreEncounterSection';
import WhiteBloodCellCountSubsection from './WhiteBloodCellCountSubsection';
import DiseaseStatusSection from './DiseaseStatusSection';
import TreatmentOptionsSection from './TreatmentOptionsSection';
import FluxTumorDimensions from '../../model/oncology/FluxTumorDimensions';
import FluxTumorMargins from '../../model/oncology/FluxTumorMargins';
import BloodPressureSubsection from './BloodPressureSubsection';
import TemperatureSubsection from './TemperatureSubsection';
import WeightSubsection from './WeightSubsection';
import HeartRateSubsection from './HeartRateSubsection';
import ReviewOfSystemsSection from './ReviewOfSystemsSection';


export default class SarcomaNursePractitionerMetadata extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return { // sarcoma NP
            sections: this.buildMetadataSections(preferencesManager, condition, roleType, role, specialty,
                VisitReasonPreEncounterSection,
                VisitReasonPostEncounterSection,
                SarcomaSummarySection,
                ProceduresSection,
                ImagingSection,
                ActiveConditionsSection,
                DiseaseStatusSection,                        
                MedicationsSection,
                AllergiesSection,   
                {
                    name: "Vitals",
                    shortName: "Vitals",
                    clinicalEvents: ["pre-encounter"],
                    type: "ValueOverTime",
                    data: [
                        BloodPressureSubsection,
                        TemperatureSubsection,
                        WeightSubsection,
                        HeartRateSubsection
                    ]
                },                 
                {
                    name: "Labs",
                    shortName: "Labs",
                    clinicalEvents: ["pre-encounter"],
                    type: "ValueOverTime",
                    data: [
                        WhiteBloodCellCountSubsection,
                        NeutrophilCountSubsection,
                        HemoglobinSubsection,
                        PlateletSubsection
                    ]
                },
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
                                        return  {   value: size.quantity.value + " " + size.quantity.unit,
                                                    isUnsigned: patient.isUnsigned(size),
                                                    source: this.determineSource(patient, size)
                                                };
                                    }
                                },
                                {
                                    name: "Tumor Margins",
                                    value: (patient, currentConditionEntry) => {
                                        const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorMargins);
                                        if (list.length === 0) return null;
                                        const margins = list.pop(); // last is most recent
                                        return  {   value: margins.value,
                                                    isUnsigned: patient.isUnsigned(margins),
                                                    source: this.determineSource(patient, margins)
                                                };
                                    }
                                },
                                {
                                    name: "Histological Grade",
                                    value: (patient, currentConditionEntry) => {
                                        let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                        return  {   value: histologicalGrade.grade,
                                                    isUnsigned: patient.isUnsigned(histologicalGrade),
                                                    source: this.determineSource(patient, histologicalGrade)
                                                };
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
                                        // for GIST, KIT and PDGFRA are mutually excusive. only show positive ones
                                        const panels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
                                        if (!panels || panels.length === 0) return null;
                                        const panel = panels.pop();
                                        return  {   value: panel.members.filter((item) => {
                                                            return (item.value === 'Positive');
                                                        }).map((item) => {
                                                            const v = item.value === 'Positive' ? '+' : '-';
                                                            return item.abbreviatedName + v;
                                                        }).join(","),
                                                    isUnsigned: patient.isUnsigned(panel),
                                                    source: this.determineSource(patient, panel)
                                                };
                                    }
                                }
                            ]
                        }
                    ]
                },
                ReviewOfSystemsSection,
                TimelineSection,
                TreatmentOptionsSection
            )
        };
    }
}