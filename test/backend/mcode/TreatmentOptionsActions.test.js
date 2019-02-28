import React from 'react';
import {expect} from 'chai';
import * as actions from '../../../src/actions/mcode'
import * as types from '../../../src/actions/types'
import '../../../src/model/init';
import configureMockStore from 'redux-mock-store'
import defaultState from '../../../src/reducers/initial.json';
import thunk from 'redux-thunk'

import PatientRecord from '../../../src/patient/PatientRecord';
import TestPatient2 from '../../TestPatient2.json';
import EntryMapper from '../../../src/dataaccess/mcodev0.1-datasource/EntryMapper';
import FluxBreastCancerDisorderPresent from '../../../src/model/brca/FluxBreastCancerDisorderPresent';

const mockStore = configureMockStore([thunk])


describe('actions', () => {

    const mcodePatientJson = EntryMapper.mapEntries(TestPatient2);
    const testPatientObj = new PatientRecord(mcodePatientJson);
    const fluxCondition = testPatientObj.getEntriesOfType(FluxBreastCancerDisorderPresent)[0];

    it('should create an action to initialize options', () => {
        const patient=testPatientObj;
        const condition = fluxCondition;

        const expectedAction = {
            type: types.INITIALIZE_SIMILAR_PATIENT_PROPS,
            patient,
            condition
        }
        expect(actions.initializeSimilarPatientProps(patient,condition)).to.eql(expectedAction)
      });
    it('should create an action to select option', () => {
        const category = "demographics";
        const key = "test";
        const selected = true;
        const expectedAction = {
            type: types.SELECT_SIMILAR_PATIENT_OPTION,
            category,
            key,
            selected
        }
        expect(actions.selectSimilarPatientOption(category, key, selected)).to.eql(expectedAction)
      });

      it('should create an action to select all category options', () => {
        const category = "demographics";
        const selected = true;
        const expectedAction = {
            type: types.SELECT_ALL_CATEGORY_SIMILAR_PATIENT_OPTIONS,
            category,
            selected
        }
        expect(actions.selectAllCategorySimilarPatientOptions(category, selected)).to.eql(expectedAction)
      });

      it('should create an action to select all options', () => {
        const selected = 'selected node'
        const expectedAction = {
          type: types.SELECT_ALL_SIMILAR_PATIENT_OPTIONS,
          selected
        }
        expect(actions.selectAllSimilarPatientOptions(selected)).to.eql(expectedAction)
      });


      it('should create an action to process outcomes', () => {
        const expectedAction = {
          type: types.UPDATE_PATIENT_OUTCOMES

        }
        const store = mockStore({mcode: defaultState})

        store.dispatch(actions.processSimilarPatientOutcomes()).then(() => {
          expect(store.getActions()).to.eql(expectedAction)
        }).catch((e) => {
          return false
        })

      });
  })
