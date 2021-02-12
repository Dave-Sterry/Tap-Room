import React from 'react';
import PropTypes from 'prop-types';

function ReuseableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <input
          type='number'
          name='price'
          placeholder='Beer Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='alcohol %' />
        <input
          type='number'
          name='beer'
          placeholder='Size of Keg' />
          <button type='submit'>{props.buttonText}</button>
          
      </form>
    </React.Fragment>
  );
}

ReuseableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
};

export default ReuseableForm;