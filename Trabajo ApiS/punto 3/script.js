
async function searchPokemon() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

       
        const pokemonImg = document.getElementById('pokemonImg');
        pokemonImg.src = data.sprites.front_default;

        
        const pokemonName = document.getElementById('pokemonName');
        pokemonName.textContent = data.name;

        
        const pokemonType = document.getElementById('pokemonType');
        const types = data.types.map(type => type.type.name).join(', ');
        pokemonType.textContent = `Tipo: ${types}`;

        
        const pokemonStats = document.getElementById('pokemonStats');
        const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join('<br>');
        pokemonStats.innerHTML = `Estadísticas:<br>${stats}`;

        
        const pokemonMoves = document.getElementById('pokemonMoves');
        const moves = data.moves.map(move => move.move.name).slice(0, 5).join(', ');
        pokemonMoves.textContent = `Movimientos: ${moves}`;
    } catch (error) {
        console.log('Error:', error);
        alert('Pokémon no encontrado. Inténtalo de nuevo.');
    }
}
