import React, { Component } from 'react';

class DropdownStructuredComponent extends Component {

	createSelectionHandler(name) {
		return function(evt) {
			this.props.handleDropdownSelection(name, evt);
		}.bind(this);
		
	}

	render = () => { 
		return (        
		    <span defaultValue='Select' className='sf-subfield' {...this.props.else}>
				<select defaultValue='Select' onFocus={this.props.handleDropdownFocus} onChange={this.createSelectionHandler(this.props.name)}>
					<option disabled hidden>Select</option>
			        {this.props.items.map(function(item, index) {
			            return <option key={item} value={item}>{item}</option>;
			        })}
		        </select>
	        </span>
	    );
	}
} 

export default DropdownStructuredComponent;