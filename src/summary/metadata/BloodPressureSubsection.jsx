import VitalsSubsection from './VitalsSubsection';
import Lang from 'lodash';

export default class BloodPressureSubsection extends VitalsSubsection {
    getVitalsForSubsection = (patient, currentConditionEntry, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        return patient.entries
            .filter(e => e.codeableConceptCode === "55284-4")
            .map(v => {
                let processedVital = {};
                const [systolic, diastolic] = v.value.split('/');
                processedVital["start_time"] = v.clinicallyRelevantTime;
                processedVital.unit = 'mmHg';
                processedVital.systolic = systolic;
                processedVital.diastolic = diastolic;
                processedVital[subsection.name] = parseInt(systolic, 10);
                processedVital.series = ["systolic", "diastolic"];

                return processedVital
            });
    }

    getMetadata = (preferencesManager, condition, roleType, role, specialty) => {
        return {
            name: "Blood Pressure",
            code: "55284-4",
            itemsFunction: this.getVitalsForSubsection,

            // Source: https://www.emedicinehealth.com/hemoglobin_levels/page2_em.htm
            // Source: https://www.quora.com/What-is-the-percentage-of-haemoglobin-in-blood
            bands: []
        };
    }
}