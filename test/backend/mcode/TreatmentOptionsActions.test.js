import React from 'react';
import {expect} from 'chai';
import * as actions from '../../../src/actions/mcode'
import * as types from '../../../src/actions/types'

describe('actions', () => {

    it('should create an action to initialize options', () => {
        const patientAge=54;
        const patientAgeAtDiagnosis=45;
        const patientRace="marathon";
        const patientGender="female";
        const expectedAction = {
            type: types.INITIALIZE_SIMILAR_PATIENT_PROPS,
            patientAge,
            patientAgeAtDiagnosis,
            patientRace,
            patientGender
        }
        expect(actions.initializeSimilarPatientProps(patientAge,patientAgeAtDiagnosis,patientRace,patientGender)).to.eql(expectedAction)
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
          type: types.PROCESS_SIMILAR_PATIENT_OUTCOMES

        }
        expect(actions.processSimilarPatientOutcomes()).to.eql(expectedAction)
      });
  })