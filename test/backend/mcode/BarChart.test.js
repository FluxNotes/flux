import React from 'react';
import {expect} from 'chai';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import BarChart from '../../../src/mcode-pilot/visualizations/BarChart/BarChart.jsx'
Enzyme.configure({ adapter: new Adapter() });

describe("BarChart", () => {
    let props;
    let barChart;
    const makeBarChart = () => {
        if (!barChart) {
            barChart = mount(
                <BarChart {...props} />
            );
        }
        return barChart;
    }

    beforeEach(() => {
        props = {
            compareToDenominator: undefined,
            compareToNumerator: undefined,
            denominator: undefined,
            numerator: undefined,
        };
        barChart = undefined;
    });

    describe("when survival decreases", () => {
        beforeEach(() => {
          props.compareToDenominator = 5;
          props.compareToNumerator = 3;
          props.denominator = 5;
          props.numerator = 2;
          barChart = makeBarChart();
        });

        it("renders a progress bar", () => {
            const divs = barChart.find(".progress-bar");
            expect(divs.length).to.equal(1);
        });

        it("renders the percent survival", ()=>{
            const divs = barChart.find(".prog-fill");
            // the % survival is 2/5 or 40%
            expect(divs.get(0).props.style.width).to.eql('40%');
            // the % increase is 1/5 or 20%
            expect(divs.get(1).props.style.width).to.eql('20%');
            // the total is 60% (3/5)
        });

        it("renders the tiny arrow percent decrease indicator", ()=>{
            const divs = barChart.find(".bar-chart-text.right-text");
            expect(divs.text()).to.eql('20%');
            const tinyArrow = barChart.find("span.tiny-arrow");
            // check if its downward facing
            expect(tinyArrow.get(0).props.className.split(' ').indexOf('fa-caret-down')).to.be.greaterThan(-1);
            // TODO: check color?
        });
    });

    describe("when survival increases", ()=>{
        beforeEach(() => {
            props.compareToDenominator = 10;
            props.compareToNumerator = 5;
            props.denominator = 10;
            props.numerator = 8;
            barChart = makeBarChart();
        });

        it("renders a progress bar", () => {
            const divs = barChart.find(".progress-bar");
            expect(divs.length).to.equal(1);
        });

        it("renders the percent survival", ()=>{
            const divs = barChart.find(".prog-fill");
            // the % survival is 7/10, but we show 5/10 first
            expect(divs.get(0).props.style.width).to.eql('50%');
            // the extra 2/10 should come next
            expect(divs.get(1).props.style.width).to.eql('30%');
            // the total is 70%
        });

        it("renders the tiny arrow percent increase indicator", ()=>{
            const divs = barChart.find(".bar-chart-text.right-text");
            expect(divs.text()).to.eql('30%');
            const tinyArrow = barChart.find("span.tiny-arrow");
            // check if its upward facing
            expect(tinyArrow.get(0).props.className.split(' ').indexOf('fa-caret-up')).to.be.greaterThan(-1);
            // TODO: check color?
        });
    });
  });
