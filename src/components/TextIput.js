export default function TextIput (props) {

    const {
        name = undefined ,
        onChange = undefined,
        ...otherProps
    }= props

    return (

        <input type="text"
        {...otherProps} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="Username"
        />

    )   

}