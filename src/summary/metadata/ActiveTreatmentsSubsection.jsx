import MetadataSection from './MetadataSection';
import ActiveTreatmentSummaryObjectFactory from '../activeTreatmentSummary/ActiveTreatmentSummaryObjectFactory';
import _ from 'lodash';

export default class ActiveTreatmentsSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Treatment",
            itemsFunction: this.getItemListForTreatments
        };
    }

    // Returns toxicites in the correct format to be displayed in the summary section
    getItemListForTreatments = (patient, currentConditionEntry) => {
        if (_.isNull(patient) || _.isNull(currentConditionEntry)) return [];

        const activeTreatmentSummaryObject = ActiveTreatmentSummaryObjectFactory.createInstance(patient, currentConditionEntry);
        const activeTreatmentSummaryJson = activeTreatmentSummaryObject.getActiveTreatmentSummary(patient, currentConditionEntry);

        if (_.isNull(activeTreatmentSummaryJson) || _.isUndefined(activeTreatmentSummaryJson.displayText)) return [];

        // Always use the displayText provided back from the summaryObject
        const treatmentSummaryValue = activeTreatmentSummaryJson.displayText;
        const treatments = [];

        // If there are medications, push mediations to treatments array
        if (activeTreatmentSummaryJson.medications) {
            activeTreatmentSummaryJson.medications.forEach((med) => {
                const name = `${treatmentSummaryValue} ${med.medication}`;
                const value = this.getMedValue(med, patient);
                treatments.push({
                    name,
                    value,
                    shortcut: null
                });
            });
        }

        // TO DO: Support adding relevant procedures into treatments table

        return treatments;
    }

    // Returns the value for the toxicity which includes grade, unsigned, source, and date
    getMedValue = (med, patient) => {
        const val = `${med.startDate} - ${med.endDate}`;
        const unsigned = patient.isUnsigned(med);
        const source = this.determineSource(patient, med);

        return {
            source,
            value: val,
            isUnsigned: unsigned,
        };
    }
}
