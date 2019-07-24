import React from 'react';
import PropTypes from 'prop-types';

const CompareSelectedIcon = ({ onClick }) => {
    return (
        <div className="compare-icon" onClick={onClick}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.375 12.25H0L6.5625 5.25L13.125 12.25H8.75V14H4.375V12.25Z"
                    fill="#028DEA" />

                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.75 1.75V0H13.125V1.75L17.5 1.75L10.9375 8.75L4.375 1.75L8.75 1.75Z"
                    fill="#028DEA" />
            </svg>
        </div>
    );
};

CompareSelectedIcon.propTypes = {
    onClick: PropTypes.func
};

export default CompareSelectedIcon;
