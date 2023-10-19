import { useState } from 'react';
import './form.css';
import {useDispatch} from 'react-redux';

const Form =()=>
{
    const Valuedispatch=useDispatch();

    const[name,setName]=useState()

    const Postname=()=>
    {
        Valuedispatch({type:'updname',value:name}) 
        setName("")
    }

    const clearname=()=>
    {
        Valuedispatch({type:'updname',value:""})
        setName("")  
    }

    return(
        <>
        <div className="Formhed">
        <div>Name: <input type="text" value={name} onChange={e=>setName(e.target.value)} /></div>
        <br/>
        <button onClick={Postname}>Submit</button>
        <button onClick={clearname}>clear</button>



        </div>

        </>
    )
}

export default Form;