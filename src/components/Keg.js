import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
  <React.Fragment>
    <div onClick = {() => props.whenKegClicked(props.id)}>
      <h4>{props.name}</h4>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
    </div>
  </React.Fragment>
  );
}

Keg.propTypes ={
  name:PropTypes.string.isRequired,
  brand:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  alcoholContent:PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked:PropTypes.func
};

export default Keg;