import {useState} from "react"

// import components
import FileInput from "./FileIput"
import TextInput from "./TextIput"
import Button from "./Button"
import Item from "./Items"

import "../index.css"

export default function NewApp() {

    const [regesterList , setRegesterList ] = useState([])
    const [form , setForm] = useState({})


    const addToList = (e) => {
        e.preventDefault()

        setRegesterList( (prev) => [...prev , form ] )
    }

    return (

        <div>
            <header>regester</header>

            <div>

                <form onSubmit={addToList} >

                    <FileInput onChange={ (img) => setForm(prev => ({prev , img}))} />
                    <TextInput onChange={ (name) => setForm((prev) => ({ ...prev , name}) ) } />
                    <Button name="ajouter" />

                </form>

                <ul>

                    { regesterList.map( ( item , key  ) => {
                        return <Item key={key } name={item.name} img={item.img} /> 
                    } ) }

                </ul>

            </div>

        </div>

    )

}
