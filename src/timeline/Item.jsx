import React from 'react';
import PropTypes from 'prop-types';

// Item provides custom rendering of the the content of a timeline item.
// Items may have any combination of:
// icon - a font-awesome icon to display before the title
// title - a title to display
// details - additional information to display next to the title
function Item({ item }) {
    let icon = null;
    let details = null;

    if (item.icon) {
        icon = (
            <span>
                <i className={'point fa fa-' + item.icon} />
            </span>
        );
    }

    if (item.details) {
        details = (
            <span>
                &nbsp;&nbsp;|&nbsp;&nbsp; {item.details}
            </span>
        );
    }

    const itemId = `timeline-item-${item.id}`;

    return (
        <div id={itemId} className="item" onTouchStart={item.itemProps.onTouchStart} onTouchEnd={item.itemProps.onTouchEnd}>
                {icon}
                <strong>{item.title}</strong>
                {details}
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired
};

export default Item;