import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { SlimApp } from '../../../src/containers/SlimApp';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

Enzyme.configure({ adapter: new Adapter() });

const shortcutConfigurations = {
    'Disease Status': {
        referenceDateEnabled: false
    },
    'Toxicity': {
        gradesToDisplay: [3,4,5],
        gradesPrompt: ' PATINA only calculates its endpoint based on adverse events of grades 2 through 5; therefore, only those are shown below. ',
        topAdverseEvents: [
            'Febrile neutropenia',
            'Fatigue',
            'Generalized muscle weakness',
            'Anemia',
            'Diarrhea',
            'Nausea',
            'Platelet count decreased',
            'Anorexia',
            'Constipation',
            'Bullous dermatitis',
            'Upper respiratory infection',
            'Vomiting',
            'Hot flashes',
            'Arthralgia',
            'Osteoporosis',
            'Fever',
            'Infusion related reaction',
            'Headache',
            'Cough',
            'Dyspnea'
        ]
    }
};

describe('Lite Mode - Landing', () => {
    it('Clicking progression button puts us in progression mode', () => {
        const wrapper = mount(<SlimApp
            display='Flux Notes™ Lite (for PATINA endpoints)'
            shortcuts={['Disease Status', 'Toxicity', 'Enrollment', 'Unenrolled', 'Deceased']}
            shortcutConfigurations={shortcutConfigurations}/>);
        const toxicityTab = wrapper.find('#Toxicity').find('ListItemText');
        toxicityTab.simulate('touchTap');
        const pageHeader = wrapper.find('#shortcut-viewer').find('h1').text();
        expect(pageHeader).to.eql('Toxicity', "Current header doesn't reflect expected progression page header");
    });
});

describe('Lite Mode - Toxicity', () => {
    let toxicityWrapper = null;
    beforeEach(() => {
        toxicityWrapper = mount(<SlimApp
            display='Flux Notes™ Lite (for PATINA endpoints)'
            shortcuts={['Disease Status', 'Toxicity', 'Enrollment', 'Unenrolled', 'Deceased']}
            shortcutConfigurations={shortcutConfigurations}/>);
        const toxicityTab = toxicityWrapper.find('#Toxicity').find('ListItemText');
        toxicityTab.simulate('touchTap');
    });
    afterEach(() => {
        toxicityWrapper = null;
    });
    it('Typing an adverseEvent updates copy-content', () => {
        const adverseEventInput = toxicityWrapper.find('.react-autosuggest__input');
        adverseEventInput.simulate('change', { target: { value: 'Anemia' } });
        const copyContent = toxicityWrapper.find('#copy-content');
        expect(copyContent.text()).to.contain('Anemia');
    });
    it('Changing adverseEvent via button updates copy-content', () => {
        const adverseEventButtons = toxicityWrapper.find('.btn-group-adverse-event').find('button');
        adverseEventButtons.at(0).simulate('click');
        const copyContent = toxicityWrapper.find('#copy-content');
        expect(copyContent.text()).to.contain(adverseEventButtons.at(0).text());
    });
});

describe('Lite Mode - Enrollment', () => {
    let enrollmentWrapper = null;
    beforeEach(() => {
        enrollmentWrapper = mount(<SlimApp
            display='Flux Notes™ Lite (for PATINA endpoints)'
            shortcuts={['Disease Status', 'Toxicity', 'Enrollment', 'Unenrolled', 'Deceased']}
            shortcutConfigurations={shortcutConfigurations}/>);
        const enrollmentTab = enrollmentWrapper.find('#Enrollment').find('ListItemText');
        enrollmentTab.simulate('touchTap');
    });
    afterEach(() => {
        enrollmentWrapper = null;
    });
    it('Selecting a date for enrollment updates copy-content', () => {
        const enrollmentDatePicker = enrollmentWrapper.find("#enrollment-date").find('input');
        enrollmentDatePicker.simulate('change', { target: { value: '10/06/2017' } });
        const copyContent = enrollmentWrapper.find('#copy-content');
        expect(copyContent.text()).to.contain('10/06/2017');
    });
});
