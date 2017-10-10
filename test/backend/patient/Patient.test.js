import Patient from '../../../src/patient/Patient';
import hardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
import Moment from 'moment';
import {expect} from 'chai';

// The empty Patient.jsx obj
const emptyPatientObj = new Patient(null);
// The empty patient shr object -- an empty array 
const emptyPatient = emptyPatientObj.entries;
// The empty patient record entry -- should be null
const emptyPatientRecord = emptyPatientObj.getPersonOfRecord()

// The hardcoded Patient.jsx obj
const hardCodedPatientObj = new Patient(hardCodedPatient);
// The patient shr object -- an array of entries
const hardCodedPatientEntries = hardCodedPatientObj.entries;
// The patient record entry -- should be an shr object
const hardCodedPatientRecord = hardCodedPatientObj.getPersonOfRecord();

// Helpers
function getValidTypeFrom(patient) { 
    return patient[0].entryType[0];
} 


describe('getEntriesOfType', function() { 

    it('should return empty list for nonsense types', function () { 
        const invalidType1 = "nonsense";
        const invalidType2 = "http://standardhealthrecord.org/fakeNamespace/fakeDataElement";
        expect(hardCodedPatientObj.getEntriesOfType(invalidType1))
            .to.be.an('array')
            .that.is.empty;
        expect(hardCodedPatientObj.getEntriesOfType(invalidType2))
            .to.be.an('array')
            .that.is.empty;
    });

    it('should return non-empty list for type found in patient', function () { 
        // First check that hardCodedPatientEntries isn't empty
        expect(hardCodedPatientEntries)
            .to.be.an('array')
            .that.is.not.empty;

        const validType = getValidTypeFrom(hardCodedPatientEntries);
        expect(hardCodedPatientObj.getEntriesOfType(validType))
            .to.be.an('array')
            .that.is.not.empty;
    });
});


describe('getMostRecentEntryFromList', function () { 

    it('should return null when the list is empty', function () { 
        expect(Patient.getMostRecentEntryFromList(emptyPatient))
            .to.be.null;
    });

    it('should return an element from non-empty list of entries that have the attribute lastUpdateDate', function () { 
        expect(Patient.getMostRecentEntryFromList(hardCodedPatientEntries))
            .to.not.be.null;
    });

    it('should return the first element from non-empty, sorted list of entries that have the attribute lastUpdateDate', function () { 
        //slice to clone obj
        const sortedList = hardCodedPatientEntries.slice().sort(function (a,b) { 
            const a_lastUpdateDate = new Moment(a.lastUpdateDate, "D MMM YYYY");
            const b_lastUpdateDate = new Moment(b.lastUpdateDate, "D MMM YYYY");
            if (a_lastUpdateDate < b_lastUpdateDate) { return 1; }
            if (a_lastUpdateDate > b_lastUpdateDate) { return -1; }
            return 0;
        });
        const firstElem = sortedList[0];
        expect(Patient.getMostRecentEntryFromList(hardCodedPatientEntries))
            .to.eql(firstElem);
    });
});


describe('getMostRecentEntryOfType', function () { 

    it('should return null when the list is empty', function () { 
        expect(emptyPatientObj.getMostRecentEntryOfType(''))
            .to.be.null;
    });

    it('should return null when the type is nonsense', function () { 
        const invalidType1 = "nonsense";
        const invalidType2 = "http://standardhealthrecord.org/fakeNamespace/fakeDataElement";
        expect(hardCodedPatientObj.getMostRecentEntryOfType(invalidType1))
            .to.be.null;
        expect(hardCodedPatientObj.getMostRecentEntryOfType(invalidType2))
            .to.be.null;
    });

    it('should return an element from a non-empty list where >= 1 of them has the specifed type', function () { 
        const validType = getValidTypeFrom(hardCodedPatientEntries);
        expect(hardCodedPatientObj.getMostRecentEntryOfType(validType))
            .to.be.an('object')
            .that.is.not.null;
    });

    it('should return an element with the given type from a non-empty list where >= 1 of them has the specifed type', function () { 
        const validType = getValidTypeFrom(hardCodedPatientEntries);
        expect(hardCodedPatientObj.getMostRecentEntryOfType(validType))
            .to.be.an('object')
            .that.is.not.null
            .that.has.property(validType);
    });

    it('should return the most recent element with type from a non-empty list where >= 1 of them has the specifed type', function () { 
        const validType = getValidTypeFrom(hardCodedPatientEntries);
        const filteredElems = hardCodedPatientObj.getEntriesOfType(validType);
        //slice to clone obj
        const sortedList = filteredElems.slice().sort(function (a,b) { 
            const a_lastUpdateDate = new Moment(a.lastUpdateDate, "D MMM YYYY");
            const b_lastUpdateDate = new Moment(b.lastUpdateDate, "D MMM YYYY");
            if (a_lastUpdateDate < b_lastUpdateDate) { return 1; }
            if (a_lastUpdateDate > b_lastUpdateDate) { return -1; }
            return 0;
        });
        const firstElem = sortedList[0];
        expect(hardCodedPatientObj.getMostRecentEntryOfType(validType))
            .to.eql(firstElem);
    });
});


describe('getPersonOfRecord', function () { 

    it('should return null when there is no patient', function () { 
        expect(emptyPatientObj.getPersonOfRecord())
            .to.be.null;
    });

    it('should return the patient when there is a patient', function () { 
        const personRecord = hardCodedPatientObj.getMostRecentEntryOfType("http://standardhealthrecord.org/demographics/PersonOfRecord");
        expect(hardCodedPatientObj.getPersonOfRecord())
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
        const expectedName = hardCodedPatientRecord.value.value;
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

    it('should return valid date on getDateOfBirth when there is a person of ', function () { 
        expect(hardCodedPatientRecord)
            .to.not.be.null;
        // Path to date based on SHR record api, use to create moment obj. 
        const expectedDate = new Moment(hardCodedPatientRecord.dateOfBirth, "D MMM YYYY");
        expect(hardCodedPatientObj.getDateOfBirth())
            .to.be.instanceOf(Moment)
            .and.to.eql(expectedDate);
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

    it('should return paitents administrative gender when there is a patient record', function () { 
        expect(hardCodedPatientRecord)
            .to.not.be.null;
        const expectedGender = hardCodedPatientRecord.administrativeGender;
        expect(hardCodedPatientObj.getGender())
            .to.be.a('string')
            .and.to.equal(expectedGender);
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

// describe('getConditions', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getConditions()).to.equal();
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

// describe('getKeyEventsChronologicalOrder', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getKeyEventsChronologicalOrder()).to.equal();
//     });
// });

// describe('getMedications', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getMedications()).to.equal();
//     });
// });

// describe('getMedicationsChronologicalOrder', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getMedicationsChronologicalOrder()).to.equal();
//     });
// });

// describe('getProcedures', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getProcedures()).to.equal();
//     });
// });

// describe('getProceduresChronologicalOrder', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getProceduresChronologicalOrder()).to.equal();
//     });
// });

// describe('getProceduresForCondition', function() { 

//     it('should return null', function () { 
//         getProceduresForCondition(condition)
//     });
// });

// describe('getProceduresForConditionChronologicalOrder', function() { 

//     it('should return null', function () { 
//         getProceduresForConditionChronologicalOrder(condition)
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

// describe('getProgressionsChronologicalOrder', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getProgressionsChronologicalOrder()).to.equal();
//     });
// });

// describe('getProgressions', function () { 

//     it('should return null', function () { 
//         const expected = "";
//         expect(hardCodedPatientObj.getProgressions()).to.equal();
//     });
// });

// describe('getProgressionsForCondition', function () { 

//     it('should return null', function () { 
//         getProgressionsForCondition(condition)
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
