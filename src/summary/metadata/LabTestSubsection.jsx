import MetadataSection from "./MetadataSection";
import _ from 'lodash';

export default class LabTestSubsection extends MetadataSection {
    getTestsForSubSection = (patient, currentConditionEntry, subsection) => {
        if (_.isNull(patient) || _.isNull(currentConditionEntry)) return [];
        const labResults = currentConditionEntry.getLabResultsChronologicalOrder();

        return labResults.filter(lab => lab.codeableConceptCode === subsection.code).map((lab) => {
            const processedLab = {
                start_time: lab.relevantTime,
                unit: lab.quantity.unit
            };

            processedLab[subsection.name] = lab.quantity.number;

            return processedLab;
        });
    }
}
