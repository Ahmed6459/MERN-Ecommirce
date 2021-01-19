import React,{useEffect} from "react"
import {Link, useHistory,useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {addToCard,removeFromCArt} from "../../redux/actions/cartActions"
import {FcFullTrash}from "react-icons/fc"
import {GrCart}from "react-icons/gr"
import "./CartScreen.css"


const CardScreen = ({location})=>{
    const {id} = useParams();
    const qty=location.search ? Number(location.search.split("=")[1]):1 

    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart
    console.log(cartItems);
    const dispatch = useDispatch()
    useEffect(()=>{
        if(id){

            dispatch(addToCard(id,qty))
        }
    },[dispatch,id,qty])

    const removeFromCardHandler = (id)=>{
        dispatch(removeFromCArt(id));
    }

    const history = useHistory();
    const handelConfirmPayment = ()=>{
        history.push("/login?redirect=shipping")
    }
    return(
        <section id="cart-list">
            <div className="container">
            <div className="row">
            {cartItems.length === 0?
                ( <div className="alert alert-dark text-center col-12" role="alert">
                There is ne items no your cart <Link to="/">Go Home</Link></div>)
                :(<div className="col-md-9 col-12 text-center">
                {

                    cartItems.map(item=>(
                        <div className="row justify-content-center align-items-center p-2" key={item.id}>
                            <div className="col-md-3">
                                <img src={item.image} alt="" className="img-fluid cart-list-img "/>
                            </div>
                            <div className="col-md-2">
                                <span>${(item.price * item.qty).toFixed(2)}</span>
                            </div>
                            <div className="col-md-3">
                                <span>{item.name}</span>
                            </div>
                            <div className="col-md-2">
                                <select className="form-control" value={item.qty} onChange={(e)=>dispatch( addToCard (item.id,Number(e.target.value)))}>
                                    {[...Array(item.countInStock).keys()].map(x=>(
                                        <option value={x+1} key={x+1}>{x+1}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-2">
                                <FcFullTrash
                                role="button"
                                style={{fontSize:"2.5rem"}}
                                onClick={()=>removeFromCardHandler(item.id)}
                                />
                            </div>
                        </div>
                        ))
                    }
                </div>)}
                {cartItems.length === 0 ? "":
                    <div className="col-md-3 col-12 justify-content-center text-center">
                    <div className="card position-fixed">
                        <div className="card-body">
                            <GrCart/>
                            <h3 className="">Total items ({cartItems.reduce((acc,item)=>acc+item.qty,0)})</h3>
                            <span>Total amount = ${cartItems.reduce((acc,item)=>acc+item.price*item.qty,0).toFixed(2)}</span>
                            <button
                            className="btn btn-success form-control m-2"
                            onClick={handelConfirmPayment}
                            >Continue to payment</button>
                        </div>
                    </div>
                    </div>
                }
            </div>
            </div>
        </section>
        )
    
}

export default CardScreen