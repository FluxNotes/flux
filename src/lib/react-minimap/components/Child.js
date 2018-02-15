import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../react-minimap.css';

export default class Child extends Component {
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

        return (
            <div style={{position: 'absolute', width, height, left, top}} className="minimap-children">
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
