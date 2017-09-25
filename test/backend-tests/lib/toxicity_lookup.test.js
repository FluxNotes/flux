import {expect} from 'chai';
import lookup from '../../../src/lib/toxicity_lookup.jsx';


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
