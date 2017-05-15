import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class GridTest extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
          <Col xs={3} md={6}>
            How are you...
          </Col>
          <Col xs={3} md={3}>
            Doing today?  
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GridTest;
