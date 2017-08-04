import React, { Component } from 'react';
import Lang from 'lodash';

class DropdownStructuredComponent extends Component {
	_createSelectionHandler(name) {
		return function(evt) {
			this.props.handleDropdownSelection(name, evt);
		}.bind(this);
	}
	
	setValue(value) {
		this.dropDown.value = value;
	}

	render = () => {
		let datakey = this.props.else['data-key'] + "-0";
		let value = this.props.value;
		let items = this.props.items;
		if (!Lang.includes(items, value)) {
			return (        
				<span className='sf-subfield' {...this.props.else}>
					<select data-offset-key={datakey} 
							defaultValue='Select' 
							ref={(input) => { this.dropDown = input; }}
							onFocus={this.props.handleDropdownFocus} 
							onChange={this._createSelectionHandler(this.props.name)}>
						<option disabled hidden>Select</option>
						{this.props.items.map(function(item, index) {
							return <option key={item} value={item}>{item}</option>;
						})}
					</select>
				</span>
			);
		} else {
			return (        
				<span className='sf-subfield' {...this.props.else}>
					<select data-offset-key={datakey} 
							value={this.props.value}
							ref={(input) => { this.dropDown = input; }}
							onFocus={this.props.handleDropdownFocus} 
							onChange={this.createSelectionHandler(this.props.name)}>
						{this.props.items.map(function(item, index) {
							return <option key={item} value={item}>{item}</option>;
						})}
					</select>
				</span>
			);
		}
	}
} 

export default DropdownStructuredComponent;