import { combineReducers } from 'redux'
import userReducer from './userReducer'
import leaveReducer from './leaveReducer'

const reducers = combineReducers({
	userReducer,
	leaveReducer
})

export default reducers