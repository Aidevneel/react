import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Text from './text';
import Textdnr from './textdnr';
import Number from './number';

ValidatePage.propTypes = {
}

ValidatePage.defaultProps = {
}

export default function ValidatePage(props){

  //validate
  const validate = () => {
    console.debug("validateapge called")
    Text.validateText()

  }

  return (
    <>
      <div className="row p-3">        
        <button onClick={validate}> Validate Page</button>
      </div>
    </>
  );
}
