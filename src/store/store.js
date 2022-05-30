import { createStore,compose,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {combinedReducer} from './reducers/index'

export const store = createStore(
    combinedReducer,
    compose(applyMiddleware(thunk))
)