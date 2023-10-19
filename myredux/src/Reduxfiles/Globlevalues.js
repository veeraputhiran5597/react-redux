
const initstate={
    name:""
};

const Myreducer=(state=initstate,action)=>
{
    switch(action.type)
    {
        case 'updname':
            console.log(action);
            return{...state,name:action.value}
        
        case 'removename':
            return{...state,name:""}
        
        default:
            return state;
    }
}

export default Myreducer;