import PropTypes from 'prop-types';
import React, {useState} from 'react';

Textdnr.propTypes = {
  id :PropTypes.string.isRequired,
  qtext :PropTypes.string,
  value :PropTypes.string,
  class :PropTypes.string,
  placeholder :PropTypes.string,
  hint :PropTypes.string,
  help :PropTypes.string
}

Textdnr.defaultProps = {
  qtext :"Default Question",
  class :"form-control",
}

export default function Textdnr(props){



  console.debug("text props", props)
  let debug = false

  let [textonly, setText] = useState(props.value ? props.value : "")
  let [errRequired, setErrRequired] = useState(props.required === true ? false : true)
  let [textclass, setTextClass] = useState(props.class ? props.class : "form-control col-6")

  //on text change
  const handleOnChange = (event) => {
    if(debug) console.debug("handleOnChange", event.target.value)  
    setText(event.target.value)
}

//on checkbox change
const handleOnCheckboxChange = (event) => {
  if(debug) console.debug("handleOnCheckboxChange", event.target.checked)
  if(event.target.checked){
      document.getElementById("textrefused").disabled = true; 
      document.getElementById("textdontknow").disabled = true; 
      setText("")
      document.getElementById(props.id).disabled = true; 
      document.getElementById(event.target.id).disabled = false; 
    }else{
      document.getElementById("textrefused").disabled = false; 
      document.getElementById("textdontknow").disabled = false; 
      document.getElementById(props.id).disabled = false;
     }
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
    }      
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
    <div className='row px-3'>
      <div className='col-12 p-0'>
          <label htmlFor={props.id} className="form-label col-12">{props.qtext}</label>
          {props.help ? <div className="fw-bold small col-12">{props.help}</div> : ""} 
      </div>
      <div className='col-6 p-0 form-check'>
            <input className={textclass} type="text" id={props.id} name={props.id} placeholder={props.placeholder ? props.placeholder : ""} value={textonly} onChange={handleOnChange}/>
      </div>
      <div className='col-3 p-0 ps-2'>
            <input className="form-check-input" type="checkbox" value="" id="textdontknow" onChange={handleOnCheckboxChange}/>
            <label className="form-check-label ps-2" htmlFor="textdontknow">
              Don't Know
            </label>
      </div>
      <div className='col-3 p-0 ps-2'>
            <input className="form-check-input" type="checkbox" value="" id="textrefused" onChange={handleOnCheckboxChange}/>
            <label className="form-check-label ps-2" htmlFor="textrefused">
              Refused
            </label>
      </div>
      <div className='col-12'>
          {props.hint ? <div><small className="text-primary fst-italic">{props.hint}</small></div>  : ""  }  
          {(props.required && errRequired) ? <div><small className="text-danger">This field is required</small></div>  : ""  }  
      </div>
          <div className='pb-2'>
          <button className='btn btn-primary' onClick={validateText}>Validate Text</button>
          </div>
          <div className='pb-2'>
          <button className='btn btn-primary' onClick={setInit}>set init value</button>
          </div>
          <div className='pb-2'>
          <button className='btn btn-primary' onClick={setValue}>set value</button>
          </div>
          <div className='pb-2'>
          <button className='btn btn-primary' onClick={setValue}>Blank</button>
          </div>
    </div>
    </>
  );
}
