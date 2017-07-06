// Import React and other libraries
import React from 'react'
// Font awesome for icons
import 'font-awesome/css/font-awesome.min.css';
// material-ui
import RaisedButton from 'material-ui/RaisedButton';
// Styling
import './EditorToolbar.css';

class EditorToolbar extends React.Component {
    constructor(props) {
        super(props);
    }

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
        e.preventDefault()
        this.handleMarkUpdate(type);
    }

    /**
     * When a block button is clicked, toggle the block type.
     */
    onClickBlock = (e, type) => {
        e.preventDefault()
        this.handleBlockUpdate(type);
    }

    /**
     * Render a mark-toggling toolbar button.
     */
    renderMarkButton = (type, icon) => {
        const isActive = this.handleMarkCheck(type)
        const onMouseDown = e => this.onClickMark(e, type)

        return (
            <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <i className={"fa fa-fw " + icon} aria-label={"Make text " + type}></i>
      </span>
        )
    }
    /**
     * Render a block-toggling toolbar button.
     */
    renderBlockButton = (type, icon) => {
        const isActive = this.handleBlockCheck(type)
        const onMouseDown = e => this.onClickBlock(e, type)

        return (
            <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
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
                {this.renderMarkButton('code', 'fa-code')}
                {this.renderBlockButton('bulleted-list', 'fa-list')}
                {this.renderBlockButton('numbered-list', 'fa-list-ol')}
            </div>
        )
    }

    /**
     * Render the toolbar.
     */
    render = () => {

        let content = "";

        if (this.props.patient == null) {
            content = (
                <span id="copy-button" style={{cursor:'pointer'}}>
                <a onClick={(e) => this.handleCopyClick(e)}><i className="fa fa-files-o" aria-hidden="true"></i></a>
                </span>
            )

        } else {
            content = "";
        }

        return (
            <div className="menu toolbar-menu">
                {this.renderMarkButton('bold', 'fa-bold ')}
                {this.renderMarkButton('italic', 'fa-italic')}
                {this.renderMarkButton('underlined', 'fa-underline')}
                {this.renderMarkButton('code', 'fa-code')}
                {this.renderBlockButton('bulleted-list', 'fa-list')}
                {this.renderBlockButton('numbered-list', 'fa-list-ol')}
                {content}
            </div>
        )
    }
}

export default EditorToolbar;