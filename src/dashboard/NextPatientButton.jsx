import React, { Component } from 'react';
import './NextPatientButton.css';

class NextPatientButton extends Component {

    state = {
        hovered: false,
    }

    renderNextPatientIcon = () => {
        return <svg width="68" height="49" viewBox="0 0 68 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 25.5C24.4036 25.5 30 19.9036 30 13C30 6.09644 24.4036 0.5 17.5 0.5C10.5964 0.5 5 6.09644 5 13C5 19.9036 10.5964 25.5 17.5 25.5ZM0.5 48.5C0.5 48.5 0.5 32.2929 8.19205 24.7635C10.7962 26.6198 14.0454 27.7058 17.5 27.7058C20.9546 27.7058 24.2038 26.6198 26.808 24.7635C34.5 32.2929 34.5 48.5 34.5 48.5H0.5ZM56.3839 22.1161C55.8957 21.628 55.1043 21.628 54.6161 22.1161C54.128 22.6043 54.128 23.3957 54.6161 23.8839L62.9822 32.25H42C41.3096 32.25 40.75 32.8096 40.75 33.5C40.75 34.1904 41.3096 34.75 42 34.75H62.9822L54.6161 43.1161C54.128 43.6043 54.128 44.3957 54.6161 44.8839C55.1043 45.372 55.8957 45.372 56.3839 44.8839L66.8839 34.3839C67.372 33.8957 67.372 33.1043 66.8839 32.6161L56.3839 22.1161Z" fill="#F9F9F9" />
        </svg>;
    }

    render() {
        const hovered = this.state.hovered ? 'hovered' : '';
        return (
            <div className={`patient-div`}>
                <div className={`inside ${hovered}`} onClick={() => { this.props.renderNextPatient(); }} onMouseOver={() => { this.setState({ hovered: true }); }} onMouseOut={() => { this.setState({ hovered: false }); }}>
                    <div className='patient-icon'>
                        {this.renderNextPatientIcon()}
                    </div>
                </div>
            </div>
        );
    }
}

export default NextPatientButton;