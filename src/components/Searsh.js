import React , { useEffect, useState } from "react"
// import axios from "axios"

import Table from "./Table"
import { users } from "./users"

export default function Searsh() {

    const [name , setName] = useState("")

    const keys = [ "firstName" , "lastName" , "email" ]

console.log( users[1]["email"] ) // nejam na3mel selection lel object wel hey kima hakalastNam Array[index]["key"]

    const searsh = (data) => {
        return data.filter( user =>
            user.firstName.toLowerCase().includes(name) ||
            user.lastName.toLowerCase().includes(name) ||
            user.email.toLowerCase().includes(name) 
        )
    }

    return (
        <div>
            <div>
                <input className="searsh" type="text" placeholder="Sreash" 
                onChange={ (e) =>  setName(e.target.value) } />
            </div>
            <Table data={searsh(users)}/>
        </div>

    )

}


