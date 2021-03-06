import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_FAIL
} from "../conistants/productConistants";
import axios from "axios";

export const productsList = () => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const {data} = await axios.get(
      `/api/products`
    )

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const productItem = (id)=>
  async (dispatch)=>{
    try {
      dispatch({type:PRODUCT_ITEM_REQUEST})
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch({
        type:PRODUCT_ITEM_SUCCESS,
        payload:data
      })
    } catch (error) {
      dispatch({
        type:PRODUCT_ITEM_FAIL,
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      })
    }
  }


