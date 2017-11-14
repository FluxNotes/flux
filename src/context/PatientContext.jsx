import Context from './Context';
/*import NameInserter from '../shortcuts/NameInserter';
import DateOfBirthInserter from '../shortcuts/DateOfBirthInserter';
import AgeInserter from '../shortcuts/AgeInserter';
import GenderInserter from '../shortcuts/GenderInserter';
import PatientInserter from '../shortcuts/PatientInserter';
import ConditionInserter from '../shortcuts/ConditionInserter';
import DeceasedCreator from '../shortcuts/DeceasedCreator';
import ClinicalTrialCreator from '../shortcuts/ClinicalTrialCreator';
*/

class PatientContext extends Context {
	constructor(patient) {
		super();
		this.patient = patient;
	}
	
	getValidChildShortcuts(recurse = false) {
		/*let result = [  NameInserter, DateOfBirthInserter, AgeInserter, GenderInserter, PatientInserter, ConditionInserter, ClinicalTrialCreator, DeceasedCreator ];
		if (recurse) {
			this.getChildren().forEach((subcontext) => {
				result = result.concat(subcontext.getValidChildShortcuts(true));
			});
		}
		return result;*/
        
	}
	
	getLabel() {
		return "Patient";
	}
    getId() {
        return "Patient";
    }
}

export default PatientContext;