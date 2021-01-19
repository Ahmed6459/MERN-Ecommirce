import {ADD_TO_CART,REMOVE_FROM_CART}from "../conistants/cartConistants"


export const cartReducer = (state = {cartItems:[]},action)=>{
    console.log(action);
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            console.log(item);
            const isExist = state.cartItems.find(i=>i.id === item.id) //check if the added element alrady on the cart
            console.log(isExist);
            if(isExist){
                return{
                    ...state,
                    cartItems:state.cartItems.map(i=>i.id===isExist.id?item:i)
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                    //copy the original satate then edit cartItems with the original state and the new item
                }
            }
            case REMOVE_FROM_CART :
                return{
                    ...state,
                    cartItems:state.cartItems.filter((i)=>i.id !== action.payload)
                }

        default:
            return state
    }
}