import React , {useState}  from 'react'

function Vaccin () {

    const [ name , seName ] = useState() // useState for input value 
    const [ list , setlist ] = useState([]) // useState for list yelzem n7ot feha array fer8a bech nejem najoukti les list
    const regester = () => {
        setlist( [ ...list , { id : `${Date.now() } ` , name : name , state : false } ] ) // yelzem n7ot el name fel object 5ater bech nafichi object
    
    }

    const vacciner = (id) => {
        // setlist(old => {
        //     old.map( e => e.id === id ? { ...e,state : true } :e )
        // })

        const upsateSate = list.map( e => {
            if (e.id === id){
                e.state = true 
            }
            return e
        } )

        setlist(upsateSate)

        console.log(upsateSate)

    }

    return (

        <div>
        
            <input type="text"  onChange={ e => seName(e.target.value) } />

            <button onClick={regester} >regester</button>
            <p>{name} </p>
            
            <h1>regester</h1>
            <ul>
                {list.filter(e => !e?.statu).map( e  => <li key={e?.id} > {e?.name}
                    <button onClick={() => vacciner(e.id) } >vaccine</button></li> ) }
            </ul>
            <h1>Vaccin</h1>
            <ul>
                {list.filter(e => e?.statu).map( e  => <li key={e?.id} > {e?.name}
                    <button >suprimer</button></li> ) }
            </ul>

        </div>

    )

} 

export default Vaccin