import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai';

import LandingPage from '../../../src/components/LandingPage';

Enzyme.configure({ adapter: new Adapter() });

describe('Landing', function() {
    it('Can navigate to pages', () => {
        const wrapper = shallow(<LandingPage/>);
        const fullAppDiv = wrapper.find('#link-to-full');
        expect(fullAppDiv.prop('href')).to.equal('/pilot1')
    });
});