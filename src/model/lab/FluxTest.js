// import Test from '../shr/lab/Test';
// import SpecificType from '../shr/core/SpecificType';
// import Quantity from '../shr/core/Quantity';

// class FluxTest extends Test {
//     /**
//      *  Getter for quantity
//      *  If _value is an instance of Quantity, will return object with properties number and unit
//      *  Otherwise return null;
//      */
//     get quantity() {
//         if (this._value instanceof Quantity) {
//             return {
//                 number: this._value.value,
//                 unit: this._value.units.value.value
//             };
//         } else {
//             return null;
//         }
//     }

//     get name() { 
//         if (this._specificType instanceof SpecificType) { 
//             if (this._specificType._codeableConcept._coding.length > 0) { 
//                 return this._specificType._codeableConcept._coding[0].displayText.string;
//             } else { 
//                 return null;
//             }
//         } else { 
//             return null;
//         }        
//     }

//     get codeableConceptCode() { 
//         if (this._specificType instanceof SpecificType) { 
//             if (this._specificType._codeableConcept._coding.length > 0) { 
//                 return this._specificType._codeableConcept._coding[0].code;
//             } else { 
//                 return null;
//             }
//         } else { 
//             return null;
//         }
//     }

//     get clinicallyRelevantTime() { 
//         if (this._clinicallyRelevantTime) { 
//             return this._clinicallyRelevantTime;
//         } else { 
//             return null;
//         }
//     }
// }

// export default FluxTest;