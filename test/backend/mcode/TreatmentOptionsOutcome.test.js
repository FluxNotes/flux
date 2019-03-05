import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import TreatmentOptionsOutcome from '../../../src/mcode-pilot/components/TreatmentOptionsOutcomes/TreatmentOptionsOutcomes.jsx';
import {
    includedTreatmentData,
    comparedTreatmentData,
    similarPatientTreatments
} from './mock-data';

Enzyme.configure({ adapter: new Adapter() });

describe("TreatmentOptionsOutcome", () => {
    let props, optionsOutcome;

    beforeEach(() => {
        props = {
            comparedTreatments: ['chemotherapy', 'hormonal'],
            includedTreatments: ['surgery', 'radiation'],
            comparedTreatmentData,
            includedTreatmentData,
            similarPatientTreatments,
            selectTreatments: jest.fn()
        };
        optionsOutcome = null;
    });

    const outcome = () => {
        if (!optionsOutcome) optionsOutcome = mount(<TreatmentOptionsOutcome {...props} />);
        return optionsOutcome;
    };

    describe("outcomes table: included treatments", () => {
        it("renders the `surgery & radiation therapy` treatment row", () => {
            expect(outcome().find('.included-treatments .table-row').first().find('.treatment-name').text()).to.eql('surgery & radiation therapy');
        });

        it("renders the total number of patients", () => {
            expect(outcome().find('.included-treatments .table-row .total-patients').text()).to.eql('(10)');
        });

        it("calculates the correct one, three, and five survival rates", () => {
            const row = outcome().find('.included-treatments .table-row').first();
            const barChartTexts = row.find('.bar-chart-text');

            expect(barChartTexts).to.have.lengthOf(3);
            expect(barChartTexts.at(0).text()).to.eql('60%');
            expect(barChartTexts.at(1).text()).to.eql('40%');
            expect(barChartTexts.at(2).text()).to.eql('20%');
        });

        it("displays the top two side effects", () => {
            const row = outcome().find('.included-treatments .table-row').first();
            const sideEffectTexts = row.find('.top-side-effects .side-effect');

            expect(sideEffectTexts).to.have.lengthOf(2);
            expect(sideEffectTexts.at(0).text()).to.eql('Fatigue (80%)');
            expect(sideEffectTexts.at(1).text()).to.eql('Weight Loss (60%)');
        });
    });

    describe("outcomes table: compared treatments", () => {
        it("renders the `hormonal therapy` and `chemotherapy` treatment rows", () => {
            const treatmentRows = outcome().find('.compared-treatments .table-row');
            
            expect(treatmentRows).to.have.lengthOf(2);
            expect(treatmentRows.at(0).find('.treatment-name').text()).to.eql('hormonal therapy');
            expect(treatmentRows.at(1).find('.treatment-name').text()).to.eql('chemotherapy');
        });

        it("renders the total number of patients", () => {
            const treatmentRows = outcome().find('.compared-treatments .table-row');

            expect(treatmentRows.at(0).find('.total-patients').text()).to.eql('(12)');
            expect(treatmentRows.at(1).find('.total-patients').text()).to.eql('(20)');
        });

        it("hormonal therapy: calculates the correct one, three, and five survival rates with comparisons", () => {
            const treatmentRows = outcome().find('.compared-treatments .table-row');

            const barChartTexts = treatmentRows.at(0).find('.bar-chart-text');
            console.log(barChartTexts.at(0).text());
            expect(barChartTexts).to.have.lengthOf(6);

            // 1 year and 1 year difference (83% / +23%)
            expect(barChartTexts.at(0).text()).to.eql('83%');
            expect(barChartTexts.at(1).text()).to.eql('23%');
            expect(barChartTexts.at(1).find('span').hasClass('fa-caret-up')).to.eql(true);

            // 3 year and 3 year difference (66% / +26%)
            expect(barChartTexts.at(2).text()).to.eql('66%');
            expect(barChartTexts.at(3).text()).to.eql('26%');
            expect(barChartTexts.at(3).find('span').hasClass('fa-caret-up')).to.eql(true);

            // 5 year and 5 year difference (16% / -4%)
            expect(barChartTexts.at(4).text()).to.eql('16%');
            expect(barChartTexts.at(5).text()).to.eql('4%');
            expect(barChartTexts.at(5).find('span').hasClass('fa-caret-down')).to.eql(true);
        });

        it("chemotherapy: calculates the correct one, three, and five survival rates with comparisons", () => {
            const treatmentRows = outcome().find('.compared-treatments .table-row');

            const barChartTexts = treatmentRows.at(1).find('.bar-chart-text');

            expect(barChartTexts).to.have.lengthOf(6);

            // 1 year and 1 year difference (100% / +40%)
            expect(barChartTexts.at(0).text()).to.eql('100%');
            expect(barChartTexts.at(1).text()).to.eql('40%');
            expect(barChartTexts.at(1).find('span').hasClass('fa-caret-up')).to.eql(true);

            // 3 year and 3 year difference (100% / +60%)
            expect(barChartTexts.at(2).text()).to.eql('100%');
            expect(barChartTexts.at(3).text()).to.eql('60%');
            expect(barChartTexts.at(3).find('span').hasClass('fa-caret-up')).to.eql(true);

            // 5 year and 5 year difference (70% / +50%)
            expect(barChartTexts.at(4).text()).to.eql('70%');
            expect(barChartTexts.at(5).text()).to.eql('50%');
            expect(barChartTexts.at(5).find('span').hasClass('fa-caret-up')).to.eql(true);
        });
    });
});
