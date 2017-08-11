// React imports
import React, {Component} from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
// Styling
import './FormList.css';

class FormList extends Component {

    constructor(props) {
        super(props);
        this._newShortcut = this._newShortcut.bind(this);
        this.state = {
            disabledElement: null
        }
    }

    _newShortcut(e, index, shortcutName) {
        e.preventDefault();
        this.props.changeShortcut(this.props.shortcuts[index]);
    }

    _onTouchTap(event, shortcutName) {
        this.setState({
            disabledElement: shortcutName
        });
    }

    render() {
        return (
            <div id="list-panel">
                <List style={{padding: "0px"}}>
                    {this.props.shortcuts.map((shortcutName, i) => {
                        let classValue = "list-element";
                        let primaryText = shortcutName;
                        if (this.state.disabledElement === shortcutName) {
                            classValue += " selected";
                        } else {
                            classValue += " unselected";
                        }
                        return (
                            <ListItem
                                key={i}
                                id={shortcutName}
                                primaryText={primaryText}
                                className={classValue}
                                onTouchTap={ (e) => {
                                    this._onTouchTap(e, shortcutName)
                                    this._newShortcut(e, i, shortcutName)}
                                }
                            />
                        );
                    })}
                </List>
            </div>
        )
    }
}

export default FormList;
