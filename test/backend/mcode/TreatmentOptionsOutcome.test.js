import React from 'react';
import {expect} from 'chai';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TreatmentOptionsOutcome from '../../../src/mcode-pilot/components/TreatmentOptionsOutcomes/TreatmentOptionsOutcomes.jsx'
import testPatients from './mock-data/testpatients.json';

Enzyme.configure({ adapter: new Adapter() });

describe("TreatmentOptionsOutcome",()=>{
    let props;
    let optionsOutcome;
    let rows;
    const outcome = () => {
      if (!optionsOutcome) {
        optionsOutcome = mount(
          <TreatmentOptionsOutcome {...props} />
        );
      }
      return optionsOutcome;
    }
  
    beforeEach(() => {
      props = {
        similarPatients: undefined
      };
      optionsOutcome = undefined;
      rows = undefined;
    });
    describe("when there are some similar patients", ()=>{
        beforeEach(() => {
            props.similarPatients = testPatients.testGroup1;
            optionsOutcome = outcome();
            rows = optionsOutcome.instance().generateRows(props.similarPatients)
          }); 

        it("should make 4 rows",()=>{
            expect(rows.length).to.eql(4);
        });

        it("should name the rows appropriately",()=>{
            const names = ['test1','test1 & test2','test2',"test1 & test2 & test3 & test4 & test5 & test6"]
            rows.forEach(row=>{
                const index = names.indexOf(row.name);
                expect(names[index]).to.eql(row.name);
                names.splice(index,1);
            });
        });

        it("should default first row as active",()=>{
            expect(rows[0].active).to.eql(true);
        });

        it("sets the correct active row and inactivates the old active row", ()=>{
            const originalRow = optionsOutcome.instance().state.rows[1];
            optionsOutcome.instance().setActiveRow(originalRow);
            expect(optionsOutcome.instance().state.rows[1].active).to.eql(true);
            expect(optionsOutcome.instance().state.rows[0].active).to.eql(false);
        });
    });


    describe("when there are a ton of patients", ()=>{
        // break from normal convention so we only make the thing once
        var newProps = { similarPatients: testPatients.testGroup2};
        const optionsOutcomeLarge = shallow(
            <TreatmentOptionsOutcome {...newProps} />)
        let newGroup = []
        for(var i = 0; i<240000; i++){
            newGroup.push(
                {
                    "demographics": {
                        "birthDate": "1954-00",
                        "gender": "male",
                        "race": "White"
                    },
                    "diseaseStatus": {
                        "disease": "http://snomed.info/sct/420120006",
                        "diagnosisDate": "2004-12",
                        "isAlive": true,
                        "survivalMonths": i%72
                    },
                    "treatments": [
                        "test" + i%12
                    ],
                    "sideEffects": [
                        ...(i%5===0?"b":[])
                    ]
                }
            )
        }
        const rows = optionsOutcomeLarge.instance().generateRows(newGroup);
        console.log(rows);
        it("should count the correct number of 1yr, 3yr, and 5yr survivals",()=>{
            rows.forEach((row)=>{
                expect(row.totalPatients).to.eql(20000);
                expect(row.oneYrSurvival).to.eql(16666);
                expect(row.threeYrSurvival).to.eql(9999);
                expect(row.fiveYrSurvival).to.eql(3333);
                expect(row.sideEffects.totalReporting).to.eql(4000);
                expect(row.sideEffects.effects.b).to.eql(4000);
            });
        });

        it("should make 12 rows", ()=>{
            expect(rows.length).to.eql(12);
        })
    })
})