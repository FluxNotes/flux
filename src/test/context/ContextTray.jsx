import React, {Component} from 'react';
import TemplateForm from '../../forms/TemplateForm';
import DataCaptureForm from '../../forms/DataCaptureForm';
import Paper from 'material-ui/Paper';
//import { Tabs, Tab} from 'material-ui/Tabs';
import { Tabs, Tab } from 'material-ui-scrollable-tabs/Tabs';
import Lang from 'lodash'
import ContextOptions from './ContextOptions';
import './ContextTray.css';

class ContextTray extends Component {
    /*
     need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
     to the correct entry form for the structured field. on exit, set to null.
     */
	templates = [{name: 'op note', content: 'op note'}, {name: 'follow-up', content:'follow up'}, {name:'consult note', content: '@patient presenting with '}];

    constructor(props) {
        super(props);
        
        this._insertTemplate = this._insertTemplate.bind(this);
		this._handleShortcutClick = this._handleShortcutClick.bind(this);
    }

    _insertTemplate(i) {
        console.log(`Inserting template ${i}`);
		this.props.onShortcutClicked(this.templates[i].content);
    }
	
	_handleShortcutClick(i) {
        console.log(`Inserting shortcut ${i}`);
		this.props.onShortcutClicked(i);
	}

    render() {
        let panelContent = null;
		if (this.props.selectedText != null) {
			console.log(this.props);
			panelContent = (
					<DataCaptureForm
						// Update functions
						changeCurrentShortcut={this.changeCurrentShortcut}
						// Properties
						currentShortcut={this.props.currentShortcut}
					/>
			);
		} else {
			panelContent = (
				<Tabs className="tabs-container" inkBarStyle={{background: 'steelblue'}}
						tabType={'scrollable-buttons'}
						tabItemContainerStyle={{background: 'white'}} 
						initialSelectedIndex={1 + this.props.contextManager.getActiveContexts().length}>
					<Tab className="tab" label="Templates">
						<TemplateForm
							patient={this.props.patient}
							heading=""
							templates={this.templates.map((item) => { return item.name })}
							handleClick={this._insertTemplate}
						/>
					</Tab>
					<Tab className="tab" label="Patient">
						<ContextOptions
							contextManager={this.props.contextManager}
							handleClick={this._handleShortcutClick}
						/>
					</Tab>
					{this.props.contextManager.getActiveContexts().slice(0).reverse().map((context, i) => {
						//console.log(context);
						if (!Lang.isNull(context.getLabel())) {
							let label = context.getLabel();
							//if (label.length > 15) label = label.substring(0,12) + "...";
							return (
								<Tab key={context.getLabel()} className="tab" label={label} isMultiLine={true}>
									<ContextOptions
										contextManager={this.props.contextManager}
										handleClick={this._handleShortcutClick}
										context={context}
									/>
								</Tab>
							);
						}
					})}
				</Tabs>
			);
		}
        return (
            <div id="forms-panel" className="dashboard-panel">
                <Paper className="panel-content trio">
                    {panelContent}
                </Paper>
            </div>
        )
    }
}

export default ContextTray;