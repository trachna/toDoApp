import tasks from './tasks';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    tasks : tasks
})

export default allReducers;