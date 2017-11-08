import {expect} from 'chai';
import lookup from '../../../src/lib/progression_lookup.jsx';

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

describe('getStatusCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'response';
        const codeableConcept = lookup.getStatusCodeableConcept(badValue);

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
        const goodValue = 'Complete Response';
        const codeableConcept = lookup.getStatusCodeableConcept(goodValue);

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
            .eql('C0677874');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('http://ncimeta.nci.nih.gov');
    });
});

describe('getEvidenceCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'physical';
        const codeableConcept = lookup.getEvidenceCodeableConcept(badValue);

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
        const goodValue = 'Physical exam';
        const codeableConcept = lookup.getEvidenceCodeableConcept(goodValue);

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
            .eql('C0031809');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('http://ncimeta.nci.nih.gov');
    });
});

// describe('getStatusOptions', function () { 

//     it('should return _ when the argument is _ ', function () { 
//         getStatusOptions()
//     });
// });


// describe('getReasonOptions', function () { 

//     it('should return _ when the argument is _ ', function () { 
//         getReasonOptions()
//     });
// });


// describe('isValidStatus', function () { 

//     it('should return _ when the argument is _ ', function () { 
//         isValidStatus(possibleStatus)
//     });
// });


// describe('isValidReason', function () { 

//     it('should return _ when the argument is _ ', function () { 
//         isValidReason(possibleReason)
//     });
// });


// describe('findStatusIndex', function () { 

//     it('should return _ when the argument is _ ', function () { 
//         findStatusIndex(possibleStatus) 
//     });
// });


// describe('findReasonIndex', function () { 

//     it('should return _ when the argument is _ ', function () { 
//         findReasonIndex(possibleReason) 
//     });
// });