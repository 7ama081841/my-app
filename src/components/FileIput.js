import { useState } from "react";

export default function FileInput ({onChange}) {

    // const ref = useRef()

    const [img , setImg] = useState()

    const changeImage = (event) => {

        const reader = new FileReader()
        reader.onload = () => {
            setImg(reader.result)
            onChange?.(reader.result)
        }
        reader.readAsDataURL(event.target.files[0])

        console.log(event.target.files[0])

    }

    return (

            <input type="file" onChange={changeImage} />

    )

}