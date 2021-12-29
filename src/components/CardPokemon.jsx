import React from 'react'
import Pokemon from './Pokemon'


const CardPokemon = (props) => {
    const {pokemons} = props

    return (
        <div>
            
            <div className='grid-cards'>
                {pokemons.map((data, i)=>

                        <Pokemon key={i} urlOne={data.url}/>
                        
                )}
            </div>
        </div>
    )
}

export default CardPokemon
