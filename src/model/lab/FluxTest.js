import Test from '../shr/lab/Test';
import Quantity from '../shr/core/Quantity';

class FluxTest extends Test {
    /**
     *  Getter for quantity
     *  If _value is an instance of Quantity, will return object with properties number and unit
     *  Otherwise return null;
     */
    get quantity() {
        if (this._value instanceof Quantity) {
            return {
                number: this._value.value,
                unit: this._value.units.value.value
            };
        } else {
            return null;
        }
    }
}

export default FluxTest;