import React from 'react';
//find image to use for header!
import {Container, Row, Col} from "react-bootstrap";

function Header(){
  return(
    <React.Fragment>
      <Container >
        <Row>
          <Col>
            <h1>Jean Claude Van Damme's Taproom</h1>
            <h2>We have a full selction of Belegian Beers!</h2>
            <h3>All bar stools are 6 feet apart. For doing the splits</h3>
          </Col>
          <Col>
            <iframe src="https://giphy.com/embed/WR8XvgP6EoJBB0H41h" width="300" height="400" frameBorder="0" class="giphy-embed" ></iframe><p></p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Header;