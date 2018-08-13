import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FillPlaceholder from './FillPlaceholder';
import './PointOfCare.css';

export default class PointOfCare extends Component {
    render() {
        const { structuredFieldMapManager } = this.props;

        const result = structuredFieldMapManager.placeholders.map((placeholder, index) => (
            <Row key={index}>
                <Col xs>
                    <FillPlaceholder placeholder={placeholder} backgroundColor={(((index + 1) % 2) === 0) ? 'lightgrey' : ''} />
                </Col>
            </Row>
        ));

        return (
            <div id="poc-panel">
                {result}
            </div>
        );
    }
}

PointOfCare.propTypes = {
    structuredFieldMapManager: PropTypes.object.isRequired,
};
