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
            event: null
        };
    }

    componentWillMount() {
        if (this.props.conditions.length > 0) {
            this.selectCondition(0);
        }

        this.selectEvent('preEncounter');
    }

    selectCondition(conditionIndex) {
        const condition = this.props.conditions[conditionIndex];
        this.props.setFullAppState('condition', condition);
        this.setState({ conditionIndex });
    }

    selectEvent(event) {
        this.props.setFullAppState('event', event);
        this.setState({ event });
    }

    setEventToPreEncounter = () => {
        this.selectEvent('preEncounter');
    }

    setEventToEncounter = () => {
        this.selectEvent('encounter');
    }

    setEventToTreatment = () => {
        this.selectEvent('treatment');
    }

    buttonClass(buttonType) {
        let event = this.state.event;
        let klass = `button ${buttonType}`;

        if (event === buttonType) {
            klass += " active";
        }

        return klass;
    }

    renderedConditionList() {
        return this.props.conditions.map((condition, index) =>
            <MenuItem key={`condition-${index}`} value={index}>{condition.specificType.coding.displayText}</MenuItem>
        );
    }


    render() {
        return (
            <div className="condition-selection">
                <Grid className="FullApp-content" fluid>
                    <Row start="xs">
                        <Col sm={6} className="full-app-event">
                            <h3>Event</h3>

                            <Row start="xs" className="event-buttons">
                                <Col xs className={this.buttonClass("preEncounter")}>
                                    <Button raised onClick={this.setEventToPreEncounter}>Pre-encounter</Button>
                                </Col>

                                <Col xs className={this.buttonClass("encounter")}>
                                    <Button raised onClick={this.setEventToEncounter}>Encounter</Button>
                                </Col>

                                <Col xs className={this.buttonClass("treatment")}>
                                    <Button raised onClick={this.setEventToTreatment}>Treatment</Button>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={6} className="condition">
                            <h3>Condition</h3>

                            <Select
                                className="condition-select"
                                value={this.state.conditionIndex}
                                onChange={(event) => this.selectCondition(event.target.value)}>
                                {this.renderedConditionList()}
                            </Select>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
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
