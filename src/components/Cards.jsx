import React, {useState, useEffect}from 'react'
import axios from 'axios'
import CardPokemon from './CardPokemon'


const Cards=()=> {
    const [pokemon, setPokemon] = useState([
        {name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"}
    ])

    

   

    const getpokemons= async ()=>{
        await axios.get('https://pokeapi.co/api/v2/pokemon')
        .then ((res)=>{
            
            setPokemon(res.data.results) 
            
        })
        .catch((err)=>{
            console.log(err)
    })
    }
    useEffect(() => {
       getpokemons()
    },[])

    return (
        <div className=''>
           
            <div className='center bg-red'>
           
                <CardPokemon pokemons={pokemon} />
            </div>
        </div>
    )
}

export default Cards
