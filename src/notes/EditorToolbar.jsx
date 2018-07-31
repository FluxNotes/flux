import React from 'react'
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './EditorToolbar.css';
import ActiveContextsBreadcrumbs from './ActiveContextsBreadcrumbs.jsx';

class EditorToolbar extends React.Component {

    handleMarkCheck = (type) => {
        return this.props.onMarkCheck(type);
    }

    handleBlockCheck = (type) => {
        return this.props.onBlockCheck(type);
    }

    handleMarkUpdate = (type) => {
        return this.props.onMarkUpdate(type);
    }

    handleBlockUpdate = (type) => {
        return this.props.onBlockUpdate(type)
    }

    handleCopyClick = (type) => {
        console.log("clicked copy");
    }

    /**
     * When a mark button is clicked, toggle the current mark.
     */
    onClickMark = (e, type) => {

        // Only handle click if not in read only mode
        if (!this.props.isReadOnly) {
            e.preventDefault()
            this.handleMarkUpdate(type);
        }
    }

    /**
     * When a block button is clicked, toggle the block type.
     */
    onClickBlock = (e, type) => {

        // Only handle click if not in read only mode
        if(!this.props.isReadOnly) {
            e.preventDefault()
            this.handleBlockUpdate(type);
        }
    }

    /**
     * Render a mark-toggling toolbar button.
     */
    renderMarkButton = (type, icon) => {
        let cursorStyle = "pointer";

        // If editor is in read only, change the cursor to indicate button is not clickable
        if (this.props.isReadOnly) {
            cursorStyle = "default";
        } else {
            cursorStyle = "pointer";
        }

        const isActive = this.handleMarkCheck(type)
        const onMouseDown = e => this.onClickMark(e, type)

        return (
            <span className="button" style={{cursor:cursorStyle}} onMouseDown={onMouseDown} data-active={isActive}>
                <i className={"fa fa-fw " + icon} aria-label={"Make text " + type}></i>
            </span>
        )
    }
    /**
     * Render a block-toggling toolbar button.
     */
    renderBlockButton = (type, icon) => {
        let cursorStyle = "pointer";

        // If editor is in read only, change the cursor to indicate button is not clickable
        if (this.props.isReadOnly) {
            cursorStyle = "default";
        } else {
            cursorStyle = "pointer";
        }
        const isActive = this.handleBlockCheck(type + '-item')
        const onMouseDown = e => this.onClickBlock(e, type)

        return (
            <span className="button" style={{cursor:cursorStyle}} onMouseDown={onMouseDown} data-active={isActive}>
                <i className={"fa fa-fw " + icon} aria-label={"Make text " + type}></i>
            </span>
        )
    }
    /**
     * Render the toolbar.
     */
    renderToolbar = () => {
        return (
            <div className="menu toolbar-menu">
                {this.renderMarkButton('bold', 'fa-bold ')}
                {this.renderMarkButton('italic', 'fa-italic')}
                {this.renderMarkButton('underlined', 'fa-underline')}
                {this.renderBlockButton('bulleted-list', 'fa-list')}
                {this.renderBlockButton('numbered-list', 'fa-list-ol')}
            </div>
        )
    }
    renderCopyButton = () => { 
        if (this.props.patient == null) {
            return (
                <span id="copy-button" style={{cursor:'pointer'}}>
                    <i className="fa fa-files-o" aria-label="copy button" onClick={(e) => this.handleCopyClick(e)}></i>
                </span>
            );
        } else {
            return null;
        }
    }
    renderLoadingNotification = () => { 
        return (
            <div id="loading-notification">
                <span className="loading-breadcrumb-separator">|</span>
                <p id="loading-text"> 
                    NLP Processing...
                </p>
            </div>
        );
    }
    /**
     * Render the toolbar.
     */
    render = () => {
        return (
            <div className="menu toolbar-menu">
                {this.renderMarkButton('bold', 'fa-bold ')}
                {this.renderMarkButton('italic', 'fa-italic')}
                {this.renderMarkButton('underlined', 'fa-underline')}
                {this.renderBlockButton('bulleted-list', 'fa-list')}
                {this.renderBlockButton('numbered-list', 'fa-list-ol')}
                <hr className="toolbar-breadcrumbs-separator"/>
                <ActiveContextsBreadcrumbs
                    contextManager={this.props.contextManager}
                />
                { this.props.loadingTimeWarrantsWarning && this.renderLoadingNotification()}    
                {/* {this.renderCopyButton()} */}
            </div>
        )
    }
}

EditorToolbar.proptypes = { 
    contextManager: PropTypes.object.isRequired,
    isReadOnly: PropTypes.bool.isRequired,
    onBlockCheck: PropTypes.func.isRequired,
    onBlockUpdate: PropTypes.func.isRequired,
    onMarkCheck: PropTypes.func.isRequired,
    onMarkUpdate: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
};

export default EditorToolbar;