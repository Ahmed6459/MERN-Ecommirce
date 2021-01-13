import React,{useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import ProductCard from "../components/ProductCard"
import {productsList} from "../redux/actions/productActions"

// import products from "../products";


const HomeScreen = ()=>{

    const dispatch = useDispatch()

    const listproduct = useSelector((state)=>state.listproduct)
    
    const {products}=listproduct

    useEffect( ()=>{
        dispatch(productsList())
    },[dispatch])
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