import PropTypes from 'prop-types';
import React, {useState} from 'react';

Text.propTypes = {
  questions :PropTypes.object.isRequired
}

function text(value){
  console.debug("test", value)
}

export default function Engine(props){

  let debug = true
  if(debug) console.debug("engine props", props)

  //------------------------------------- text start -------------------------------------
  const Text = (id, qtext, placeholder, value, help, hint, required) => {
      return`
      <div class="row p-3">
        <div class="form-group ">
          <label for=${id} class="form-label">${qtext}</label>
          ${help ? `<div class="fw-bold small">${help}</div>` : ``}
          <input class="form-control" type="text" id=${id} name=${id} placeholder= ${placeholder ? placeholder : ``} value=${value ? value : ``} >
          ${hint ? `<div><small class="text-primary fst-italic">${hint}</small></div>` : ``}
          ${required ? `<div><small class="text-danger">This field is required</small></div>` : ``}
        </div>
      </div>
      `   
    }
    
    //OnTextChange
    const OnTextChange = () =>{
        console.debug("OnTextChange")
    }

    let textQuestionArr = ""
    console.debug(Object.keys(props.questions).length)
    for (let question in props.questions) {
        if(props.questions[question].type === "text"){
            console.debug(props.questions[question])
            textQuestionArr = textQuestionArr + Text(props.questions[question].id, props.questions[question].qtext, props.questions[question].placeholder, props.questions[question].value, props.questions[question].help, props.questions[question].hint, props.questions[question].required)
        }
    }

    //------------------------------------- text start -------------------------------------

//   let [textonly, setText] = useState(props.value ? props.value : "")

if(textQuestionArr !== ""){
  return (
    <>
      <div dangerouslySetInnerHTML={{__html : textQuestionArr}}></div>
    </>
  );
}else{
    return (
        <>
        <div> NO questions</div>
        </>
    )
}
}