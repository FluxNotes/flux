import MetadataSection from "./MetadataSection";
import Lang from 'lodash';

export default class VitalsSubsection extends MetadataSection {
    getVitalsForSubsection = (patient, currentConditionEntry, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        return patient.getVitalByCode(subsection.code)
            .map(v => {
                let processedVital = {};

                processedVital["start_time"] = v.relevantTime;
                processedVital[subsection.name] = v.quantity.number;
                processedVital["unit"] = v.quantity.unit;

                return processedVital;
            });
    }
}