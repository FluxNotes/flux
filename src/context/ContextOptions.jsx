import React, {Component} from 'react';
import Lang from 'lodash'
import Button from 'material-ui/Button';
import Tooltip from 'rc-tooltip';
import TextField from 'material-ui/TextField';
import {Row, Col} from 'react-flexbox-grid';
import 'rc-tooltip/assets/bootstrap.css';
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
        count = 0;
        validShortcuts.forEach((shortcut, i) => {
            let groupDescription = '';
            let groupName = '';
            if(typeof shortcut.getShortcutGroupDescription !== 'undefined'){
                groupDescription = shortcut.getShortcutGroupDescription();
            }
            if(typeof shortcut.getShortcutGroupName !== 'undefined'){
                groupName = shortcut.getShortcutGroupName();
            }
            shortcut.getTriggers(context).forEach((trigger, j) => {
                if (!showFilter || this.state.searchString.length === 0 || trigger.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1) {
                    // TODO: Clean up this object
                    let triggerDescription = !Lang.isNull(trigger.description) ? trigger.description : '';
                    triggers.push({"name": trigger.name, "description": triggerDescription, "group": i, "groupDescription": groupDescription, "groupName": groupName });
                    count++;
                }
            });
        });

        // lets create a list of groups with associated shortcut triggers for each
        let groupList = [];
        let currentGroup = {group: "", triggers:[]};
        let countToShow = 0;
        let totalShown = 0;
          triggers.forEach((trigger, i) => {
            if (trigger.group !== currentGroup.group) {
                countToShow = 0;
                totalShown++;
                currentGroup = {"group": trigger.group, "groupDescription":trigger.groupDescription, "groupName": trigger.groupName, "triggers": [ trigger ]};
                groupList.push(currentGroup);
            }
            else {
                if(countToShow === 5) return;
                countToShow++;
                totalShown++;
                currentGroup.triggers.push(trigger);
            }

        });
            
        // do we add search bar
        let filterBar = "";
        if (showFilter) {
            filterBar = (
            <div id="shortcut-search">
                <div style={{position: 'relative', display: 'inline-block'}}>
                    <div style={{display: 'flex', justifyContent:'center',alignItems: 'center'}}><h1>Filter:&nbsp;&nbsp;</h1><span>(Showing {totalShown} of {count})</span></div>
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
                numChars = trigger.name.length;
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
                    return  (
                    <div key={`group-${i}`}>
                    {groupObj.groupName !== "" ?<p id="data-element-description">{groupObj.groupName}</p>: ""}
                    <Row key={i} start="sm">                    
                            {groupObj.triggers.map((trigger, i) => {
                                const tooltipClass = (trigger.description.length > 100) ? "context-panel-tooltip large" : "context-panel-tooltip";
                                const text = <span>{trigger.description}</span>
                                return (
                                    <Col sm={colWidth > 0 ? colWidth : null} key={i*100+1}> 
                                        <Tooltip 
                                            placement="top" 
                                            overlayClassName={tooltipClass} 
                                            overlay={text}
                                            destroyTooltipOnHide={true}
                                        >
                                            <Button dense raised 
                                                className='btn_template_ctx'
                                                key={trigger.name}
                                                onClick={(e) => this._handleClick(e, trigger.name)}
                                            >
                                                {trigger.name}
                                            </Button>
                                        </Tooltip>
                                    </Col>                                    
                                );
                            })}
                     </Row>
                     </div>);
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