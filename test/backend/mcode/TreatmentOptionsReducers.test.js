import React from 'react';
import {expect} from 'chai';

import * as types from '../../../src/actions/types'
import reducer from '../../../src/reducers/mcode';
import defaultState from '../../../src/reducers/initial';

import stateObjects from './mock-data/testoptions.json';

describe('Reducer function', ()=>{
    it('should return initial state on empty args', ()=>{
        expect(reducer(undefined,{})).to.eql(defaultState);
    })
    describe('initialization of patient props', ()=>{
        const type = types.INITIALIZE_SIMILAR_PATIENT_PROPS
        it('should return populated new state when given normal values', ()=>{
            const action = {
                type:type,
                patientAge:700,
                patientAgeAtDiagnosis:600,
                patientRace:"marathon",
                patientGender:"female",
            };
            const newState = reducer(undefined,action).similarPatientProps.demographic.options;
            expect(newState.race.value).to.eql(action.patientRace);
            expect(newState.gender.value).to.eql(action.patientGender)
            expect(newState.age.minValue).to.eql(action.patientAge-10);
            expect(newState.age.maxValue).to.eql(action.patientAge+10);
            expect(newState.diagnosedAge.minValue).to.equal(action.patientAgeAtDiagnosis-10);
            expect(newState.diagnosedAge.maxValue).to.equal(action.patientAgeAtDiagnosis+10);
        });

        it('should output new state without invalid values', ()=>{
            const action = {
                type:type,
                patientAge:3,
                patientAgeAtDiagnosis:1,
                patientRace:"Sprint",
                patientGender:"MALE?",
            }
            const newState = reducer(undefined,action).similarPatientProps.demographic.options;
            expect(newState.race.value).to.eql("sprint");
            expect(newState.gender.value).to.eql("male")
            expect(newState.age.minValue).to.eql(0);
            expect(newState.age.maxValue).to.eql(action.patientAge+10);
            expect(newState.diagnosedAge.minValue).to.equal(0);
            expect(newState.diagnosedAge.maxValue).to.equal(action.patientAgeAtDiagnosis+10);
        });
    });

    describe("deselection of one patient option", ()=>{
        const selectState = stateObjects.unselectOne;
        const type = types.SELECT_SIMILAR_PATIENT_OPTION;
        const action = {
            type:type,
            category: "testing",
            key: "test1",
            selected: false
        }
        const newState = reducer(selectState,action);
        it("unselects chosen option", ()=>{
            expect(newState.similarPatientProps.testing.options.test1.selected).to.equal(false);
        });
        it("does not affect other options", ()=>{
            expect(newState.similarPatientProps.testing.options.test2).to.eql(selectState.similarPatientProps.testing.options.test2);
        });
        it("deselects category for not being fully selected", ()=>{
            expect(newState.similarPatientProps.testing.selected).to.equal(false);
        });

    });

    describe("selection of one patient option", ()=>{
        const selectState = stateObjects.selectOne;
        const type = types.SELECT_SIMILAR_PATIENT_OPTION;
        const action = {
            type:type,
            category: "testing",
            key: "test1",
            selected: true
        }
        const newState = reducer(selectState,action);
        it("selects chosen option", ()=>{
            expect(newState.similarPatientProps.testing.options.test1.selected).to.equal(true);
        });
        it("does not affect other options", ()=>{
            expect(newState.similarPatientProps.testing.options.test2).to.eql(selectState.similarPatientProps.testing.options.test2);
        });
        it("selects category for being fully selected", ()=>{
            expect(newState.similarPatientProps.testing.selected).to.equal(true);
        });

    });

    describe("select all options in category", ()=>{
        const selectState = stateObjects.selectAllInCategory;
        const type = types.SELECT_ALL_CATEGORY_SIMILAR_PATIENT_OPTIONS;
        const action = {
            type:type,
            category: "testing",
            selected: true
        }

        const newState = reducer(selectState,action);
        it("selects all options when they are all false", ()=>{

            const options = newState.similarPatientProps.testing.options;
            expect(options.test1.selected&&options.test2.selected&&options.test3.selected&&options.test4.selected).to.eql(true);
        });

        it("selects the category as a whole", ()=>{
            expect(newState.similarPatientProps.testing.selected).to.eql(true);
        });

        it("does not affect other categories", ()=>{
            expect(newState.similarPatientProps.testing2.selected).to.eql(false);
            expect(newState.similarPatientProps.testing2.options.test1.selected).to.eql(false);
        });
    })

    describe("unselect all options in a category", ()=>{
        const selectState = stateObjects.unselectAllInCategory;
        const type = types.SELECT_ALL_CATEGORY_SIMILAR_PATIENT_OPTIONS;
        const action = {
            type:type,
            category: "testing",
            selected: false
        }

        const newState = reducer(selectState,action);
        it("unselects all options when they are all true", ()=>{
            const options = newState.similarPatientProps.testing.options;
            expect(options.test1.selected||options.test2.selected||options.test3.selected||options.test4.selected).to.eql(false);
        });

        it("unselects the category as a whole", ()=>{
            expect(newState.similarPatientProps.testing.selected).to.eql(false);
        });

        it("does not affect other categories", ()=>{
            expect(newState.similarPatientProps.testing2.selected).to.eql(true);
            expect(newState.similarPatientProps.testing2.options.test1.selected).to.eql(true);
        });
    })

    describe("select all options in category when not every one is false", ()=>{
        const selectState = stateObjects.selectAllInCategoryFalse;
        const type = types.SELECT_ALL_CATEGORY_SIMILAR_PATIENT_OPTIONS;
        const action = {
            type:type,
            category: "testing",
            selected: true
        }

        const newState = reducer(selectState,action);
        it("selects all options when they are all false", ()=>{

            const options = newState.similarPatientProps.testing.options;
            expect(checkAllSelected(options,false,true)).to.eql(true);
        });
        it("selects the category as a whole", ()=>{
            expect(newState.similarPatientProps.testing.selected).to.eql(true);
        });
    });

    describe("select all options", ()=>{
        const selectState = stateObjects.selectAllOptions;
        const type = types.SELECT_ALL_SIMILAR_PATIENT_OPTIONS
        const action = {
            type:type,
            selected:true
        }
        const newState = reducer(selectState,action).similarPatientProps;
        it("selects every category", ()=>{
            const allCategories = checkAllSelected(newState, false, true);
            expect(allCategories).to.eql(true);
        });
        it("selects every option", ()=>{
            const allOptions = checkAllSelected(newState, true, true);
            expect(allOptions).to.eql(true);
        })
    })
    
    describe("unselect all options", ()=>{
        const selectState = stateObjects.unselectAllOptions;
        const type = types.SELECT_ALL_SIMILAR_PATIENT_OPTIONS
        const action = {
            type:type,
            selected:false
        }
        const newState = reducer(selectState,action).similarPatientProps;
        it("unselects every category", ()=>{
            const allCategories = checkAllSelected(newState, false, false);
            expect(allCategories).to.eql(true);
        });
        it("unselects every option", ()=>{
            const allOptions = checkAllSelected(newState, true, false);
            expect(allOptions).to.eql(true);
        })
    })

    // skipped "process patient outcomes" because it's just 
    // passing info to the treatment-data filter, which should just have
    // it's own test instead of one being here.


    /**
     * Small helper function that cleans up some clutter when checking
     * if all the categories/options are selected or not.
     * @param {Object} state - the object containing the categories or options
     * @param {boolean} recurse  - false to check categories, true to check the options
     * @param {boolean} selection - false to check if all selections are false, true to check if all true
     */
    function checkAllSelected(state, recurse, selection){
        if(!recurse){
            const all = Object.keys(state).reduce((i,element)=>{
                return i&&(selection?state[element].selected:!state[element].selected);
            },true);
            return all;
        }else{
            const all = Object.keys(state).reduce((i,element)=>{
                return i&&checkAllSelected(state[element].options, false, selection);
            },true);
            return all
        }

    }


})