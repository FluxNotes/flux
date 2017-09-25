import {expect} from 'chai';
import lookup from '../../../src/lib/staging_lookup.jsx';


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
