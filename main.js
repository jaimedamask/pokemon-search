const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const spriteContainer = document.getElementById('sprite-container');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const fetchPokemon = async () => {
    try {
        const nameOrId = searchInput.value.toLowerCase();
        const res = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`
        );
        const data = await res.json();

        pokemonName.textContent = `${data.name.toUpperCase()}`;
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        spriteContainer.innerHTML = `
            <img id='sprite' src='${data.sprites.front_default}' alt='${data.name} front default sprite'>
        `;

        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

        types.innerHTML = data.types
            .map(obj => `<span class='type ${obj.type.name}'>${obj.type.name}</span>`)
            .join('');
    } catch (err) {
        alert('Pokémon not found');
        console.log(`Error: ${err}`);
    }
};