import MetadataSection from "./MetadataSection";
import Lang from 'lodash'

export default class LabTestSubsection extends MetadataSection {
    getTestsForSubSection = (patient, currentConditionEntry, subsection) => { 
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        const labResults = currentConditionEntry.getLabResultsChronologicalOrder();
        const labs = labResults.filter((lab, i) => {
            return lab.codeableConceptCode === subsection.code;
        }).map((lab, i) => {
            const processedLab = {};
            processedLab["start_time"] = lab.relevantTime;
            processedLab[subsection.name] = lab.quantity.number;
            processedLab["unit"] = lab.quantity.unit;

            return processedLab;
        });

        return labs;
    }
}