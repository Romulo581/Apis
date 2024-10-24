// Função para buscar Pokémon pelo nome
function buscarNome() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            const pokemonDetails = document.getElementById('pokemonDetails');
            pokemonDetails.innerHTML = `
                <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
            `;
        })
        .catch(error => {
            document.getElementById('pokemonDetails').textContent = error.message;
        });
}
function listPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const first10Pokemons = document.getElementById('first10Pokemons');
            first10Pokemons.innerHTML = '';

            data.results.forEach((pokemon, index) => {
                const p = document.createElement('p');
                p.textContent = `${index + 1}: ${pokemon.name}`;
                first10Pokemons.appendChild(p);
            });
        })
        .catch(error => {
            console.error('Erro ao listar Pokémon:', error);
        });
}

function pokemonAleatorio() {
    const randomId = Math.floor(Math.random() * 100) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const randomPokemon = document.getElementById('randomPokemon');
            randomPokemon.innerHTML = `
                <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            `;
        })
        .catch(error => {
            console.error('Erro ao gerar Pokémon aleatório:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    container.addEventListener('mouseenter', () => {
        container.classList.add('ativo');
    });

    container.addEventListener('mouseleave', () => {
        // Não faz nada, mantém a classe 'ativo'
    });

    // Alternar classe ao clicar, se desejado
    container.addEventListener('click', () => {
        container.classList.toggle('ativo');
    });
});

