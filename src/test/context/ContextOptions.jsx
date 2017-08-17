import React, {Component} from 'react';
import Lang from 'lodash'
import Button from 'material-ui/Button';

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
            shortcut.getTriggers().forEach((trigger, j) => {
                triggers.push(trigger);
            });
        });
		return (
            <div style={{margin: '20px'}}>
                {triggers.map((trigger, i) => {
                    return (
                        <Button raised className="btn_template"
                            key={trigger}
                            onClick={(e) => this._handleClick(e, trigger)}
                        >{trigger}</Button>
                    );
				})}
            </div>
		);
	}

	_handleClick(e, i) {
		e.preventDefault();
		this.props.handleClick(i);
	}
}