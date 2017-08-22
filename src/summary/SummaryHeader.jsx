import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import './SummaryHeader.css';


class SummaryHeader extends Component {

  render() {
    return (
      <div id="summary-header">
        <div className="avatar">
          <Avatar
              src={this.props.photo}
              size={70}
          />
        </div>
        <div className="patient-info">
          <div className="name-and-mrn">
              <h1>{this.props.patientName}</h1>
              <h2>MRN: {this.props.mrn}</h2>
          </div>

          <div className="basic-info">
              <div className="item">
                  <h3>DOB:</h3>
                  <span>{this.props.dateOfBirth}</span>
              </div>
              <div className="item">
                  <h3>Admin. Sex:</h3>
                  <span>{this.props.administrativeSex}</span>
              </div>
              <div className="item">
                  <h3>Location:</h3>
                  <span>{this.props.address.city}, {this.props.address.state}</span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

SummaryHeader.propTypes = {
  photo: PropTypes.string,
  patientName: PropTypes.string,
  mrn: PropTypes.string,
  dateOfBirth: PropTypes.string,
  administrativeSex: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.state
  })
};

export default SummaryHeader;
