import React from "react";
import pokemons from "./pokemons.js";
import './pokeCards.css';
import Card from "./Card";
import getType from "./pokeType.js";
// import roulette from "../Roleta/roulette.ts";

export default (props) => {
    // Hook personalizada
    // const {setPokemon} = roulette()
   
    return(
        <div className='CardSection'>
            { 
                pokemons.map(poke =>{
                    return <Card setPoke={props.setPoke} key={poke.num} pokeNumber={poke.num} pokeName={poke.name} pokeType={poke.type} pokeImg={poke.img} color={getType(poke.type)} />
                })
            }
        </div>
    )
}