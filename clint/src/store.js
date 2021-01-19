import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {productReducer,peoductItemReducer} from "./redux/reducers/productReducers"
import {cartReducer}from "./redux/reducers/CartReducers"

const cartItemsFromLocalstorage = localStorage.getItem("cartItems") ?JSON.parse(localStorage.getItem("cartItems")):[]
console.log(cartItemsFromLocalstorage);
const initState = {
    cart:{
        cartItems:cartItemsFromLocalstorage
    }
}; 
const middleware = [thunk]

const reducer = combineReducers({
    listproduct:productReducer,
    peoductItem:peoductItemReducer,
    cart:cartReducer
})

const store = createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)));


export default store