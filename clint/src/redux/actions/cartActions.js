import axios from "axios";
import { ADD_TO_CART, ADD_TO_CART_FAILD, REMOVE_FROM_CART } from "../conistants/cartConistants";

export const addToCard = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    console.log(data);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        countInStock:data.countInStock,
        qty
      }
    }); 

  console.log(getState().cart);

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
};


export const removeFromCArt = (id)=>(dispatch,getState)=>{
  dispatch({
    type:REMOVE_FROM_CART,
    payload:id
  })
  localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}


