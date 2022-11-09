import React, {useState} from "react";
import RoletaCards from "./RoletaCards.jsx";
import _3pokes from "./_3pokes.js"
import './Roleta.css'

export default (props) => {

    const[thisPokes, setThisPokes] = useState()

    function getPokes(){
        const pokes = props.setChances()
        setThisPokes(pokes)
        _3pokes.pokes = pokes
        // console.log('Pokes: ', pokes)
    }


    function getP(){
        // console.log('Pokes: ', thisPokes)
        return _3pokes.pokes
    }

    return(
        <div className="RoletaSection">
            <div className="RoletaButton" onClick={() => getPokes()}>
                Jogar!
            </div>

            <div className="Roletas">
                <RoletaCards getP={getP} n={0}/>
                <RoletaCards getP={getP} n={1}/>
                <RoletaCards getP={getP} n={2}/>
            </div>
        </div>
    )
}