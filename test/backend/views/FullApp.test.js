import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai'

import FullApp from '../../../src/apps/FullApp';
import SummaryHeader from '../../../src/summary/SummaryHeader';
// import TargetedDataControl from '../../../src/summary/TargetedDataControl';
import Button from '../../../src/elements/Button';

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

describe('setFullAppState', function() {
    it('sets the state on the component', function() {
        const wrapper = shallow(<FullApp />);

        wrapper.instance().setFullAppState('testKey', 'testValue');
        expect(wrapper.state('testKey'))
            .to.eq('testValue');
    });
});

// describe('SummaryHeader', function() {
//     it('View buttons update state', function() {
//         const wrapper = shallow(<SummaryHeader />);
        
//         // // Initial state
//         // expect(wrapper.state('layout'))
//         //     .to.eq('none');

//         // // Clicking a View button changes the state
//         // const leftView = wrapper.find(Button).find('#left-collapsed-layout-button');
//         // leftView.simulate('click');
//         // expect(wrapper.state('layout'))
//         //   .to.eq('left');
//     });
// });

// describe('TargetedDataControl', function() {
//     it('noteDisplayMode buttons update state', function() {
//         const wrapper = shallow(<TargetedDataControl />);
//
//         // Initial state
//         expect(wrapper.state('noteDisplayMode'))
//             .to.eq('narrative');
//
//         // Clicking the non-default note display button changes the state
//         const leftView = wrapper.find(Button).find('#tabular-button');
//         leftView.simulate('click');
//         expect(wrapper.state('noteDisplayMode'))
//           .to.eq('tabular');
//     });
// });