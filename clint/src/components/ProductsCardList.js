import React,{useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"

import Rating from "./Rating";
import {productItem}from "../redux/actions/productActions"
import  Spinner  from "./Spinner";
import Error from "./error"

const ProductsCardList = () => {

  let { id } = useParams();

  const productDetails = useSelector((state)=>state.peoductItem)
  const{error,loading,product} = productDetails
  console.log(productDetails);
  // const product = {}

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(productItem(id))
  },[dispatch,id])

  return (
    <section id="product">
      <div className="container">
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
      {loading?<Spinner/>:
      error?<Error/>:
      <div className="product-contaiber">
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
                        <button
                          className="btn btn-success"
                          disabled={!product.countInStock}
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
    }     
    </div>
    </section>
  );
};

export default ProductsCardList;
