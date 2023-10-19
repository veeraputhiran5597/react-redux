import {combineReducers} from 'redux';

import Myreducer from './Globlevalues';

const Rootreducer = combineReducers({
    nameChanger: Myreducer


});
export default Rootreducer;