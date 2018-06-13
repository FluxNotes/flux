import '../../../src/model/init';
import PatientRecord from '../../../src/patient/PatientRecord';
import hardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
import FakeDataElement from './FakeDataElement';
import Patient from '../../../src/model/shr/entity/Patient';
import Moment from 'moment';
import {expect} from 'chai';
import FluxPatient from '../../../src/model/entity/FluxPatient';

// The empty PatientRecord.jsx obj
const emptyPatientObj = new PatientRecord(null);
// The empty patient shr object -- an empty array 
const emptyPatient = emptyPatientObj.entries;
// The empty patient record entry -- should be null
const emptyPatientRecord = emptyPatientObj.getPatient();

// The hardcoded PatientRecord.jsx obj
const hardCodedPatientObj = new PatientRecord(hardCodedPatient);
// The patient shr object -- an array of entries
const hardCodedPatientEntries = hardCodedPatientObj.entries;
// The patient record entry -- should be an shr object
const hardCodedPatientRecord = hardCodedPatientObj.getPatient();
const hardCodedPerson = hardCodedPatientObj.getPerson();

// // Helpers
// function getValidTypeFrom(patient) { 
//     const typeUrl = patient[0]._entryInfo._entryType[0];
//     const typeName = typeUrl.substr(typeUrl.lastIndexOf('/')+1);
//     return ShrDemographicsObjectFactory.createInstance(typeName);
// } 

describe('getMostRecentEntryFromList', function () { 

    it('should return null when the list is empty', function () { 
        expect(PatientRecord.getMostRecentEntryFromList(emptyPatient))
            .to.be.null;
    });

    it('should return an element from non-empty list of entries that have the attribute lastUpdateDate', function () { 
        expect(PatientRecord.getMostRecentEntryFromList(hardCodedPatientEntries))
            .to.not.be.null;
    });

    it('should return an element (could be multiple) with the most recent last updated date from non-empty, sorted list of entries that have the attribute lastUpdateDate', function () { 
        //slice to clone obj
        const sortedList = hardCodedPatientEntries.slice().sort(function (a,b) { 
            const a_lastUpdateDate = new Moment(a.entryInfo.lastUpdated.instant, "D MMM YYYY");
            const b_lastUpdateDate = new Moment(b.entryInfo.lastUpdated.instant, "D MMM YYYY");
            if (a_lastUpdateDate < b_lastUpdateDate) { return 1; }
            if (a_lastUpdateDate > b_lastUpdateDate) { return -1; }
            return 0;
        });
        const firstElem = sortedList[0];
        expect(PatientRecord.getMostRecentEntryFromList(hardCodedPatientEntries).entryInfo.lastUpdated)
            .to.eql(firstElem.entryInfo.lastUpdated);
    });
});

describe('getPatient', function () { 

    it('should return null when there is no patient', function () { 
        expect(emptyPatientObj.getPatient())
            .to.be.null;
    });

    it('should return the patient when there is a patient', function () { 
        const personRecord = hardCodedPatientObj.getMostRecentEntryOfType(FluxPatient);
        expect(hardCodedPatientObj.getPatient())
            .to.equal(personRecord);
    });
});

describe('getName', function () { 

    it('should return null when there is no patient', function () { 
        expect(emptyPatientObj.getName())
            .to.be.null;
    });

    it('should return valid name on getName', function () { 
        expect(hardCodedPatientRecord)
            .to.not.be.null;
        // Path to name based on SHR record api. 
        const expectedName = hardCodedPerson.name;
        expect(hardCodedPatientObj.getName())
            .to.be.a('string')
            .and.to.eql(expectedName);
    });
});

describe('getDateOfBirth', function () { 

    it('should return null when there is no patient record', function () { 
        expect(emptyPatientObj.getDateOfBirth())
            .to.be.null;
    });

    it('should return valid date on getDateOfBirth when there is a person of record', function () { 
        expect(hardCodedPatientObj)
            .to.not.be.null;
        // Path to date based on SHR record api, use to create moment obj. 
        const expectedDate = hardCodedPerson.dateOfBirth;
        expect(hardCodedPatientObj.getDateOfBirth())
            .to.be.a('string')
            .and.to.equal(expectedDate);
    });
});

describe('getAge', function () { 

    it('should return null when there is no patient record', function () { 
        expect(emptyPatientObj.getDateOfBirth())
            .to.be.null;
    });

    it('should return number of years from DOB when there is a patient record', function () { 
        const DOB = hardCodedPatientObj.getDateOfBirth();
        const today = new Date();
        const birthDate = new Date(DOB);
        const m = today.getMonth() - birthDate.getMonth();
        let expectedAge = today.getFullYear() - birthDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            expectedAge--;
        }
        expect(hardCodedPatientObj.getAge())
            .to.be.a('Number')
            .and.to.equal(expectedAge);
    });
});

describe('getGender', function () { 

    it('should return null when there is no patient record', function () { 
        expect(emptyPatientObj.getGender())
            .to.be.null;
    });

    it('should return patients administrative gender when there is a patient record', function () {
        expect(hardCodedPatientRecord)
            .to.not.be.null;
        const expectedGender = hardCodedPatientRecord.gender;
        expect(hardCodedPatientObj.getGender())
            .to.be.a('string')
            .and.to.equal(expectedGender);
    });
});

describe('getConditions', function () { 
    it('should return an empty array on empty patient object', function () { 
        expect(emptyPatientObj.getConditions())
                .to.be.an('array')
                .that.is.empty;
    });

    const conditions = hardCodedPatientObj.getConditions();
    it('should return a non empty array when there are conditions', function () { 
        expect(conditions)
                .to.be.an('array')
                .that.is.not.empty;
    });
});

// below here havent been examined.
describe('getKeyEventsChronologicalOrder', function () { 
    it('should return an empty array on empty patient object', function () { 
        expect(emptyPatientObj.getKeyEventsChronologicalOrder())
                .to.be.an('array')
                .that.is.empty;
    });
});

describe('getKeyEventsForConditionChronologicalOrder', function () { 
    // get first condition on hardcoded patient to test with
    const condition = hardCodedPatientObj.getConditions()[0];
    it('should return an empty array on empty patient object', function () { 
        expect(emptyPatientObj.getKeyEventsForConditionChronologicalOrder(condition))
                .to.be.an('array')
                .that.is.empty;
    });

    const events = hardCodedPatientObj.getKeyEventsForConditionChronologicalOrder(condition);
    it('should return a non empty array when there are key events', function () { 
        expect(events)
                .to.be.an('array')
                .that.is.not.empty;
    });

    // test that the array is sorted in chronological order
    for (let i = 0; i < events.length - 1; i++) {
        it('should return an array sorted by date.', function () {
            const firstDate = new Moment(events[i].start_time, "D MMM YYYY");
            const secondDate = new Moment(events[i + 1].start_time, "D MMM YYYY");
            expect(firstDate <= secondDate).to.be.true;
        });
    }
});

describe('getMedications', function () { 
    it('should return an empty array on empty patient object', function () { 
        expect(emptyPatientObj.getMedications())
                .to.be.an('array')
                .that.is.empty;
    });

    const medications = hardCodedPatientObj.getMedications();
    it('should return a non empty array on when there are medication entries', function () { 
        expect(medications)
                .to.be.an('array')
                .that.is.not.empty;
    });
});

describe('getProcedures', function () { 
    it('should return an empty array on empty patient object', function () { 
        expect(emptyPatientObj.getProcedures())
                .to.be.an('array')
                .that.is.empty;
    });

    const procedures = hardCodedPatientObj.getProcedures();
    it('should return a non empty array on when there are procedure entries', function () { 
        expect(procedures)
                .to.be.an('array')
                .that.is.not.empty;
    });
});

describe('getProgressions', function () { 
    it('should return an empty array on empty patient object', function () { 
        expect(emptyPatientObj.getProgressions())
                .to.be.an('array')
                .that.is.empty;
    });

    const progressions = hardCodedPatientObj.getProgressions();
    it('should return a non empty array on when there are progression entries', function () { 
        expect(progressions)
                .to.be.an('array')
                .that.is.not.empty;
    });
});

// describe('getPersonOfRecord', function () {
 
//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getPersonOfRecord()).to.equal();
//     });
// });

// describe('getMRN', function () { 
 
//    it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getMRN()).to.equal();
//     });
// });

// describe('getCurrentHomeAddress', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getCurrentHomeAddress()).to.equal();
//     });
// });

// describe('getLastBreastCancerCondition', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getLastBreastCancerCondition()).to.equal();
//     });
// });

// describe('getNotes', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getNotes()).to.equal();
//     });
// });

// describe('getObservationsForCondition', function() { 

//     it('should return null', function () { 
//         getObservationsForCondition(condition, type)
//     });
// });

// describe('getMostRecentStagingForCondition', function() { 

//     it('should return null', function () { 
//         getMostRecentStagingForCondition(condition, sinceDate = null)
//     });
// });

// describe('getReceptorStatus', function() { 

//     it('should return null', function () { 
//         getReceptorStatus(condition, receptorType)
//     });
// });

// describe('getFocalConditionForProgression', function () { 

//     it('should return null', function () { 
//         getFocalConditionForProgression(progression)
//     });
// });

// describe('getMostRecentProgressionForCondition', function () { 

//     it('should return null', function () { 
//         getMostRecentProgressionForCondition(condition, sinceDate = null)
//     });
// });
