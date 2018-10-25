import VitalsSubsection from './VitalsSubsection';
import Lang from 'lodash';

export default class BloodPressureSubsection extends VitalsSubsection {
    getVitalsForSubsection = (patient, currentConditionEntry, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        return patient.getVitalByCode("55284-4")
            .map(v => {
                let processedVital = {};
                const [systolic, diastolic] = v.value.split('/');
                processedVital["start_time"] = v.clinicallyRelevantTime;
                processedVital.unit = 'mmHg';
                processedVital["Systolic"] = systolic;
                processedVital["Diastolic"] = diastolic;
                processedVital[subsection.name] = parseInt(systolic, 10); // Scale y-axis based on systolic value (numerator)
                processedVital.series = ["Systolic", "diastolic"]; // Create two lines for each part of the blood pressure fraction

                return processedVital
            });
    }

    getMetadata = (preferencesManager, condition, roleType, role, specialty) => {
        return {
            name: "Blood Pressure",
            code: "55284-4",
            itemsFunction: this.getVitalsForSubsection,

            bands: []
        };
    }
}