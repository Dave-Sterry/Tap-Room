import React from 'react';
import ReuseableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegForm (props) {
  const { keg } = props;
  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, beer: event.target.beer.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="UpdateKeg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes ={
  keg:PropTypes.object, 
  onEditKeg: PropTypes.func
};

export default EditKegForm;