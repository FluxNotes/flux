import React from 'react'
// import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './EditorToolbar.css';
import './EditorToolbarBreadcrumbs.css';
import ShortcutViewModeContent from '../context/ShortcutViewModeContent';
// import Context from '../context/Context';

class EditorToolbarBreadcrumbs extends React.Component {
    render = () => {
        let activeContexts = ShortcutViewModeContent.getActiveContexts();
        return (
            <div className="menu toolbar-breadcrumbs"> {activeContexts}} </div>
        )
    }

}

export default EditorToolbarBreadcrumbs;
