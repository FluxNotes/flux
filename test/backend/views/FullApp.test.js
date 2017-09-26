import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai'

import FullApp from '../../../src/views/FullApp';

Enzyme.configure({ adapter: new Adapter() });

describe('UpdateErrors', function () { 
    it('should set state.errors to equal the provided argument', function () { 
        const wrapper = shallow(<FullApp />);
        const emptyErrors = [];
        wrapper.instance().updateErrors(emptyErrors);
        expect(wrapper.state('errors'))
            .to.be.an('array')
            .and.to.be.empty;

        const newErrors = ["anything", "anything else"];
        wrapper.instance().updateErrors(newErrors);
        expect(wrapper.state('errors'))
            .to.equal(newErrors);
    });
});