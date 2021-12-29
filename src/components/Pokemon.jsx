import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'

const Pokemon = (props) => {

    const {urlOne} = props
    
    const [onePokemon, setOnePokemon] = useState({})
   
    const  getPokemon = async(url) =>{
        
        await axios.get(url)
        .then((response)=>{
            setOnePokemon(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    useEffect(()=>{

        getPokemon(urlOne)

    },[])

    if(onePokemon.sprites === undefined){

        return(
          <div>
              Loading...
          </div>
        );
    }

    return (

        <div className='card'>
            <img className='poke-image' src={onePokemon.sprites.front_default} alt={onePokemon.name}/> 
            <div className='container-name'>
                <span className='name'>{onePokemon.name}</span>
            </div>
            
        </div>
        

        
    )
}

export default Pokemon
