import React, { Component } from 'react';

class DropdownStructuredComponent extends Component {
	onChange = (state) => {
	    console.log('onChange to Dropdown component')
	}

	render = () => { 
		return (        
		    <span className='sf-subfield' {...this.props.else}>
		    	<select onFocus={this.props.handleDropdownFocus}>
			        {this.props.items.map(function(item, index) {
			            return <option key={item} value={item}>{item}</option>;
			        })}
		        </select>
	        </span>
	    );
	}
} 

export default DropdownStructuredComponent;