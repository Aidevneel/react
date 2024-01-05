import PropTypes from 'prop-types';
import React, {useState} from 'react';

Text.propTypes = {
  id :PropTypes.string.isRequired,
  qtext :PropTypes.string,
  value :PropTypes.string,
  class :PropTypes.string,
  placeholder :PropTypes.string,
  hint :PropTypes.string,
  help :PropTypes.string
}

Text.defaultProps = {
  qtext :"Default Question",
  class :"form-control",
}

export default function Text(props){



  let debug = false
  if(debug) console.debug("text props", props)

  let [textonly, setText] = useState(props.value ? props.value : "")
  let [errRequired, setErrRequired] = useState(props.required === true ? false : true)
  let [textclass, setTextClass] = useState(props.class ? props.class : "form-control")

  //on change
  const handleOnChange = (event) => {
    if(debug) console.debug("handleOnChange", event.target.value)  
    setText(event.target.value)
  }

  //validation
  const validateText = () => {
    if(debug) console.debug("validateText called")
 
    if(textonly){
        setErrRequired(false)
        setTextClass("form-control is-valid")
      }else{
        setErrRequired(true)
        setTextClass("form-control is-invalid")
        props.showAlert("Please input correct values", "Validation:", "danger") //it calls showalert function from app.js
    }  
    
  //  props.validateClick(false)
  }

  //validateComponent
  console.debug("props.validateComponent",props.validateComponent)
  if(props.validateComponent === true ? true : false){
    validateText()
  }

  //copy text
  const copyText = () => {
    if(debug) console.debug("copyText called")
    navigator.clipboard.writeText(textonly)   
  }

  //removeExtra spaces
  const removeExtraSpace = () => {
    if(debug) console.debug("removeExtraSpace called")
    let newText = textonly.split(/[ ]+/);   
    setText(newText.join(' '))       
  }

  //set Initial value
  const setInit = () => {
      if(debug) console.debug("setInit called")
      setText(props.value)       
  }

  //set value
  const setValue = () => {
      if(debug) console.debug("setInit called")
      setText("example")       
  }

  return (
    <>
      <div className="row p-3">
        <div className="form-group ">
          <label htmlFor={props.id} className="form-label">{props.qtext}</label>
          {props.help ? <div className="fw-bold small">{props.help}</div> : ""} 
          <input className={textclass} type="text" id={props.id} name={props.id} placeholder={props.placeholder ? props.placeholder : ""} value={textonly} onChange={handleOnChange}/>
          {props.hint ? <div><small className="text-primary fst-italic">{props.hint}</small></div>  : ""  }  
          {(props.required && errRequired) ? <div><small className="text-danger">This field is required</small></div>  : ""  }  
        </div>
        <div className='row'>
          <div className='pb-2 col-3'>
          <button className='btn btn-primary' onClick={validateText}>Validate Text</button>
          </div>
          <div className='pb-2 col-3'>
          <button className='btn btn-primary' onClick={setInit}>set init value</button>
          </div>
          <div className='pb-2 col-3'>
          <button className='btn btn-primary' onClick={setValue}>set value</button>
          </div>
          <div className='pb-2 col-3'>
          <button className='btn btn-primary' onClick={setValue}>Blank</button>
          </div>
          <div className='pb-2 col-3'>
          <button className='btn btn-primary' onClick={copyText}>copy Text</button>
          </div>
          <div className='pb-2 col-3'>
          <button className='btn btn-primary' onClick={removeExtraSpace}>remove Extra Space</button>
          </div>
      </div>
      </div>
    </>
  );
}
