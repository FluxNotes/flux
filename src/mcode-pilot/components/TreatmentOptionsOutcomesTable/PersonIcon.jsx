import React from 'react';
import PropTypes from 'prop-types';

const PersonIcon = (props) => {
    return (
        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.86242 7.97242C8.08455 8.61437 7.08731 9 6 9C4.92835 9 3.94419 8.6254 3.17133 8C3.09002 7.9342 3.01105 7.86563 2.93456 7.79443C2.90183 7.76396 2.86955 7.73301 2.83774 7.70158C2.01182 6.88574 1.5 5.75264 1.5 4.5C1.5 2.01472 3.51472 0 6 0C8.48528 0 10.5 2.01472 10.5 4.5C10.5 5.75264 9.98818 6.88574 9.16226 7.70158C9.06644 7.79624 8.96639 7.88662 8.86242 7.97242ZM0 17C0 17 0 11.5665 2.1944 8.47084C3.18242 9.41799 4.52324 10 6 10C7.47676 10 8.81758 9.41799 9.8056 8.47084C12 11.5665 12 17 12 17H0Z" fill="#979797"/>
        </svg>
    );
};

PersonIcon.propTypes = {
    onClick: PropTypes.func
};

export default PersonIcon;
