import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FillPlaceholder from './FillPlaceholder';
import './PointOfCare.css';

export default class PointOfCare extends Component {
    render() {
        const {placeholders} = this.props;
        const pocDisabledClass = this.props.isAppBlurred ? 'content-disabled' : '';

        this.fillPlaceholders = {};
        const result = placeholders.map((placeholder, index) => (
            <Row key={index}>
                <Col xs>
                    <FillPlaceholder
                        placeholder={placeholder}
                        backgroundColor={(((index + 1) % 2) === 0) ? '#F9F9F9' : ''}
                        ref={(fph) => { this.fillPlaceholders[placeholder.shortcutName] = fph; }} />
                </Col>
            </Row>
        ));

        return (
            <div id="poc-panel" className={pocDisabledClass}>
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
    placeholders: PropTypes.array.isRequired
};
