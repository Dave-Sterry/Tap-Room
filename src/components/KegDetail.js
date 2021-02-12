import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete, } =props;
  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Beer Name:{keg.name} - Brewwer:{keg.brand}</h3>
      <p>Price:{keg.price} - ABV:{keg.alcoholContent}</p>
        {keg.beer === 0 ?
        <h3>this keg has been tapped! Sorry</h3>
        : <p>Beers Left in keg:{keg.beer}</p>
        }
      
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <button onClick={props.OnClickingRestock}>Restock this keg</button>
      <button onClick={props.OnClickingBuyBeer}>Sell a beer from this keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg:PropTypes.object, 
  onClickEdit: PropTypes.func, 
  onClickingDelete: PropTypes.func
}

export default KegDetail;
