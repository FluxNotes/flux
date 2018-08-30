import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FillPlaceholder from './FillPlaceholder';
import './PointOfCare.css';

export default class PointOfCare extends Component {
    render() {
        const { structuredFieldMapManager } = this.props;

        this.fillPlaceholders = {};
        const result = structuredFieldMapManager.placeholders.map((placeholder, index) => (
                <Row key={index}>
                    <Col xs>
                        <FillPlaceholder 
                            placeholder={placeholder} 
                            backgroundColor={(((index + 1) % 2) === 0) ? '#f8f8f8' : ''}
                            ref={(fph) => { this.fillPlaceholders[placeholder.shortcutName] = fph; }} />
                    </Col>
                </Row>
            ));

        return (
            <div id="poc-panel">
                {result}
            </div>
        );
    }

    insertStructuredPhrase = (data, source) => {
        const fph = this.fillPlaceholders['#' + data.phrase];
        if (fph) {
            return fph.fillFromData(data, source);
        } else {
            return "No placeholder found for " + data.phrase + ".";
        }
    }
}

PointOfCare.propTypes = {
    structuredFieldMapManager: PropTypes.object.isRequired,
};
