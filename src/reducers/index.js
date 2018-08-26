import { combineReducers } from 'redux';
import courses from './courseReducer';
import camReducer from './rootreducer';

const rootReducer = combineReducers({
    courses,
    camReducer
})

export default rootReducer;