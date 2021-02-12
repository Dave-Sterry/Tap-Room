import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewKegForm(prop) {

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    PropTypes.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission} buttonText="Add a new keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes ={
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;