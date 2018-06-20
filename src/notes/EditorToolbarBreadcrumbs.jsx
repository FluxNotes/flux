import React from 'react'
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './EditorToolbar.css';
import './EditorToolbarBreadcrumbs.css';

class EditorToolbarBreadcrumbs extends React.Component {

    renderActiveContexts = (activeContexts) => {
        if (activeContexts.length === 0) {
            return null;
        }
        else {
            const contextOptions = activeContexts.map((context, i) => {
                const index = activeContexts.length - (i + 1);
                const breadcrumb = context.text.replace("#", "");

                // Return breadcrumb with separator if breadcrumb isn't the last one of the list.
                if ((activeContexts.length - i - 1) === 0) {
                    return (
                        <div 
                            className="breadcrumbs"
                            key={`context-options-item-${index}`}
                        >
                            <span className="breadcrumb">{breadcrumb}</span>
                        </div>
                    )
                }
                else {
                    return (
                        <div 
                            className="breadcrumbs"
                            key={`context-options-item-${index}`}
                        >
                            <span className="breadcrumb">{breadcrumb}</span>
                            <span className="breadcrumb-separator">|</span>
                        </div>
                    )
                }
                
            })
            return (
                <div className="breadcrumbs-container">
                    {contextOptions}
                </div>
            )
        }
    }

    render = () => {
        const activeContexts = this.props.contextManager.getActiveContexts();

        return (
            <div className="toolbar-breadcrumbs-container">
                {this.renderActiveContexts(activeContexts)}
            </div>
        )
    }

}

EditorToolbarBreadcrumbs.proptypes = { 
    contextManager: PropTypes.object.isRequired,
};


export default EditorToolbarBreadcrumbs;
