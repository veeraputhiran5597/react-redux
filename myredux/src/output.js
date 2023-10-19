import {useSelector } from "react-redux/es/hooks/useSelector";

const Output=()=>
{
    const Globleselector=useSelector(state=>state)
    return(
        <>
        <h1>Name:{Globleselector.nameChanger.name}</h1>
        </>
    )
}

export default Output;