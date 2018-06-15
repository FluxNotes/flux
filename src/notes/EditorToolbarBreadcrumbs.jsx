import React from 'react'
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './EditorToolbar.css';
import './EditorToolbarBreadcrumbs.css';

class EditorToolbarBreadcrumbs extends React.Component {

    renderActiveContexst = (activeContexts) => {
        if (activeContexts.length === 0) {
            return null;
        }
        else {
            const contextOptions = activeContexts.map((context, i) => {
                const uniqueIndex = activeContexts.length - (i + 1);
                return (
                    <div 
                        key={`context-options-list-${uniqueIndex}`}
                        className="toolbar-breadcrumbs-crumb"
                    >
                        | {context.text} 
                    </div>
                )
            })
            return (
                <div>
                    {contextOptions}
                </div>
            )
        }
    }

    render = () => {
        const activeContexts = this.props.contextManager.getActiveContexts();

        return (
            <div className="menu toolbar-breadcrumbs">
                {this.renderActiveContexst(activeContexts)}
            </div>
        )
    }

}

EditorToolbarBreadcrumbs.proptypes = { 
    contextManager: PropTypes.object.isRequired,
};


export default EditorToolbarBreadcrumbs;
