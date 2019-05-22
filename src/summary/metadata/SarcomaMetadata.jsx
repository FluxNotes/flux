import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import HemoglobinSubsection from './HemoglobinSubsection';
import MedicationsSection from './MedicationsSection';
import NeutrophilCountSubsection from './NeutrophilCountSubsection';
import PathologySection from './PathologySection';
import PlateletSubsection from "./PlateletSubsection";
import ProceduresSection from './ProceduresSection';
import ReviewOfSystemsSection from './ReviewOfSystemsSection';
import SarcomaSummarySection from './SarcomaSummarySection';
import TimelineSection from './TimelineSection';
import TreatmentOptionsSection from './TreatmentOptionsSection';
import VisitReasonPostEncounterSection from './VisitReasonPostEncounterSection';
import VisitReasonPreEncounterSection from './VisitReasonPreEncounterSection';
import WhiteBloodCellCountSubsection from './WhiteBloodCellCountSubsection';
import ImagingSection from "./ImagingSection";
import BloodPressureSubsection from './BloodPressureSubsection';
import TemperatureSubsection from './TemperatureSubsection';
import WeightSubsection from './WeightSubsection';
import HeartRateSubsection from './HeartRateSubsection';



export default class SarcomaMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                VisitReasonPreEncounterSection,
                VisitReasonPostEncounterSection,
                SarcomaSummarySection,
                ActiveConditionsSection,
                MedicationsSection,
                AllergiesSection,
                ProceduresSection,
                ImagingSection,
                DiseaseStatusSection,
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
                PathologySection,
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