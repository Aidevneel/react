import PropTypes from 'prop-types';
import React, {useState} from 'react';

Radio.propTypes = {
  id :PropTypes.string.isRequired,
  qtext :PropTypes.string,
  value :PropTypes.number,
  class :PropTypes.string,
  placeholder :PropTypes.string,
  hint :PropTypes.string,
  options :PropTypes.array,
  help :PropTypes.string
}

Radio.defaultProps = {
    qtext :"Default Question",
    class :"form-control",
    options : [],
}

export default function Radio(props){

  console.debug("radio props", props)
  let debug = false

  let optionsArrHtml = ""
  if(props.options){
    props.options.forEach((option) => {
        optionsArrHtml = optionsArrHtml +  `<div class="form-check">
        <input class="form-check-input" type="radio" value="${option.key}" id="${option.key}" name="etcsradioc11" onchange="onRadioChange()" />
        <label class="form-check-label" for="${option.key}"> ${option.text} </label>
        </div>`
    })
  }

  let [radio, setRadio] = useState(props.value ? props.value : "")
  let [errRequired, setErrRequired] = useState(props.required === true ? false : true)
  let [valid, setValid] = useState(false)

    //on radio change
    const onRadioChange = (event) => {
        console.debug("handleOnCheckboxChange", event.target.checked)
        
        if(event.target.checked){
            setRadio("")
            // document.getElementById(props.id).disabled = true; 
            // document.getElementById(event.target.id).disabled = false; 
        }else{
            // document.getElementById(props.id).disabled = false;
        }
    }

  //validation
  const validateRadio = () => {
    if(debug) console.debug("validateText called")
      
  }

  //set Initial value
  const setInit = () => {
      if(debug) console.debug("setInit called")  
  }

  //set value
  const setValue = () => {
      if(debug) console.debug("setInit called")  
  }

  return (
    <>
    <div className="row ps-4">
        <div className="col-12">
            <div className="form-group " id={props.id} is="dmx-radio-group" value={props.value}>
                <legend className="col-12 col-form-label">{props.qtext}</legend>
                {props.help ? <div className="fw-bold small col-12">{props.help}</div> : ""} 
                {props.hint ? <div><small className="text-primary fst-italic">{props.hint}</small></div>  : ""  }  
                <div className="row">
                    <div className="col-12" id="repeat" dangerouslySetInnerHTML={{__html : optionsArrHtml}} >                        
                    </div>
                </div>
                {(props.required && errRequired) ? <div><small className="text-danger">This field is required</small></div>  : ""  }  
            </div>
        </div>
    </div>
    </>
  );

}
