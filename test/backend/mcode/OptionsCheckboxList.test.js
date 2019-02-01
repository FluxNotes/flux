import React from 'react';
import {expect} from 'chai';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import OptionsCheckboxList from '../../../src/mcode-pilot/components/OptionsCheckboxList/OptionsCheckboxList.jsx'
Enzyme.configure({ adapter: new Adapter() });

describe("CheckboxList", () => {
    let props;
    let checkboxList;
    const checkbox = () => {
      if (!checkboxList) {
        checkboxList = mount(
          <OptionsCheckboxList {...props} />
        );
      }
      return checkboxList;
    }
  
    beforeEach(() => {
      props = {
        options: undefined,
        setSelected: undefined,
        setAllSelected: undefined,
      };
      checkboxList = undefined;
    });
    
    describe("when there is one option", () => {
        beforeEach(() => {
          props.setSelected = jest.fn();
          props.setAllSelected = jest.fn();
          props.options = {
              displayText: "Test",
              options: {
                  test: {
                      displayText: "test1",
                      selected: true,
                      value: "testing"
                  }
              }
          };
          checkboxList = checkbox();
        });
      
        it("renders header and option checkbox", () => {
            const divs = checkboxList.find("input");
            expect(divs.length).to.equal(2);
        });

        it("renders display texts correctly", ()=>{
            const headers = checkboxList.find("span[children='Test']");
            const subheaders = checkboxList.find("span[children='test1: testing']");
            const headerNumber = checkboxList.find('.selected-count').text();
            // expect to find 1 of each
            expect(headers.length && subheaders.length).to.equal(1);
            expect(headerNumber).to.eql('1/1');
        })
        it("expands and retracts", () =>{
            const expandBefore = checkboxList.state().expanded;
            checkboxList.instance().handleExpand();
            const expandAfter = checkboxList.state().expanded;
            // XOR: doesn't care if it starts out expanded or not
            expect(expandBefore ^ expandAfter).to.equal(1);
        });

      });

      describe("when there are multiple options", () => {
        beforeEach(() => {
          props.setSelected = jest.fn();
          props.setAllSelected = jest.fn();
          props.options = {
              displayText: "Test",
              options: {
                  test1: {
                      displayText: "test1",
                      selected: true,
                      value: "testing1"
                  },
                  test2: {
                    displayText: "test2",
                    selected: false,
                    value: "testing2"
                  },
                  test3: {
                    displayText: "test3",
                    selected: true,
                    value: "testing3"
                  }
              }
          };
          checkboxList = checkbox();
        });
      
        it("renders header and option checkboxes", () => {
            const divs = checkboxList.find("input");
            expect(divs.length).to.equal(4);
        });

        it("renders display texts correctly", ()=>{
            const headers = checkboxList.find("span[children='Test']");
            const subheaders = [
                checkboxList.find("span[children='test1: testing1']"),
                checkboxList.find("span[children='test2: testing2']"),
                checkboxList.find("span[children='test3: testing3']")
            ];
            const headerNumber = checkboxList.find('.selected-count').text();
            // expect to find 1 of each
            expect(headers.length).to.equal(1);
            subheaders.map((element)=>{
                expect(element.length).to.eql(1);
            });
            expect(headerNumber).to.eql('2/3');
        });

      });

  });
