import React, { Component } from 'react';

class DropdownStructuredComponent extends Component {

	render = () => { 
		return (        
		    <span className='sf-subfield' {...this.props.else}>
				<select onFocus={this.props.handleDropdownFocus} onChange={this.props.handleDropdownSelection}>
					<option selected disabled hidden>Select</option>
			        {this.props.items.map(function(item, index) {
			            return <option key={item} value={item}>{item}</option>;
			        })}
		        </select>
	        </span>
	    );
	}
} 

export default DropdownStructuredComponent;