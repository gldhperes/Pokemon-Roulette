import React from "react";
import Header from '../Header/Header.jsx'
import CardSection from '../Cards/CardSection.jsx'
import RoletaSection from "../Roleta/RoletaSection.jsx"
import roulette from "../Roleta/roulette.ts";
import pokeChances from '../Roleta/pokeChances.js'

export default (props) =>{
    const {pokeChosen, setPokemon, getPokemon} = roulette()

    function setChances(){
        const pokeChance = new pokeChances( getPokemon(), pokeChosen );
        return pokeChance.getRoullet()
    }

    return(
        <>
            <Header/>
            <CardSection setPoke={setPokemon}/>
            <RoletaSection setChances={setChances}/>
        </>
    )
}