import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return(
    <React.Fragment>
      <hr />
      {props.kegList.map((keg, index) =>
        <Keg name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          alcoholContent = {keg.alcoholContent}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes ={
  keglist: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;