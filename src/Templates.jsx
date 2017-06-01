// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
// Flexbox
import { Grid, Row, Col} from 'react-flexbox-grid';
// Styling
import './Templates.css';

class Templates extends Component {
  constructor(props) {
      super(props);

      this.state = {
        templates: ['op note', 'follow-up', 'consult note'],
      };
  }

  render() {
    return (
        <div id="forms-panel">
            <Paper zDepth={1}>
                <div id="templates-heading">
                    <h1> Available Templates</h1>
                </div>

                <Row center="xs">
                    <Col xs={11}>
                        <Divider />
                    </Col>
                </Row>

                <div id="templates-options">
                    {this.state.templates.map((t, i) => {
                        return (
                            <Row key={i}>
                                <Col>
                                    <RaisedButton
                                        className="btn_template"
                                        label={t}
                                        onClick={(e) => this._insertTemplate(e, i)}
                                    />
                                </Col>
                            </Row>
                        );
                    })}
                </div>
            </Paper>
        </div>  
    );
  }

  _handleInsertTemplate(e, i) {
    e.preventDefault();
    //this.setState({t: i});
  }

}
export default Templates;