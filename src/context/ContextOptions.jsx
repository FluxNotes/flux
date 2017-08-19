import React, {Component} from 'react';
import Lang from 'lodash'
import Button from 'material-ui/Button';
//import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import {Row, Col} from 'react-flexbox-grid';
import './ContextOptions.css'

export default class ContextOptions extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this._handleSearch = this._handleSearch.bind(this);
        
        this.state = {
            searchString: ""
        }
	}

    render() {
		let context = this.props.context;
		if (Lang.isUndefined(context)) {
			// patient
			context = this.props.contextManager.getPatientContext();
		}
		let validShortcuts = context.getValidChildShortcuts();
        
        // count how many triggers we have
        let count = 0;
        validShortcuts.forEach((shortcut, i) => {
            shortcut.getTriggers(context).forEach((trigger, j) => {
                count++;
            });
        });
        
        // enable filter?
        const showFilter = (count > 10);

        // build our list of filtered triggers (only filter if we will be showing search bar)
        let triggers = [];
        validShortcuts.forEach((shortcut, i) => {
            shortcut.getTriggers(context).forEach((trigger, j) => {
                if (!showFilter || this.state.searchString.length === 0 || trigger.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1) {
                    triggers.push({"trigger": trigger, "group": i });
                }
            });
        });
        
        // lets create a list of groups with associated shortcut triggers for each
        let groupList = [];
        let currentGroup = {group: "", triggers:[]};
        triggers.forEach((trigger, i) => {
            if (trigger.group !== currentGroup.group) {
                currentGroup = {"group": trigger.group, "triggers": [ trigger ]};
                groupList.push(currentGroup);
            } else {
                currentGroup.triggers.push(trigger);
            }
        });
        // do we add search bar
        let filterBar = "";
        if (showFilter) {
            filterBar = (
            <div id="shortcut-search">
                <div style={{position: 'relative', display: 'inline-block'}}>
                    <h1>Filter:</h1>
                    <TextField
                        style={{textIndent: 25, left: "15%", textAlign: "left", minWidth: "80%", width: "100%"}}
                        label="Search for a shortcut"
                        value={this.state.searchString}
                        onChange={(event) => this._handleSearch(event.target.value)}
                    />
                </div>
            </div>
            );
        }
        
        let numCols, maxCols = 0;
        let numChars, maxChars = 0;
        groupList.forEach((groupObj, i) => {
            numCols = groupObj.triggers.length;
            groupObj.triggers.forEach((trigger) => {
                numChars = trigger.trigger.length;
                if (numChars > maxChars) maxChars = numChars;
            });
            if (numCols > maxCols) maxCols = numCols;
        });
        let colWidth = Math.ceil(maxChars / 2.5);
                
        // now iterate and create a Row for each group and a Col for each 
        return (
            <div className='context-options-list'>
                {filterBar}
                {groupList.map((groupObj, i) => {
                    return  (<Row key={i} start="sm">
                            {groupObj.triggers.map((trigger, i) => {
                                return (
                                    <Col sm={colWidth > 0 ? colWidth : null} key={i*100+1}> 
                                        <Button dense raised className='btn_template_ctx'
                                            key={trigger.trigger}
                                            onClick={(e) => this._handleClick(e, trigger.trigger)}
                                        >{trigger.trigger}</Button>
                                    </Col>                                    
                                       );
                            })}
                            </Row>);
                })}
            </div>
        );
	}

	_handleClick(e, i) {
		e.preventDefault();
        this.setState({searchString: ""});
		this.props.handleClick(i);
	}
    
    _handleSearch(value) {
        this.setState({searchString: value});
    }
}