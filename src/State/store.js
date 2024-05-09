import {applyMiddleware,combineReducers,legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { authReducer } from './Auth/Reducer';

const initialSate={
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}

const rootReducers=combineReducers({
auth:initialSate
})

export  const store= legacy_createStore(rootReducers,applyMiddleware(thunk));
