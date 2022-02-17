import React from "react";

export default function Button (props) {

    const { name , ...otherProps } = props

    return (
        <button {...otherProps} > {name} </button>
    )

}

