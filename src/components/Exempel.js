import React , {useState} from "react";

const Exampel = () => {

    const [ object , setObject ] = useState({name : '' , age : null })

    return (

        <div>
        
            <input type='text'
            placeholder="Username" 
            onChange={ e => {
                object.name = e.target.value ;
                setObject(object)
            } } />

        <p> {object.name} </p> 

        </div>


    )



}

export default Exampel 