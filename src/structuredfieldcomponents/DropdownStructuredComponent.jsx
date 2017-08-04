import React, { Component } from 'react';

class DropdownStructuredComponent extends Component {

	createSelectionHandler(name) {
		return function(evt) {
			this.props.handleDropdownSelection(name, evt);
		}.bind(this);
		
	}

	render = () => {
		let datakey = this.props.else['data-key'] + "-0";
		return (        
		    <span className='sf-subfield' {...this.props.else}>
				<select data-offset-key={datakey} defaultValue='Select' onFocus={this.props.handleDropdownFocus} onChange={this.createSelectionHandler(this.props.name)}>
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