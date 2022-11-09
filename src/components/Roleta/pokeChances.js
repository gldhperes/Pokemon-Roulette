import pokemons from "../Cards/pokemons.js"

export default class pokeChances{

    constructor(pokeName, chosen){
        this.chosen = chosen
        this.pokes = null
        this.chances = null
        this.roulletPokes = null
        this.setPokeChances(pokeName)
    }


    getPokeChances(){
        let i = 1
        let _pokes = [null]
        let _chances = [null]

        pokemons.map(poke => {
            // console.log("Name:", poke.name, "| Chance:", poke.chance)
            if (poke.chance !== i){
                while (i <= poke.chance){
                    _pokes.push(poke.name)
                    _chances.push(poke.chance)
                    // console.log(_pokes[i],"|",_chances[i])
                    // console.log(i)    
                    i++
                }
            }else{
                _pokes.push(poke.name)
                _chances.push(poke.chance)
                // console.log(_pokes[i],"|",_chances[i])
                // console.log(i)
                i++

            }
            return true
        });  

        this.pokes = _pokes
        this.chances = _chances
    }

    setPokeChances(pokeName){
        let pokeChance = 0
        let intervalo  = 0
        let _1 = 1

        pokemons.map(poke =>{
            if ( (pokeName === poke.name) && (this.chosen) ){
                intervalo = pokeChance
                pokeChance += 7
                poke.chance = pokeChance
            }else{                
                pokeChance += _1 // Aumenta a setagem de chance
                poke.chance = pokeChance; // Seta a chance do pokemon
            }
            return true
        })

        this.getPokeChances()
        this.playRoullet(intervalo)
    }


    playRoullet(intervalo){
        // console.log("Intervalo:",intervalo)       
        let _pokes = []

        for (var i = 0; i<3 ; i++){
            var numero = Math.floor(Math.random() * ( pokemons.length + 6 ) ) + 1
            // console.log('Numero:',numero)
            // console.log('Pokemon:', this.pokes[numero])
            _pokes.push(this.pokes[numero])
        }

        if ( (_pokes[0] === _pokes[1]) && (_pokes[1] === _pokes[2])){
            setTimeout(() => {
                alert("Parabens, voce ganhou!!!")
            }, 500);
        }

        this.roulletPokes = _pokes
    }

    getRoullet(){
        const p = []

        this.roulletPokes.forEach(po => {
            
            pokemons.map(poke =>{ 
                if ( po === poke.name){
                    p.push(poke.name.toString())
                    // console.log(p)
                }
                return true
                    
            })
        })

        return p

    }
   
}