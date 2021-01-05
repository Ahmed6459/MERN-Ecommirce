import React,{useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios"

import products from "../products";
import Rating from "./Rating";

const ProductInfo = () => {
  const[product,productSetState]=useState({})
  
  let { id } = useParams();
  useEffect(()=>{
    const fetchProduct = async()=>{
      const res =await Axios.get(`/api/products/${id}`)
      productSetState(res.data)
    }
    fetchProduct()
  },[id])

  // // console.log(id);
  // let product = products.find((p) => p._id === id);
  // console.log(product);
  return (
    <section id="product">
      <div className="container">
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
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
      </div>
    </section>
  );
};

export default ProductInfo;
