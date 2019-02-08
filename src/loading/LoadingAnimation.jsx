import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Fade, Paper, Typography } from 'material-ui';

class LoadingAnimation extends Component { 
    render() { 
        const { loading, timeoutDuration } = this.props;
        return (
            <Fade in={loading} timeout={timeoutDuration}>
                <Paper
                    style={{
                        'position': 'absolute',
                        'top': '50%',
                        'left': '50%',
                        'transform': 'translate(-50%, -50%)',
                        'padding': '30px 0',
                        'width': '300px',
                        'textAlign': 'center'
                    }}
                >
                    <Typography
                        variant="display3"
                        style={{
                            'padding': '0 10px 15px 10px'
                        }}
                    >
                        Loading Data
                    </Typography>
                        
                    <CircularProgress
                        style={{
                            'height': '80px',
                            'width': '80px'
                        }}
                        classes={{
                            root: 'table-loading-animation'
                        }}
                    />
                </Paper>
            </Fade>
        )
    }
}

LoadingAnimation.propTypes = {
    loading: PropTypes.bool.isRequired,
    timeoutDuration: PropTypes.number.isRequired,
};

export default LoadingAnimation;