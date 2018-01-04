// React imports
import React, {Component} from 'react';
// material-ui
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
// Styling
import './FormSearch.css';

class FormSearch extends Component {
    constructor(props) {
        super(props);

        this.underlineStyle = {
            borderColor: "#17263f",
        }
    }

    handleSearch(searchValue) {
        console.log()
    }

    render() {
        return (
            <div id="form-search">
                <div style={{position: 'relative', display: 'inline-block'}}>
                    <FontIcon
                        className="fa fa-search"
                        style={{position: 'absolute', left: "15%", top: 15, fontSize: "16px", color: "#17263f"}}/>
                    <TextField
                        style={{textIndent: 25, left: "15%", textAlign: "left", minWidth: "80%", width: "100%"}}
                        hintText="Search shortcuts"
                        onChange={(event, value) => this.handleSearch(value)}
                        underlineFocusStyle={this.underlineStyle}

                    />
                </div>
            </div>
        )
    }
}

export default FormSearch;
