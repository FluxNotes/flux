import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

class DropdownStructuredComponent extends Component {
	_createSelectionHandler(name) {
		return function(evt) {
			this.props.handleDropdownSelection(name, evt);
		}.bind(this);
	}
	
	setValue(value) {
		this.dropDown.value = value;
	}

	// Finds the Select element in the DOM and pulls data-key off its parent
	onDropdownFocus(proxy, event){
		const element = ReactDOM.findDOMNode(this.dropDown);
		const dataKey = element.parentElement.getAttribute('data-key');
		this.props.handleDropdownFocus(proxy, event, dataKey);
	}


	render = () => {
		let datakey = this.props.else['data-key'] + "-0";
		let dropdownOptions = this.props.items.map(function(item, index) {
							return {value: item, label: item};})

		return (        
			<span className='sf-subfield' {...this.props.else}>
				<Select
					data-offset-key={datakey}
					ref={(input) => { this.dropDown = input; }}
					name="form-field-name"
					value="_____"
					options={dropdownOptions}
					onFocus={this.onDropdownFocus.bind(this)} 
					onChange={this._createSelectionHandler(this.props.name)}
					/>
			</span>
		);
	}
} 

export default DropdownStructuredComponent;