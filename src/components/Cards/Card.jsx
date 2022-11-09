import React, {useState} from "react";
import './pokeCards.css';

export default (props) => {
    const [backCardColor, setBackCardColor] = useState("white")
    const [pokeNameColor, setPokeNameColor] = useState("#DCC23F")

    const pokeColor = props.color

    function mouseOverCard () {
        
        // props.setBackCard(pokeColor, "Black")
        setBackCardColor(pokeColor)
        setPokeNameColor("black") 
    }

    function notMouseOverCard(){
        // props.notMouseOver("white", "#DCC23F")
        setBackCardColor("white") 
        setPokeNameColor("#DCC23F") 
    }
    

    return(
        <div className="card" style={{borderColor: pokeColor, backgroundColor: backCardColor}} onClick={() => props.setPoke(props.pokeName)} onMouseEnter={() => mouseOverCard()} onMouseLeave={() => notMouseOverCard()}>
            <div className="cardNumber" style={{backgroundColor: pokeColor}}>
                <p>#{props.pokeNumber}</p>
            </div>
            
            <div className="cardContent" id="cardContent">
                <img alt="" className="pokeImg" id="pokeImg" src={props.pokeImg}></img>
                <h3 style={{color: pokeNameColor}}>{props.pokeName}</h3>
                <h4 style={{color: pokeNameColor}}>{props.pokeType}</h4>
            </div>
        </div>
    )

}
    


    