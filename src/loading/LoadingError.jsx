import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Fade, Paper } from 'material-ui';

class LoadingError extends Component { 
    render() { 
        const { isSomeError, timeoutDuration, loadingErrorObject } = this.props;
        return ( 
            <Fade in={isSomeError} timeout={timeoutDuration}>
                <Paper
                    style={{
                        'position': 'absolute',
                        'top': '50%',
                        'left': '50%',
                        'transform': 'translate(-50%, -50%)',
                        'padding': '30px 0',
                        'width': '300px',
                        'textAlign': 'left'
                    }}
                >
                    <Typography
                        variant="display3"
                        style={{
                            'padding': '0 10px 15px 10px'
                        }}
                    >
                        Error Loading Data
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{
                            'padding': '0 10px 15px 10px'
                        }}
                    >
                        There was a problem loading data from the current data source: 
                    </Typography>
                    {/* If there is a loading error, log the message here */}
                    {loadingErrorObject && 
                        <Typography
                            variant="body2"
                            style={{
                                'padding': '0 10px 15px 10px'
                            }}
                        >
                            {loadingErrorObject.message} 
                        </Typography>
                    }
                </Paper>
            </Fade>
        );
    }
}

LoadingError.propTypes = {
    isSomeError: PropTypes.bool.isRequired,
    timeoutDuration: PropTypes.number.isRequired,
    loadingErrorObject: PropTypes.object
};

export default LoadingError;