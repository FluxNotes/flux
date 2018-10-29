import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import HemoglobinSubsection from './HemoglobinSubsection';
import MedicationsSection from './MedicationsSection';
import NeutrophilCountSubsection from './NeutrophilCountSubsection';
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
import PatientRecord from '../../patient/PatientRecord';



export default class SarcomaMetadata extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, condition, roleType, role, specialty, 
                VisitReasonPreEncounterSection,
                VisitReasonPostEncounterSection,
                SarcomaSummarySection,
                ProceduresSection,
                ImagingSection,               
                ActiveConditionsSection,
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
                            defaultTemplate: "Date of pathology report is ${.Date}. Pathologist is ${.Pathologist}."
                        },
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
                                    name: "Report Date",
                                    value: (patient, currentConditionEntry) => {
                                        const list = patient.getPathologyReportsChronologicalOrder();
                                        if (list.length === 0) return null;
                                        const report = list.pop();
                                   
                                        return  {  value: report.clinicallyRelevantTime,
                                                   isUnsigned: patient.isUnsigned(report), 
                                                   source: this.determineSource(patient, report)
                                        }
                                    }
                                },
                                {
                                    name: "Pathologist",
                                    value: (patient, currentConditionEntry) => {
                                        const list = patient.getPathologyReportsChronologicalOrder();
                                        if (list.length === 0) return null;
                                        const report = list.pop();
                                       
                                        return  {  value: report.author,
                                                   isUnsigned: patient.isUnsigned(report), 
                                                   source: this.determineSource(patient, report)
                                        }
                                    }
                                },
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
                                        const lists = patient.getPathologyReportsChronologicalOrder();
                                        if (lists.length === 0) return null;
                                        const report = lists.pop();
                                        const observation =  report.members.filter((m) => {
                                            return PatientRecord.isEntryBasedOnType(m, "TumorDimensions")
                                        }).map((ref) => {
                                            return patient.getEntryFromReference(ref);
                                        });  
                                        const size = observation.pop();
                                        return  {   value: size.quantity.value + " " + size.quantity.unit, 
                                                    isUnsigned: patient.isUnsigned(report), 
                                                    source: this.determineSource(patient, report)
                                                };
                                    }
                                },
                                {
                                    name: "Tumor Margins",
                                    value: (patient, currentConditionEntry) => {                                       
                                        const lists = patient.getPathologyReportsChronologicalOrder();
                                        if (lists.length === 0) return null;
                                        const report = lists.pop();
                                        const observation =  report.members.filter((m) => {
                                            return PatientRecord.isEntryBasedOnType(m, "TumorMargins")
                                        }).map((ref) => {
                                            return patient.getEntryFromReference(ref);
                                        }) 
                                        const margins = observation.pop(); // last is most recent
                                        return  {   value: margins.value, 
                                                    isUnsigned: patient.isUnsigned(report), 
                                                    source: this.determineSource(patient, report)
                                                };
                                    }
                                },
                                {
                                    name: "Histological Grade",
                                    value: (patient, currentConditionEntry) => {
                                        const lists = patient.getPathologyReportsChronologicalOrder();
                                        if (lists.length === 0) return null;
                                        const report = lists.pop();
                                        const observation =  report.members.filter((m) => {
                                            return PatientRecord.isEntryBasedOnType(m, "HistologicGrade")
                                        }).map((ref) => {
                                            return patient.getEntryFromReference(ref);
                                        });  
                                        const histologicalGrade = observation.pop();
                                        return  {   value: histologicalGrade.grade, 
                                                    isUnsigned: patient.isUnsigned(report), 
                                                    source: this.determineSource(patient, report)
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
                AllergiesSection,
                ReviewOfSystemsSection,
                TimelineSection,
                TreatmentOptionsSection
            )
        };
    }
}