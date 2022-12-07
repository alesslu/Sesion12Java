const fetchData = async (nombre) => {
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await res.json()
        imprimir(data)
    } catch (error){
        console.log(error)
    }
}

const imprimir = (pokemon) => {
    console.log(pokemon)
    const img = document.getElementById ('imagen');
    img.setAttribute('src',pokemon.sprites.other.dream_world.front_default);
    //img.setAttribute('src',pokemon.sprites.front_default);
    principal.appendChild(img)

}

const fetchPokemones = async () => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/generation/generation-i`); 
        const data = await res.json();
        const pokemon = {listado: data.pokemon_species};
        llenarSelect(pokemon.listado.sort());

    } catch (error) {
        console.log(error)
    }
}

fetchPokemones()

const llenarSelect = (listado) => {
    const select = document.getElementById('pokemones');
    select.addEventListener('change', ( event ) => {
        fetchData(event.target.value)
     })
    for (const key in listado) {
        const opcion = document.createElement('option');
        opcion.setAttribute('value', listado[key].name);
        opcion.textContent = listado[key].name; 
        select.append(opcion)
    }
}



