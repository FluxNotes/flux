import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import MedicationsSection from './MedicationsSection';
import PathologySection from './PathologySection';
import ProceduresSection from './ProceduresSection';
import ImagingSection from "./ImagingSection";
import SarcomaSummarySection from './SarcomaSummarySection';
import TimelineSection from './TimelineSection';
import VisitReasonPostEncounterSection from './VisitReasonPostEncounterSection';
import VisitReasonPreEncounterSection from './VisitReasonPreEncounterSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import TreatmentOptionsSection from './TreatmentOptionsSection';
import ReviewOfSystemsSection from './ReviewOfSystemsSection';
import VitalsSection from "./VitalsSection";
import SarcomaLabsSection from "./SarcomaLabsSection";


export default class SarcomaNursePractitionerMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return { // sarcoma NP
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
                VitalsSection,
                SarcomaLabsSection,
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