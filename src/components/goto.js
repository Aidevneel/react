import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Goto(props){

  console.debug("goto props", props)
  
  const goto = useNavigate()

  return (
    <>
    <div className="row justify-content-between px-5">
    <button className='col-1 btn btn-info m-2' onClick={() => goto(-1)}>Go back</button>
    <button className='col-1 btn btn-info m-2' onClick={() => goto(+1)}>Next</button>
    </div>
    </>
  );

}
