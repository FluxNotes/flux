import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import TargetedDataSection from './TargetedDataSection';
import 'font-awesome/css/font-awesome.min.css';
import './TargetedDataSubpanel.css';

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
        const conditionMetadata = this.getConditionMetadata();
        if (conditionMetadata == null) {
            return null;
        }
        const {patient, condition, onItemClicked, allowItemClick, isWide} = this.props;

        return conditionMetadata.sections.map((section, i) => {
            return (
                <div key={i} data-test-summary-section={section.name}>
                    <TargetedDataSection
                        type={section.type}
                        defaultVisualizer={section.defaultVisualizer}
                        section={section}
                        patient={patient}
                        condition={condition}
                        onItemClicked={onItemClicked}
                        allowItemClick={allowItemClick}
                        isWide={isWide}
                    />
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
