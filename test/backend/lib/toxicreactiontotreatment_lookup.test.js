import {expect} from 'chai';
import lookup from '../../../src/lib/toxicreactiontotreatment_lookup.jsx';

describe('getDescription', function () { 
    it('should return null when the argument is not a string', function () { 
        expect(lookup.getDescription([]))
            .to.be.null;
        expect(lookup.getDescription({a:'b'}))
            .to.be.null;
        expect(lookup.getDescription(1))
            .to.be.null;
    });
});

describe('getAttributionCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'not sure';
        const codeableConcept = lookup.getAttributionCodeableConcept(badValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .that.is.empty;
    });

    
    it('should return CodeableConcept object with correct coding/codesystem when passed a value in the list.', function() {
        const goodValue = 'Disease';
        const codeableConcept = lookup.getAttributionCodeableConcept(goodValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .eql(goodValue);
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].value)
            .to.be.a('string')
            .eql(`#${goodValue}`);
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('https://www.meddra.org/');
    });
});

describe('getAdverseEventGradeCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'not sure';
        const codeableConcept = lookup.getAdverseEventGradeCodeableConcept(badValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .that.is.empty;
    });

    
    it('should return CodeableConcept object with correct coding/codesystem when passed a value in the list.', function() {
        const goodValue = 'Grade 1';
        const codeableConcept = lookup.getAdverseEventGradeCodeableConcept(goodValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .eql(goodValue);
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].value)
            .to.be.a('string')
            .eql('C1513302');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('http://ncimeta.nci.nih.gov');
    });
});

describe('getAdverseEventCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'not sure';
        const codeableConcept = lookup.getAdverseEventCodeableConcept(badValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .that.is.empty;
    });

    
    it('should return CodeableConcept object with correct coding/codesystem when passed a value in the list.', function() {
        const goodValue = 'Anemia';
        const codeableConcept = lookup.getAdverseEventCodeableConcept(goodValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .eql(goodValue);
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].value)
            .to.be.a('string')
            .eql('10002272');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('https://www.meddra.org/');
    });
});


// describe('getAttributionOptions', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         getAttributionOptions()
//     });
// });


// describe('getGradeOptionsForAdverseEvent', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         getGradeOptionsForAdverseEvent(adverseEventName)
//     });
// });


// describe('getGradeOptions', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         getGradeOptions()
//     });
// });


// describe('getAdverseEventOptionsForGrade', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         getAdverseEventOptionsForGrade(currentGrade)
//     });
// });


// describe('getAdverseEventOptions', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         getAdverseEventOptions()
//     });
// });


// describe('findGradeIndex', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         findGradeIndex(possibleGrade)
//     });
// });


// describe('findAdverseEventIndex', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         findAdverseEventIndex(possibleAdverseEvent)
//     });
// });


// describe('findAdverseEvent', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         findAdverseEvent(possibleAdverseEvent)
//     });
// });


// describe('isValidGrade', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         isValidGrade(possibleGrade)
//     });
// });


// describe('isValidAdverseEvent', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         isValidAdverseEvent(possibleAdverseEvent)
//     });
// });


// describe('isValidGradeForAdverseEvent', function () { 
    
//     it('should return _ when the argument is not a _', function () { 
//         isValidGradeForAdverseEvent(possibleGrade, possibleAdverseEvent)
//     });
// });
