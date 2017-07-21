import React from 'react';
//import ReactDOM from 'react-dom';
import Slate from 'slate'
import PluginEditTable from './lib/';

import './TestEditor.css';

import stateJson from './state.js';

const tablePlugin = PluginEditTable();
const plugins = [
    tablePlugin
];

const schema = {
    nodes: {
        table:      props => <table><tbody {...props.attributes}>{props.children}</tbody></table>,
        table_row:  props => <tr {...props.attributes}>{props.children}</tr>,
        table_cell: (props) => {
            let align = props.node.get('data').get('align') || 'left'
            return <td style={{ textAlign: align }} {...props.attributes}>{props.children}</td>;
        },
        paragraph:  props => <p {...props.attributes}>{props.children}</p>,
        heading:    props => <h1 {...props.attributes}>{props.children}</h1>
    }
};

class TestEditor extends React.Component {
	constructor(props) {
		super(props);
	
		// Set the initial state when the app is first constructed.
		this.state = {
			state: Slate.Raw.deserialize(stateJson, { terse: true })
		}
    }

    onChange = (state) => {
        this.setState({
            state: state
        });
    }

    onInsertTable = () => {
        let { state } = this.state;

        this.onChange(
            tablePlugin.transforms.insertTable(state.transform())
                .apply()
        );
    }

    onInsertColumn = () => {
        let { state } = this.state;

        this.onChange(
            tablePlugin.transforms.insertColumn(state.transform())
                .apply()
        );
    }

    onInsertRow = () => {
        let { state } = this.state;

        this.onChange(
            tablePlugin.transforms.insertRow(state.transform())
                .apply()
        );
    }

    onRemoveColumn = () => {
        let { state } = this.state;

        this.onChange(
            tablePlugin.transforms.removeColumn(state.transform())
                .apply()
        );
    }

    onRemoveRow = () => {
        let { state } = this.state;

        this.onChange(
            tablePlugin.transforms.removeRow(state.transform())
                .apply()
        );
    }

    onRemoveTable = () => {
        let { state } = this.state;

        this.onChange(
            tablePlugin.transforms.removeTable(state.transform())
                .apply()
        );
    }

    onSetAlign = (event, align) => {
        let { state } = this.state;

        this.onChange(
            tablePlugin.transforms.setColumnAlign(state.transform(), align)
                .apply()
        );
    }

    renderNormalToolbar = () => {
        return (
            <div>
                <button onClick={this.onInsertTable}>Insert Table</button>
            </div>
        );
    }

    renderTableToolbar = () => {
        return (
            <div>
                <button onClick={this.onInsertColumn}>Insert Column</button>
                <button onClick={this.onInsertRow}>Insert Row</button>
                <button onClick={this.onRemoveColumn}>Remove Column</button>
                <button onClick={this.onRemoveRow}>Remove Row</button>
                <button onClick={this.onRemoveTable}>Remove Table</button>
                <br />
                <button onClick={(e) => this.onSetAlign(e, 'left') }>Set align left</button>
                <button onClick={(e) => this.onSetAlign(e, 'center') }>Set align center</button>
                <button onClick={(e) => this.onSetAlign(e, 'right') }>Set align right</button>
            </div>
        );
    }

    render = () => {
        let { state } = this.state;
        let isTable = tablePlugin.utils.isSelectionInTable(state);
		//let isTable = false;

        return (
            <div id="testeditor">
                {isTable? this.renderTableToolbar() : this.renderNormalToolbar()}
                <Slate.Editor
                    placeholder={'Enter some text...'}
                    plugins={plugins}
                    state={state}
                    onChange={this.onChange}
                    schema={schema}
                />
            </div>
        );
    }
}

export default TestEditor;