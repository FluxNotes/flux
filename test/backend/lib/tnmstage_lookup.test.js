import {expect} from 'chai';
import lookup from '../../../src/lib/tnmstage_lookup.jsx';


describe('getDescription', function () { 
    it('should return null when the argument is not a string', function () { 
        expect(lookup.getDescription([]))
            .to.be.null;
        expect(lookup.getDescription({a:'b'}))
            .to.be.null;
        expect(lookup.getDescription(1))
            .to.be.null;
    });
    
    it('should return null when the data element string is unknown ', function () { 
        expect(lookup.getDescription('nonsense'))
            .to.be.null;
        expect(lookup.getDescription('tnmstagessss'))
            .to.be.null;
    });
    
    it('should recognize tnmstage, regardless of case', function () { 
        const expectedTNMStageString = 'The stage of a cancer, assessed according to the standard established by American Joint Committee on Cancer (AJCC). TNM Stage Grouping categorizes the progression of cancer using the Roman Numeral system.';
        expect(lookup.getDescription('tnmstage'))
            .to.be.a('string')
            .and.to.equal(expectedTNMStageString);
        expect(lookup.getDescription('tnmStage'))
            .to.be.a('string')

            .and.to.equal(expectedTNMStageString);
        expect(lookup.getDescription('TNMSTAGE'))
            .to.be.a('string')
            .and.to.equal(expectedTNMStageString);
    });
    
    it('should recognize tumorsize, regardless of case', function() { 
        const expectedTumorSizeString = "Describes the original (primary) tumor.";
        expect(lookup.getDescription('tumorsize'))
            .to.be.a('string')
            .and.to.equal(expectedTumorSizeString);
        expect(lookup.getDescription('tumorSize'))
            .to.be.a('string')
            .and.to.equal(expectedTumorSizeString);
        expect(lookup.getDescription('TUMORSIZE'))
            .to.be.a('string')
            .and.to.equal(expectedTumorSizeString);
    });
    
    it('should recognize nodesize, regardless of case', function() { 
        const expectedNodeSizeString = "Describes the degree to which the cancer has reached nearby lymph nodes.";
        expect(lookup.getDescription('nodesize'))
            .to.be.a('string')
            .and.to.equal(expectedNodeSizeString);
        expect(lookup.getDescription('nodeSize'))
            .to.be.a('string')
            .and.to.equal(expectedNodeSizeString);
        expect(lookup.getDescription('NODESIZE'))
            .to.be.a('string')
            .and.to.equal(expectedNodeSizeString);
    });
    
    it('should recognize metastasis, regardless of case', function() { 
        const expectedMetastasisString = "Whether or not the cancer has spread to other parts of the body.";
        expect(lookup.getDescription('metastasis'))
            .to.be.a('string')
            .and.to.equal(expectedMetastasisString);
        expect(lookup.getDescription('METASTASIS'))
            .to.be.a('string')
            .and.to.equal(expectedMetastasisString);
    });
    
    it('should recognize prognosticstage, regardless of case', function() { 
        const expectedPrognosticStageString = "Describes the severity of the cancer based on the magnitude of the original (primary) tumor, as well as the extent to which cancer has spread in the body.";
        expect(lookup.getDescription('prognosticstage'))
            .to.be.a('string')
            .and.to.equal(expectedPrognosticStageString);
        expect(lookup.getDescription('prognosticStage'))
            .to.be.a('string')
            .and.to.equal(expectedPrognosticStageString);
        expect(lookup.getDescription('PROGNOSTICSTAGE'))
            .to.be.a('string')
            .and.to.equal(expectedPrognosticStageString);
    });
});

describe('getStagingCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'id';
        const codeableConcept = lookup.getStagingCodeableConcept(badValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .that.is.empty;
    });

    
    it('should return CodeableConcept object with correct coding/codesystem when passed a value in the list.', function() {
        const goodValue = 'IIIB';
        const codeableConcept = lookup.getStagingCodeableConcept(goodValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .eql(goodValue);
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .eql('64062008');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('urn:oid:2.16.840.1.113883.6.96');
    });
});

describe('getTStageCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 't5';
        const codeableConcept = lookup.getTStageCodeableConcept(badValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .that.is.empty;
    });

    
    it('should return CodeableConcept object with correct coding/codesystem when passed a value in the list.', function() {
        const goodValue = 'T3';
        const codeableConcept = lookup.getTStageCodeableConcept(goodValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .eql(goodValue);
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .eql('369901004');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('urn:oid:2.16.840.1.113883.6.96');
    });
});

describe('getNStageCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'n4';
        const codeableConcept = lookup.getNStageCodeableConcept(badValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .that.is.empty;
    });

    
    it('should return CodeableConcept object with correct coding/codesystem when passed a value in the list.', function() {
        const goodValue = 'N1mi';
        const codeableConcept = lookup.getNStageCodeableConcept(goodValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .eql(goodValue);
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .eql('C95955');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('urn:oid:2.16.840.1.113883.3.26.1.1');
    });
});

describe('getMStageCodeableConcept', function() {
    it('should return CodeableConcept object with empty strings when passed a value not in the list.', function() {
        const badValue = 'm2';
        const codeableConcept = lookup.getMStageCodeableConcept(badValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .that.is.empty;
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .that.is.empty;
    });

    
    it('should return CodeableConcept object with correct coding/codesystem when passed a value in the list.', function() {
        const goodValue = 'M0';
        const codeableConcept = lookup.getMStageCodeableConcept(goodValue);

        expect(codeableConcept)
            .to.be.an('object');
        expect(codeableConcept.displayText.value)
            .to.be.a('string')
            .eql(goodValue);
        expect(codeableConcept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(codeableConcept.coding[0].code)
            .to.be.a('string')
            .eql('433581000124101');
        expect(codeableConcept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql('urn:oid:2.16.840.1.113883.6.96');
    });
});


// describe('getTsForEdition', function () { 

//     it('should ', function () { 
//         lookup.getTsForEdition()
//     });
// });


// describe('getTsNamesForEdition', function () { 

//     it('should ', function () { 
//         lookup.getTsNamesForEdition()
//     });
// });


// describe('getNsForEdition', function () { 

//     it('should ', function () { 
//         lookup.getNsForEdition()
//     });
// });


// describe('getNsNamesForEdition', function () { 

//     it('should ', function () { 
//         lookup.getNsNamesForEdition()
//     });
// });


// describe('getMsForEdition', function () { 

//     it('should ', function () { 
//         lookup.getMsForEdition()
//     });
// });


// describe('getMsNamesForEdition', function () { 

//     it('should ', function () { 
//         lookup.getMsNamesForEdition()
//     });
// });


// describe('getTableForEdition', function () { 

//     it('should ', function () { 
//         lookup.getTableForEdition()
//     });
// });


// describe('isValidT', function () { 

//     it('should ', function () { 
//         lookup.isValidT()
//     });
// });


// describe('isValidN', function () { 

//     it('should ', function () { 
//         lookup.isValidN()
//     });
// });


// describe('isValidM', function () { 

//     it('should ', function () { 
//         lookup.isValidM()
//     });
// });
