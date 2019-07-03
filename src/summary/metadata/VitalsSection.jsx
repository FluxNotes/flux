import MetadataSection from "./MetadataSection";
import BloodPressureSubsection from './BloodPressureSubsection';
import TemperatureSubsection from './TemperatureSubsection';
import WeightSubsection from './WeightSubsection';
import HeartRateSubsection from './HeartRateSubsection';

export default class VitalsSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Vitals",
            shortName: "Vitals",
            subsectionLabel: "Vital Name",
            clinicalEvents: ["pre-encounter"],
            type: "ValueOverTime",
            data: [
                BloodPressureSubsection,
                TemperatureSubsection,
                WeightSubsection,
                HeartRateSubsection
            ],
        };
    }
}