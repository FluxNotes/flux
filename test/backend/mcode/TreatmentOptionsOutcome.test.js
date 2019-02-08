import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import TreatmentOptionsOutcome from '../../../src/mcode-pilot/components/TreatmentOptionsOutcomes/TreatmentOptionsOutcomes.jsx';
import testPatients from './mock-data/testpatients.json';

Enzyme.configure({ adapter: new Adapter() });

describe("TreatmentOptionsOutcome", () => {
    let props, optionsOutcome;

    const outcome = () => {
      if (!optionsOutcome) optionsOutcome = mount(<TreatmentOptionsOutcome {...props} />);
      return optionsOutcome;
    };

    beforeEach(() => {
      props = { similarPatients: testPatients.testGroup1 };
      optionsOutcome = null;
    });

    describe("outcomes table", () => {
        it("renders the surgery treatment row in the included table", () => {
            expect(outcome().find('.included-treatments .table-row').first().find('.treatment-name').text()).to.eql('surgery');
        });

        it("renders the chemotherapy, hormonal, and radiation rows in the compare table", () => {
            const rows = outcome().find('.compared-treatments .table-row');

            expect(rows).to.have.lengthOf(3);

            const treatments = ['radiation therapy', 'hormonal therapy', 'chemotherapy'];
            treatments.forEach((treatment, index) => {
                expect(rows.at(index).find('.treatment-name').text()).to.eql(treatment);
            });
        });
    });

    describe("data calculations", () => {
        it("rolls up the patients who had surgery into one row", () => {
            const row = outcome().find('.included-treatments .table-row').first();

            expect(row.find('.total-patients').text()).to.eql('(3)');
        });

        it("calculates the correct one, three, and five survival rates for surgery", () => {
            const row = outcome().find('.included-treatments .table-row').first();
            const barChartTexts = row.find('.bar-chart-text');

            expect(barChartTexts).to.have.lengthOf(3);
            expect(barChartTexts.at(0).text()).to.eql('100%');
            expect(barChartTexts.at(1).text()).to.eql('66%');
            expect(barChartTexts.at(2).text()).to.eql('66%');
        });
    });
});
