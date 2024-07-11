import {useState, useCallback, useEffect, useRef} from 'react';


export default function Signup(props){

    const [answers, setAnswers] = useState({
        'firstname': null,
        'lastname': null,
        'username': null,
        'password': null,
        'age': null,
        'email': null,
        'phone': null,
        'zipcode': null
    })
    const [error, setError] = useState(false)


    const setValue = useCallback((fieldname, value)=>{
        setAnswers(prevState => ({
            ...prevState,
            [fieldname]: value
        }));
    },[])

    const validate = async (e)=>{
        e.preventDefault()

        console.debug('InsertAnswers:',answers) 

        let notfillanyfield = false
        for (const field in answers) {
            if(answers[field] == null || answers[field] == '')
                notfillanyfield = true
            console.debug('field',answers[field])
        }      
        setError(notfillanyfield)


    }

  return (
    <>
        <div className='container'>
        <div className='row my-3'>
        <div className='col-3'></div>
        <div className='col-6 form-group border border-primary rounded-3   p-3'>
        <h1 className='text-primary'>Signup</h1>

        <form method='POST'>


        <label htmlFor='firstname' className="form-label">First Name</label>
        <input className="form-control"  id='firstname' name='firstname' type='text' onChange={(e)=>{setValue('firstname',e.target.value)}}/> <br/>

        <label htmlFor='lastname' className="form-label">Last Name</label>
        <input className="form-control"  id='lastname' name='lastname' type='text' onChange={(e)=>{setValue('lastname',e.target.value)}}/> <br/>

        <label htmlFor='username' className="form-label">User Name</label>
        <input className="form-control"  id='username' name='username' type='text' onChange={(e)=>{setValue('username',e.target.value)}}/> <br/>

        <label htmlFor='password' className="form-label">Create Password</label>
        <input className="form-control"  id='password' name='password' type='password' onChange={(e)=>{setValue('password',e.target.value)}}/> <br/>

        <label htmlFor='age' className="form-label">Age</label>
        <input className="form-control"  id='age' name='age' type='number' onChange={(e)=>{setValue('age',e.target.value)}}/> <br/>

        <label htmlFor='email' className="form-label">Email</label>
        <input className="form-control"  id='email' name='email' type='email' onChange={(e)=>{setValue('email',e.target.value)}}/> <br/>

        <label htmlFor='phone' className="form-label">Phone</label>
        <input className="form-control"  id='phone' name='phone' type='number' onChange={(e)=>{setValue('phone',e.target.value)}}/> <br/>

        {/* <label htmlFor='city' className="form-label">city</label>
        <input className="form-control"  id='city' name='city' type='number' onChange={(e)=>{setValue('city',e.target.value)}}/> <br/>

        <label htmlFor='state' className="form-label">state</label>
        <input className="form-control"  id='state' name='state' type='number' onChange={(e)=>{setValue('state',e.target.value)}}/> <br/> */}

        <label htmlFor='zipcode' className="form-label">Zipcode</label>
        <input className="form-control"  id='zipcode' name='zipcode' type='number' onChange={(e)=>{setValue('zipcode',e.target.value)}}/> <br/>

        <button className='btn btn-primary' onClick={()=>{validate()}}>Submit</button>
        {error ? <h3 className='text-danger'>Please fill all data!</h3> : '' }
        
        </form>

        </div>
        <div className='col-3'></div>
        </div>
    </div>
    </>
  );
}
