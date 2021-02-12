import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return(
    <React.Fragment>
      <hr />
      {props.keglist.map((keg, index) =>
        <Keg name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          alcoholContent = {keg.alcoholContent}
          id={keg.id}
          key={item.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes ={
  keglist: PropTypes.array,
  onKegSelection: PropTypes.func
};