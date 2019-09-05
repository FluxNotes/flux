import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CompareUnselectedIcon extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { showHover: false };
    }

    handleMouseEnter() {
        this.setState({ showHover: true });
    }

    handleMouseLeave() {
        this.setState({ showHover: false });
    }

    render() {
        const { onClick, row } = this.props;
        const { showHover } = this.state;

        return (
            <div
                className="compare-icon"
                onClick={(event) => { onClick(event, row); }}
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1" fill="white">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.375 12.25H0L6.5625 5.25L13.125 12.25H8.75V14H4.375V12.25Z"/>
                    </mask>

                    <path
                        d="M0 12.25L-0.729537 11.5661L-2.30823 13.25H0V12.25ZM4.375 12.25H5.375V11.25H4.375V12.25ZM6.5625 5.25L7.29204 4.56606L6.5625 3.78789L5.83296 4.56606L6.5625 5.25ZM13.125 12.25V13.25H15.4332L13.8545 11.5661L13.125 12.25ZM8.75 12.25V11.25H7.75V12.25H8.75ZM8.75 14V15H9.75V14H8.75ZM4.375 14H3.375V15H4.375V14ZM0 13.25H4.375V11.25H0V13.25ZM5.83296 4.56606L-0.729537 11.5661L0.729537 12.9339L7.29204 5.93394L5.83296 4.56606ZM13.8545 11.5661L7.29204 4.56606L5.83296 5.93394L12.3955 12.9339L13.8545 11.5661ZM8.75 13.25H13.125V11.25H8.75V13.25ZM7.75 12.25V14H9.75V12.25H7.75ZM8.75 13H4.375V15H8.75V13ZM5.375 14V12.25H3.375V14H5.375Z"
                        fill={showHover ? '#028DEA' : '#DDDDDD'}
                        mask="url(#path-1-inside-1)"/>

                    <mask id="path-3-inside-2" fill="white">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.75 1.75V0H13.125V1.75L17.5 1.75L10.9375 8.75L4.375 1.75L8.75 1.75Z"/>
                    </mask>

                    <path
                        d="M8.75 1.75L8.75 2.75L9.75 2.75V1.75H8.75ZM8.75 0V-1H7.75V0H8.75ZM13.125 0H14.125V-1H13.125V0ZM13.125 1.75H12.125V2.75L13.125 2.75L13.125 1.75ZM17.5 1.75L18.2295 2.43394L19.8082 0.750001L17.5 0.75L17.5 1.75ZM10.9375 8.75L10.208 9.43394L10.9375 10.2121L11.667 9.43394L10.9375 8.75ZM4.375 1.75L4.375 0.749999L2.06677 0.749999L3.64546 2.43394L4.375 1.75ZM9.75 1.75V0H7.75V1.75H9.75ZM8.75 1H13.125V-1H8.75V1ZM12.125 0V1.75H14.125V0H12.125ZM17.5 0.75L13.125 0.75L13.125 2.75L17.5 2.75L17.5 0.75ZM11.667 9.43394L18.2295 2.43394L16.7705 1.06606L10.208 8.06606L11.667 9.43394ZM3.64546 2.43394L10.208 9.43394L11.667 8.06606L5.10454 1.06606L3.64546 2.43394ZM8.75 0.75L4.375 0.749999L4.375 2.75L8.75 2.75L8.75 0.75Z"
                        fill={showHover ? '#028DEA' : '#DDDDDD'}
                        mask="url(#path-3-inside-2)" />
                </svg>
            </div>
        );
    }
};

CompareUnselectedIcon.propTypes = {
    onClick: PropTypes.func
};
