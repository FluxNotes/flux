import { transformedTreatmentData } from '../mock-data/mock-data.js';
import _ from 'lodash';

export default function filterTreatmentData(similarPatientProps) {
    const totalPatients = transformedTreatmentData.length;
    const similarPatients = transformedTreatmentData.filter(treatmentDataPatient => isSimilarPatient(treatmentDataPatient, similarPatientProps));

    return { totalPatients, similarPatients };
}

function isSimilarPatient(treatmentDataPatient, similarPatientProps) {
    const categoryKeys = Object.keys(similarPatientProps);

    for (let i = 0; i < categoryKeys.length; i++) {
        let category = categoryKeys[i];
        const { options } = similarPatientProps[category];
        const optionKeys = Object.keys(options);
        for (let j = 0; j < optionKeys.length; j++) {
            const option = optionKeys[j];
            if (options[option].selected) {
                const { minValue, maxValue } = options[option];
                const value = _.lowerCase(options[option].value);

                // demographics
                const { demographics, diseaseStatus , tumorMarkers, treatments} = treatmentDataPatient;
                const { race, gender, birthDate } = demographics;

                if (option === 'age') {
                    const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
                    const age = (new Date()).getFullYear() - birthYear;

                    if (age < minValue || age > maxValue) {
                        return false;
                    }
                } else if (option === 'diagnosedAge') {
                    const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
                    const [dxYear] = diseaseStatus.diagnosisDate.split('-').map((value) => parseInt(value, 10));
                    const dxAge = dxYear - birthYear;

                    if (dxAge < minValue || dxAge > maxValue) {
                        return false;
                    }
                } else if (option === 'race' && value !== _.lowerCase(race)) {
                    return false;
                } else if (option === 'gender' && value !== _.lowerCase(gender)) {
                    return false;
                } else if (option === 'ER' && (tumorMarkers.er && _.lowerCase(tumorMarkers.er) !== _.lowerCase(value))) {
                     return false
                } else if (option === 'PR' && (tumorMarkers.pr && _.lowerCase(tumorMarkers.pr) !== _.lowerCase(value))) {
                     return false
                } else if (option === 'HER2' && (tumorMarkers.her2 && _.lowerCase(tumorMarkers.her2) !== _.lowerCase(value))) {
                     return false
                } else if (option === 'stage' && (diseaseStatus.stage && _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
                     return false
                } else if (option === 'grade' && (diseaseStatus.grade && diseaseStatus.grade !== value)) {
                     return false
                }  else if (option === 'receivedRadTherapy') {
                    let hadTreatmentOption = (value === 'yes')
                    let hadTreatment = treatments.includes('radiation')
                    if((!hadTreatmentOption && hadTreatment) || (hadTreatmentOption && !hadTreatment)){
                      return false;
                    }
                } else if (option === 'receivedChemo') {
                    let hadTreatmentOption = (value === 'yes')
                    let hadTreatment = treatments.includes('chemo') || treatments.includes('chemotherapy')
                    if((!hadTreatmentOption && hadTreatment) || (hadTreatmentOption && !hadTreatment)){
                      return false;
                  }
                } else if (option === 'hadSurgery') {
                    let hadTreatmentOption = (value === 'yes')
                    let hadTreatment = treatments.includes('surgery')
                    if((!hadTreatmentOption && hadTreatment) || (hadTreatmentOption && !hadTreatment)){
                      return false;
                    }
                }

            }
        }
    }

    return true;
}
