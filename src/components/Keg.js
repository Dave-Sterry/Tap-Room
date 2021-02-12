import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
  <React.Fragment>
    <div onClick = {() => props.whenKegClicked(props.id)}>
      <h4>{props.name}</h4>
    </div>
  </React.Fragment>
  );
}

Keg.propTypes ={
  name:PropTypes.string.isRequired,
  brand:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  alcoholContent:PropTypes.string.isRequired,
  beer: 124, 
  id: PropTypes.string,
  whenKegClicked:PropTypes.func
};

export default Keg;