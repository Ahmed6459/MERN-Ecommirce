import  React from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


const spinner = ()=>{

    return(
        <div className="container">          
            <Loader
            type="Oval"
            color="#343a40"
            height={200}
            width={200}
            className="d-flex justify-content-center align-items-center"
            style={{height:"100vh"}}
            />
        </div>

    )
}

export default spinner;

