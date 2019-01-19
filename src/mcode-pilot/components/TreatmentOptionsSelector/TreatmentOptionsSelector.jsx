import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import './TreatmentOptionsSelector.css';

export default class TreatmentOptionsSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: true
        };
    }

    handleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { title, subTitle, subHeader, children } = this.props;
        const { expanded } = this.state;

        return (
            <div className="treatment-options-selector">
                <div className="treatment-options-selector__header" onClick={this.handleExpand}>
                    <div className="treatment-options-selector__header-icon">
                        {expanded ?
                            <FontAwesome name="angle-down" fixedWidth /> :
                            <FontAwesome name="angle-right" fixedWidth />
                        }
                    </div>

                    <div className="treatment-options-selector__header-title">{title}</div>
                    <div className="treatment-options-selector__header-subtitle">{subTitle}</div>
                    {subHeader && <div className="treatment-options-selector__header-subheader">{subHeader}</div>}
                </div>

                {expanded &&
                    <div className="treatment-options-selector__content">
                        {children}
                    </div>
                }
            </div>
        );
    }
}

TreatmentOptionsSelector.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.node.isRequired,
    subHeader: PropTypes.node,
    children: PropTypes.node.isRequired
}
