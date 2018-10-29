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
import FluxTumorDimensions from '../../model/oncology/FluxTumorDimensions';
import FluxTumorMargins from '../../model/oncology/FluxTumorMargins';
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
                                    name: "Date",
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
<<<<<<< HEAD
                                                    isUnsigned: patient.isUnsigned(size),
                                                    source: this.determineSource(patient, size)
=======
                                                    isUnsigned: patient.isUnsigned(report), 
                                                    source: this.determineSource(patient, report)
>>>>>>> Pathology section now pulls data from report instead of evidence
                                                };
                                    }
                                },
                                {
                                    name: "Tumor Margins",
<<<<<<< HEAD
                                    value: (patient, currentConditionEntry) => {
                                        const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorMargins);
                                        if (list.length === 0) return null;
                                        const margins = list.pop(); // last is most recent
                                        return  {   value: margins.value,
                                                    isUnsigned: patient.isUnsigned(margins),
                                                    source: this.determineSource(patient, margins)
=======
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
>>>>>>> Pathology section now pulls data from report instead of evidence
                                                };
                                    }
                                },
                                {
                                    name: "Histological Grade",
                                    value: (patient, currentConditionEntry) => {
<<<<<<< HEAD
                                        let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                        return  {   value: histologicalGrade.grade,
                                                    isUnsigned: patient.isUnsigned(histologicalGrade),
                                                    source: this.determineSource(patient, histologicalGrade)
=======
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
>>>>>>> Pathology section now pulls data from report instead of evidence
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