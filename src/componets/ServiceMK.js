import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ServiceCard = ( { id, name, image}) => {
    return (
        <Link to= {`/servs/${id}`}>
            <div>{name}</div>
            <img src={image} />
        </Link>
    )
}


const ServiceMK = () => {

    const [chars, setChars] = useState ([])

    useEffect( () => {
        getChars()
    }, [] )

    const getChars = async () => {
        const URL = 'https://rickandmortyapi.com/api/character'
        const response = await axios.get ( URL)
        setChars ( response.data.results )
    }


    return (
        <div>
            {chars.map( c => <ServiceCard key={c.id} {...c}/> )}
        </div>
    )
  }
  export default ServiceMK