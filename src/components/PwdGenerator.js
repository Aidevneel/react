import {useState, useCallback, useEffect, useRef} from 'react';

export default function Page1(){
    const [pwd, setPwd] = useState('')
    const [pwdLength, setPwdLength] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false)
    const [specharAllowed, setSpecharAllowed] = useState(false)

    //useCallback (fun,[dependencies]), also put this funtion's dependencies in catch bcz it will run multiple times that we know so we use useCallback
    // use for optimize fun
    const pwdGenerator = useCallback(()=>{
        let pwd = ''
        let str = 'QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp'
        if(numAllowed) str += '0123456789'
        if(specharAllowed) str += '!@£$%^&*(){}'      
        
        for (let i=1; i<=pwdLength; i++){
            let randomIndex = Math.floor(Math.random() * str.length + 1)
            pwd += str.charAt(randomIndex)
        }
        setPwd(pwd)
    }, [pwdLength,numAllowed,specharAllowed, setPwd])
    
    //you can not call function directly, it will call infinite
    // to call method on page rander first time and also on any of dependencies change
    useEffect(()=>{
        pwdGenerator()
    },[pwdGenerator,pwdLength,numAllowed,specharAllowed])

    const pwdRef = useRef(null) // for styling on pwd    
    const copyToClipboard = useCallback(()=>{
        pwdRef.current.select()
        window.navigator.clipboard.writeText(pwd)
    },[pwd])

    return (
    <>
    <div className='container'>
        <div className='col-6 form-group border border-primary rounded-3  mt-5 p-3'>
        <h1 className='text-primary'>Password generator</h1>

        <div className='input-group'>
            <input className="form-control"  id='pwd' name='pwd' type='text' value={pwd} onChange={()=>{}} ref={pwdRef}/> 

            <button className="btn border" id="basic-addon2" onClick={()=>{copyToClipboard()}}>Copy</button>            
            <br/>
        </div>

            <input className="form-range"  id='range' name='range' type='range' value={pwdLength} min={6} max={100} onChange={(e)=>{setPwdLength(e.target.value)}} /><label htmlFor='range' className="form-label">&nbsp; Length {pwdLength} </label><br/>

            <input className="form-check-input"  id='num' name='num' type='checkbox' defaultChecked={numAllowed} 
            onChange={()=>{setNumAllowed((prevValue)=>!prevValue)}} /><label htmlFor='num' className="form-check-label">&nbsp; Numbers </label><br/>

            <input className="form-check-input"  id='spechar' name='spechar' type='checkbox' defaultChecked={numAllowed} onChange={()=>{setSpecharAllowed((prevValue)=>!prevValue)}} /><label htmlFor='spechar' className="form-check-label">&nbsp; Special Charactors </label><br/>
        </div>
    </div>
    </>
  );
}

