import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FillPlaceholder from './FillPlaceholder';
import {Row, Col} from 'react-flexbox-grid';

export default class PointOfCare extends Component {
    render() {
        let result = [];
        this.props.structuredFieldMapManager.placeholders.forEach((placeholder, index) => {
            result.push(
                <Row key={index}>
                    <Col xs><FillPlaceholder placeholder={placeholder} backgroundColor={(((index+1) % 2) === 0) ? 'lightgrey' : '' } /></Col>
                </Row>
            );
        });
        return (
            <div style={{width: "100%", overflowX: "hidden", overflowY: "scroll", maxHeight: "calc(100vh - 92px - 20px)", minHeight: "calc(100vh - 92px - 20px)"}}>
                {result}
            </div>
        );
    }
}

PointOfCare.propTypes = {
    structuredFieldMapManager: PropTypes.object.isRequired,
};