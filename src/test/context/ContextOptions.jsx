import React, {Component} from 'react';
import Lang from 'lodash'
import Button from 'material-ui/Button';
import {Row, Col} from 'react-flexbox-grid';
import './ContextOptions.css'

export default class ContextOptions extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
	}

    render() {
		let context = this.props.context;
		if (Lang.isUndefined(context)) {
			// patient
			context = this.props.contextManager.getPatientContext();
		}
		let validShortcuts = context.getValidChildShortcuts();
        let triggers = [];
        validShortcuts.forEach((shortcut, i) => {
            shortcut.getTriggers(context).forEach((trigger, j) => {
                //console.log(i + ". " + trigger);
                triggers.push({"trigger": trigger, "group": i });
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
        
        // now iterate and create a Row for each group and a Col for each shortcut trigger with its Button in it
        return (
            <div style={{margin: '20px'}}>
                {groupList.map((groupObj, i) => {
                    return  (<Row>
                            {groupObj.triggers.map((trigger, i) => {
                                return (    <Col> 
                                                <Button raised className='btn_template_ctx'
                                                    key={trigger.trigger}
                                                    onClick={(e) => this._handleClick(e, trigger.trigger)}
                                                >{trigger.trigger}</Button>
                                            </Col> );
                            })}
                            </Row>);
                })}
            </div>
        );
	}

	_handleClick(e, i) {
		e.preventDefault();
		this.props.handleClick(i);
	}
}