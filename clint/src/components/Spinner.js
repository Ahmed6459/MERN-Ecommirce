import  React from "react"
import {Spinner} from "react-bootstrap"


const spinner = ()=>{

    return(
        <div className="container" style={{height:"100vh"}}>          
        <Spinner animation="border" variant="secondary" className="m-auto d-flex " />
        </div>

    )
}

export default spinner;

