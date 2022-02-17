import React from "react";

export default function Item ({
    img = undefined ,
    name = undefined,
    ...otherProps
}) {

    return (

        <li {...otherProps}>
            <img src={img} alt="" />
            <p>{name}</p> 
        </li> 

    )

}