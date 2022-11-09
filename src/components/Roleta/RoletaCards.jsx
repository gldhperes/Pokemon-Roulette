import React from 'react'
import pokemons from '../Cards/pokemons.js'
import './Roleta.css'

export default (props) => {

    function poke(n){
        const p = props.getP()

        class _poke_{            
            setPoke(name, img){
                this.name = name
                this.img = img
            }

            getPoke(){
                return ( [this.name, this.img] )
            }
        }

        const _poke = new _poke_()

        if (Array.isArray(p)){
            // console.log(p[n])
            
            pokemons.map(poke =>{
                if (p[n] === poke.name) {
                   _poke.setPoke(poke.name, poke.img)
                }
                return true
            })

            return  ( 
                <p>{_poke.getPoke()[0]}</p>,
                <img alt='poke' src={_poke.getPoke()[1]}/>
            )
            
        }                        
    }




    return(
        <div className='roletaCards'>
            <div className='frontCard faceCard'>
                {poke(props.n)}
            </div>


            {/* <div className='backCard faceCard'>
                {props.getRoullet}  
            </div> */}

        </div>
    )
}