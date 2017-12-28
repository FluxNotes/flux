import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TemplateForm from '../forms/TemplateForm';
import Tabs, {Tab} from 'material-ui/Tabs';
import Lang from 'lodash'
import ContextOptions from './ContextOptions';
import './ContextTray.css';

function TabContainer(props) {
  return (
    <div style={{ paddingTop: '15px' }}>
      {props.children}
    </div>
  );
}

class ContextTray extends Component {
    /*
     need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
     to the correct entry form for the structured field. on exit, set to null.
     */
    templates = [{name: 'op note', content: 'op note'}, {name: 'follow-up', content:'follow up'}, {name:'consult note', content: '@patient presenting with '}];

    state = {
        value: 1,
    };

    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this._insertTemplate = this._insertTemplate.bind(this);
        this._handleShortcutClick = this._handleShortcutClick.bind(this);
        this.lastActiveContextCount = 0;
    }

    _insertTemplate(i) {
        this.props.onShortcutClicked(this.templates[i].content);
    }
    
    _handleShortcutClick(shortcut) {
        this.props.onShortcutClicked(shortcut); // + shortcut.substring(0, 1)); no longer need trailing @ or #
    }
    handleChange(event, value) {
        this.setState({ value });
    };
    _getActiveContexts() {
        let activeContexts = [];
        this.props.contextManager.getActiveContexts().slice(0).reverse().forEach((context, i) => {
            if (!Lang.isNull(context.getLabel())) {
                activeContexts.push(context);
            }
        });
        return activeContexts;
    }
    componentDidUpdate(prevProps, prevState) {
        let activeContexts = this._getActiveContexts();
        if (this.lastActiveContextCount !== activeContexts.length) {
            this.setState({ value: activeContexts.length+1 });
            this.lastActiveContextCount = activeContexts.length;
        }
    }
    render() {
        let panelContent = null;
        const { value } = this.state;

        let activeContexts = this._getActiveContexts();
        panelContent = (
            <div className="context-tray">
                <Tabs
                    scrollable
                    scrollButtons="auto"
                    indicatorColor="steelblue"
                    onChange={this.handleChange}
                    value={value}
                >
                    <Tab value={0} key={0} label="Templates"/>
                    <Tab value={1} key={1} label="Patient"/>
                    {activeContexts.map((context, i) => {
                        let label = context.getLabel();
                        return (
                            <Tab value={i+2} key={i+2} label={label} />
                        );
                    })}
                </Tabs>
                {value === 0 && 
                    <TabContainer>
                        <TemplateForm
                            patient={this.props.patient}
                            heading=""
                            templates={this.templates.map((item) => { return item.name })}
                            handleClick={this._insertTemplate}
                        />
                    </TabContainer>
                }
                {value === 1 && 
                    <TabContainer>
                        <ContextOptions
                            contextManager={this.props.contextManager}
                            shortcutManager={this.props.shortcutManager}
                            handleClick={this._handleShortcutClick}
                        />
                    </TabContainer>
                }
                {value > 1 && 
                    <TabContainer>
                        <ContextOptions
                            contextManager={this.props.contextManager}
                            shortcutManager={this.props.shortcutManager}
                            handleClick={this._handleShortcutClick}
                            context={activeContexts[value - 2]}
                        />
                    </TabContainer>
                }
            </div>
        );
        return (
            <div id="forms-panel" className="dashboard-panel">
                {panelContent}
            </div>
        )
    }
}

ContextTray.proptypes = { 
    ref: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    onShortcutClicked: PropTypes.func.isRequired
}

export default ContextTray;