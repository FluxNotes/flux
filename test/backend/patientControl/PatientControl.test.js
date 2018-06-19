import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai'
import '../../../src/model/init';

import PatientRecord from '../../../src/patient/PatientRecord';
import TestPatient from '../../TestPatient.json';
const testPatientShrId = '123456'

import PatientSearch from '../../../src/patientControl/PatientSearch'

Enzyme.configure({ adapter: new Adapter() });

// The empty PatientRecord.jsx obj
const emptyPatientObj = new PatientRecord(null);
// The empty patient shr object -- an empty array 
const emptyPatient = emptyPatientObj.entries;
// The empty patient record entry -- should be null
const emptyPatientRecord = emptyPatientObj.getPatient();

// The hardcoded PatientRecord.jsx obj
const testPatientObj = new PatientRecord(TestPatient);
// The patient shr object -- an array of entries
const testPatientEntries = testPatientObj.entries;
// The patient record entry -- should be an shr object
const testPatientRecord = testPatientObj.getPatient();
const hardCodedPerson = testPatientObj.getPerson();

describe('PatientSearch', function () { 
    // Input used in searching and expected length of suggestiosn
    const inputValue = "pre";
    const expectedLength = 4
    let didSetFullAppStateFunctionTrigger = false;
    // Should just set the higher-scoped variable to be true
    function setFullAppState(anything) { 
        didSetFullAppStateFunctionTrigger = true
    }

    it('Should update state.value when input is entered ', function () { 
        const wrapper = mount(<PatientSearch
            patient={testPatientObj}
            setFullAppState={setFullAppState}
            setSearchSelectedItem={jest.fn()}
        />);
        expect(wrapper).to.exist;
        const inputField = wrapper.find('input.react-autosuggest__input')
        inputField.simulate('change', { target: {value: inputValue}}); 
        inputField.simulate('focus'); 
        // Should update value
        expect(wrapper.state("value"))
            .to.equal(inputValue)
    });

    it('Should update state.suggestions when input is entered ', function () { 
        const wrapper = mount(<PatientSearch
            patient={testPatientObj}
            setFullAppState={setFullAppState}
            setSearchSelectedItem={jest.fn()}
        />);
        const inputField = wrapper.find('input.react-autosuggest__input')
        inputField.simulate('change', { target: {value: inputValue}}); 
        inputField.simulate('focus'); 
        // Assumes we're testing against TestPatient
        expect(testPatientObj.shrId)
            .to.equal(testPatientShrId)
        
        expect(wrapper.state('suggestions'))
            .to.be.an('array')
            .to.have.lengthOf.at.least(expectedLength)
    });

    it('Should provide suggestions in a list when input is entered and inputBox is focused ', function () { 
        const wrapper = mount(<PatientSearch
            patient={testPatientObj}
            setFullAppState={setFullAppState}
            setSearchSelectedItem={jest.fn()}
        />);        
        const inputField = wrapper.find('input.react-autosuggest__input')
        inputField.simulate('change', { target: {value: inputValue}}); 
        inputField.simulate('focus'); 
        // Assumes we're testing against TestPatient
        expect(testPatientObj.shrId)
            .to.equal(testPatientShrId)

        const suggestionList = wrapper.find('li.react-autosuggest__suggestion');
        expect(suggestionList)
            .to.have.lengthOf.at.least(expectedLength)
    });

    it('Should fire setFullAppState when you click on a suggestions ', function () { 
        // We'll expect this to be true after clicking on a suggestion
        didSetFullAppStateFunctionTrigger = false;
        const wrapper = mount(<PatientSearch
            patient={testPatientObj}
            setFullAppState={setFullAppState}
            setSearchSelectedItem={jest.fn()}
        />);        
        const inputField = wrapper.find('input.react-autosuggest__input')
        inputField.simulate('change', { target: {value: inputValue}}); 
        inputField.simulate('focus'); 
        // Assumes we're testing against TestPatient
        expect(testPatientObj.shrId)
            .to.equal(testPatientShrId)

        const suggestionList = wrapper.find('li.react-autosuggest__suggestion');
        const firstSuggestion = suggestionList.first()
        firstSuggestion.simulate('click');

        // After clicking this should be true
        expect(didSetFullAppStateFunctionTrigger)
            .to.be.true
    });
});