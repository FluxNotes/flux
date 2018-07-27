import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';

export default class FillPlaceholder extends Component {
    render() {
        /*
        "formSpec": {   "title": "Disease Status",
                    "attributes": [ {   "title":"Status", "type":"radioButtons", "values": {"category":"progression", "valueSet":"status"} },
                                    {   "title":"Rationale for status", "type":"checkboxes", "values": {"category":"progression", "valueSet":"reason"}}
                                  ]
                },*/
        let columns = [ <Col xs key="0">{this.props.placeholder.shortcutName}</Col> ];
        this.props.placeholder.metadata.formSpec.attributes.forEach((attribute, index) => {
            columns.push(<Col xs key={`${index}-label`}>{`${attribute.title}: `}</Col>);
            columns.push(<Col xs key={`${index}-value`}>No Data</Col>);
        });
        return (
            <Row>
                {columns}                
            </Row>
        );
    }
}

FillPlaceholder.propTypes = {
    placeholder: PropTypes.object.isRequired,
};