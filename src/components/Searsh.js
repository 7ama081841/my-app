import React , { useState } from "react"

import Table from "./Table"
import { users } from "./users"

export default function Searsh() {

    const [name , setName] = useState("")

    console.log(users.filter(user => user.firstName.toLowerCase().includes("mo")  ) )

    const searsh = (data) => {
        return data.filter( user => user.firstName.toLowerCase().includes(name)  )
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


