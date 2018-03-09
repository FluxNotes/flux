import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-82650858-3');

const WithTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
        ReactGA.set({
            page,
            ...options,
        });
        ReactGA.pageview(page);
    };

    const HOC = class extends Component {
        componentDidMount() {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps(nextProps) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    HOC.propTypes = {
        path: PropTypes.string.isRequired,
        location: PropTypes.object.isRequired,
        display: PropTypes.string.isRequired,
        // App is a react component, which is itself a function
        app: PropTypes.func.isRequired,
        isExact: PropTypes.bool.isRequired
    }

    return HOC;
};

export default WithTracker;
