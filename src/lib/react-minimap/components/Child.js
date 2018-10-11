import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';

import '../react-minimap.css';

export default class Child extends Component {
    onClick = () => {
        let visibleSections = this.props.preferenceManager.getPreference('visibleSections');
        if (_.isNull(visibleSections)) {
            visibleSections = {};
            this.props.preferenceManager.setPreference('visibleSections', visibleSections);
        }
        let currentPreference = visibleSections[this.props.title];
        // If not set in preference manager yet, assume it is visible
        if (_.isUndefined(currentPreference)) {
            currentPreference = true;
        }
        visibleSections[this.props.title] = !currentPreference;
        this.props.preferenceManager.setPreference('visibleSections', visibleSections);
    }

    render() {
        const { width, height, left, top, title, shortTitle, inEditMode } = this.props;
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

        return (
            <div style={{position: 'absolute', width, height, left, top}} className="minimap-children">
                {/* TODO: Toggle between icons based on if selected: square-o  / check-square-o*/}
                {inEditMode &&
                    <FontAwesome name="check-square-o"
                        className="minimap-title"
                        style={{top: '0px', left: '0px', position: 'absolute'}}
                        onClick={this.onClick}
                    />
                }
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
