import React,{useState,useEffect} from "react"

import ProductCard from "../components/ProductCard"
import Axios from "axios"

// import products from "../products";


const HomeScreen = ()=>{
    const [products,productsSetState]= useState([]);
    useEffect(()=>{
        const fetchproducts = async()=>{
            const res = await Axios.get("/api/products")
            productsSetState(res.data)
            console.log(res.data);
        }
        fetchproducts()
    },[])
    return(
        <div className="container">
            <div className="row">
                {products.map((p)=>{
                    return(
                        <div className="col-md-4 col-sm-6 col-12" key={p._id}>
                            <ProductCard product ={p}></ProductCard>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeScreen;