import React from "react";
import {ImSad} from "react-icons/im"




const error = ()=>{
    return(
        <div className="container  text-center mt-5">       
                <ImSad style={{fontSize:"6.5rem"}} />
                <p style={{fontSize:"3rem"}}>Ooops Some thing went wrong</p>
            </div>
    )
}

export default error