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