import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import TreatmentOptionsOutcome from '../../../mcode-pilot/components/TreatmentOptionsOutcomes/TreatmentOptionsOutcomes.jsx';
import { similarPatientTreatmentsData, similarPatientTreatments } from './mock-data';

Enzyme.configure({ adapter: new Adapter() });

describe('TreatmentOptionsOutcome', () => {
    let props, optionsOutcome;

    beforeEach(() => {
        props = {
            selectedTreatment: null,
            setSelectedTreatment: () => {},
            similarPatientTreatmentsData,
            similarPatientTreatments,
            timescale: ['1','3','5']
        };
        optionsOutcome = null;
    });

    const outcome = () => {
        if (!optionsOutcome) optionsOutcome = mount(<TreatmentOptionsOutcome {...props} />);
        return optionsOutcome;
    };

    describe('outcomes table: initial treatments', () => {
        it('renders the chemotherapy, hormonal therapy, and test therapy treatment rows', () => {
            const tableRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(tableRows).to.have.lengthOf(3);
            expect(tableRows.at(0).find('.treatment-name').text()).to.eql('test therapy');
            expect(tableRows.at(1).find('.treatment-name').text()).to.eql('chemotherapy');
            expect(tableRows.at(2).find('.treatment-name').text()).to.eql('hormonal therapy');
        });

        it('renders the total number of patients', () => {
            const tableRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(tableRows).to.have.lengthOf(3);
            expect(tableRows.at(0).find('.total-patients').text()).to.eql('(100)');
            expect(tableRows.at(1).find('.total-patients').text()).to.eql('(82)');
            expect(tableRows.at(2).find('.total-patients').text()).to.eql('(12)');
        });

        it('calculates the correct one, three, and five survival rates', () => {
            const tableRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(tableRows).to.have.lengthOf(3);

            // chemotherapy
            const barChartText1 = tableRows.at(1).find('.bar-chart-text');
            expect(barChartText1).to.have.lengthOf(3);
            expect(barChartText1.at(0).text()).to.eql('98%');
            expect(barChartText1.at(1).text()).to.eql('92%');
            expect(barChartText1.at(2).text()).to.eql('87%');

            // hormonal therapy
            const barChartText2 = tableRows.at(2).find('.bar-chart-text');
            expect(barChartText2).to.have.lengthOf(3);
            expect(barChartText2.at(0).text()).to.eql('83%');
            expect(barChartText2.at(1).text()).to.eql('66%');
            expect(barChartText2.at(2).text()).to.eql('16%');

            // test therapy
            const barChartText3 = tableRows.at(0).find('.bar-chart-text');
            expect(barChartText3).to.have.lengthOf(3);
            expect(barChartText3.at(0).text()).to.eql('96%');
            expect(barChartText3.at(1).text()).to.eql('91%');
            expect(barChartText3.at(2).text()).to.eql('91%');
        });

        it('displays the top two side effects', () => {
            const tableRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(tableRows).to.have.lengthOf(3);

            const sideEffectText1 = tableRows.at(1).find('.top-side-effects .side-effect');
            expect(sideEffectText1).to.have.lengthOf(2);
            expect(sideEffectText1.at(0).text()).to.eql('nausea/vomiting (93%)');
            expect(sideEffectText1.at(1).text()).to.eql('fatigue (85%)');

            const sideEffectText2 = tableRows.at(2).find('.top-side-effects .side-effect');
            expect(sideEffectText2).to.have.lengthOf(2);
            expect(sideEffectText2.at(0).text()).to.eql('hot flashes (83%)');
            expect(sideEffectText2.at(1).text()).to.eql('decreased libido (75%)');

            const sideEffectText3 = tableRows.at(0).find('.top-side-effects .side-effect');
            expect(sideEffectText3).to.have.lengthOf(2);
            expect(sideEffectText3.at(0).text()).to.eql('nausea/vomiting (70%)');
            expect(sideEffectText3.at(1).text()).to.eql('fatigue (70%)');
        });

        it('sorts rows based on survival', () => {
            const header = outcome().find('.header-space');
            let treatmentRows = outcome().find('.treatment-options-outcomes-table__table .table-row');

            expect(treatmentRows.at(0).find('.treatment-name').text()).to.eql('test therapy');
            expect(treatmentRows.at(1).find('.treatment-name').text()).to.eql('chemotherapy');
            expect(treatmentRows.at(2).find('.treatment-name').text()).to.eql('hormonal therapy');

            // sort by 1 yr survival
            header.at(1).simulate('click');

            treatmentRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(treatmentRows.at(0).find('.treatment-name').text()).to.eql('chemotherapy');
            expect(treatmentRows.at(1).find('.treatment-name').text()).to.eql('test therapy');
            expect(treatmentRows.at(2).find('.treatment-name').text()).to.eql('hormonal therapy');

            // sort by 5 yr survival
            header.at(3).simulate('click');

            treatmentRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(treatmentRows.at(0).find('.treatment-name').text()).to.eql('test therapy');
            expect(treatmentRows.at(1).find('.treatment-name').text()).to.eql('chemotherapy');
            expect(treatmentRows.at(2).find('.treatment-name').text()).to.eql('hormonal therapy');

            // sort by 3 yr opposite direction
            header.at(2).simulate('click');
            header.at(2).simulate('click');

            treatmentRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(treatmentRows.at(0).find('.treatment-name').text()).to.eql('hormonal therapy');
            expect(treatmentRows.at(1).find('.treatment-name').text()).to.eql('test therapy');
            expect(treatmentRows.at(2).find('.treatment-name').text()).to.eql('chemotherapy');

            // return to alphabetical
            header.at(2).simulate('click');

            treatmentRows = outcome().find('.treatment-options-outcomes-table__table .table-row');
            expect(treatmentRows.at(0).find('.treatment-name').text()).to.eql('chemotherapy');
            expect(treatmentRows.at(1).find('.treatment-name').text()).to.eql('hormonal therapy');
            expect(treatmentRows.at(2).find('.treatment-name').text()).to.eql('test therapy');
        });
    });

    describe('outcomes table: comparing treatments', () => {
        it('selects a treament when compared icon is clicked', () => {
            props = {
                ...props,
                setSelectedTreatment: jest.fn()
            };

            const compareIcons = outcome().find('.treatment-options-outcomes-table__table .compare-icon');
            let treatmentRows = outcome().find('.treatment-options-outcomes-table__table .table-row');

            expect(treatmentRows.at(0).find('.treatment-name').text()).to.eql('test therapy');
            expect(treatmentRows.at(1).find('.treatment-name').text()).to.eql('chemotherapy');
            expect(treatmentRows.at(2).find('.treatment-name').text()).to.eql('hormonal therapy');

            // select chemotherapy
            compareIcons.at(1).simulate('click');

            const [callArgs] = props.setSelectedTreatment.mock.calls;
            const [treatment] = callArgs;

            expect(treatment.displayName).to.eql('chemotherapy');
        });

        it('hormonal therapy: calculates the correct one, three, and five survival rates with comparisons', () => {
            props = {
                ...props,
                selectedTreatment: similarPatientTreatmentsData[0]
            };

            let treatmentRows = outcome().find('.treatment-options-outcomes-table__table .table-row');

            const barChartTexts = treatmentRows.at(1).find('.bar-chart-text');

            expect(barChartTexts).to.have.lengthOf(6);

            // 1 year and 1 year difference (98% / +2%)
            expect(barChartTexts.at(0).text()).to.eql('98%');
            expect(barChartTexts.at(1).text()).to.eql('2%');
            expect(barChartTexts.at(1).find('span').hasClass('fa-caret-up')).to.eql(true);

            // 3 year and 3 year difference (92% / +1%)
            expect(barChartTexts.at(2).text()).to.eql('92%');
            expect(barChartTexts.at(3).text()).to.eql('1%');
            expect(barChartTexts.at(3).find('span').hasClass('fa-caret-up')).to.eql(true);

            // 5 year and 5 year difference (87% / -4%)
            expect(barChartTexts.at(4).text()).to.eql('87%');
            expect(barChartTexts.at(5).text()).to.eql('4%');
            expect(barChartTexts.at(5).find('span').hasClass('fa-caret-down')).to.eql(true);
        });
    });
});
