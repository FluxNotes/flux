import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TreatmentOptionsSelector.css';

export default class TreatmentOptionsSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    handleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { title, children } = this.props;

        return (
            <div className="treatment-options-selector">
                <div className="treatment-options-selector__header" onClick={this.handleExpand}>
                    <div className="treatment-options-selector__header-icon">&gt;</div>
                    <div className="treatment-options-selector__header-title">{title}</div>
                </div>

                {this.state.expanded &&
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
    children: PropTypes.node.isRequired
}
