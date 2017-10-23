import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';

import './ConditionSelection.css';

class ConditionSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conditionIndex: null,
            clinicalSetting: null
        };
    }

    componentWillMount() {
        if (this.props.conditions.length > 0) {
            this.selectCondition(0);
        }

        this.selectClinicalSetting('pre-encounter');
    }

    selectCondition(conditionIndex) {
        const condition = this.props.conditions[conditionIndex];
        this.props.setFullAppState('condition', condition);
        this.setState({ conditionIndex });
    }

    selectClinicalSetting(clinicalSetting) {
        this.props.setFullAppState('clinicalSetting', clinicalSetting);
        this.setState({ clinicalSetting });
    }

    buttonClass(buttonType) {
        let clinicalSetting = this.state.clinicalSetting;
        let klass = `button ${buttonType}`;
        
        if (clinicalSetting === buttonType) {
            klass += " active";
        }

        return klass;
    }

    renderClinicalSettingList() { 
        return (
            <Row start="xs" className="event-buttons">
                {this.props.clinicalSettings.map((setting, index) => { 
                    return (
                        <Col xs className={this.buttonClass(setting)} key={`clinical-setting-${index}`}>
                            <Button raised onClick={() => {this.selectClinicalSetting(setting)}} data-test-pre-encounter-button>
                                {titlecase(setting)}
                            </Button>
                        </Col>
                    )
                })}
            </Row>                
        )
    }

    renderConditionList() {
        return this.props.conditions.map((condition, index) =>
            <MenuItem
                className="condition-item"
                key={`condition-${index}`}
                value={index}
                data-test-condition-selector-item={condition.specificType.coding.displayText}>
                {condition.specificType.coding.displayText}
            </MenuItem>
        );
    }


    render() {
        return (
            <div className="condition-selection">
                <Grid className="FullApp-content" fluid>
                    <Row start="xs">
                        <Col sm={6} className="full-app-event">
                            <h3>Event</h3>
                            {this.renderClinicalSettingList()}
                        </Col>

                        <Col sm={6} className="condition">
                            <h3>Condition</h3>

                            <Select
                                className="condition-select"
                                value={this.state.conditionIndex}
                                onChange={(event) => this.selectCondition(event.target.value)}
                                data-test-condition-selector
                            >
                                {this.renderConditionList()}
                            </Select>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

ConditionSelection.propTypes = {
    conditions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        codes: PropTypes.arrayOf(PropTypes.shape({
            system: PropTypes.string,
            code: PropTypes.string,
            display: PropTypes.string
        }))
    })),
    setFullAppState: PropTypes.func.isRequired
};

export default ConditionSelection;
