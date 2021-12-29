import React, {useState, useEffect}from 'react'
import axios from 'axios'
import CardPokemon from './CardPokemon'


const Cards=()=> {
    const [pokemon, setPokemon] = useState([
        {name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"}
    ])

    const [findName, setFindName]= useState("")

    const [array, setArray]=useState([])

    const getpokemons= async ()=>{
        await axios.get('https://pokeapi.co/api/v2/pokemon')
        .then ((res)=>{
            
            setPokemon(res.data.results) 
            setArray(res.data.results) 
        })
        .catch((err)=>{
            console.log(err)
    })
    }
    useEffect(() => {
       getpokemons()
    },[])




    const handleChange = e =>{
        setFindName(e.target.value)
      
        filter(e.target.value)
        
    }

    const filter = (item) =>{
        
        let find = pokemon.filter(element =>{
            if(element.name.toString().toLowerCase().includes(item.toLowerCase())){
            
                return element 
            }
        
        })
        setArray(find)
        console.log(array)
    }


    return (
        <div>
            <div>
                <form>
                    <div className='center'>
                        <input 
                            onChange={handleChange}
                            value={findName}
                            type="text"
                            className='searchform'
                            label='name of pokemon'
                         />
                        
                    </div>

                </form>
            </div>
            <div className='center'>
           
                <CardPokemon pokemons={array} />
            </div>
        </div>
    )
}

export default Cards
