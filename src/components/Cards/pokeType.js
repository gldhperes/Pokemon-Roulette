export default function getType(type){
    let typeColor = ''

    if (type === 'Grass'){
        typeColor = 'green'
    }

    if (type === 'Fire'){
        typeColor = 'red'
    }

    if (type === 'Water'){
        typeColor = 'blue'
    }

    if (type === 'Eletric'){
        typeColor = 'yellow'
    }

    if (type === 'Psychic'){
        typeColor = 'purple'
    }

    if (type === 'Steel'){
        typeColor = 'gray'
    }

    if (type === 'Dragon'){
        typeColor = ' #ed6f61'
    }

    return typeColor
}