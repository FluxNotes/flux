import MetadataSection from "./MetadataSection";
import WhiteBloodCellCountSubsection from './WhiteBloodCellCountSubsection';
import NeutrophilCountSubsection from "./NeutrophilCountSubsection";
import HemoglobinSubsection from "./HemoglobinSubsection";
import PlateletSubsection from "./PlateletSubsection";

export default class SarcomaLabsSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Labs",
            shortName: "Labs",
            subsectionLabel: "Lab Name",
            clinicalEvents: ["pre-encounter"],
            type: "ValueOverTime",
            data: [
                WhiteBloodCellCountSubsection,
                NeutrophilCountSubsection,
                HemoglobinSubsection,
                PlateletSubsection,
            ]
        };
    }
}