import MetadataSection from "./MetadataSection";
import ActiveConditionsSection from './ActiveConditionsSection';
import AllergiesSection from './AllergiesSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import MedicationsSection from './MedicationsSection';
import PathologySection from './PathologySection';
import ProceduresSection from './ProceduresSection';
import ReviewOfSystemsSection from './ReviewOfSystemsSection';
import SarcomaPatientSummarySection from './SarcomaPatientSummarySection';
import SarcomaConditionSummarySection from './SarcomaConditionSummarySection';
import TimelineSection from './TimelineSection';
import TreatmentOptionsSection from './TreatmentOptionsSection';
import ImagingSection from "./ImagingSection";
import VitalsSection from "./VitalsSection";
import SarcomaLabsSection from "./SarcomaLabsSection";


export default class SarcomaMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                SarcomaPatientSummarySection,
                SarcomaConditionSummarySection,
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
                                        const panels = patient.getGenomicsReportChronologicalOrder();
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