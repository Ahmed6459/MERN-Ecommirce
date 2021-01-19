import React,{useState,useEffect} from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import Fade from "react-reveal/Fade"

import Rating from "./Rating";
import {productItem}from "../redux/actions/productActions"
import  Spinner  from "./Spinner";
import Error from "./error"

const ProductDetails = () => {
  const [qty,setQty]=useState(1) // quntity of product slector state

  let { id } = useParams(); //git prams

  // Redux setup
  const productDetails = useSelector((state)=>state.peoductItem)
  const{error,loading,product} = productDetails
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(productItem(id))
  },[dispatch,id])

  // add to card button
  const history = useHistory()
  const addToCardHandler = ()=>{
    history.push(`/cart/${id}?qty=${qty}`)
  }

  return (
    <section id="product">
      <div className="container">
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
      {loading?<Spinner/>:
      error?<Error/>:
      <Fade bottom>
      <div className="product-container">
        <div className="card mb-3 mt-5" style={{ maxwidth: "100px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img className="card-img" src={product.image} alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="row">
                  <div className="col">
                    <p className="card-text">
                      <strong className="text-muted">${product.price}</strong>
                    </p>
                    <Rating
                      rating={product.rating}
                      total={product.total}
                    ></Rating>
                  </div>
                  <div className="col-md-5">
                    <div className="card">
                      <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                          Status
                          <span className="badge badge-pill badge-light">
                            {product.countInStock > 0
                              ? "Available"
                              : "Not available"}
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          Available items
                          <span className="badge badge-pill badge-light">
                            {product.countInStock}
                          </span>
                        </li>
                        {product.countInStock>0 &&
                          <li className="d-flex list-group-item">
                          <span style={{lineHeight:"2",marginRight:"1rem"}}>Quantty</span> 
                          <select name="qty" className="form-control"
                                  value={qty}
                                  onChange={(e)=>setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map(q=>(
                            <option value={q+1} key={q+"a"}>{q+1}</option>
                          ))}
                          </select>                            
                        </li>}
                        <button
                          className="btn btn-success"
                          disabled={!product.countInStock}
                          onClick={addToCardHandler}
                        >
                          Add to card
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    }     
    </div>
    </section>
  );
};

export default ProductDetails;
