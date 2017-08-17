import React, { Component } from 'react';
import Lang from 'lodash';
//import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

var Select = require('react-select'); //dupe with import??

/*var options = [
  { value: 'Tis', label: 'Tis' },
  { value: 'T0', label: 'T0' },
  { value: 'T1', label: 'T1' },
  { value: 'T2', label: 'T2' },
  { value: 'T3', label: 'T3' },
  //['Tis', 'T0', 'T1', 'T2', 'T3','T4'] is what we would get from StagingShortcut.getStructuredFieldSpecification()
];*/

// original onChange function mentioned in <Select onChange, from sample code
function logChange(val) {
  console.log("Selected: " + JSON.stringify(val));
}

class DropdownStructuredComponent extends Component {
	_createSelectionHandler(name) {
		console.log("_createSelectionHandler(): selected: " + JSON.stringify(name));
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
		let dropdownOptions = this.props.items.map(function(item, index) {
							return {value: item, label: item};}) // only gives 2 out of 3 ?
		console.log(dropdownOptions);

		return (        
			<span className='sf-subfield' {...this.props.else} style={{width: "50"}}>
				<Select
					name="form-field-name"
					value="_____"
					options={dropdownOptions}
					onFocus={this.props.handleDropdownFocus} 
					onChange={this._createSelectionHandler}
					/>
			</span>
		);
	}
} 

export default DropdownStructuredComponent;
/* inside return span:
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
					----------------------------------------------

					<select data-offset-key={datakey} 
							value={this.props.value}
							ref={(input) => { this.dropDown = input; }}
							onFocus={this.props.handleDropdownFocus} 
							onChange={this.createSelectionHandler(this.props.name)}>
						{this.props.items.map(function(item, index) {
							return <option key={item} value={item}>{item}</option>;
						})}
					</select>

*/