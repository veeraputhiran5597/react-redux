import { Mystore } from './Reduxfiles/Store';
import {Provider} from 'react-redux';
import Form from "./form";
import Output from "./output"; 
const App =()=>
{
  return(
    <>
  <Provider store={Mystore}>
    <Output/>
    <Form/>    
    </Provider> 
    
    </>
  )
}

export default App;
