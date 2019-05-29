import React, { Component } from 'react';
import Portal from 'react-portal';
import PropTypes from 'prop-types';
import './CompletionPortal.css';

class CompletionPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {}
        };
    }

    componentDidMount() {
        this.adjustPosition();
    }

    /*
     * Adjust the rendering position of the menu
     */
    adjustPosition = () => {
        const rect = this.props.getPosition();
        const tempStyle = {};
        if (!rect) {
            tempStyle.display = 'none';
        } else {
            tempStyle.position = 'absolute';
            tempStyle.maxWidth = 320;
            tempStyle.display = 'block';
            if (window.innerHeight - rect.top < 230) {
                tempStyle.bottom = `${window.innerHeight - rect.top - window.pageYOffset}px`;
                tempStyle.left = `${rect.left + window.pageXOffset + 10}px`;
            } else {
                tempStyle.top = `${rect.top + window.pageYOffset}px`;
                tempStyle.left = `${rect.left + window.pageXOffset}px`;
            }
        }
        this.setState({
            style: tempStyle
        });
    }


    render () {
        const { style } = this.state;
        return (
            <Portal
                closeOnEsc
                closeOnOutsideClick
                isOpened={true}
                onClose={this.props.closePortal}
            >
                <div style={style} className="completion-portal" ref="completionPortal">
                    {this.props.children}
                </div>
            </Portal>
        );
    }
}

CompletionPortal.propTypes = {
    closePortal: PropTypes.func.isRequired,
    getPosition: PropTypes.func.isRequired,
};

export default CompletionPortal;