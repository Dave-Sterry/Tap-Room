import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete } =props;
  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>{keg.price} - {keg.alcoholContent}</p>
      <button onClick={props.onClickEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
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
