import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import TargetedDataSection from './TargetedDataSection';
import 'font-awesome/css/font-awesome.min.css';
import './TargetedDataSubpanel.css';
import BandedLineGraphVisualizer from './BandedLineGraphVisualizer';

class TargetedDataSubpanel extends Component {

    getConditionMetadata() {
        const {condition} = this.props;

        let codeSystem, code, conditionMetadata = null;
        if (condition != null) {
            codeSystem = condition.specificType.value.coding[0].codeSystem.value;
            code = condition.specificType.value.coding[0].value;
            conditionMetadata = this.props.summaryMetadata[codeSystem + "/" + code];
        }

        if (condition == null || conditionMetadata == null) {
            conditionMetadata = this.props.summaryMetadata["default"];
        }

        return conditionMetadata;
    }

    renderSections() {
        const clinicalEvent = this.props.clinicalEvent;
        const conditionMetadata = this.getConditionMetadata();
        if (conditionMetadata == null) {
            return null;
        }
        const {patient, condition, onItemClicked, allowItemClick, isWide} = this.props;

        return conditionMetadata.sections.filter((section, i) => {
            return !section.clinicalEvents || section.clinicalEvents.includes(clinicalEvent);
        }).map((section, i) => {
            return (
                <div key={i} data-test-summary-section={section.name}>
                    <TargetedDataSection
                        type={section.type}
                        defaultVisualizer={section.defaultVisualizer}
                        section={section}
                        patient={patient}
                        condition={condition}
                        clinicalEvent={this.props.clinicalEvent}
                        onItemClicked={onItemClicked}
                        allowItemClick={allowItemClick}
                        isWide={isWide}
                    />
                    { (i === 0) ? 
                        <BandedLineGraphVisualizer
                            data={[
                                {
                                    startTime: new Date(1513789180617),
                                    BMIValue: 25
                                },
                                {
                                    startTime: new Date(1513789180617 + 1000000),
                                    BMIValue: 27
                                },
                                {
                                    startTime: new Date(1513789180617 + 2000000),
                                    BMIValue: 22
                                },
                                {
                                    startTime: new Date(1513789180617 + 3000000),
                                    BMIValue: 23
                                },
                                {
                                    startTime: new Date(1513789180617 + 4000000),
                                    BMIValue: 21
                                },
                                {
                                    startTime: new Date(1513789180617 + 5000000),
                                    BMIValue: 29
                                },
                                {
                                    startTime: new Date(1513789180617 + 6000000),
                                    BMIValue: 31
                                },
                                {
                                    startTime: new Date(1513789180617 + 7000000),
                                    BMIValue: 22
                                },
                                {
                                    startTime: new Date(1513789180617 + 8000000),
                                    BMIValue: 33
                                },
                                {
                                    startTime: new Date(1513789180617 + 9000000),
                                    BMIValue: 21
                                },
                                {
                                    startTime: new Date(1513789180617 + 10000000),
                                    BMIValue: 26
                                },
                            ]}
                            xVar="startTime"
                            yVar="BMIValue"
                            ranges={[{}, {}]}
                        /> : 
                        null}
                    { i < conditionMetadata.sections.length - 1 ? <Divider className="divider"/> : null }
                </div>
            );
        });
    }

    renderSummaryList() {
        return (
            <div id="summary-list">
                {this.renderSections()}
            </div>
        );
    }

    render() {
        return (
            <div 
                id="condition-summary-section" 
                className={this.props.className}
            >
                {this.renderSummaryList()}
            </div>
        );
    }
}

TargetedDataSubpanel.propTypes = {
    className: PropTypes.string,
    isWide: PropTypes.bool.isRequired,
    patient: PropTypes.object,
    condition: PropTypes.object,
    summaryMetadata: PropTypes.object,
    allowItemClick: PropTypes.bool,
    onItemClicked: PropTypes.func
};

export default TargetedDataSubpanel;
