import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../react-minimap.css';

export default class Child extends Component {
    constructor(props) {
        super(props);

        let visibleSections = props.preferenceManager.getPreference('visibleSections');
        if (visibleSections === null) {
            visibleSections = {};
        }
        let currentPreference = visibleSections[`${props.title}-${props.conditionURL}`];

        // If not set in preference manager yet, assume it is visible and set preference
        if (_.isUndefined(currentPreference)) {
            currentPreference = true;
            visibleSections[`${props.title}-${props.conditionURL}`] = currentPreference;
            props.preferenceManager.setPreference('visibleSections', visibleSections);
        }

        this.state = {
            visible: currentPreference,
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.inEditMode !== this.props.inEditMode && nextProps.inEditMode) {
            let visibleSections = nextProps.preferenceManager.getPreference('visibleSections');
            let currentPreference = visibleSections[`${nextProps.title}-${this.props.conditionURL}`];

            // If not set in preference manager yet, assume it is visible and set preference
            if (_.isUndefined(currentPreference)) {
                currentPreference = true;
                visibleSections[`${this.props.title}-${this.props.conditionURL}`] = currentPreference;
                this.props.preferenceManager.setPreference('visibleSections', visibleSections);
            }
            this.setState({ visible: currentPreference });
        }
    }

    childClick = () => {
        const visibleSections = this.props.preferenceManager.getPreference('visibleSections');
        visibleSections[`${this.props.title}-${this.props.conditionURL}`] = !this.state.visible;
        this.props.preferenceManager.setPreference('visibleSections', visibleSections);
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const { width, height, left, top, title, shortTitle } = this.props;
        let displayTitle = title;

        /* manually render a clone div to calculate dimensions because cannot get
         * dimensions of original div until rendered by react, after which is too late
         * (cannot modify the state during render)
         */

        // create hidden clone div of title element
        const titleDiv = document.createElement('div');
        titleDiv.setAttribute('class', 'minimap-title-hidden');
        titleDiv.appendChild(document.createTextNode(title));
        document.body.appendChild(titleDiv);

        // calculate dimensions
        const titleWidth = titleDiv.scrollWidth;
        const titleHeight = titleDiv.scrollHeight;

        // remove clone div
        titleDiv.parentNode.removeChild(titleDiv);

        // determine if short title should be rendered
        if (titleWidth > width || titleHeight > height) {
            displayTitle = shortTitle;
        }

        const className = (this.props.inEditMode && !this.state.visible) ? 'shaded' : '';
        return (
            <div style={{position: 'absolute', width, height, left, top}}
                className={`minimap-children ${className}`}
                onClick={this.childClick}>
                {displayTitle &&
                    <div className="minimap-title">
                        {displayTitle}
                    </div>
                }
            </div>
        );
    }
}

Child.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    node: PropTypes.any,
    title: PropTypes.string.isRequired,
    shortTitle: PropTypes.string
};
