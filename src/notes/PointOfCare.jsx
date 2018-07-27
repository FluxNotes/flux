import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FillPlaceholder from './FillPlaceholder';
import {Row} from 'react-flexbox-grid';

export default class PointOfCare extends Component {
    render() {
        let result = [];
        this.props.structuredFieldMapManager.keyToPlaceholderMap.forEach((placeholder, index) => {
            result.push(
                <Row key={index}>
                    <FillPlaceholder placeholder={placeholder} />
                </Row>
            );
        });
        return (
            <div>
                {result}
            </div>
        );
    }
}

PointOfCare.propTypes = {
    structuredFieldMapManager: PropTypes.object.isRequired,
};