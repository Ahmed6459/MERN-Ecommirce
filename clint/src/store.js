import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import productListReducer from "./redux/reducers/productReducers"

const initState = {}; 
const middleware = [thunk]

const reducer = combineReducers({
    listproduct:productListReducer
})

const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)));


export default store