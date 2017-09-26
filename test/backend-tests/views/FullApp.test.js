import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai'

import FullApp from '../../../src/views/FullApp';

Enzyme.configure({ adapter: new Adapter() });

describe('<FullApp />', function () { 
    it('should update state.errors with args passed to updateErrors', function () { 
        const wrapper = shallow(<FullApp />);
        const newErrors = ["anything", "anything else"];
        wrapper.instance().updateErrors(newErrors);
        expect(wrapper.state('errors'))
            .to.equal(newErrors);
    });

    it('should have an empty array for state.errors when updateErrors receives an empty array', function () { 
        const wrapper = shallow(<FullApp />);
        const firstErrors = ["anything", "anything else"];
        const newErrors = [];
        wrapper.instance().updateErrors(firstErrors);
        wrapper.instance().updateErrors(newErrors);
        expect(wrapper.state('errors'))
            .to.be.an('array')
            .and.to.be.empty;
    });

});