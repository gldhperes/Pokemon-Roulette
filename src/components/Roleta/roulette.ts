import { useState } from "react";

export default function roulette() {
    const [pokeNameChosen, setPokeNameChoosen] = useState('')
    const [pokeChosen, setChosen] = useState(false)


    return {   
        pokeChosen,

        setPokemon(poke: string){
            if(pokeChosen === false){
                setPokeNameChoosen(poke)
                setChosen(true)
                console.log(poke)
            }else{
                console.log(pokeNameChosen)
            }
        },

        getPokemon(){
            return pokeNameChosen
        }
    }

}